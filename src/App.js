import { useState } from "react";
import { MainContainer } from "./components/body/MainContainer";
import { FilterProvider } from "./components/context/FilterContext";
import { Navbar } from "./components/header/Navbar";



function App() {
  
  const [searchQuery,setSearchQuery]=useState('');
  console.log(searchQuery)
  return (
    <div>
         <Navbar search={setSearchQuery}/>
         
         <FilterProvider>
         <MainContainer search={searchQuery}/>
         </FilterProvider>
    </div>
  );
}

export default App;
