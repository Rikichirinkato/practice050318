
document.getElementById('get-client')
    .addEventListener('click', e => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const clientData = JSON.parse(xhr.responseText); 
                document.getElementById('client-name')
                    .innerText = clientData.clientName;
                document.getElementById('client-balance')
                    .innerText = clientData.clientBalance;
            }    
        }
        xhr.open('GET', 'client-data.json?r='+Math.random(), true);
        xhr.send();
    });