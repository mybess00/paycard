import '../style/PayCard.css'
import React, { useState } from 'react'
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import { BsShareFill } from 'react-icons/bs';
import { IoQrCode } from 'react-icons/io5';
import Modal from './Modal';
import btc from '../assets/btc1.svg'

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
      <div className={`pay-card relative flex flex-col flex-nowrap p-2 items-center justify-center phone:col-span-${style.width > 2 ? '2' : style.width} col-span-${style.width} row-span-${style.height}`} onClick={copyContent}
      style={{
        backgroundImage: btc
      }}>
        <div>
          <h2 className='text-white'>
            {name}
          </h2>
        </div>
        <div className="absolute bottom-0 right-0 flex flex-row flex-nowrap gap-x-2 mr-2 mb-2 text-[1.1rem]">
          <div className="copy-bt text-white">
            <BsShareFill/>
          </div>
          <div className='text-white' onClick={openModal}>
            <IoQrCode/>
          </div>
        </div>
      </div>
      <Modal id={id} name={name} qrContent={content} isVisible={isModalOpen} handleVisibility={handleModal}/>
    </>
  )
}