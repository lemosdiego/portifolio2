import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConstructionIcon from '@mui/icons-material/Construction';

export const MenuNavegação = () => {
    return (
        <BottomNavigation sx={{ width:"100%" }}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<AccountCircleIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<ConstructionIcon />}
      />
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<HomeIcon />}
      />
    </BottomNavigation>
    )
}