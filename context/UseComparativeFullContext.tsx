import { createContext, ReactNode, useContext, useState } from "react";

export const ComparativeFullContext = createContext({})

export function ComparativeFullProvider({ children }: { children: ReactNode }){
    const [cliente,setClient] = useState()
    const [goal,setGoal] = useState()
    const [identifyBuilding,setIdentifyBuilding] = useState()
    const [descriptionBuilding,setDescriptionBuilding] = useState()
    const [metodology,setMetodology] = useState()
    const [analyseMarket,setAnalyseMarket] = useState()
    const [searchMarket,setSearchMarket] = useState()
    const [homogen,setHomogen] = useState()
    const [handleMath,setHandleMAth] = useState()
    const [defineValue,setDefineValue] = useState()
    const [conclusion,setConclusion] = useState()
    const [finished,setFinished] = useState()
    const [atached,setAtached] = useState()
    
    return(
        <ComparativeFullContext.Provider value={{}}>
            {children}
        </ComparativeFullContext.Provider>
    )
}
export const useComparativeFullData=()=>useContext(ComparativeFullContext)
export function ComparativeFullDataProvide({ children }: { children: ReactNode }){
    return(
        <ComparativeFullProvider>
            {children}
        </ComparativeFullProvider>
    )
}