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

function App() {
  return (
    <div>
      <Navigation />
      <Banner/>
      <Form />
    </div>
  )
}

export default App
