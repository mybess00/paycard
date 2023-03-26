import '../style/PayCard.css'
import React, { useState } from 'react'
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import { IoQrCode } from 'react-icons/io5';
import Modal from './Modal';

export default function PayCard({ id, name, content, style }) {
  const copyContent = () => {
    copy(content)
    toast.success(`Se ha copiado la informacion de pago de ${name}`)
  }
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleModal = (value) => {
    setIsModalOpen(value);
  }
  const openModal = (event) => {
    event.stopPropagation();
    setIsModalOpen(true);
  }

  return (
    <>
      <div className={`pay-card ${id} relative flex flex-col flex-nowrap px-2 py-8 items-center phone:col-span-${style.width > 2 ? '2' : style.width} col-span-${style.width} row-span-${style.height}`} onClick={copyContent}>
        <div>
          <h2 className='text-black text-2xl antialiased font-semibold'>
            {name}
          </h2>
        </div>
        <div className="absolute bottom-0 flex flex-row flex-nowrap mb-2 text-[0.75rem]">
          <div onClick={openModal} className='flex flex-row flex-nowrap items-center gap-1 text-black cursor-pointer bg-white hover:bg-slate-300 rounded-xl py-[0.37rem] px-4 duration-300'>
            <IoQrCode/> 
            <div>QR</div>
          </div> 
        </div>
      </div>
      <Modal id={id} name={name} qrContent={content} isVisible={isModalOpen} handleVisibility={handleModal}/>
    </>
  )
}