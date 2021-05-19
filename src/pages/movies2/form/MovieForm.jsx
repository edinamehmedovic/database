import React, {useState, useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {editMovie, getMovie, addMovie} from '../../../services/movies';
import {useMutation, useQueryClient} from 'react-query';
import {useForm} from 'react-hook-form';

const initialData = {
    directorName: '',
    duration: 0,
    id: 0,
    name: '',
    rating: 0,
    writerName: '',
}

const MovieForm = ({id}) => {
    const [formData, setFormData] = useState(initialData);
    const {register, handleSubmit, formState: {errors}} = useForm();
    // const queryClient = useQueryClient();

    // const mutationEdit = useMutation(
    //     (data) => editMovie(data)
    //     , {
    //         onSuccess: () => {
    //             // Invalidate and refetch
    //             queryClient.invalidateQueries('movies');
    //         },
    //     });
    //
    // const mutationAdd = useMutation(
    //     (data) => addMovie(data)
    //     , {
    //         onSuccess: () => {
    //             // Invalidate and refetch
    //             queryClient.invalidateQueries('movies');
    //         },
    //     });

    const onSubmit = (data) => {
        console.log(data)
        // if(id !== 'add'){
        //     mutationEdit.mutate(formData)
        // }else{
        //     delete formData.id;
        //     mutationAdd.mutate(formData)
        // }
    }

    const onError = (errors) => {
        console.log(errors)
    }

    useEffect(() => {
        //getMovie
        if (id !== 'add') {
            getMovie(id)
                .then(r => {
                    console.log(r?.data)
                    setFormData(r?.data)
                })
        }
    }, [id])

    // {
    // directorName
    // directorName: value
    // director.name
    // director = {name: value }
    // director[0]
    // director: [value]
    // }
    return <>
        Movie {id}
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <Form.Group controlId="directorName">
                <Form.Label>Režiser</Form.Label>
                <Form.Control type="text"
                              placeholder="Unesite režisera"
                              {...register("directorName", {
                                  required: {
                                      value: true,
                                      message: 'Obavezno!'
                                  }
                              })}
                              // value={formData?.directorName}
                              // onChange={(e) => setFormData(prevState => {
                              //     return {
                              //         ...prevState,
                              //         directorName: e.target.value
                              //     }
                              // })}
                />
                <span>{errors?.directorName?.message}</span>
            </Form.Group>

            <Form.Group controlId="duration">
                <Form.Label>Trajanje</Form.Label>
                <Form.Control type="number"
                              placeholder="Unesite trajanje"
                              {...register("duration", {
                                  required: "Polje je obavezno!"
                              })}
                              // value={formData?.duration}
                              // onChange={(e) => setFormData(prevState => {
                              //     return {
                              //         ...prevState,
                              //         duration: e.target.value
                              //     }
                              // })}
                />
                <span>{errors?.duration?.message}</span>
            </Form.Group>

            <Form.Group controlId="name">
                <Form.Label>Naziv</Form.Label>
                <Form.Control type="text"
                              placeholder="Unesite naziv"
                              {...register("name")}
                              // value={formData?.name}
                              // onChange={(e) => setFormData(prevState => {
                              //     return {
                              //         ...prevState,
                              //         name: e.target.value
                              //     }
                              // })}
                />
                <span>{errors?.name?.message}</span>
            </Form.Group>

            <Form.Group controlId="rating">
                <Form.Label>Ocjena</Form.Label>
                <Form.Control type="number"
                              placeholder="Unesite ocjenu"
                              {...register("rating")}
                              // value={formData?.rating}
                              // onChange={(e) => setFormData(prevState => {
                              //     return {
                              //         ...prevState,
                              //         rating: e.target.value
                              //     }
                              // })}
                />
                <span>{errors?.rating?.message}</span>
            </Form.Group>

            <Form.Group controlId="writerName">
                <Form.Label>Scenarista</Form.Label>
                <Form.Control type="text"
                              placeholder="Unesite scenaristu"
                              {...register("writerName")}
                              // value={formData?.writerName}
                              // onChange={(e) => setFormData(prevState => {
                              //     return {
                              //         ...prevState,
                              //         writerName: e.target.value
                              //     }
                              // })}
                />
                <span>{errors?.writerName?.message}</span>
            </Form.Group>


            <Button variant="primary" type="submit">
                Sacuvaj
            </Button>
        </Form>
    </>
}

export default MovieForm;