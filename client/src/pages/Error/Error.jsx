import { Link } from 'react-router-dom';
import img from '../../assets/images/404.gif';
import useTitle from '../../hooks/useTitle';

const Error = () => {
      useTitle('404'); // use title
      
      return (
            <div className='text-center'>
                  <img className='mx-auto pt-12 pb-4' src={img} alt="" />
                  <button className='btn btn-outline border-[#130F49] text-[#130F49] hover:bg-[#130F49] hover:text-white hover:border-none'> <Link to='/'>Back to Home</Link></button>
            </div>
      );
};

export default Error;