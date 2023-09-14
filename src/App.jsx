
import './App.css'
import Cards from './components/Cards/Cards'
import CardsDetails from './components/ShowCardDetails/CardsDetails'

function App() {

  return (
    <>
      <h1 className='text-3xl font-semibold text-center mt-6'>Course Registration</h1>
      <div className='flex mx-6 flex-col md:flex-row gap-4'>
         <Cards></Cards>
        <CardsDetails></CardsDetails>
      </div>
      
    </>
  )
}

export default App
