import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PaidIcon from '@mui/icons-material/Paid'
import { Divider } from '@mui/material';

import Image from 'next/image'

const drawerWidth = 220;

const Sidebar = () => {
    return ( <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Box sx={{ overflow: 'auto', pt: 3, }}>
          <Image src="/logo.jpg" width={220} height={220} style={{paddingLeft: "50px"}}/>
          <Divider sx={{py: 2}}/>

          <List>
          <ListItem button >
                <ListItemIcon>
                  <PaidIcon />
                </ListItemIcon>
                <ListItemText primary="Transactions" />
              </ListItem>
          </List>

          <Divider />

          <List>
          <ListItem button >
                <ListItemIcon>
                  <PaidIcon />
                </ListItemIcon>
                <ListItemText primary="Transactions" />
              </ListItem>
          </List>

        </Box>
      </Drawer> );
}
 
export default Sidebar;