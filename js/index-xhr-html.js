document.getElementById('get-content').addEventListener('click', e => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status ===200 ){
            document.getElementById('root').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'html-content.html?r=' + Math.random(), true)
    xhr.send();
});