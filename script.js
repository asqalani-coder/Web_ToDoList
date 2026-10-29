//Tampilkan Daftar Tugas Saat Loading
//tampilkan()

//Fungsi Tambah Tugas
const tambahTugas = () =>{
  //testing
  console.log("test")

  //Value Input
  let inputUser = document.getElementById("input-user").value;

  if(inputUser == ""){
    alert("Tolong Di Isi!")
  }else{
    //Ambil / Buat Local Storage Model Array(list) Kosong
    let daftarTugas = JSON.parse(localStorage.getItem("daftarnya")) || [];

    //Tambahkan Tugas
    daftarTugas.push(inputUser)

    //Simpan Kembali
    localStorage.setItem("daftarnya", JSON.stringify(daftarTugas))

    //Tampilkan Ke Layar
    tampilkan()
    
    //Bersihin Input User
    document.getElementById("input-user").value = "";

    console.log(daftarTugas)
  }
}

//Fungsi Tampilkan Ke Layar
const tampilkan = () =>{
  //Ambil Wadah HTML
  let wadah = document.getElementById("wadah")

  wadah.innerHTML = "";
  
  //Ambil Data Tugas
  let daftarTugas = JSON.parse(localStorage.getItem("daftarnya")) || [];

  //Kondisi Ada Isi atau Tidak
  if(daftarTugas != ""){
    //Munculin Tugas Sebagai List
    daftarTugas.forEach(function(kegiatan, index){
      let box_tugas = document.createElement("div")
      let tugas = document.createElement("p")
      let btn_delete = document.createElement("button")

      box_tugas.className = "box-tugas"
      tugas.innerText = `Tugas : ${kegiatan}`;
      btn_delete.innerText = " Delete ";

      //Tambahkan Fungsi Delete ke Tombol Hapus
      btn_delete.onclick = function () {
        hapusTugas(index)
      }
    
      //Masukkan tugas ke box
      box_tugas.appendChild(tugas)
      //Masukkan tombol delete ke box
      box_tugas.appendChild(btn_delete)
      //Masukkan box ke Wadah
      wadah.appendChild(box_tugas)
    })
  }else{
    wadah.innerHTML = "Tidak Ada Tugas"
  }
}

//Fungsi Menghapus Tugas
const hapusTugas = (index) =>{
  //Ambil Data Tugas
  let daftarTugas = JSON.parse(localStorage.getItem("daftarnya")) || [];

  //Hapus Data Tugas
  daftarTugas.splice(index,1)

  //Simpan Kembali
  localStorage.setItem("daftarnya", JSON.stringify(daftarTugas))

  //Tampilkan Kembali Ke Layar
  tampilkan()
}
tampilkan()