import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const CopyText = ({text,icon,title,link}) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
      setCopied(true);
    };
    
    setTimeout(()=>{
        setCopied(false);
    
    },3000)
  

  return (
    <div>
      <label htmlFor="">
        <h4>
          <span>{icon}</span> {title} :{" "}
        </h4>
      </label>
      <a href={`https://${link}`} target="_blank">
        <input
          value={text}
          readOnly
          disabled
          className="copy_input form_input"
        />
      </a>
      <CopyToClipboard text={text} onCopy={handleCopy}>
        <button
          className= "p_btn"
          disabled={copied ? "disabled" : null}
          onClick={() => toast.success("Copied")}
        >
          Copy
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default CopyText;
