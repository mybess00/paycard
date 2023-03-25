import React, { useState } from 'react'
import '../style/PayCard.css'
import copy from 'copy-to-clipboard';
import Modal from './Modal';
import { toast } from 'react-toastify';

export default function PayCard({ id, name, content, style }) {
  const copyContent = () => {
    copy(content)
    toast.success(`Se ha copiado la informacion de pago de ${name}`)
  }
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleModal = (value) => {
    setIsModalOpen(value);
  }
  const openModal = () => {
    setIsModalOpen(true);
  }

  return (
    <>
      <div className={`pay-card flex flex-col flex-nowrap p-2 items-center justify-center col-span-${style.width} row-span-${style.height}`} onClick={copyContent}>
        <h2>
          {name}
        </h2>
        <div class="flex flex-row flex-nowrap place-self-end gap-x-1">
          <div class="copy-bt">SH</div>
          <button onClick={openModal}>QR</button>
        </div>
      </div>
      <Modal name={name} qrContent={content} isVisible={isModalOpen} handleVisibility={handleModal}/>
    </>
  )
}