//object of user
const user= {
    name:"manish magaju",
    age:22,
    address:"bhaktapur"
}
console.log(user);

//object of course
const softwareEngineering = {
    course:["softwareEngineering"],
    price:30000,
    duration:"3months",
    instructer: {
        sir:"Bibek Bhattarai",
        qualification:"sotwareengineer"

    }
}

console.log(softwareEngineering.course)
softwareEngineering.course.push("computerengineering")
console.log(softwareEngineering.course)

const software = softwareEngineering
software.course =  "engineer"

console.log(softwareEngineering.course)

