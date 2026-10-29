import {useEffect,useState} from 'react';import './styles.css';
const base=import.meta.env.VITE_API_URL || 'http://localhost:8080';
export default function App(){
 const [news,setNews]=useState([]),[query,setQuery]=useState(''),[status,setStatus]=useState('Carregando notícias…');
 useEffect(()=>{const controller=new AbortController();fetch(base+'/noticias',{signal:controller.signal}).then(response=>{if(!response.ok)throw new Error('Não foi possível buscar notícias');return response.json();}).then(data=>{setNews(data);setStatus(data.length ? '' : 'Nenhuma notícia publicada.');}).catch(error=>{if(error.name!=='AbortError')setStatus(error.message);});return ()=>controller.abort();},[]);
 const filtered=news.filter(item=>item.titulo.toLowerCase().includes(query.trim().toLowerCase()));
 return <><header><h1>Notícias</h1><label>Buscar notícia<input type="search" value={query} onChange={e=>setQuery(e.target.value)}/></label></header><main>{status && <p role="status">{status}</p>}{filtered.map(item=><article key={item._id}><h2>{item.titulo}</h2><p>{item.conteudo}</p><time>{item.data_publicacao}</time></article>)}</main></>;
}
