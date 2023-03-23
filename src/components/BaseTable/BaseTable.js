import { useState } from 'react';
import { Modal, Button, Form, Table, Badge } from 'react-bootstrap';
import { Fragment } from 'react';
import moment from 'moment';
import { timeFormat } from '../../utils/index'
import { url } from '../../api/index'

import './BaseTable.css'


const BaseTable = ({ data, darkMode }) => {
    const [iconPosDatum, setIconPosDatum] = useState(true)
    const [iconPosUhrzeit, setIconPosUhrzeit] = useState(true)
    const [iconPosSchicht, setIconPosSchicht] = useState(true)
    const [iconPosStatus, setIconPosStatus] = useState(true)
    const [iconPosMa, setIconPosMa] = useState(true)
    const [iconPosMashine, setIconPosMashine] = useState(true)
    const [show, setShow] = useState(false);
    const [noteComment, setNoteComment] = useState('')
    const [noteCommentSave, setNoteCommentSave] = useState('')

    const statusColor = (status) => {
        if (status === 'info') {
            return ''
        } else if (status === 'anweisung') {
            return 'warning'
        } else {
            return 'danger'
        }

    }

    const handelSort = (str) => {
        if (str === 'datum') setIconPosDatum(!iconPosDatum)
        if (str === 'uhrzeit') setIconPosUhrzeit(!iconPosUhrzeit)
        if (str === 'schicht') setIconPosSchicht(!iconPosSchicht)
        if (str === 'status') setIconPosStatus(!iconPosStatus)
        if (str === 'ma') setIconPosMa(!iconPosMa)
        if (str === 'mashine') setIconPosMashine(!iconPosMashine)
    }

    const handleClose = (str) => {
        setShow(false)
        if (str === 'cancel') {
            setNoteCommentSave('')
        } else {
            setNoteCommentSave(noteComment)
        }
    };

    const handleShow = () => setShow(true);

    const dateDay = (date) => {
        if (moment(date).format('dddd') === 'Monday') return 'Mo'
        if (moment(date).format('dddd') === 'Tuesday') return 'Di'
        if (moment(date).format('dddd') === 'Wednesday') return 'Mi'
        if (moment(date).format('dddd') === 'Thursday') return 'Do'
        if (moment(date).format('dddd') === 'Friday') return 'Fr'
        if (moment(date).format('dddd') === 'Saturday') return 'Sa'
        if (moment(date).format('dddd') === 'Sunday') return 'So'
    }
    const onDate = (date) => {
        return moment(date).format('DD.MM.YYYY')
    }
    const onHour = (date) => {
        return moment(date).format('HH:mm')
    }

    return (
        <>
            <Table variant={`${darkMode ? 'dark' : 'with'}`} className='my-3 border border-white' responsive="sm" striped bordered hover>
                <thead className='bg_table_header text-white' >
                    <tr>
                        <th>
                            <div className='d-flex align-items-center justify-content-between' >
                                <span>Datum</span>
                                <span role="button" onClick={() => handelSort('datum')} className={`d-flex align-items-center ${iconPosDatum ? 'icon_position' : ''}`} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-triangle-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z" />
                                    </svg>
                                </span>
                            </div>
                        </th>
                        <th>
                            <div className='d-flex align-items-center justify-content-between' style={{ widows: "100%" }} >
                                <span>Uhrzeit</span>
                                <span role="button" onClick={() => handelSort('uhrzeit')} className={`d-flex align-items-center ${iconPosUhrzeit ? 'icon_position' : ''}`} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-triangle-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z" />
                                    </svg>
                                </span>
                            </div>
                        </th>
                        <th>
                            <div className='d-flex align-items-center justify-content-between' >
                                <span>Schicht</span>
                                <span role="button" onClick={() => handelSort('schicht')} className={`d-flex align-items-center ${iconPosSchicht ? 'icon_position' : ''}`} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-triangle-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z" />
                                    </svg>
                                </span>
                            </div>
                        </th>
                        <th>
                            <div className='d-flex align-items-center justify-content-between' >
                                <span>Status</span>
                                <span role="button" onClick={() => handelSort('status')} className={`d-flex align-items-center ${iconPosStatus ? 'icon_position' : ''}`} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-triangle-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z" />
                                    </svg>
                                </span>
                            </div>
                        </th>
                        <th>
                            <div className='d-flex align-items-center justify-content-between' >
                                <span>MA</span>
                                <span role="button" onClick={() => handelSort('ma')} className={`d-flex align-items-center ${iconPosMa ? 'icon_position' : ''}`} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-triangle-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z" />
                                    </svg>
                                </span>
                            </div>
                        </th>
                        <th>
                            <div className='d-flex align-items-center justify-content-between' >
                                <span>Maschine</span>
                                <span role="button" onClick={() => handelSort('mashine')} className={`d-flex align-items-center ${iconPosMashine ? 'icon_position' : ''}`} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-triangle-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z" />
                                    </svg>
                                </span>
                            </div>
                        </th>
                        <th className='width-not' >Notiz</th>
                        <th>Comment</th>
                        <th>Bild</th>
                    </tr>
                </thead>
                <tbody className={darkMode ? 'bg_tbody-dark' : 'bg_tbody'}>
                    {
                        data.map((item, i) => {
                            return item !== undefined ? (
                                <Fragment key={item?.id + i}>
                                    <tr className={i % 2 === 0 ? 'bg_table_body' : ''} >
                                        <td>{dateDay(item.date)},<br />{onDate(item.date)}</td>
                                        <td>{onHour(item.date)}</td>
                                        <td>{timeFormat(onHour(item.date))}</td>
                                        <td className={`bg-${statusColor(item?.status)}`} >{item.status}</td>
                                        <td>{item.ma}</td>
                                        <td>{item.machine.map((mach, i) => {
                                            return (
                                                <span className='mx-1 fs-5' key={mach + i} >
                                                    <Badge bg="secondary">{mach}</Badge>
                                                </span>
                                            )
                                        })}</td>
                                        <td className='width-not' >{item?.note + noteCommentSave}</td>
                                        <td>
                                            <span onClick={handleShow} className={`cursor_pointer text-${i % 2 === 0 ? 'white' : darkMode ? 'white' : 'dark'}`} >
                                                <svg width="30" height="30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
                                                </svg>
                                            </span>
                                        </td>
                                        <td className='' >
                                            <div className='d-flex justify-content-center align-items-center' >
                                                {item?.image ? <a className={darkMode ? 'text-white' : ''} href={url + item.image} target="_blank" >
                                                    <svg width="30" height="30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                                                    </svg>
                                                </a> : '-'}
                                            </div>
                                        </td>
                                    </tr>
                                </Fragment>
                            ) : null
                        })
                    }
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Notiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <ul className='ul_style' >
                            <li><span className={`avatar_name bg-${'warning'}`} >J.A</span>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
                            <li className='text-success my-2'><span className={`avatar_name text-white bg-${'secondary'}`} >J.A</span>It is a long established fact that a reader will be distracted</li>
                            <li><span className={`avatar_name bg-${'warning'}`} >J.A</span>There are many variations of passages of Lorem Ipsum availabl text of the printing and typesetting</li>
                            <li className='text-success my-2' ><span className={`avatar_name text-white bg-${'secondary'}`} >J.A</span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has </li>
                        </ul>
                        <Form.Control onChange={(e) => setNoteComment(e.target.value)} value={noteComment} as="textarea" rows={3} />
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
        </>
    )
}

export default BaseTable;