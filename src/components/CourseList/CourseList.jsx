import PropTypes from 'prop-types';
const CourseList = ({course}) => {
    const {title}=course
    return (
        <div className='p-3'>
            <li className='text-[#1c1b1b99] list-decimal'>{title}</li>
        </div>
    );
};
CourseList.propTypes = {
    course: PropTypes.object
}
export default CourseList;