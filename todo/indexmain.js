const today = document.getElementById('today')
const date = document.createElement('p')

date.textContent = localStorage.getItem('date')
today.appendChild(date)
