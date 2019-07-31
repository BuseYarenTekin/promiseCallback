const data = [
  {
    id:1034,
    title: "Shopping list",
    description: "It's a shopping list",
    todo:["Buy milk", "Buy water"]
  },
  {
    id:5000,
    title: "Read lists",
    description:"It's a reading list",
    todo:["Fahrenheit 451","Homo Sapiens"]
  },
  {
    id:2,
    title: "Travel lists",
    description:"It's a travel list",
    todo:["Ankara","Bolu"]
  },
  {
    id:3,
    title: "Game lists",
    description:"It's a game list",
    todo:["Lol","PubG"]
  }
]


let newData = {
  id:8,
  title:"New List",
  description:"It's a new list",
  todo:["Read book","Travel"]
}

function promiseCallback(resolve,reject)
{
  const error = false;

  if(!error) //error is false
    {
    //sorting, accept the callback, return
    let sortedArray = data.sort((firstElement,secondElement) =>{
      return firstElement.id - secondElement.id //small to large sorting
    })

    // console.log(sortedArray);
    sortedArray.pop()
    sortedArray.shift()

    for (var i = 0; i < 3; i++) {
      sortedArray.push(newData)
    }
    //item- every element

    sortedArray.forEach((item) => {
      item.owner = "Author" //key-value
    })
    //muatiton to sorted Array
    sortedArray = sortedArray.sort((firstElement,secondElement) =>{
      return firstElement.id - secondElement.id
        })

        resolve(sortedArray)
  }
  else {
        reject("An error occured when processing data")
  }
}

var promiseProcess = new Promise(promiseCallback);
promiseProcess.then((response) => {
  response.forEach((item) => {
    console.log(item.owner);
  })
})
