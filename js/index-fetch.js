document.getElementById('get-fetch')
    .addEventListener('click', e => {
        fetch('client-data.json')
            .then( response => response.json() )
            .then( clientData => {
                document.getElementById('client-name')
                    .innerText = clientData.clientName;
                document.getElementById('client-balance')
                    .innerText = clientData.clientBalance;
            });
    });