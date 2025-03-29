// // src/context/LanguageContext.js
// import React, { createContext, useState } from 'react';
//
// export const LanguageContext = createContext();
//
// export const LanguageProvider = ({ children }) => {
//     const [language, setLanguage] = useState('fa'); // 'fa' یا 'en'
//
//     const toggleLanguage = () => {
//         setLanguage(prev => prev === 'fa' ? 'en' : 'fa');
//     };
//
//     return (
//         <LanguageContext.Provider value={{ language, toggleLanguage }}>
//             {children}
//         </LanguageContext.Provider>
//     );
// };