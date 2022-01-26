const prompts = require('prompts'); //menggunakan package prompts untuk menerima input pengguna

const isPalindrom = (letter)=>{ //fungsi untuk mengecek apakah kata adalah palindrom atau bukan
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let i = 0 //inisialisasi i=0
            let j = letter.length-1 //inisialisasi j sama dengan banyaknya index dalam array
            let mid = j/2 //tentukan nilai tengah dengan membagi dua j
            let result = '' //inisialisasi result
            while(i<mid){ //jika i kurang dari mid, jalankan perintah
                if(letter[i]===letter[j]){ //periksa apakah indeks ke-i dan ke-j dari letter sama atau tidak
                    result = "polindrom" //jika sama, maka result akan diubah menjadi "polindrom"
                    i++ //nilai i ditambahkan 1
                    j-- //nilai j dikurangi 1
                }else{ //jika elemen ke i dan ke-j tidak sama
                    result = "bukan polindrom" //maka result akan menjadi "bukan polindrom"
                    i = mid //i diubah menjadi sama dengan mid sehingga tidak akan melakukan pengulangan
                }
            }
            if(result){
                resolve(result) //jika result!==NULL, mereturn result
            }else{
                reject("Data harus STRING")
            }
        }, 1000)
    })
}

async function inputKata(){ //dengan menggunakan async function
    try{
        let kata = ''
        const response = await prompts({ //inisialisasi response yang hasilnya didapat setelah menerima input dari pengguna
            type: 'text',
            name: 'meaning',
            message: 'Masukkan kata: '
        });
        kata = response.meaning //kata bakan diisi dengan meaning yang diterima dari input pengguna
        const results = await isPalindrom(kata) //memanggil fungsi isPalindrom dengan parameter kata
        console.log(results)//mencetak hasil
    }catch(err){
        console.log(err) //jika terjadi error maka pesan error akan ditampilkan
    }
}
inputKata();