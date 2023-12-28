import { useEffect, useState } from "react"
import { markdownConvert } from "../api/convert";

function MarkDownPreview({value}){
    const [markDownHTML, setMarkDownHTML] = useState(value);

    useEffect(()=>{
       markdownConverter(value);
    },[value]);

    async function markdownConverter(value){
        const data =  await markdownConvert(value);
        setMarkDownHTML(data);
      }

    return (
        <div style={{overflowY:'scroll',paddingLeft:'0.4rem'}}>
            <div dangerouslySetInnerHTML={{ __html: markDownHTML }} />
        </div>
    )

}

export default MarkDownPreview