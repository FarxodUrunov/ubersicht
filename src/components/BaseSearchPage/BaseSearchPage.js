import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import './BaseSearchPage.css'
import BaseSelect from '../BaseSelect/BaseSelect';

function BaseSearchPage({ darkMode }) {
    return (
        <div>
            <Table className='my-4' striped bordered>
                <tbody className={`${darkMode ? 'search_page-dark' : 'search_page'}`} >
                    <tr>
                        <td>
                            <div className='d-flex align-items-center' >
                                <p className='my-0 px-2 py-1 search_page-text fw-bold bg-transparent' >Datum von:</p>
                                <Form.Control size='sm' className='ms-2 w-50' type="date" />
                            </div>
                        </td>
                        <td>
                            <div className='d-flex align-items-center' >
                                <p className='my-0 px-2 py-1 search_page-text fw-bold bg-transparent' >Datum bis:</p>
                                <Form.Control size='sm' className='ms-2 w-50' type="date" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='search_page-text' >
                            <div className='d-flex align-items-center' >
                                <p className='my-0 me-2 px-2 py-1 fw-bold' >Schicht:</p>
                                <BaseSelect size='sm' />
                            </div>
                        </td>
                        <td className='search_page-text' >
                            <div className='d-flex align-items-center' >
                                <p className='my-0 me-2 px-2 py-1 fw-bold' >Status:</p>
                                <BaseSelect size='sm' />
                            </div>
                        </td>
                        <td className='search_page-text'>
                            <div className='d-flex align-items-center' >
                                <p className='my-0 me-2 px-2 py-1 fw-bold' >MA:</p>
                                <BaseSelect size='sm' />
                            </div>
                        </td>
                        <td className='search_page-text'>
                            <div className='d-flex align-items-center' >
                                <p className='my-0 me-2 px-2 py-1 fw-bold' >Maschine:</p>
                                <BaseSelect size='sm' />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div className='d-flex justify-content-end' >
                <button className={darkMode ? 'search_btn-dark' : 'search_btn'} >Suchen..</button>
            </div>
        </div>
    );
}

export default BaseSearchPage;