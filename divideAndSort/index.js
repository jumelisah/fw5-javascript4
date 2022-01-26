const prompts = require('prompts') // Inisialisasi package prompts

const getAngka = (a)=>{ //Function ini untuk memeriksa apakah input dari pengguna adalah angka
    let b = parseInt(a) //Karena menggunakan type 'text' saat menerima input, maka angka akan diubah menggunakan parseInt. Jika input yang diterima ternyata bukan angka, maka variabel b akan menghasilkan NaN
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!isNaN(b)){  //Jika variabel b adalah angka, maka program akan me-resolve angka yang diinputkan pengguna
                resolve(a)
            }else{ //Jika variabel b bukan angka, maka program akan menampilkan pesan error
                reject(new Error("Data harus angka"))
            }
        }, 1000)
    })
}

const divideAndSort = (num)=>{  //Function ini digunakan untuk membagi dan mengurutkan angka yang telah diinput pengguna
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let hasil = '' //inisialisasi variabel
            let i = 0
            let objNum = []
            let arrNum = []
            while(i<=num.length){
                if(num[i]==0 || i==num.length){ //jika nilai indeks ke-i dari num sama dengan nol atau i telah mencapai panjang num,
                    arrNum.sort(function(a,b){return a-b}) //maka array akan diurutkan
                    objNum.push(arrNum) //arrNum akan dimasukkan ke dalam objNum
                    arrNum = [] //arrNum dikembalikan menjadi variabel kosong
                }else{
                    arrNum.push(num[i]) //jika nilai indeks ke-i dari num bukan nol, maka nilai dari indeks ke-i akan dimasukkan ke dalam arrNum 
                }
                i++
            }
            objNum.forEach(element=>{   //semua elemen dalam objNum akan dimasukkan ke dalam hasil
                for(let a = 0; a<element.length; a++){
                    hasil+=element[a]
                }
            })
            resolve(hasil) //mengembalikan hasil
        }, 1000)
    })
}

async function getHasil(){
    try{
        const res = await prompts({ //Dengan menggunakan prompts, program akan meminta input
            type : 'text',          // type data yang digunakan adalah text
            name : 'value',         // value nantinya akan diisi dengan input yang diterima program
            message : 'Masukkan angka' //ini adalah pesan awal yang akan ditampilkan saat meminta input
        })
        const angka = await getAngka(res.value) //Inisialisasi variabel angka dengan memanggil function getAngka. Parameter yan digunakan adalah value yang diterima dari input pengguna
        const finalRes = await divideAndSort(angka) //Setelah mendapatkan nilai angka, lakukan inisialisasi variabel finalRes yang nilainya didapat setelah memanggil function divideAndSort dengan parameternya adalah angka
        console.log(finalRes) //Setelah selesai, program akan mencetak hasil dari finalRes
    }catch(err){
        console.log(err.toString()) //Setelah memanggil function getAngka ternyata hasilnya error, maka program akan mengeluarkan pesan error
        getHasil() //Kemudian, program akan meminta pengguna menginputkan data kembali
    }
}

getHasil()

// Input: 5956560159466056 Output: 55566914566956
// Input: 98123037221069457 Output: 123891223745679