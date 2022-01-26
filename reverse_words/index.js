const prompts = require('prompts'); //menggunakan package prompts

const reverseWord = (sentence)=>{ //fungsi reverseWord yang menerima parameter sentence untuk membalik urutan kata dari suatu kalimat
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof sentence=="string"){ //melakukan pengecekan apakah kalimat adalah string
                let reverseWords = ''
                let kata = ''
                let y = sentence.length
                for(let i = 0; i<=y ;i++){
                    if(sentence[i]===" " || i==y){ //jika indeks ke-i dari kata adalah spasi atau i sama dengan panjang kalimat,
                        reverseWords = kata + " " + reverseWords //maka reverseWords akan diisi variabel kata di depannnya
                        kata = "" //lalu, variabel kata akan dikembalikan menjadi string kosong
                    }else{ //jika indeks ke-i bukan spasi
                        kata+= sentence[i] //maka indeks ke i akan dimasukkan ke dalam variabel kata
                    }
                }
                resolve(`Reverse Words : ${reverseWords}`) //mereturn reverseWords
            }else{
                reject("Data harus STRING") //jika data bukan string, maka program akan mengirim pesan error
            }
        })
    })
}

async function balikKalimat(){ //menggunakan async function,
    try{
        let kalimat = '' //inisialisasi kalimat adalah string kosong
        const response = await prompts({ //insialisasi variabel response yang menerima input dari pengguna menggunakan prompts
            type: 'text',
            name: 'meaning',
            message: 'Masukkan kalimat : '
        });
        kalimat = response.meaning //variabel kalimat diisi dengan meaning dari data yang diinput pengguna
        const results = await reverseWord(kalimat) //dapatkan nilai results dengan menjalankna function reverseWord dengan parameternya adalah kalimat
        console.log(results) //cetak results
    }catch(err){
        console.log(err) //jika terjadi error, makan akan menampilkan pesan error
    }
}
balikKalimat(); //panggil function balik kalimat