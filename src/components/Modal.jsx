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
    <ReactModal isOpen={isVisible} overlayClassName='ReactModal__Overlay' role='dialog' className='modal' style={{
      content: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '10px 28px',
        height: 'fit-content',
        width: 'fit-content',
        border: 'none',
        boxShadow: '0 0 15px 8px rgba(0, 0, 0, 0.1)',
        id: {id},
      }
    }}>
      <div>
        <div className="flex flex-col items-center dark:bg-slate-800">
            <button onClick={closeModal} className='place-self-end bg-slate-900 hover:bg-black duration-200 text-white dark:text-black dark:bg-slate-300 dark:hover:bg-slate-500 rounded-full py-1 px-2 mr-[-15px]'>✕</button>
            <div className='flex flex-col items-center p-4'>
              <h3 className="text-lg font-bold text-center dark:text-white">{name}</h3>
              <div className="flex flex-col items-center my-6">
                <QRCodeSVG value={qrContent} size='200'
                  imageSettings={{
                    src: `/images/icons/${id}.svg`,
                    x: undefined,
                    y: undefined,
                    height: 36,
                    width: 36,
                    excavate: true,
                  }}/>
              </div>
              <div onClick={copyQrContent} className='flex flex-row flex-nowrap items-center gap-1 my-2 text-white cursor-pointer bg-slate-900 hover:bg-black dark:text-black dark:bg-slate-300 dark:hover:bg-slate-500 rounded-xl px-4 py-1 duration-300'>
                <IoCopy/> 
                <div>Copy</div>
              </div>    
            </div>
        </div>    
      </div>
    </ReactModal>
  )
}
