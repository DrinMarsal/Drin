document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

function fetchData() {
    fetch('https://api.example.com/data')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            updateUI(data);
        })
        .catch(error => {
            console.error('Fetch operation error:', error);
        });
}

function updateUI(data) {

}
