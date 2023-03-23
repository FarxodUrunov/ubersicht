import { useState } from 'react';
import moment from 'moment';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import BaseFileUpload from '../BaseFileUpload/BaseFileUpload';
import BaseMultiSelect from '../BaseMultiSelect/BaseMultiSelect';
import { machine, statusData } from '../../data/users';
import { create, fetchGet } from '../../api/index'
import { timeFormat } from '../../utils/index'

import './BaseCreateTable.css'


const BaseFormCreate = ({ darkMode, page, setTableData }) => {

    const date = moment().format()
    const currentDate = moment().format('DD.MM.YYYY, HH:mm')
    const time = moment().format('HH:mm')

    const [employeeShortcut, setEmployeeShortcut] = useState('')
    const [maschine, setMaschine] = useState([])
    const [status, setStatus] = useState('')
    const [note, setNote] = useState('')
    const [files, setFiles] = useState('')
    const [valueFile, setValueFile] = useState('')


    const handelEmployee = (e) => {
        setEmployeeShortcut(e.target.value)
    }
    const handleNote = (e) => {
        setNote(e.target.value)
    }

    const handleUpload = (e) => {
        setFiles(e.target.files[0])
        setValueFile(e.target.value)
    }

    const handleSubmit = () => {

        const FormData = require('form-data');
        const formData = new FormData()

        formData.append('file', files)
        formData.append('date', date)
        formData.append('ma', employeeShortcut)
        formData.append('note', note)
        formData.append('status', status.id)
        maschine.map(item => formData.append('machine', item.name))

        create(formData).then(res => {
            if (res.status === 201) {
                setEmployeeShortcut('')
                setMaschine('')
                setStatus('')
                setNote('')
                setFiles('')
                setValueFile('')
                fetchGet(page).then((res) => setTableData(res.data.items))
            }
        })
    }


    const handleClear = () => {
        setEmployeeShortcut('')
        setMaschine('')
        setStatus('')
        setNote('')
        setFiles('')
        setValueFile('')
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
                                value={currentDate + `     Schicht // ${timeFormat(time)}`}
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
                                <Form.Control onChange={handleNote} value={note} as="textarea" rows={3} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='my-2'>
                                <Form.Label className={`fs-5 fw-bold ps-1 text-${darkMode ? 'white' : ''}`} >Bild anhängen</Form.Label>
                                <BaseFileUpload value={valueFile} file={(e) => handleUpload(e)} />
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