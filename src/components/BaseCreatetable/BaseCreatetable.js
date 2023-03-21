import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import BaseFileUpload from '../BaseFileUpload/BaseFileUpload';
import './BaseCreateTable.css'
import BaseMultiSelect from '../BaseMultiSelect/BaseMultiSelect';
import { useState } from 'react';
import moment from 'moment';


function BaseFormCreate({ darkMode }) {

    const [currentDate, setCurrentDate] = useState(moment().format('DD.MM.YYYY, HH:mm:ss'))
    const time = moment().format('HH:mm:ss')

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

    const dateOnline = function () {
        setCurrentDate(moment().format('DD.MM.YYYY, HH:mm:ss'))
    }

    setInterval(dateOnline, 1000)

    const timeFormat = function () {
        if (time >= '06:00:00' && time <= '14:30:00') {
            return 'F1'
        } else if (time >= '14:30:01' && time <= '22:30:00') {
            return 'S2'
        } else {
            return 'N3'
        }
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
                        <td className='bg-secondary' ><h5 className={`my-3 ms-2 text-${darkMode ? 'white' : 'dark'}`} >Add entry</h5></td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Control
                                size='lg'
                                className='my-2 '
                                value={currentDate + `     Schicht // ${timeFormat()}`}
                                type="text"
                                placeholder="Automatically date"
                                disabled
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Control onChange={handelEmployee} value={employeeShortcut} size='lg' className='my-2' type="text" placeholder="MA Kürzel:" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='my-2' >
                                <BaseMultiSelect value={maschine} placeholder='Maschine:' select={(e) => setMaschine(e)} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='my-2' >
                                <BaseMultiSelect value={status} placeholder='Status:' select={(e) => setStatus(e)} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='my-2' >
                                <BaseMultiSelect value={note} placeholder='Notiz:' select={(e) => setNote(e)} />
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
                                <button onClick={handleClear} className={`px-2 py-1 me-2 ${darkMode ? 'btn_b-dark' : 'btn_b'}`} >Abbruch</button>
                                <button onClick={handleSubmit} className={`px-2 py-1 ${darkMode ? 'btn_b-dark' : 'btn_b'}`} >Speichern</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default BaseFormCreate;