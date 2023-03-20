
import Multiselect from 'multiselect-react-dropdown';
import "./BaseMultiSelect.css"

const BaseMultiSelect = ({ single, select, placeholder, value }) => {


    const options = [{ name: 'Option 1', id: 1 }, { name: 'Option 2️', id: 2 }, { name: 'Option 3', id: 3 }, { name: 'Option 4', id: 4 }, { name: 'Option 5', id: 5 }]

    const handleSelect = (e) => {
        console.log(e)
    }

    return (
        <>
            <Multiselect
                className='select_cus'
                style={{ borderRadius: '50px' }}
                singleSelect={single}
                options={options} // Options to display in the dropdown
                selectedValues={value} // Preselected value to persist in dropdown
                onSelect={select} // Function will trigger on select event
                // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
                placeholder={placeholder}
            />
        </>
    )
}
export default BaseMultiSelect