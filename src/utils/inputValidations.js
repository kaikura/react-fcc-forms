/*-------------------------------------------------------------------
|  🐼 Input Validators 
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const numerodirisultati = {
  name: 'numerodirisultati',
  label: 'Numero di Risultati',
  type: 'number',
  id: 'num_result',
  placeholder: '1-100',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const volumidiricerca = {
  name: 'volumidiricerca',
  label: 'Volumi di Ricerca',
  id: 'vol_rsch',
  type: 'number',

  placeholder: '1-1000',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const mediabestseller = {
  name: 'mediabestseller',
  label: 'Media Best Seller',
  type: 'number',
  id: 'num_result',
  placeholder: '1-100',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const numeromediodirecensioni = {
  name: 'numeromediodirecensioni',
  label: 'Numero di Recensioni',
  type: 'number',
  id: 'num_rew',
  placeholder: '1-100',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const prezzomedio = {
  name: 'prezzomedio',
  label: 'Prezzo Medio',
  type: 'number',
  id: 'price',
  placeholder: '1-100',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
export const presenzakeyword = {
  name: 'presenzakeyword',
  label: 'Presenza Keyword nel titolo',
  type: 'number',
  id: 'num_result',
  placeholder: '1-100',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
export const numerodiautoriindipendenti = {
  name: 'numerodiautoriindipendenti',
  label: 'Numero di Autori Indipendenti',
  type: 'number',
  id: 'num_auth',
  placeholder: '1-100',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
export const numerodipubblicazioni = {
  name: 'numerodipubblicazioni',
  label: 'Numero di Pubblicazioni recenti',
  type: 'number',
  id: 'num_public',
  placeholder: '1-100',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
