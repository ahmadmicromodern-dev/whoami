import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './core/i18n.js'
import i18n from './core/i18n.js'

// Set the initial HTML lang attribute
document.documentElement.lang = i18n.language;

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
