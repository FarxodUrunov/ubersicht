import { Fragment } from 'react';
import Table from 'react-bootstrap/Table';
import './BaseTable.css'
import { useState } from 'react';


const BaseTable = ({ data, darkMode }) => {
    const [iconPosDatum, setIconPosDatum] = useState(true)
    const [iconPosUhrzeit, setIconPosUhrzeit] = useState(true)
    const [iconPosSchicht, setIconPosSchicht] = useState(true)
    const [iconPosStatus, setIconPosStatus] = useState(true)
    const [iconPosMa, setIconPosMa] = useState(true)
    const [iconPosMashine, setIconPosMashine] = useState(true)

    const statusColor = (status) => {
        if (status === 'Störung') {
            return 'danger'
        } else if (status === 'Anweisung') {
            return 'warning'
        } else {
            return ''
        }

    }

    const handelSort = (str) => {
        if (str === 'datum') setIconPosDatum(!iconPosDatum)
        if (str === 'uhrzeit') setIconPosUhrzeit(!iconPosUhrzeit)
        if (str === 'schicht') setIconPosSchicht(!iconPosSchicht)
        if (str === 'status') setIconPosStatus(!iconPosStatus)
        if (str === 'ma') setIconPosMa(!iconPosMa)
        if (str === 'mashine') setIconPosMashine(!iconPosMashine)


        // console.log(str)
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
                        <th>Bild</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, i) => {
                            return item !== undefined ? (
                                <Fragment key={item?.id + i}>
                                    <tr>
                                        <td colSpan={8} className='bg-light' ></td>
                                    </tr>
                                    <tr className='bg_table_body' >
                                        <td>{item?.id}</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td className={`bg-${statusColor(item?.status)}`} >@mdo</td>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td className='width-not' >Otto</td>
                                        <td className='d-flex align-items-center justify-content-center' >
                                            {item?.img ? <img width={20} height={20} src={item?.img} alt='avatar' /> : '-'}
                                        </td>
                                    </tr>
                                </Fragment>
                            ) : null
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default BaseTable;