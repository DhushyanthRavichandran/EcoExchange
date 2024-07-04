import React,{Children, createContext,useState} from "react";

export const FilterContext=createContext();

export const FilterProvider =({children})=>{
    const [item,setItem]=useState('');
    const [itemAvailability,setItemAvailability]=useState('');
    const  [addedBy,setAddedBy]=useState('');
    const [maxDistance,setMaxdistance]=useState('');
    const [sortBy,setSortBy]=useState('');
    return (
        <FilterContext.Provider 
           value={{item,setItem,itemAvailability,setItemAvailability,addedBy,setAddedBy,
             maxDistance,setMaxdistance,sortBy,setSortBy
           }}>
            {children}
           </FilterContext.Provider>
    )
}


