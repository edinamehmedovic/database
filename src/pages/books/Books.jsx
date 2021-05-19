import React from "react";
import {deleteBook, getAllBooks} from "../../services/books";
import PageLayout from "../../components/layouts/PageLayout";
import PageDataLayout from "../../components/layouts/PageDataLayout";


const Books = () => {

    const headers = [
        {key: 'id', title: 'Id'},
        {key: 'isbn', title: 'Naziv'},
        {key: 'writerName', title: 'Pisac'},
        {key: 'publisherName', title: 'Izdavac'},
        {key: 'genre', title: 'Zanr'},
    ]

    return <PageLayout>
        <PageDataLayout
            headers={headers}
            getDataQueryKey="books"
            getData={getAllBooks}
            deleteData={deleteBook}
            deleteDataKey="isbn"
            routeAdd="/books/add"
            routeEdit="books"
            modalTitleName="knjige"
        />
    </PageLayout>
}

export default Books;