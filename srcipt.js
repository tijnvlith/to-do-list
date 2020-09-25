var api_url = 'https://wincacademydatabase.firebaseio.com/tijn/tasks.json';

var inputVal = document.getElementById("myInput")

var wrapper = document.getElementById("wrapper")

function getInputValue(){

async function postData(url = 'https://wincacademydatabase.firebaseio.com/tijn/tasks.json', data = {
  tasks: [
      {description: inputVal, done: false},
  ]}) 

  {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data)
  });
  return response.json(); }

  postData()
}


async function getData(){
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data)

}

getData()

