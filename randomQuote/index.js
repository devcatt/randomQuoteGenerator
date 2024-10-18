const quote = document.getElementById('quote')
const author = document.getElementById('author')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    fetch('https://quotes-api-self.vercel.app/quote')
    .then(response => response.json())
    .then(data => {
        quote.innerHTML = data.quote
        author.innerHTML = data.author
    })
    .catch(error => console.error(error))
})