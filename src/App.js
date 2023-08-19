
import { Container, Grid, Segment, Icon } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';

function App() {
  return (
    <Container>
      <MainHeader title='Test' />
      <DisplayBalance title='YOUR BALANCE' value='2,550.53' size='small' />
      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title='INCOME' value='1253.54' color='green' size='tiny'/>
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance title='EXPENSES' value='623.50' color='red' size='tiny'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title='History' type='h3' />
      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'> Something </Grid.Column>
            <Grid.Column width={3} textAlign='right'> $10.00 </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='green'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'> Something </Grid.Column>
            <Grid.Column width={3} textAlign='right'> $20.00 </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'> Something </Grid.Column>
            <Grid.Column width={3} textAlign='right'> $10.00 </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm />
    </Container>
  );
}

export default App;
