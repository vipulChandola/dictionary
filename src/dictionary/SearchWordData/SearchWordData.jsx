import React from "react";
import "./SearchWordData.css";
export default function SearchWordData({ fetchedWord }) {
  console.log(fetchedWord);
  return (
    <div className="SearchWordData">
      {fetchedWord &&
        fetchedWord[0] &&
        fetchedWord[0].meanings.map((meanings, i) => {
          return (
            <div key={i} className="meaningDetail">
              <p>{meanings.partOfSpeech}</p>
              <p>
                <span>Meaning :</span>
                {meanings.definitions[0].definition}
              </p>

              {meanings.synonyms.length === 0 ? (
                []
              ) : (
                <div className="wordSynonym">
                  <span>Synonyms :</span>
                  {`${meanings.synonyms.slice(0, 3)}`}
                </div>
              )}

              {meanings.antonyms.length === 0 ? (
                []
              ) : (
                <div className="wordAntonym">
                  <span>Antonyms :</span>
                  {`${meanings.antonyms.slice(0, 3)}`}
                </div>
              )}
            </div>
          );
        })
   
        }
        <div className="errorIndication">{fetchedWord.message&&fetchedWord.message}</div>
    </div>
  );
}
