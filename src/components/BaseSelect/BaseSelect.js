import Form from 'react-bootstrap/Form';

const BaseSelect = ({ size = 'lg', select }) => {


    return (
        <Form.Select onChange={(e) => select(e.target.value)} size={size} aria-label="Default select example">
            <option>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
        </Form.Select>
    )
}

export default BaseSelect;