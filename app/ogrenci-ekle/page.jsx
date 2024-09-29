"use client"

export default function OgrenciEkle() {
  return (
    <>
      <h1>Sertifika Uygulaması</h1>
      <form action="">
     <label htmlFor="">Öğrenci Adı</label>
        <input type="text" id="ogrenciAdi" name="ogrenciAdi" required />
        <br />

     <label htmlFor="" >Öğrenci Soyadı</label>
        <input type="text" id="ogrenciSoyadi" name="ogrenciSoyadi" required />
        <br />
     <label htmlFor="" >Öğrenci Telefonu</label>
        <input type="text" id="ogrenciTelefon" name="ogrenciTelefon" required />
          <br />
     <label htmlFor="" >Öğrenci E-Posta Adresi</label>
        <input type="email" id="ogrenciMail" name="ogrenciMail" required />
       <br />       
     <label htmlFor="doğumTarihi">Doğum Tarihi</label>
        <input type="date" id="doğumTarihi" name="doğumTarihi" required />
      </form>
    </>
  )
}