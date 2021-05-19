import React from 'react';
import Table from 'react-bootstrap/Table';

//headers = [{key: 'key', title:'item1'}, ...]

//rows = [
//  {item1, item2}
// ]

const TableData = ({
                        headers = [],
                       rows = []
                   }) => {
    return <Table striped bordered hover>
        <thead>
        <tr>
            {headers?.length &&
                headers.map(item => <th key={item.key}>{item.title}</th>)
            }
        </tr>
        </thead>
        <tbody>
        {
           rows?.length &&
            rows.map(item => {
                    return <tr key={item?.id}>
                        {headers.map(headerItem => {
                            if(headerItem.render){
                                return <td key={`${item?.id}${headerItem.key}`}>{headerItem.render(item)}</td>
                            }else{
                                return <td key={`${item?.id}${headerItem.key}`}>{item[headerItem.key]}</td>
                            }

                        })}
                    </tr>
            })
        }
        </tbody>
    </Table>
}

export default TableData;