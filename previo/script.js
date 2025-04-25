
const samuel = {
    name: "samuel",
    lastName: "florez",
    age: "19",
    country: "colombia",
    profession: "developer",
}

samuel.isMarried = false
samuel.hasChildren = false

samuel.age = 23 //con esto se puede modificar un atributo del elemento

delete samuel.profession  //esto es para eliminar un atributo del elemento

console.log(samuel.country)