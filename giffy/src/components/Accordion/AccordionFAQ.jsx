import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const FAQ_DATA = [
  {
    id: 1,
    title: '¿Cómo funciona Giffy?',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam.'
  },
  {
    id: 2,
    title: '¿Cómo funciona GifExpertApp?',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam.'
  }
]

export default function BasicAccordion () {
  return (
    <div>
      {
        FAQ_DATA.map(({ id, title, description }) => (
          <Accordion key={id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${id}a-content`}
              id={`panel${id}a-header`}
            >
              <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))
      }
    </div>
  )
}
