import PropTypes from 'prop-types';
import { BsBook } from 'react-icons/bs';
import {BsCurrencyDollar} from 'react-icons/bs';
const Card = ({ card ,handleAddCourseName}) => {
    const { cover_image, title, description, price, credit } = card
    return (
        <div>
            <div className='card max-w-[320px]  bg-base-100 shadow-xl'>
                <figure className='m-1'>
                    <img src={cover_image} className='max-w-[480px] max-h-[150px]' alt="image" />
                </figure>
                <div className='card-body h-[310px]'>
                    <h2 className='text-lg font-semibold '>{title}</h2>
                    <p className='text-[#1c1b1b99]'>{description}</p>
                    <div className='flex justify-between'>
                        <div className='flex gap-1 items-center'>
                        <p><BsCurrencyDollar></BsCurrencyDollar></p>
                        <p className='text-[#1c1b1b99]'>Price : {price}</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                        <p><BsBook></BsBook></p>
                        <p className='text-[#1c1b1b99]'>Credit : {credit}hr</p>
                        </div>
                    </div>
                    <button className='btn-primary rounded-lg text-white p-2' onClick={()=>handleAddCourseName(card)}>Select</button>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleAddCourseName:PropTypes.func
}

export default Card;