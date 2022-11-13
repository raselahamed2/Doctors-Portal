import bg from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <header style={{ backgroundImage: `url(${bg})` }} className="hero my-32">
            <div  className="hero-content flex-col lg:flex-row-reverse ml-11">
                <img alt='' src={chair} className=" rounded-lg lg:w-1/2 shadow-2xl" />
                <div className=' mx-28'>
                <DayPicker
                mode="single" 
                selected={selectedDate}
                onSelect={setSelectedDate}
                />
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;