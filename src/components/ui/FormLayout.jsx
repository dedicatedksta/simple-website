import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import PhoneInput from 'react-phone-number-input'

const FormLayout = ({popup}) => {
  
  const [name,setName]=useState("")
  const [phone,setPhone]=useState("")
  const [msg,setMsg]=useState({type:"",body:""})

  function handleClick(e){
    e.preventDefault()
    const re=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    // console.log(phone)
    // console.log(re.test(phone))
    if (name!=="" && phone.length===12 && re.test(phone)){
      setMsg({type:"success",body:"Вы успешно записались!"})
      const url=`https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.REACT_APP_TELEGRAM_CHAT_ID}&text=Заявка от нового пользователя:%0A -Имя ${name}%0A -Номер ${phone}`
      // console.log(url)
      const api=new XMLHttpRequest()
      api.open("GET",url,true)
      api.send()
    }else{
      setMsg({type:"error",body:"Заполните или исправьте поля."})
    }
  }

  return <form onClick={(e)=>e.stopPropagation()} className={`${popup? "z-20 max-w-xs md:max-w-lg bg-white box-content py-6 px-4 md:py-10 md:px-8 flex justify-center flex-col items-center" : "max-w-2xl mx-auto text-center mt-32"}`}>
  <h1 className="mb-6 text-2xl md:text-4xl  font-bold">Записаться на пробное занятие</h1>
  <div className="flex flex-col mx-auto mb-6 w-[90%]">
    <span className=" self-start text-lg">Имя</span>
    <input className="w-full rounded-md h-12 md:h-16 px-4 border-2 border-gray-300" type="text" value={name} required={true} onChange={e => setName(e.target.value)} placeholder="Алексей Свирок" />
  </div>
  <div className="flex flex-col mx-auto w-[90%]">
    <span className="self-start text-lg">Телефон</span>
    <PhoneInput
    className="w-full rounded-md h-12 md:h-16 px-4 border-2 border-gray-"
    placeholder="Enter phone number"
    international
    defaultCountry="RU"
    value={phone}
    onChange={setPhone}/>
  </div>
  <button onClick={handleClick} className=" mt-6 mx-auto border-2 border-black bg-black text-white w-[90%]  rounded-3xl md:py-4 md:px-11 py-2 px-6 hover:bg-white hover:text-black">Записаться</button>
  <AnimatePresence>
    {msg.type&&
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className={`mx-auto mt-2 py-3 rounded-md w-[90%] ${msg.type==="error"?"bg-red-500":"bg-green-500"} text-white`}>
      {msg.body}
    </motion.div>}
  </AnimatePresence>
</form>
};

export default FormLayout;
