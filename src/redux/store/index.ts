import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducers } from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['registerUser', 'forgotPassword'] // only registerUser will be persisted
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
