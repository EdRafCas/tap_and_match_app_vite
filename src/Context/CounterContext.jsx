import React,{useState} from 'react';

const CounterContext= React.createContext();

const CounterContextProvider = ({children}) => {
      const [counterBar, changeCounterBar] = useState(0)
      const [counterSkips, changeCounterSkips] = useState(3)
      const [counterCompleted, changeCounterCompleted] = useState(0)
      const [reload, changeReload] = useState (0)
      const [leftColumn, changeLeftColumn] = useState("")
      const [rightColumn, changeRightColumn] = useState("")
      const [playWrong, changePlayWrong] = useState("")
      return ( 
            <CounterContext.Provider value={{
                                    house:"house",
                                    counterBar:counterBar,
                                    changeCounterBar:changeCounterBar,
                                    counterCompleted:counterCompleted,
                                    changeCounterCompleted:changeCounterCompleted,
                                    reload:reload,
                                    changeReload:changeReload,
                                    changeCounterSkips:changeCounterSkips,
                                    counterSkips:counterSkips,
                                    changeLeftColumn:changeLeftColumn,
                                    leftColumn:leftColumn,
                                    changeRightColumn:changeRightColumn,
                                    rightColumn:rightColumn,
                                    playWrong:playWrong,
                                    changePlayWrong: changePlayWrong
                                    }}>
                  {children}
            </CounterContext.Provider>
       );
}
 
export {CounterContextProvider, CounterContext};