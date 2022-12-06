import React from 'react'

export default function Footer() {
  return (
    <div className='bg-white'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-4 pt-10'>
          <section>
            <nav className='grid gap-y-4'>
              <h6 className='text-lg text-brand-color'>Getir'i indirin! </h6>
              <a href=''>
                <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'></img>
              </a>
              <a href=''>
                <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'></img>
              </a>
              <a href=''>
                <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'></img>
              </a>
            </nav>
          </section>
          <section >
            <nav className='grid gap-y-4 text-sm'>
              <h6 className='text-lg text-brand-color'>Getir'i keşfedin </h6>
              <p>Hakkımızda</p>
              <p>Kariyer</p>
              <p>Teknoloji Kariyerleri</p>
              <p>İletişim</p>
              <p>Sosyal Sorumluluk Projeleri</p>
            </nav>
          </section>
          <section>
            <nav className='grid gap-y-4 text-sm'>
              <h6 className='text-lg text-brand-color'>Yardıma mı ihtiyacınız var? </h6>
              <p>Sıkça Sorulan Sorular</p>
              <p>Kişisel Verilerin Korunması</p>
              <p>Gizlilik Politikası</p>
              <p>Kullanım Koşulları</p>
              <p>Çerez Politikası</p>
            </nav>
          </section>
          <section>
            <nav className='grid gap-y-4 text-sm '>
              <h6 className='text-lg text-brand-color'>İş Ortağımız Olun </h6>
              <p>Bayimiz Olun</p>
              <p>Deponuzu Kiralayın</p>
              <p>GetirYemek Restoranı Olun</p>
              <p>GetirÇarşı İşletmesi Olun</p>
              <p>Zincir Restoranlar</p>
            </nav>
          </section>
        </div>
      </div>
    </div>
  )
}
