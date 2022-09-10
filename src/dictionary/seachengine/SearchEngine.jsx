import React, { useState } from "react";
import "./SearchEngine.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
export default function SearchEngine({ setsearchWord,dark,setdark }) {
  const [word, setword] = useState("");
  const getword = () => {
    setsearchWord(word);
  };
  return (
    <div className={`${dark?"SearchEngine dark":"SearchEngine"}`}>
      <div className="searchengineTop">
        <div className="dictLogo">
          <img src="https://tse4.mm.bing.net/th?id=OIP.1Qgj3M2WYuSH9h52pMyx9AHaER&pid=Api&P=0" />
        </div>
        <div onClick={()=>setdark(!dark)} className="darkmode">
        {
          dark?<DarkModeIcon/>:<WbSunnyIcon />
        }
        </div>
      </div>
      <div className="searchInput">
      <input
      type="text"
      value={word}
      onChange={(e) => setword(e.target.value)}
    />
       <button onClick={getword}>Search</button>
      </div>
      <div className="dictWord">
    {word ? word : "Search a word above😊"}
  </div>
    </div>
  );
}
{
  /* <div className="searchTop">

  
    
  </div>
 
</div>
</div> */
}
