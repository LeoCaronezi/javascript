const firePixelsArray = []
const fireWidth = 2 
const fireHeigth =3 

funtion start(){
    createFiredataStructure{}
    renderFire{}
}
funtion createFiredataStructure(){
const numerOfPixels = fireWidth * fireHeigth
  for (let i = 0 ; i < numerOfPixels; i++) {
      firePixelsArray[i] = 0
  }

}
function calcuateFirePropaption(){

}
function renderFire (){
 let html = '<table cell padding = 0 cellspacing = 0 >'
  for (left row = 0 ; row < fireHeigth; row ++){
      html +='<tr>'
     for (lef column =0; column < fireWidth; row++){
        const pixeIndex = column + (fireWidth * row)

        html +='<tr>'
        html += pixeIndex
        html +='</tr>'
     }
      html +='</tr>' 
     }
 html += '</table>'

 document.querySelector('#fireCanvas').innerHTML = html
}
start()