import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import styles from "./Faq.module.css";

export default function Faq() {
  return (
    <div className={styles.topSection}>
      <Typography variant="h5" sx={{ color: 'white',textAlign:'center' }}>
        FAQ's
      </Typography>
      <div>
        <Accordion sx={{ borderRadius:'15px'}} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'green' }} />}
            aria-controls="panel1-content"
            id="panel1-header"
           sx={{ backgroundColor: 'black', color: 'white', border: '1px solid white'}}

          >
            <Typography>Is QTify free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: 'white', color: 'black'}}>
            <Typography>
              Yes! It is 100% free, and has 0% ads!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion  sx={{ borderRadius:'15px'}} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'green' }} />}
            aria-controls="panel2-content"
            id="panel2-header"
           sx={{ backgroundColor: 'black', color: 'white', border: '1px solid white'}}
          >
            <Typography>Can I download and listen to songs offline?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: 'white', color: 'black'}}>
            <Typography>
              Sorry, unfortunately we don't provide the service to download any songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}