import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Contact = () => {
    
    const data = [
      "benedictnnaoma0@gmail.com",
      "08182811692",
      "linkedin.com/in/benedict-nnaoma-73285a242",
      "https://github.com/Benedictnno",
    ];
     const [text, setText] = useState(data[0]);
     const [copied, setCopied] = useState(false);

    
     const handleCopy = () => {
       setCopied(true);
     };
  return (
    <div>
      {data.map((copyText, index) => {
        return (
          <div>
            <input type="button" value={copyText} />
            <CopyToClipboard text={text} onCopy={handleCopy}>
              <button onClick={() => setText(data[index])}>
                Copy to Clipboard
              </button>
            </CopyToClipboard>
            
            {copied && <span>Copied!</span>}
          </div>
        );
      })}
      
    </div>
  );
}

export default Contact
