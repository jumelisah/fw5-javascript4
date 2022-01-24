const prompts = require('prompts');

const isPalindrom = (letter)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let i = 0
            let j = letter.length-1
            let mid = j/2
            let result = ''
            while(i<mid){
                if(letter[i]===letter[j]){
                    result = "polindrom"
                    i++
                    j--
                }else{
                    result = "bukan polindrom"
                    i = mid
                }
            }
            if(result){
                resolve(result)
            }else{
                reject("Data harus STRING")
            }
        }, 1000)
    })
}

async function inputKata(){
    try{
        let kata = ''
        const response = await prompts({
            type: 'text',
            name: 'meaning',
            message: 'Masukkan kata: '
        });
        kata = response.meaning
        const results = await isPalindrom(kata)
        console.log(results)
    }catch(err){
        console.log(err)
    }
}
inputKata();