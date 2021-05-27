import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableData from '../components/table/Table';

export default {
    title: 'Components/Table',
};


const Template = (args) => <TableData {...args} />;

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