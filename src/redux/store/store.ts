import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import doctorReducer from '../slice/doctorSlice'
import scheduleReducer from '../slice/scheduleSlice'
import authReducer from '../slice/authSlice'

const rootReducer = combineReducers({
  doctor: doctorReducer,
  schedule: scheduleReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export { store };
