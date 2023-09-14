import PropTypes from 'prop-types';
const Card = ({ card }) => {
    const { cover_image, title, description, price, credit } = card
    return (
        <div>
            <div className='card max-w-[320px] max-h-[430px] bg-base-100 shadow-xl'>
                <figure className='m-1'>
                    <img src={cover_image} className='max-w-[480px] max-h-[150px]'  alt="image" />
                    </figure>
                <div className='card-body'>
                    <h2 className='text-lg font-semibold'>{title}</h2>
                    <p>{description}</p>
                    <div className='flex justify-between'> 
                        <p>Price : {price}</p>
                        <p>Credit : {credit}hr</p>
                    </div>
                    <button className='btn-primary rounded-lg text-white p-2'>Select</button>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card;