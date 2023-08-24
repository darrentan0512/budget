import React from 'react'
import EntryLine from './EntryLine'
import { Container } from 'semantic-ui-react'

function EntryLines({ entries, deleteEntry, setIsOpen }) {
    return (
        <Container>
            {entries.map((entry) => (
                <EntryLine
                    key={entry.id} {...entry}
                    setIsOpen={setIsOpen}
                    deleteEntry={deleteEntry}
                />
            ))}
        </Container>
    )
}

export default EntryLines