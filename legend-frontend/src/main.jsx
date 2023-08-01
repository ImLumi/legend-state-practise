import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { enableReactComponents } from "@legendapp/state/config/enableReactComponents";
import { enableReactUse } from '@legendapp/state/config/enableReactUse';
import { configureObservablePersistence } from '@legendapp/state/persist';
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage';

configureObservablePersistence({
  persistLocal: ObservablePersistLocalStorage
});
enableReactUse();
enableReactComponents();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
