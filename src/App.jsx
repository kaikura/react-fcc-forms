/*-------------------------------------------------------------------
|  🐼 React FC App
|
|  🐯 Purpose: RENDERS REACT APP
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { Navigation } from './components'
import { Form } from './Form'
import {Banner} from './components'
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <div>
      <Navigation />
      <Banner/>
      <Form />
      <Analytics />
    </div>
  )
}

export default App
