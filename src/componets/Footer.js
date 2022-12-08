import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {BiGlobe} from 'react-icons/bi'

export default function Footer() {
  return (
    <div className='bg-white'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-4 pt-10  gap-y-4 px-6 md:gap-y-0 md:px-0' >
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
          <section>
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
        <div className='flex flex-col md:flex-row md:justify-between items-center border-t border-gray-100 mt-6 py-6'>
          <div className='text-xs text-gray-700 flex  gap-x-8' >
            &copy; 2022 Getir
            <a className='text-brand-color hover:underline relative before:w-[3px] before:h-[3px] before:bg-black before:absolute before:-left-4 before:top:1/2 before:translate-y-1.5 before:rounded-full'>
              Bilgi Toplumu Hizmetleri
            </a>
          </div>

          <nav className='flex gap-x-3'>
            <a className='h-8 w-8 rounded-lg text-gray-600  transition-all hover:bg-primary-brand-color hover:bg-opacity-5 flex items-center justify-center  cursor-pointer hover:text-brand-color'>
              <FaFacebook size={21} className="hover:h-20 w-20 transition-all" ></FaFacebook>
            </a>
            <a className='h-8 w-8 rounded-lg text-gray-600  transition-all hover:bg-primary-brand-color hover:bg-opacity-5 flex items-center justify-center cursor-pointer hover:text-brand-color'>
              <FaTwitter size={21} className="hover:h-20 w-20 transition-all"></FaTwitter>
            </a>
            <a className='h-8 w-8 rounded-lg text-gray-600  transition-all hover:bg-primary-brand-color hover:bg-opacity-5 flex items-center justify-center cursor-pointer hover:text-brand-color'>
              <FaInstagram size={21} className="hover:h-20 w-20 transition-all"></FaInstagram>
            </a>
            <a className='h-8 flex gap-x-2 rounden text-gray-600  px-2 text-sm border border-gray-100 transition-all hover:bg-primary-brand-color hover:bg-opacity-5  items-center justify-center cursor-pointer hover:text-brand-color '>
              <BiGlobe size={21} ></BiGlobe>
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
