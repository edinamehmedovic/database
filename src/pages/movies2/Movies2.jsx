import React, {useState} from 'react';
import PageLayout from "../../components/layouts/PageLayout";
import ModalDelete from "../../components/modal/ModalDelete";
import TableData from "../../components/table/Table";
import {useQuery, useQueryClient} from "react-query";
import {useHistory} from "react-router-dom";
import {deleteMovie, getAllMovies} from "../../services/movies";
import Button from "react-bootstrap/Button";
import {useModal} from "../../contexts/ModalContext";
import MovieForm from "./form/MovieForm";


const headers = [
    {key: 'id', title: 'Id'},
    {key: 'name', title: 'Naziv'},
    {key: 'duration', title: 'Trajanje'},
    {key: 'rating', title: 'Ocjena'},
    {key: 'directorName', title: 'Režiser'},
    {key: 'writerName', title: 'Scenarista'},
]

const Movies2 = () => {
    const {open, close} = useModal();
    const queryClient = useQueryClient();
    const history = useHistory();
    const [modalData, setModalData] = useState();

    const {data} = useQuery("movies", getAllMovies)

    //query.data

    const onDelete = () => {
        if(modalData?.id){
            deleteMovie(modalData?.id)
                .then(() => {
                    queryClient.invalidateQueries("movies")
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
    return <PageLayout>
        <Button variant="primary" onClick={() => open({
            title: 'Dodaj film',
            content: <MovieForm id="add"/>
        })
        }>
            Dodaj
        </Button>
        <TableData
            headers={[...headers,
                {key: 'Izmijeni', title: 'Izmijeni',
                    render: (data) => <button
                        onClick={() => open({
                            title: `Promijeni film ${data?.name}`,
                            content: <MovieForm id={data?.id}/>
                        })
                        }
                    >
                        Izmijeni</button>},
                {key: 'Obriši', title: 'Obriši',
                    render: (data) => <ModalDelete
                        onDelete={onDelete}
                        name={modalData ? modalData["name"] : ''}
                        titleName={"filma"}
                        onBtnClick={() => setModalData(data)}
                    />}]}
            rows={data?.data}
        />
    </PageLayout>
}

export default Movies2;