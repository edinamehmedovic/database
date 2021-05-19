import React from "react";
import {deleteMovie, getAllMovies} from "../../services/movies";
import PageLayout from "../../components/layouts/PageLayout";
import PageDataLayout from "../../components/layouts/PageDataLayout";


const Persons = () => {

    const headers = [
        {key: 'id', title: 'Id'},
        {key: 'name', title: 'Naziv'},
        {key: 'duration', title: 'Trajanje'},
        {key: 'rating', title: 'Ocjena'},
        {key: 'directorName', title: 'Režiser'},
        {key: 'writerName', title: 'Scenarista'},
    ]

    return <PageLayout>
        <PageDataLayout
            headers={headers}
            getDataQueryKey="movies"
            getData={getAllMovies}
            deleteData={deleteMovie}
            routeAdd="/movies/add"
            routeEdit="movies"
            modalTitleName="filmova"
        />
    </PageLayout>
}

export default Persons;