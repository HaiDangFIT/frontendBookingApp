import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";
import authSlice from '../auth/authSlice';
import doctorSlice from '../doctor/doctorSlice';
import scheduleSlice from '../schedule/scheduleSlice';
import bookingSlice from '../booking/bookingSlice';
import { persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, 
} from 'redux-persist';

const commonConfig = {
  key: "auth",
  storage,
};

const userConfig = {
  ...commonConfig,
  whitelist: ["isLoggedIn", "token", "current"],
};
const rootReducer = combineReducers({
  auth: persistReducer(userConfig, authSlice),
  doctor: doctorSlice,
  schedule: scheduleSlice,
  booking: bookingSlice
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export { store };
