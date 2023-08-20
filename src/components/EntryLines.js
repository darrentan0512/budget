import React from 'react'
import EntryLine from './EntryLine'
import { Container } from 'semantic-ui-react'

function EntryLines({ entries, deleteEntry }) {
    return (
        <Container>
            {entries.map((entry) => (
                <EntryLine
                    key={entry.id} {...entry}
                    deleteEntry={deleteEntry}
                />
            ))}
        </Container>
    )
}

export default EntryLines