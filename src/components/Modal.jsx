import React from 'react'
import '../style/Modal.css'
import ReactModal from 'react-modal';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import { QRCodeSVG } from "qrcode.react";
import { IoCopy } from 'react-icons/io5';

export default function Modal({ id, name, qrContent, isVisible, handleVisibility }) {
  const closeModal = () => {
    handleVisibility(false);
  }
  const copyQrContent = () => {
    copy(qrContent);
    toast.success(`Se ha copiado la informacion de pago de ${name}`)
  }
  return (
    <ReactModal isOpen={isVisible} overlayClassName='ReactModal__Overlay' role='dialog' style={{
      content: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#fff',
        overflow: 'hidden',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '10px',
        height: '420px',
        width: 'fit-content',
        id: {id},
      }
    }}>
      <div>
        <div className="flex flex-col items-center">
            <button onClick={closeModal} className='place-self-end'>✕</button>
            <div className='flex flex-col items-center p-4'>
              <h3 className="text-lg font-bold text-center">{name}</h3>
              <div className="flex flex-col items-center my-6">
                <QRCodeSVG value={qrContent} size='200'/>
              </div>
              <div onClick={copyQrContent} className='flex flex-row flex-nowrap items-center gap-1 my-2 text-white cursor-pointer bg-emerald-700 hover:bg-emerald-900 rounded-xl p-3 duration-300'>
                <IoCopy/> 
                <div>Copy payment information</div>
              </div>    
            </div>
        </div>    
      </div>
    </ReactModal>
  )
}
