// XHR - XmlHttpRequest
let Rides =[];

const domStringBuilder =(arrayToPrint) => {
    console.log(arrayToPrint);
    // loop over arrayToprint and build up domString
    // call printToDom
};



function executeThisCodeAfterFileLoads(){
    const data = JSON.parse(this.responseText);
    rides = data.rides;
    domStringBuilder(data.rides);
   
}


function executeThisCodeifXHRFAILS(){
    console.error('oh shit');
}


const getRidesData = () => {
   const myRequest = new  XMLHttpRequest();
   myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
   myRequest.addEventListener('error',executeThisCodeifXHRFAILS);
   myRequest.open('GET', ',/db/rides.json');
   myRequest.send();
   console.log(myRequest);
  
};


function executeThisCodeifXHRFAILS(){
    console.error('oh shit');
}

const init= () => {
    getRidesData();
};
init();