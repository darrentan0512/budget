import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EntryForm from './EntryForm'
import { closeEditModal } from '../actions/modals.actions'
import { useDispatch } from 'react-redux';

function ModalEdit({ isOpen, setIsOpen, addEntry, description, value, isExpense, setDescription, setValue, setIsExpense }) {

  const dispatch = useDispatch();
  
  return (
    <Modal open={isOpen}>
      <Modal.Header> Edit entry </Modal.Header>
      <Modal.Content>
        <EntryForm
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeEditModal())}> Close </Button>
        <Button onClick={() => dispatch(closeEditModal())} primary> OK </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit