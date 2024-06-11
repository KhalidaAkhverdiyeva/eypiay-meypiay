
let addButton = document.querySelector('.add');
let form = document.querySelector('form')
const baseUrl = 'http://127.0.0.1:5500/data-api/data.json';



if(addButton){
    addButton.addEventListener('click', function() {
        window.location.href = 'form.html';
    })

}

// fetch data that i have from api to index html!!!!!

async function fetchData(){
    try{
        const response = await fetch(baseUrl)

        if(!response.ok){
            throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        const cardBox = document.querySelector('.card-box');
        data.forEach(data => {
            const cardDiv = document.createElement('div')
            cardDiv.innerHTML = `<img
            src="${data.img}"
            alt=""
          />
          <div class="infoText">
            <div>${data.fname}</div>
            <div>${data.lname}</div>
            <div>${data.age}</div>
          </div>
          <div class="status">
            <button class="status">${data.status}</button>
            <button class="delete">Delete</button>
          </div>`
          cardBox.appendChild(cardDiv);
        });
        
        

    }
    catch(error){
        console.log('There is an error:', error)

    }
}
fetchData()

///form html page submit basanda!!!
form.addEventListener('submit', submitData);

  async function submitData(e){

    e.preventDefault();

    const fName = document.querySelector('#fName').value
    const lName = document.querySelector('#lName').value
    const age = document.querySelector('#age').value
    const imgUrl = document.querySelector('#imgUrl').value
    const status = document.querySelector('#status').value
   

    let newFormData = {
        fname: fName,
        lname: lName,
        age: age,
        imgUrl: imgUrl,
        status: status
    }

    const submitUrl = 'http://127.0.0.1:5500/data-api/submit';
    try{

        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFormData)
        });

        if(!response.ok){
            throw new Error('error while submiting the data')
        }
        window.location.href = 'index.html';
    }
    catch(error){
        console.log('There is something rong with fetching', error)
    }

    
}


