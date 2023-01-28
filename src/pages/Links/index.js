import {useState, useEffect} from 'react';

import './link.css'; 

import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'

import {Link} from 'react-router-dom';

import {SaveLink, deletingLink} from '../../services/store'; 

import Linkone from '../../linkitem';



export default function Links() {
    const [usLink, setUsLink] = useState([]);
    
    const [data, setData] = useState({});

    const [modal, setModal] = useState(false);


    //=========RESULT WHEN YOU ENTER AND LOAD=============
    useEffect(() => {
      async function playLink(){
        const makeLink = await SaveLink('@shortenLink')
      
        if(makeLink.length === 0) {
          console.log('Nadica de nada :( ')
        }
        
        
        setUsLink(makeLink);
      }
        
      playLink();
    }, [])

          
    function openLink(link) {
      setData(link)
      setModal(true)
    }
      

                /*=======DELETE LINK=========*/
    async function deleteLink(id) {
      const finish = await deletingLink(usLink, id);


      if(finish.length === 0){
        console.log('Sem links aqui')
      }

      setUsLink(finish);
    }


        //=========HEADER=============
    return (
      <div className="link-container">
                  
                  
        <div className="header-link">
          <Link to="/">
            <FiArrowLeft size={38} color="#000"/>
          </Link>
          
          <h1>Links Gerados</h1>
        </div>
        
                {/*=======AREA BUTTON=========*/}
          {usLink.map(link => (
                <div key={link.id}  className="item">
                  <button className="btnlink" onClick={() => openLink(link)}>
                    <FiLink size={18} color="#000"/>
                    {link.long_url}
                  </button>
                  
                  {/*=====DELETE LINK======*/}
                  <button className='delete-trash' onClick={ () =>    deleteLink(link.id)}>
                    
                    <FiTrash size={18} color="#f06161"/>
                  </button>
                </div>
          ))}

                {/*======LINK ITEM function=========*/}
        {modal && (
          <Linkone
            closerUrl = { () => setModal(false) }
            content={data}
          />
        )}
      </div>
    )
  }