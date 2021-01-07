import React from 'react';

const MenuMakanan = (props) => {
  if(props.stockMenu == 0){
    return null
  }else {
    return (
        <div style={{border: "1px solid black", width: 300, margin: 'auto'}}>
          <p>Nama Menu:{ props.namaMenu}</p>
          <p>Harga: {props.hargaMenu}</p>
          <p>Stock: {props.stockMenu}</p>
        </div>
      )
  }
}

export default MenuMakanan;