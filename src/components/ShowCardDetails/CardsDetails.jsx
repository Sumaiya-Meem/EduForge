import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

const CardsDetails = ({ selectedCourse }) => {
    return (
        <div className="w-1/4 border-yellow-200 border-2 p-2">
                <div className='h-[60px]'>
                <h2 className='text-[#2F80ED] text-lg font-semibold'>Credit Hour Remaining  hr</h2>                
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
                <div>
                    <h2 className='font-medium text-[#1c1b1bcc]'>Total Credit Hour :</h2>
                </div>
        </div>
    );
};
CardsDetails.propTypes = {
    selectedCourse: PropTypes.array
}

export default CardsDetails;