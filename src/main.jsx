
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DarkModeProvider } from './context/DarkModeContext.jsx'
import { Provider } from "react-redux"
import { store } from "./store/store.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <DarkModeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </DarkModeProvider>
  
)
