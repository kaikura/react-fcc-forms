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
  comment: 'Numero di Risultati : Numero di libri presenti in questa keyword',
  placeholder: '250-5.000',
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
  comment: 'Volume di Ricerca: Numero di ricerche stimate mensili',

  placeholder: '500-3.000',
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
  comment: "Media best seller: Media best seller's rank dei libri in prima pagina",

  placeholder: '50.000 - 250.000',
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
  comment: 'Numero di recensioni: Media di tutte le recensioni dei libri in prima pagina',

  placeholder: '0-500',
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
  placeholder: '1-20',
  comment: 'Prezzo medio: Prezzo medio dei libri in prima pagina  ',

  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
export const presenzakeyword = {
  name: 'presenzakeyword',
  label: 'Keyword nel titolo',
  type: 'number',
  id: 'num_result',
  placeholder: '1-100',
  comment: 'Keyword nel titolo: Quanti libri in prima pagina hanno presente nel titolo o sottotitolo la keyword che stai cercando',

  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
export const numerodiautoriindipendenti = {
  name: 'numerodiautoriindipendenti',
  label: 'Autori Indipendenti',
  type: 'number',
  id: 'num_auth',
  placeholder: '1-50',
  comment: 'Autori indipendenti: Numero di libri di autori indipendenti in prima pagina',

  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
export const numerodipubblicazioni = {
  name: 'numerodipubblicazioni',
  label: 'Pubblicazioni recenti',
  type: 'number',
  id: 'num_public',
  placeholder: '1-50',
  comment: 'Pubblicazioni recenti: Numero di libri pubblicati entro massimo un anno in prima pagina',

  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
