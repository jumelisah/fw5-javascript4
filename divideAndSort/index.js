const prompts = require('prompts')

const getAngka = (a)=>{
    let b = parseInt(a)
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!isNaN(b)){
                resolve(a)
            }else{
                reject(new Error("Data harus angka"))
            }
        }, 1000)
    })
}

const divideAndSort = (num)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let hasil = ''
            let i = 0
            let objNum = []
            let arrNum = []
            while(i<=num.length){
                if(num[i]==0 || i==num.length){
                    arrNum.sort(function(a,b){return a-b})
                    objNum.push(arrNum)
                    arrNum = []
                }else{
                    arrNum.push(num[i])
                }
                i++
            }
            objNum.forEach(element=>{
                for(let a = 0; a<element.length; a++){
                    hasil+=element[a]
                }
            })
            resolve(hasil)
        }, 1000)
    })
}

async function getHasil(){
    try{
        const res = await prompts({
            type : 'text',
            name : 'value',
            message : 'Masukkan angka'
        })
        const angka = await getAngka(res.value)
        const finalRes = await divideAndSort(angka)
        console.log(finalRes)
    }catch(err){
        console.log(err.toString())
        getHasil()
    }
}

getHasil()

// Input: 5956560159466056 Output: 55566914566956
// Input: 98123037221069457 Output: 123891223745679