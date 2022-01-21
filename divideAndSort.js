const angka = 5956560159466056

function divideAndSort(num){
    if(typeof num === "number"){
        let hasil = ''
        let ubahAngka = num.toString()
        let i = 0
        let objNum = []
        let arrNum = []
        while(i<=ubahAngka.length){
            if(ubahAngka[i]==0 || i==ubahAngka.length){
                arrNum.sort(function(a,b){return a-b})
                objNum.push(arrNum)
                arrNum = []
            }else{
                arrNum.push(ubahAngka[i])
            }
            i++
        }
        objNum.forEach(element=>{
            for(let a = 0; a<element.length; a++){
                hasil+=element[a]
            }
        })
        return hasil
    }else{
        return "Data bukan angka"
    }
}

console.log(divideAndSort(angka))