import { FC } from 'react'
import Header from './sections/Header/Header'
import Main from './sections/Main/Main'
import { Aside } from './sections/Aside/Aside'

const App: FC = () => {
  return (
    <>
      <Header />
      <div className='content__wrap'>
        <Main />
        <Aside />
      </div>
    </>
  )
}

export default App