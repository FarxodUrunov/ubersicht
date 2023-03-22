import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import BaseFileUpload from '../BaseFileUpload/BaseFileUpload';
import './BaseCreateTable.css'
import BaseMultiSelect from '../BaseMultiSelect/BaseMultiSelect';
import { useState } from 'react';
import moment from 'moment';
import { machine, statusData } from '../../data/users';
import { Button } from 'react-bootstrap';


function BaseFormCreate({ darkMode }) {

    const [currentDate, setCurrentDate] = useState(moment().format('DD.MM.YYYY, HH:mm:ss'))
    const time = moment().format('HH:mm:ss')

    // const [dateAuto, setdateAuto] = useState(date)
    const [employeeShortcut, setEmployeeShortcut] = useState('')
    const [maschine, setMaschine] = useState([])
    const [status, setStatus] = useState('')
    const [note, setNote] = useState('')
    const [noteSave, setNoteSave] = useState('')
    const [files, setFiles] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = (str) => {
        setShow(false)
        if (str === 'cancel') {
            setNote('')
        } else {
            setNoteSave(note)
        }
    };
    const handleShow = () => setShow(true);

    let FormData = require("form-data");
    const formData = new FormData()
    formData.append('file', files[0])
    // useEffect(() => {
    //     formData.append('file', files[0])
    // }, [files])




    const handelEmployee = (e) => {
        setEmployeeShortcut(e.target.value)
    }
    const handleNote = (e) => {
        setNote(e.target.value)
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

        console.log({ employeeShortcut, maschine, status, note, files, formData })

    }


    const handleClear = () => {
        setEmployeeShortcut('')
        setMaschine('')
        setStatus('')
        setNote('')
        setNoteSave('')
        setFiles([])
        // console.log({ dateAuto, employeeShortcut, maschine, status, note, files, formData })

    }

    return (
        <div className='d-flex justify-content-between' >
            <Table className='my-4 ' striped bordered>
                <tbody className={`${darkMode ? '' : 'table_form'}`}>
                    <tr>
                        <td className='bg-secondary' ><h5 className={`my-3 ms-2 text-white`} >Eintrag hinzufügen</h5></td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Label className={`fs-5 fw-bold ps-1 text-${darkMode ? 'white' : ''}`} >Datum / Zeit</Form.Label>
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
                            <Form.Label className={`fs-5 fw-bold ps-1 text-${darkMode ? 'white' : ''}`} >MA Kürzel</Form.Label>
                            <Form.Control onChange={handelEmployee} value={employeeShortcut} size='lg' className='my-2' type="text" placeholder="MA Kürzel:" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='my-2' >
                                <Form.Label className={`fs-5 fw-bold ps-1 text-${darkMode ? 'white' : ''}`} >Maschine</Form.Label>
                                <BaseMultiSelect options={machine} value={maschine} placeholder='Maschine:' select={(e) => setMaschine(e)} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='my-2' >
                                <Form.Label className={`fs-5 fw-bold ps-1 text-${darkMode ? 'white' : ''}`} >Status</Form.Label>
                                {/* <BaseMultiSelect options={statusData} single value={status} placeholder='Status:' select={(e) => setStatus(e)} /> */}
                                <Form className='ps-3 d-flex'>
                                    {
                                        statusData.map(item => {
                                            return (
                                                <div key={item.id} >
                                                    <Form.Check
                                                        className={`text-${darkMode ? 'white' : ''}`}
                                                        inline
                                                        label={item.name}
                                                        name="group1"
                                                        type='radio'
                                                        id={item.id}
                                                        onClick={() => setStatus(item)}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </Form>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <div className='my-2' >
                                <Form.Label className={`fs-5 fw-bold ps-1 text-${darkMode ? 'white' : ''}`} >Notiz</Form.Label>
                                <button className='btn_note' onClick={handleShow} >
                                    <Form.Control className='textarea_disabled' value={noteSave} as="textarea" rows={3} disabled placeholder='Notiz' />
                                </button>


                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Notiz</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Control onChange={handleNote} value={note} as="textarea" rows={3} />
                                        </Form.Group>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={() => handleClose('cancel')}>
                                            Abbruch
                                        </Button>
                                        <Button variant="primary" onClick={() => handleClose('save')}>
                                            Speichern
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='my-2'>
                                <Form.Label className={`fs-5 fw-bold ps-1 text-${darkMode ? 'white' : ''}`} >Bild anhängen</Form.Label>
                                <BaseFileUpload value={files[0]} file={(file) => setFiles(file)} />
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