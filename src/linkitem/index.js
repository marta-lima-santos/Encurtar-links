import './link.css';
import {FiX, FiClipboard} from 'react-icons/fi';

export default function Linkone({closerUrl, content}) {

    // Copy Button
    async function copyLink(){
        await navigator.clipboard.writeText(content.link);
    }


    return (
        <div className="link-one-contaiiner">
            
            <div className="link-one-header">
                <h2>Está aqui o seu link</h2> 
                <button onClick={closerUrl}>
                    <FiX size={20} color="#f95959" />
                </button>
            </div>

            {/*========URL======*/}
            <span>
                {content.long_url}
            </span>

            {/*=====URL shortener======*/}
            <button className='link-url' onClick={copyLink}>
                {content.link} 
                <FiClipboard size={20}/>
            </button>
        </div>
    )
}


