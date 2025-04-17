
import React from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const getStoredBook = ( ) => {
    const storedBookSTR = localStorage.getItem('readList');
    if(storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }
}


const addToStodedDB = (id) => {

    const storedBookData = getStoredBook();
    
    if(storedBookData.includes(id)) {
        // alert('Already added to read list!');
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Already added to read list!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
    else {
        storedBookData.push(id);
        console.log(storedBookData);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('readList', data);
        // localStorage.setItem('readList', JSON.stringify(storedBookData));
        // alert('Added to read list!');
    }
  
   
}
export{addToStodedDB,getStoredBook }