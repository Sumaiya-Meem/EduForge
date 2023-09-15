
import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cards from './components/Cards/Cards'
import CardsDetails from './components/ShowCardDetails/CardsDetails'

function App() {
  const [selectedCourse, setSelectedCourse] = useState([])
  const [totalCredit, setTotalCredit] = useState(0)
  const [remainingHour, setRemainingHour] = useState(0)

  const handleAddCourseName = (card) => {

    const isCourseNameExist = selectedCourse.find((item) => item.id == card.id)

    let count = parseInt(card.credit);

    if (isCourseNameExist) {
      toast.warn("Already select this course", {
        position: "top-center"
      });
    }
    else {
      selectedCourse.forEach((item) => {
        count = parseInt(count) + parseInt(item.credit);
      });
      // console.log(count)
      const remaining = 20 - count;
      if (remaining < 0) {
        toast.warn("Remaining hour cross the range", {
          position: "top-center"
        });
      }
      else {
        setRemainingHour(remaining);
        setTotalCredit(count)
        const newSelectedCourse = [...selectedCourse, card]
        setSelectedCourse(newSelectedCourse);
      }
    }

  }

  return (
    <>
      <h1 className='text-3xl font-semibold text-center my-6'>Course Registration</h1>
      <div className='flex mx-6 flex-col md:flex-row gap-4'>
        <Cards handleAddCourseName={handleAddCourseName}></Cards>

        <CardsDetails selectedCourse={selectedCourse} totalCredit={totalCredit} remainingHour={remainingHour}></CardsDetails>
        <ToastContainer />
      </div>

    </>
  )
}

export default App
