import React from 'react'
import PerfumeImageDesktop from './assets/Images/image-product-desktop.jpg'
import PerfumeImageMobile from './assets/Images/image-product-mobile.jpg'
import CartIcon from './assets/Images/icon-cart.svg'
const App = () => {
  return (
    <div className='w-screen h-auto bg-[hsl(30,38%,92%)] margin-auto flex items-center justify-center sm:h-screen'>
      <div className='w-auto h-auto bg-white rounded-lg grid grid-cols-1 my-20 mx-3  sm:w-150 sm:grid-cols-2 sm:my-10 sm:mx-3'>
        <div>
          <img src={PerfumeImageDesktop} alt="Perfume Image Desktop" className='hidden sm:block w-auto h-full rounded-l-lg' />
          <img src={PerfumeImageMobile} alt="Perfume Image Mobile" className='w-auto rounded-t-lg sm:hidden'/>
        </div>
      <div className='p-8'>
        <p className='font-montserrat text-xs font-medium text-[hsl(228,12%,48%)] mb-6 '>P E R F U M E</p>
        <div className='w-auto h-auto mb-7 sm:w-50'>
        <p className='font-fraunces text-3xl font-bold text-[hsl(212,21%,14%)]'>Gabrielle Essence Eau  De Parfum</p>
        </div>
        <div className='w-auto h-auto mb-7'>
          <p className='font-montserrat text-sm font-normal text-[hsl(228,12%,48%)] mb-6'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        </div>
        <div className='flex gap-5 items-center mb-7'>
          <span className='font-fraunces text-3xl font-bold text-[hsl(158,36%,37%)]'>$149.99</span>
          <span className='font-montserrat text-xs font-medium text-[hsl(228,12%,48%)] line-through'>$169.99</span>
        </div>
        <div className='w-full h-auto '>
          <button className='w-full h-auto bg-[hsl(158,36%,37%)] flex items-center justify-center gap-3 py-3 rounded-lg ' >
            <img src={CartIcon} alt=" Cart Icon" className='w-4 h-4' />
            <span className='font-montserrat text-sm font-bold text-white'>Add to Cart</span>
          </button>
        </div>

      </div>
      </div>
    </div>
  )
}

export default App