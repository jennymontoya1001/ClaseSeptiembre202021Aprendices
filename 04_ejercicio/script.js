//forEach

let dias = ['lunes','martes','miércoles','jueves','viernes','sábado','domingo'];

dias.forEach(dia => {
    console.log(dia);
})


dias.forEach((dia,index) => {
    console.log(`El día ${dia} corresponde al index ${index}`);
})

dias.forEach((dia,index,arr) => {
    console.log(dia,index,arr);
})


