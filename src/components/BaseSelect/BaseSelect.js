import Form from 'react-bootstrap/Form';

const data = [
    { id: 1, name: 'One' },
    { id: 2, name: 'Two' },
    { id: 3, name: 'Three' }
]

const BaseSelect = ({ size = 'lg', select }) => {

    const onClick = (e) => {
        console.log(e.target.value)
    }

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