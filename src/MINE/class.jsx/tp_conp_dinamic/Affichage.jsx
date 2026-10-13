import {menuProduit,menuPanier,produit,panier} from './data'
import Side from './Side'
import Header from './headers'
import Table from './tables'
import './style.css'
export default function Aficher(){
    return (
        <div className='parent'>
        <div className='HF'>
    <Header titre='Cataloge'/>
    <Header titre='E-Commerce'/>
    </div>
    <div className='Side'>
    <Side titre="Produit" list={menuProduit}/>
    <Side titre="Panier" list={menuPanier}/>
    </div>
    <div className='table'>
    <Table titre="Produit" infos={produit}/>
    <Table titre="Panier" infos={panier}/>
    </div>
    </div>)
}