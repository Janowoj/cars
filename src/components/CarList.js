import { useSelector } from 'react-redux';


function CarList() {

    const cars = useSelector(state => {
        return state.cars.data;
    });

    const handleCarDelete = (car) => {
        console.log(car);
    };

    const renderedCars = cars.map(car => {
        return (
            <div key={car.id} className='panel'>
                <p>{car.name} - {car.cost}PLN</p>
                <button
                    className='button is-danger'
                    onCLick={() => handleCarDelete(car)}
                >Delete
                </button>
            </div>
        )
    });

    return <div className='car-list'>
        {renderedCars}
        <hr />
    </div>
}

export default CarList;