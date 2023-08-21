import React, { useState } from 'react';
import { Segment, Grid, Icon } from 'semantic-ui-react';
import ModalEdit from './ModalEdit';

function EntryLine({ id, description, value, isExpense, deleteEntry }) {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen} />
            <Segment color={isExpense ? 'red' : 'green'}>
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign='left'> {description} </Grid.Column>
                        <Grid.Column width={3} textAlign='right'> ${value} </Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name="edit" onClick={() => setIsOpen(true)}/>
                            <Icon name="trash" onClick={() => deleteEntry(id)} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </>


    )
}

export default EntryLine;