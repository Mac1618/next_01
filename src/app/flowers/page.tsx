"use client";
import React, {useState} from 'react'
import { useRouter } from 'next/navigation';

export default function FlowersPage() {
  // next router 
  const router = useRouter();

  const [page, setPage] = useState('');
  const handleFlowerPage = () => {
    if(page == '1') {
      setPage("")
      return router.push('/flower01')
    }
    if(page == '2') {
      setPage("")
      return  router.push('/flower02')
    }
    if(page == '3') {
      setPage("")
      return  router.push('/flower03')
    }
    if(page == '4') {
      setPage("")
      return  router.push('/flower04')
    }
    if(page == '5') {
      setPage("")
      return  router.push('/flower05')
    }
    if(page == '6') {
      setPage("")
      return  router.push('/flower06')
    }
    
  }

  return (
    <div className='flowers-component'>
      <div>
        <img 
        className='hbty-img'
          src="https://thumbs.dreamstime.com/z/happy-birthday-hand-drawn-lettering-card-modern-brush-calligraphy-vector-illustration-typography-design-print-greetings-shirt-116100328.jpg?w=768" 
          alt="happy-birthday-img" />

        <button 
        className='random-btn'
        onClick={() => { 
          const randomNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
          setPage(`${randomNum}`)
          handleFlowerPage()
      }}>Random</button>

        <span className='btns'>
          <button 
            onClick={() => { 
              setPage("1") 
              handleFlowerPage()
          }}>1</button>

          <button 
            onClick={() => { 
              setPage("2") 
              handleFlowerPage()
          }}>2</button>

          <button 
            onClick={() => { 
              setPage("3") 
              handleFlowerPage()
          }}>3</button>

          <button 
            onClick={() => { 
              setPage("4") 
              handleFlowerPage()
          }}>4</button>

          <button 
            onClick={() => { 
              setPage("5") 
              handleFlowerPage()
          }}>5</button>

          <button 
            onClick={() => { 
              setPage("6") 
              handleFlowerPage()
          }}>6</button>
        </span>
      </div>
    </div>
  )
}
