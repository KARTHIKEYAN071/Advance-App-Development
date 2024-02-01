// import React, { createContext, useContext, useRef } from 'react';
// const ScrollContext = createContext();
// export const useScrollContext = () => {
//   return useContext(ScrollContext);
// };
// export const ScrollProvider = ({ children }) => {
//   const sectionRefs = {
//     section1: useRef(null),
//   };

//   const scrollToSection = (sectionRef) => {
//     sectionRef.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <ScrollContext.Provider value={{ sectionRefs, scrollToSection }}>
//       {children}
//     </ScrollContext.Provider>
//   );
// };
