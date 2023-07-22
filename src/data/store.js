import { createStore, combineReducers } from 'redux';
import { CfReducer } from './CfReducer';
import { CfUsersReducer } from './CfUsersReducer';

const rootReducer = combineReducers({
  codeforces: CfReducer,
  cfUsers: CfUsersReducer,
});

export const store = createStore(rootReducer);
