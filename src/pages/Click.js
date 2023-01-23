import React from "react";
import Click from '../components/Click';

function ClickPage() {
  return <div>
    Click Page
    <Click/>
    <Click initalClicks={100}/>
  </div>
}

export default ClickPage;
