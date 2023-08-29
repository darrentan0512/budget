import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

function DisplayBalances({totalIncome, totalExpense}) {
    return (
        <Segment textAlign='center'>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance title='INCOME' value={totalIncome} color='green' size='tiny' />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance title='EXPENSES' value={totalExpense} color='red' size='tiny' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default DisplayBalances;