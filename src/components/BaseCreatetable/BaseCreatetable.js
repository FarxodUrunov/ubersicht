import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import BaseFileUpload from '../BaseFileUpload/BaseFileUpload';
import './BaseCreateTable.css'
import BaseMultiSelect from '../BaseMultiSelect/BaseMultiSelect';
import { useState } from 'react';
import moment from 'moment';


function BaseFormCreate({ darkMode }) {
    const date = moment().format()

    // const [dateAuto, setdateAuto] = useState(date)
    const [employeeShortcut, setEmployeeShortcut] = useState('')
    const [maschine, setMaschine] = useState('')
    const [status, setStatus] = useState('')
    const [note, setNote] = useState('')
    const [files, setFiles] = useState([])

    // const formData = new FormData()
    // useEffect(() => {
    //     formData.append('file', files[0])
    // }, [files])



    const handelEmployee = (e) => {
        setEmployeeShortcut(e.target.value)
    }
    const handleSubmit = () => {
        // formData.append('file', files[0])
        console.log({ employeeShortcut, maschine, status, note, files })

    }

    const handleClear = () => {
        setEmployeeShortcut('')
        setMaschine('')
        setStatus('')
        setNote('')
        setFiles([])
        // console.log({ dateAuto, employeeShortcut, maschine, status, note, files, formData })
    }

    return (
        <div className='d-flex justify-content-between' >
            <Table className='my-4 ' striped bordered>
                <tbody className={`${darkMode ? '' : 'table_form'}`}>
                    <tr>
                        <td><h3 className={`my-3 ms-2 text-${darkMode ? 'white' : 'dark'}`} >Add entry</h3></td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Control size='lg' className='my-2 ' defaultValue={moment(date).format('MMMM Do YYYY, h:mm:ss a')} type="text" placeholder="Automatically date" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Control onChange={handelEmployee} value={employeeShortcut} size='lg' className='my-2' type="text" placeholder="Employee shortcut" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='my-2' >
                                <BaseMultiSelect value={maschine} placeholder='Maschine select' select={(e) => setMaschine(e)} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='my-2' >
                                <BaseMultiSelect value={status} placeholder='Status select' select={(e) => setStatus(e)} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='my-2' >
                                <BaseMultiSelect value={note} placeholder='Notiz select' select={(e) => setNote(e)} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='my-2'>
                                <BaseFileUpload file={(file) => setFiles(file)} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='d-flex justify-content-end'>
                                <button onClick={handleClear} className={`px-2 py-1 me-2 bg-transparent ${darkMode ? 'btn_b-dark' : 'btn_b'}`} >Abbruch</button>
                                <button onClick={handleSubmit} className={`px-2 py-1 bg-transparent ${darkMode ? 'btn_b-dark' : 'btn_b'}`} >Speichern</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div className='ms-3 mt-4'>
                <span className='text_info' >
                    <h5>Schicht</h5>
                    <p className='my-0' ><b>F1</b>-{'>'} 06:00-14:30</p>
                    <p className='my-0' ><b>S2</b>-{'>'} 14:00-22:30</p>
                    <p className='my-0' ><b>N3</b>-{'>'} 22:00-06:30</p>
                </span>
            </div>
        </div>
    );
}

export default BaseFormCreate;