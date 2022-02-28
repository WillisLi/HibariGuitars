import React from 'react';
import singleNote from 'assets/images/single-note.png';

function Loading() {
  return (
    <div className = "min-h-screen flex flex-row justify-center items-center">
        <img className = "animate-bounce h-40 drop-shadow-lg shadow-slate-700" src = {singleNote} alt = "bouncing-note" />
    </div>
  )
}

export default Loading