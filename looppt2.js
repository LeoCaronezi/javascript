const fun = []
for (let j=0; j< 10; j++){
    fun.push(function () {
        console.log(j)
    })
}
fun[5]()
fun[2]()
/*
// trabalhar com var primeiro 
for(var i=0; i <10 ; i++){
    var j = 0
     j++
    fun.push(j)
}
for (let i =0; i<10; i++){
    console.log(fun)
}*/