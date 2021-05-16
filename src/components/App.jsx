import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia"


function createEmojis(dict) {
  return (
    <Entry
    key={dict.id}
    emoji={dict.emoji}
    name={dict.name}
    meaning={dict.meaning}
    />
  );
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEmojis)}
      </dl>
    </div>
  );
}

export default App;



