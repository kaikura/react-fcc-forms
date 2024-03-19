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

  const onSubmit = methods.handleSubmit(data => {
    if(data.numerodirisultati > 5000){
      const votoris = 0;
    }
    if(data.numerodirisultati >250 && data.numerodirisultati < 3000){
      const votoris = (5+(((data.numerodirisultati-250)(10-5))/(3000-250)));
    }
    if(data.numerodirisultati <= 250 && data.numerodirisultati >= 0){
      const votoris = (((data.numerodirisultati)*(5))/(250));
    }
    if(data.numerodirisultati <= 5000 && data.numerodirisultati >= 3000){
      const votoris = (((data.numerodirisultati)*(5))/(5000-3000));
    }
    ///////

    if(data.volumidiricerca > 3000){
      const votovolumidiri = 10;
    }
    if(data.volumidiricerca <= 3000 && data.volumidiricerca >=2000){
      const votovolumidiri = 7*(((data.volumidiricerca)*(10-7))/(3000-2000));
    }
    if(data.volumidiricerca <= 2000 && data.volumidiricerca >=500){
      const votovolumidiri = 4*(((data.volumidiricerca)*(7-4))/(2000-500));
    }
        
    if(data.volumidiricerca < 500){
      const votovolumidiri = (((data.volumidiricerca)*(4))/(500));
    }
    
    if(data.mediabestseller){
      const votobestsell = 7*(((data.mediabestseller)*(10-7))/(3000-2000));
    }
    
    const numeromediodirec= normalize(data.numeromediodirecensioni);
    const prezzomed= normalize(data.prezzomedio);
    const numerodiautoriindipenden= normalize(data.numerodiautoriindipendenti);
    const numerodipub= normalize(data.numerodipubblicazioni);
    const presenzakeyw= normalize(data.presenzakeyword);    
    
    console.log(data)
    setSuccess(true)
    setResult(0)
  })


  const normalize = (data) => {

    const val = parseInt(data);
    console.log(val);

  }

  return (
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
          <button
            onClick={onSubmit}
            className="p-5 rounded-md bg-blue-600 font-semibold text-white items-center gap-1 hover:bg-blue-800"
          >
            Calcola il punteggio
          </button>
          <div className="mt-5">
          {success && (
            <p className="text-5xl font-semibold text-green-500 mb-5 flex items-center gap-1">
              <BsFillCheckSquareFill /> {result}
            </p>
          )}

        </div>
        </div>

      </form>
    </FormProvider>
  )
}
