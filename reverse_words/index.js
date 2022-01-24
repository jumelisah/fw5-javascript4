const prompts = require('prompts');

const reverseWord = (sentence)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof sentence=="string"){
                let reverseWords = ''
                let kata = ''
                let y = sentence.length
                for(let i = 0; i<=y ;i++){
                    if(sentence[i]===" " || i==y){
                        reverseWords = kata + " " + reverseWords
                        kata = ""
                    }else{
                        kata+= sentence[i]
                    }
                }
                resolve(`Reverse Words : ${reverseWords}`)
            }else{
                reject("Data harus STRING")
            }
        })
    })
}

async function balikKalimat(){
    let kalimat = ''
    const response = await prompts({
        type: 'text',
        name: 'meaning',
        message: 'Masukkan kalimat : '
    });
    kalimat = response.meaning
    const results = await reverseWord(kalimat)
    console.log(results)
}
balikKalimat();