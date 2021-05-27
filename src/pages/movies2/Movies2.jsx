import React, {useState} from 'react';
import PageLayout from "../../components/layouts/PageLayout";
import ModalDelete from "../../components/modal/ModalDelete";
import TableDataWithPagination from "../../components/table2/Table2";
import {useQueryClient} from "react-query";
import {deleteMovie, getAllMoviesWithPagination} from "../../services/movies";
import Button from "react-bootstrap/Button";
import {useModal} from "../../contexts/ModalContext";
import MovieForm from "./form/MovieForm";
import Select from "../../components/select/Select";


const headers = [
    {key: 'id', title: 'Id'},
    {key: 'name', title: 'Naziv'},
    {key: 'duration', title: 'Trajanje'},
    {key: 'rating', title: 'Ocjena'},
    {key: 'directorName', title: 'Režiser'},
    {key: 'writerName', title: 'Scenarista'},
]

const Movies2 = () => {
    const {open} = useModal();
    const queryClient = useQueryClient();
    const [modalData, setModalData] = useState();


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
        <TableDataWithPagination
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
            queryKey="movies"
            queryFn={getAllMoviesWithPagination}
        />
        <Select optionLabel="directorName"/>
    </PageLayout>
}

export default Movies2;