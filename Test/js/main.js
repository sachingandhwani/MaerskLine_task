var addElement = document.getElementById('left-section');

let list = [{key:1, value:'items blue-box-light'}, {key:2, value:'items blue-box'}, {key:3, value:'items blue-box-dark'},
{key:4, value:'items blue-box'}, {key:5, value:'items blue-box-dark'}, {key:6, value:'items gray-box'}, 
{key:7, value:'items gray-box'},{key:8, value:'items blue-box-light'}, {key:9, value:'items blue-box-dark'}]


/* Method For Shuffling Data */
function shuffleData(){
    addElement.innerHTML = '';  
    let shuffleList = [...list];
    shuffleList.sort(() => Math.random() - 0.5)  //Getting the random number 
    /* Creating new element*/
    for(var i=0; i < 9; i++){
        let element = shuffleList[i];
        let newElement = document.createElement('div');
        let textnode = document.createTextNode(element.key);
        newElement.appendChild(textnode)
        newElement.className = element.value;
        addElement.appendChild(newElement);
    }
}

/* Method For Sorting Data*/
function sortData() {
    addElement.innerHTML = '';
    for(var i=0; i < 9; i++){
        let element = list[i];
        let newElement = document.createElement('div');
        let textnode = document.createTextNode(element.key);
        newElement.appendChild(textnode)
        newElement.className = element.value;
        addElement.appendChild(newElement);
    }
}


