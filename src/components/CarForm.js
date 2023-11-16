import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost } from "../store"

function CarForm() {

    const dispatch = useDispatch();
    const { name, cost } = useSelector(state => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    });

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
    }

    const handleCostChange = (event) => {
        dispatch(changeCost(parseInt(event.target.value) || 0));
    }

    return <div className="car-form panel">
        <h4 className="subtitle is-3">Add Car
            <form>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input
                            className="input is-expended"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>

                    <div className="field">
                        <label className="label">Cost</label>
                        <input
                            className="input is-expended"
                            value={cost || ''}
                            onChange={handleCostChange}
                            type='number'
                        />
                    </div>
                </div>
            </form>
        </h4>
    </div>;
}
export default CarForm;