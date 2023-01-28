import {useState} from 'react'

import {FiLink} from 'react-icons/fi';

import './home.css';

import Menu from '../../Menu';

import Linkitem from '../../linkitem';

import api from '../../services/api';

import {savedLink} from '../../services/store';

export default function Home() {
    const [link, setLink] = useState('');
    const [data, setData] = useState({});
    const [url, setUrl] = useState(false);

    //=====GENERATE LINK=============//
   async function ShortLink() {
      try{
        const response = await api.post('/shorten', {
          long_url: link
        })
      
        setData(response.data);
        setUrl(true);
        setLink('');

        savedLink('@shortenLink', response.data)
        setLink('')


      }catch {
        alert("Não há nada aqui para você xuxu :( ");
        setLink('');
      }
    }

    return (
      <div className="container-home">
        
        <div className="logo">
          <img src="/photo/link.png" alt="Links imagem"/>
          <h1>LINK RÁPIDO</h1>
          <span>Encurtar Abaixo</span>
        </div>

        <div className="input">
          <div>
            <FiLink size={20} color="#fff" />    
            
            <input 
              placeholder='Colar aqui'
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          {/*=========AREA BUTTON=========*/}
          <button onClick={ShortLink}>
            Gerar Link
          </button>
        </div>

        <Menu/>
             
        {/*=========rendering========*/}
        {url && (
          <Linkitem
            closerUrl={() => setUrl(false) }
            content={data}
          />
        )}
        
      </div>
    )
  }