import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

const CardsDetails = ({ selectedCourse,totalCredit,remainingHour,totalCost}) => {
    return (
        <div className="w-full md:w-2/4 lg:w-1/4 p-3 bg-slate-50 rounded-lg">
                <div className='h-[60px]'>
                <h2 className='text-[#2F80ED] text-lg font-semibold'>Credit Hour Remaining {remainingHour} hr</h2>                
                </div>
                <hr />
                <div className='mb-4'>
                <h2 className='text-xl font-semibold mb-2'>Course Name</h2>
                    <ol>
                        {
                            selectedCourse.map((course) => 
                            
                             <CourseList  key={course.id}  course={course}></CourseList>)
                        }
                    </ol>
                </div>
                <hr />
                <div className='mb-4'>
                    <h2 className='font-medium text-[#1c1b1bcc]'>Total Credit Hour : {totalCredit}</h2>
                </div>
                <hr />
                <div>
                    <h2 className='font-medium text-[#1c1b1bcc]'>Total Price : {totalCost} USD</h2>
                </div>
        </div>
    );
};
CardsDetails.propTypes = {
    selectedCourse: PropTypes.array,
    remainingHour:PropTypes.number,
    totalCredit:PropTypes.number,
    totalCost:PropTypes.number
}

export default CardsDetails;