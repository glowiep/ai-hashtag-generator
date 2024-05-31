import { createContext, useContext, useReducer, ReactNode, Dispatch } from "react";

export const ACTIONS = {
  EXTRACT_BEGIN: 'EXTRACT_BEGIN',
  SET_EXTRACTED: 'SET_EXTRACTED',
  SET_INPUT: 'SET_INPUT',
}

interface State {
  hashtags: string;
  isLoading: boolean;
  showHashtags: boolean;
  input: string;
  hashtagsLength: number;
}

interface ExtractBeginAction {
  type: typeof ACTIONS.EXTRACT_BEGIN;
}

interface SetExtractedAction {
  type: typeof ACTIONS.SET_EXTRACTED;
  payload: {
    hashtags: string;
    hashtagsLength: number;
  };
}

interface SetInputAction {
  type: typeof ACTIONS.SET_INPUT;
  payload: string;
}

type Action = ExtractBeginAction | SetExtractedAction | SetInputAction;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ACTIONS.EXTRACT_BEGIN:
      return {
        ...state,
        isLoading: true,
        showHashtags: false
      }
    case ACTIONS.SET_EXTRACTED:
      return {
        ...state,
        isLoading: false,
        showHashtags: true,
        hashtags: (action as SetExtractedAction).payload.hashtags,
        hashtagsLength: (action as SetExtractedAction).payload.hashtagsLength
      }
    case ACTIONS.SET_INPUT:
      return {
        ...state,
        isLoading: false,
        showHashtags: false,
        input: (action as SetInputAction).payload,
        hashtags: '',
        hashtagsLength: 0
      }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const INITIAL_STATE = {
  isLoading: false,
  showHashtags: false,
  input: '',
  hashtags: '',
  hashtagsLength: 0
}

interface AppContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);


interface AppProviderProps {
  children: ReactNode;  // for anything that can be rendered in JSX
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    )
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context;
};