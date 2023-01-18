const bt = document.getElementById('bt');
bt.addEventListener('click', buttonSend);

function buttonSend(){
    let lang = '';
    let gender = '';

    let checkedValue = document.querySelectorAll('.form-input-checkbox:checked');
    let checkedRadio = document.querySelectorAll('.form-input-radio:checked');

    for(let i = 0; i<checkedValue.length; i++){
            lang += checkedValue[i].value ;
    }

    for(let i = 0; i<checkedRadio.length; i++){
        gender += checkedRadio[i].value ;
    }

    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const date = document.getElementById('date');
    const city = document.getElementById('city');
    const adress = document.getElementById('adress');

    const wrap = document.getElementById('wrap')
    wrap.style.display = 'none';
    
    const body = document.getElementsByTagName('body')[0];
    let table = `<table>
        <tr>
            <td>Name</td>
            <td>${name.value}</td>
        </tr>
        <tr>
            <td>Surname</td>
            <td>${surname.value}</td>
        </tr>
        <tr>
            <td>Date</td>
            <td>${date.value}</td>
        </tr>
                    <tr>
            <td>Gender</td>
            <td>${gender}</td>
        </tr>
                            <tr>
            <td>City</td>
            <td>${city.value}</td>
        </tr>
        <tr>
            <td>Adress</td>
            <td>${adress.value}</td>
        </tr>
        <tr>
            <td>Language</td>
            <td>${lang}</td>
        </tr>

    </table>`;
    body.innerHTML = table;
}
