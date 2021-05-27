import React from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import {getAllMoviesWithPagination} from "../../services/movies";
import PropTypes from 'prop-types';

const Select = ({
                    optionLabel= 'name',
                    optionValues = 'id',
                    pageSize = 5
                }) => {

    const loadOptions = async (search, previous, {page}) => {
        console.log(search, previous, page);

        const response = await getAllMoviesWithPagination(pageSize, page);
        const options = response?.data.map(item => {
            return {
                label: item[optionLabel],
                value: item[optionValues]
            }
        });

        console.log(options)

        return {
            options: options,
            hasMore: options.length > 0,
            additional: {
                page: page + 1
            }
        };
    }

    return <AsyncPaginate
        // value={value}
        loadOptions={loadOptions}
        onChange={(e) => console.log(e)}
        additional={{
            page: 0
        }}
    />
};

export default Select;

Select.propTypes = {
    optionLabel: PropTypes.string,
    optionValues: PropTypes.string,
    pageSize: PropTypes.number
}