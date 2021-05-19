import React, {useState} from 'react';
import TableData from "../table/Table";
import {useHistory} from "react-router-dom";
import {useQuery, useQueryClient} from 'react-query';
import ModalDelete from "../modal/ModalDelete";
import Button from "react-bootstrap/Button";

const PageDataLayout = ({
                            headers,
                            getData,
                            getDataQueryKey,
                            deleteData,
                            deleteDataKey,
                            routeAdd,
                            routeEdit,
                            modalTitleName
                        }) => {

    const queryClient = useQueryClient();
    const history = useHistory();
    const [modalData, setModalData] = useState();

    const {data, isLoading} = useQuery(getDataQueryKey, getData)

    //query.data

    const onDelete = () => {
        if(modalData?.id){
            deleteData(modalData?.id)
                .then(() => {
                    queryClient.invalidateQueries(getDataQueryKey)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return <div>
        <Button variant="primary" onClick={() => history.push(routeAdd)
        }>
            Dodaj
        </Button>
        {isLoading ? <div>Loading</div> :
        <TableData
            headers={[...headers,
                {key: '', title: 'Izmijeni',
                    render: (data) => <button onClick={() => history.push(`/${routeEdit}/${data.id}`)}>Izmijeni</button>},
                {key: '', title: 'Obriši',
                    render: (data) => <ModalDelete
                        onDelete={onDelete}
                        name={modalData ? modalData[deleteDataKey] : ''}
                        titleName={modalTitleName}
                        onBtnClick={() => setModalData(data)}
                    />}]}
            rows={data?.data}
        />
        }
    </div>
}

export default PageDataLayout;