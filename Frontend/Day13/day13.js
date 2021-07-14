const btn = document.querySelector(".btn")
const image = document.querySelector("#img")
btn.addEventListener('click', () => {
    getData();
})

async function getData() {

    let link = await fetch("https://meme-api.herokuapp.com/gimme")
        .then(data => {
            let obj = data.json()
            obj.then(res => {
                image.src = res.url

                console.log(image);
            })


        })

    return link
}
