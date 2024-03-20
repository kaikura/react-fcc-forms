/*-------------------------------------------------------------------
|  🐼 React FC Form
|
|  🐯 Purpose: RENDERS FORM CONTEXT AND INPUTS
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { Input } from './components'
import { FormProvider, useForm } from 'react-hook-form'
import {
  numerodirisultati,
  volumidiricerca,
  mediabestseller,
  numeromediodirecensioni,
  prezzomedio,
  numerodiautoriindipendenti,
  numerodipubblicazioni,
  presenzakeyword


} from './utils/inputValidations'
import { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'

export const Form = () => {
  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const[result, setResult] = useState(0);
  const [comment,setComment] = useState("")

  const onSubmit = methods.handleSubmit(data => {

    var votoris = 0;
    var votovolumidiri = 0;
    var votobestsell = 0;
    var votorec= 0;
    var votoprice= 0;
    var votonumaut= 0;
    var numerodipub= 0;
    var votok= 0;


    if(data.numerodirisultati > 5000){
       votoris = 0;
    }
    if(data.numerodirisultati == 0){
      votoris = 0;
   }
    if(data.numerodirisultati >250 && data.numerodirisultati <= 3000){
       votoris = parseInt(Math.round(5+(((data.numerodirisultati-250)*(10-5))/(3000-250))));
    }
    if(data.numerodirisultati <= 250 && data.numerodirisultati > 0){
       votoris = parseInt(Math.round(1+(((data.numerodirisultati)*(4-1))/(250))));
    }
    if(data.numerodirisultati <= 5000 && data.numerodirisultati > 3000){
       votoris = parseInt(Math.round(9+(((data.numerodirisultati-3000)*(2-9))/(5000-3000))));
    }
    ///////

    if(data.volumidiricerca > 3000){
       votovolumidiri = 10;
    }
    if(data.volumidiricerca <= 3000 && data.volumidiricerca >=2000){
       votovolumidiri = parseInt(Math.round(7+(((data.volumidiricerca-2000)*(10-7))/(3000-2000))));
    }
    if(data.volumidiricerca <= 2000 && data.volumidiricerca >=500){
       votovolumidiri = parseInt(Math.round(4+(((data.volumidiricerca-500)*(7-5))/(2000-500))));
    }
        
    if(data.volumidiricerca < 500){
       votovolumidiri = parseInt(Math.round(((data.volumidiricerca)*(4))/(500)));
    }
    ///////
    if(data.mediabestseller < 50000){
       votobestsell = 10;
    }
    if(data.mediabestseller >= 50000 && data.mediabestseller <=100000) {
       votobestsell = parseInt(Math.round(10+(((data.mediabestseller-50000)*(5-10))/(100000-50000))));
    }
    if(data.mediabestseller > 100000 && data.mediabestseller <=250000) {
       votobestsell = parseInt(Math.round(5+((data.mediabestseller-100000)*(1-5))/(250000-100000)));
    }
    if(data.mediabestseller > 250000) {
       votobestsell = 0;
    }
    ///////
    if(data.numeromediodirecensioni >= 0 && data.numeromediodirecensioni <=200) {
       votorec= parseInt(Math.round(2+(((data.numeromediodirecensioni)*(10-2))/(200))));
    }
    if(data.numeromediodirecensioni >= 200 && data.numeromediodirecensioni <=400) {
       votorec= parseInt(Math.round(10+((data.numeromediodirecensioni-200)*(2-10))/(400-200)));
    }
    if(data.numeromediodirecensioni > 400) {
       votorec= 0;
    }
    ////////
    if(data.prezzomedio <6) {
       votoprice= 0;
    }
    if(data.prezzomedio >10) {
       votoprice= 10;
    }
    if(data.prezzomedio >= 6 && data.prezzomedio <8) {
       votoprice= parseInt(Math.round(1+(((data.prezzomedio-6)*(5-1))/(8-6))));
    }
    if(data.prezzomedio >= 8 && data.prezzomedio <=10) {
       votoprice= parseInt(Math.round(5+(((data.prezzomedio-8)*(9-5))/(10-8))));
    }
    //////////
    if(data.numerodiautoriindipendenti >= 5 && data.numerodiautoriindipendenti <=10) {
       votonumaut= parseInt(Math.round(6+(((data.numerodiautoriindipendenti-5)*(9-6))/(10-5))));
    }
    if(data.numerodiautoriindipendenti >= 2 && data.numerodiautoriindipendenti <5) {
       votonumaut= parseInt(Math.round(1+(((data.numerodiautoriindipendenti-2)*(6-1))/(5-2))));
    }
    if(data.numerodiautoriindipendenti >10) {
       votonumaut= 10;
    }
    if(data.numerodiautoriindipendenti <2) {
       votonumaut= 0;
    }
    ///////////
    if(data.numerodipubblicazioni >= 10 && data.numerodipubblicazioni <=15) {
       numerodipub= parseInt(Math.round(6+(((data.numerodipubblicazioni-10)*(9-6))/(15-10))));
    }
    if(data.numerodipubblicazioni >= 2 && data.numerodipubblicazioni <10) {
       numerodipub= parseInt(Math.round(1+(((data.numerodipubblicazioni-2)*(6-1))/(10-2))));
    }
    if(data.numerodipubblicazioni > 15) {
       numerodipub= 10;
    }
    if(data.numerodipubblicazioni < 2) {
       numerodipub= 0;
    }

    //////////
    if(data.presenzakeyword >= 10 && data.presenzakeyword <=20) {
       votok= parseInt(Math.round(5+(((data.presenzakeyword-10)*(9-5))/(20-10))));
    }
    if(data.presenzakeyword >= 5 && data.presenzakeyword <10) {
       votok= parseInt(Math.round(1+(((data.presenzakeyword-5)*(5-1))/(10-5))));
    }
    if(data.presenzakeyword > 20) {
       votok= 10;
    }
    if(data.presenzakeyword < 5) {
       votok= 0;
    }

    /////////    
    console.log(data)
    setSuccess(true)
    var total = (votoris+votovolumidiri+votobestsell+votorec+votoprice+votonumaut+numerodipub+votok)
    if(total>=0 && total <=20){
      setComment("Scappa da qui!")
    }
    if(total>20 && total <=40){
      setComment("Ci penserei bene prima di pubblicare qui...")
    }
    if(total>40 && total <=60){
      setComment("Una buona keywork")
    }
    if(total>60 && total <=80){
      setComment("Ottimo risultato, da pubblicare assolutamente!")
    }
    setResult(total)
  })


  return (
    <div className='bg-violet-500'>
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container"
      >
        <div className="py-16 grid gap-5 md:grid-cols-2">
          <Input {...numerodirisultati} />
          <Input {...volumidiricerca} />
          <Input {...mediabestseller} />
          <Input {...numeromediodirecensioni} />
          <Input {...prezzomedio} />
          <Input {...numerodiautoriindipendenti} />
          <Input {...numerodipubblicazioni} />
          <Input {...presenzakeyword} />
          <div className='grid-cols-1 grid-rows-3 grid col-span-2 items-center justify-center'>
          <button
            onClick={onSubmit}
            className="p-5 rounded-md bg-yellow-400 font-semibold text-white items-center hover:bg-yellow-500"
          >
            Calcola il punteggio
          </button>
          {success && (
            <>
            <p className="text-6xl text-white font-semibold justify-self-center mt-4">
               {result}
            </p>
            <p className='text-3xl text-white font-semibold justify-self-center'>{comment}</p>
            </>
          )}

        </div>
        </div>

      </form>
    </FormProvider>
    </div>
  )
}
