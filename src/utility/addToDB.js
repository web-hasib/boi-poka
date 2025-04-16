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
        alert('Already added to read list!');
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
export{addToStodedDB}