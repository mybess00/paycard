import React from 'react'
import ReactModal from 'react-modal';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import { QRCodeSVG } from "qrcode.react";

export default function Modal({ name, qrContent, isVisible, handleVisibility }) {
  const closeModal = () => {
    handleVisibility(!isVisible);
  }
  const copyQrContent = () => {
    copy(qrContent);
    toast.success(`Se ha copiado la informacion de pago de ${name}`)
  }
  return (
    <ReactModal isOpen={isVisible} role='dialog' style={{
      content: {
        position: 'absolute',
        top: '40px',
        left: '40px',
        right: '40px',
        bottom: '40px',
        background: '#fff',
        overflow: 'hidden',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        height: '420px',
      }
    }}>
      <div>
        <div className="flex flex-col items-center">
            <button onClick={closeModal} className='place-self-end'>✕</button>
            <h3 className="text-lg font-bold text-center">{name}</h3>
            <div className="flex flex-col items-center my-6">
              <QRCodeSVG value={qrContent} size='200'/>
            </div>
            <button onClick={copyQrContent} className='my-2 bg-emerald-700 hover:bg-emerald-900 rounded-xl p-3 duration-300'>Copy QR content</button>    
        </div>    
      </div>
    </ReactModal>
  )
}
