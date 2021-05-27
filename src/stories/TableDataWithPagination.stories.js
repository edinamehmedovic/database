import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableDataWithPagination from '../components/table2/Table2';
import {QueryClient, QueryClientProvider} from "react-query";


const queryClient = new QueryClient()

export default {
    title: 'Components/Table with pagination',
};


const Template = (args) => <QueryClientProvider client={queryClient}>
                                <TableDataWithPagination {...args} />
                            </QueryClientProvider>;

export const NoData = Template.bind({});
NoData.args = {
    headers: [{
        key: 'id', title: 'Id'
    },{
        key: 'name', title: 'Name'
    }],
    rows: []
}

export const RowsPropsUndefined = Template.bind({});
RowsPropsUndefined.args = {
    headers: [{
        key: 'id', title: 'Id'
    },{
        key: 'name', title: 'Name'
    }],
}

export const MultiCols = Template.bind({});
MultiCols.args = {
    headers: [{
        key: 'id', title: 'Id'
    },{
        key: 'name', title: 'Name'
    },{
        key: 'genre', title: 'Zanr'
    },{
        key: 'year', title: 'Godina'
    },{
        key: 'rating', title: 'Ocjena'
    }],
}