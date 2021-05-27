import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import {useQuery} from "react-query";

//headers = [{key: 'key', title:'item1'}, ...]

//rows = [
//  {item1, item2}
// ]

const TableDataWithPagination = ({
                        headers = [],
                        queryKey,
                        queryFn
                   }) => {
    const pageSize = 5;
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [activePage, setActivePage] = useState(0);
    const {data} = useQuery([queryKey, activePage], () => queryFn(pageSize, activePage), {
        enabled: Boolean(queryKey) && typeof (queryFn) === 'function',
    });

    useEffect(() => {
        const totalCount = data?.headers['x-total-count'];
        const numberOfPages = totalCount / pageSize;
        setNumberOfPages(numberOfPages);
    }, [data?.headers['x-total-count']])

    console.log(data)


    return <div>
        <Table striped bordered hover>
        <thead>
        <tr>
            {headers?.length &&
                headers.map(item => <th key={item.key}>{item.title}</th>)
            }
        </tr>
        </thead>
        <tbody>
        {
            data?.data?.length &&
            data?.data.map(item => {
                    return <tr key={item?.id}>
                        {headers.map(headerItem => {
                            if(headerItem.render){
                                return <td
                                    key={`${item?.id}${headerItem.key}`}>
                                    {headerItem.render(item)}</td>
                            }else{
                                return <td
                                    key={`${item?.id}${headerItem.key}`}>
                                    {item[headerItem.key]}</td>
                            }

                        })}
                    </tr>
            })
        }
        </tbody>
    </Table>
        <Pagination>
            {numberOfPages && [...Array(numberOfPages)].map((x, i) => <Pagination.Item key={i} active={i === activePage} onClick={() => setActivePage(i)}>
                    {i + 1}
                </Pagination.Item>
            )}

        </Pagination>
    </div>
}

export default TableDataWithPagination;