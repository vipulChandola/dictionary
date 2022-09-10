import React, { useEffect, useState } from 'react';
import axios from 'axios'
import SearchEngine from './seachengine/SearchEngine'
import './DictionaryParent.css'
import SearchWordData from './SearchWordData/SearchWordData'
export default function DictionaryParent() {
const [searchWord, setsearchWord] = useState("")
const [fetchedWord, setfetchedWord] = useState("")
const [dark, setdark] = useState(false)
const dictiaryfetch=async()=>{
 try{
await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`).then(res=>res.json()).then(data=>setfetchedWord(data))
 }
 catch(error){
  console.log("error")
 }
}
useEffect(()=>{
if(searchWord!==""){
  dictiaryfetch()
}
},[searchWord])
  return (
    <div className={`${dark?"DictionaryParent dark":"DictionaryParent"}`}>
      <SearchEngine setsearchWord={setsearchWord} dark = {dark} setdark={setdark}/>
      <SearchWordData fetchedWord={fetchedWord}/>
    </div>
  )
}
