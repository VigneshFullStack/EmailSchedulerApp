import React from 'react'
import { useDispatch } from 'react-redux'
import { loginLogout } from '../../redux/actions/authAction';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './index.scss'
import { Avatar } from '@mui/material';
import Scheduler from '../Scheduler/Scheduler';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Recipient from '../Recipient/Recipients';

const Home = () => {
    const dispatch = useDispatch();
    const notify = () => toast("Wow so easy!");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleUserLogOut = () => {
        dispatch(loginLogout());
        setAnchorEl(null);
    }
    
    return (
      <>
      <nav className="navbar ">
      <div className="container-fluid">
      <a className="navbar-brand"></a>
      <div className='d-flex'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Avatar icon="pi pi-user"  shape="circle" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleUserLogOut}>Logout</MenuItem>
      </Menu>
    </div>
      </div>
    </nav>
      <div className='container-fluid card p-5 pg-color'>
        
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Recipients
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>CRUD Recipients</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Recipient/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>ScheduledEmails</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            CRUD ScheduledEmails
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Scheduler/>
        </AccordionDetails>
      </Accordion>
           
      </div>
      </>
    );
}

export default Home
