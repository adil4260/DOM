console.log('Where are you')
console.log(document.body)


const student = {
    name: 'Abdul mia',
    id: 262,
    study: function (subject) {
        console.log('studying subject', subject)
    }
}


// document.getElementsByTegName
const liCollection = document.getElementsByTagName('li');
console.log(liCollection)

//we try for  loop
for (const li of liCollection) {
    console.log(li);
    console.log(li.innerText)
}


//get by id
const foodTitleH1 = document.getElementById('food-title');
console.log(foodTitleH1)
console.log(foodTitleH1.innerText)
console.log(foodTitleH1.innerText = 'i think the sentance are chang')


//query selector all
const spanElements = document.querySelectorAll(' span')
console.log(spanElements.innerText)