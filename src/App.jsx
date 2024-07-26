
import { useState } from 'react';
import "./App.css";

const App = () => {

  const [htmlCode, setHtmlCode] = useState("");
  const[cssCode,setCssCode]= useState("");
  const[jsCode,setJsCode]=useState("");

  //let code logim of compile code

  const handleOutput = () => {
     const iframe = document.getElementById("output");
     iframe.contentDocument.body.innerHTML = htmlCode + "<style>" +cssCode+"</style>";
     iframe.contentWindow.eval(jsCode);
      };

  console.log("HTML",htmlCode);
  console.log("css",cssCode);
  console.log("js",jsCode);

  return (
    <div className='playground'>
      { /*for ide */}                
        <div className='left'>
          {/* for html */} 
          <label>HTML</label>
          <textarea name="html" onChange={(e) => setHtmlCode(e.target.value)}></textarea>
          {/* for css */} 
          <label>CSS</label>
          <textarea name="css" onChange={(e) => setCssCode(e.target.value)}></textarea>
          {/* for javascript */} 
          <label>JavaScript</label>
          <textarea name="javascript" onChange={(e) => setJsCode(e.target.value)}></textarea>
          
    </div>
    { /* for ooutput */}
    <div className='right'>
      <button onClick={handleOutput}>Run</button>
        {/* we use iframe to render html in our web app */}
        <iframe id="output"></iframe>
      </div>
      </div>
  )
}

export default App