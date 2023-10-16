"use client"
import { useState } from "react";
import { Avatar, Box, Divider, Drawer, Grid, Link, MenuItem, MenuList, Toolbar } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import { Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material"
import FolderSharedIcon from '@mui/icons-material/FolderShared'




export const MenuBar = () => {
  const [open, OpenMenu] = useState(false)
  const handleToogleMenu = () => {
    OpenMenu(!open)
  }
  return (
    <>
      <Grid width="100%" height="60px" position="fixed" sx={{backgroundColor:{xs:"black", md:"black"}, boxShadow:{xs:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"}}} >
        <Toolbar sx={{ justifyContent: "flex-end", color:"white"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleToogleMenu}
            sx={{ display: { md: "none" } }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Box color="black" gap={8} sx={{ display: { xs: "none", md: "flex" } }}>
            <MenuItem >
            <Link sx={{textDecoration:"none", color:"white"}} href="#home">Home</Link>
            </MenuItem>
            <MenuItem >
            <Link sx={{textDecoration:"none", color:"white"}} href="#sobre">Sobre</Link>
            </MenuItem>
            <MenuItem>
            <Link sx={{textDecoration:"none", color:"white"}} href="#icones">Ferramentas</Link>
            </MenuItem>
            <MenuItem>
            <Link sx={{textDecoration:"none", color:"white"}} href="#Projects">Projetos</Link>
            </MenuItem>
            <MenuItem>
            <Link sx={{textDecoration:"none", color:"white"}} href="#contatos">Contatos</Link>
            </MenuItem>
          </Box>
        </Toolbar>
      </Grid>

      <Drawer 
        anchor="right"
        ModalProps={{
          sx: {
            marginTop: 7
          }
        }}
        PaperProps={{
          sx: {
            marginTop: 7,
            width: '50%'
          }
        }}
        open={open}
        hideBackdrop
      >
        <MenuList sx={{padding:"20px"}}>
          <MenuItem>
          <Link href="https://drive.google.com/file/d/1is49CLQl7NqUM9UD_Kho12KINuq1dVie/view?usp=sharing" target="_blank">
         <Avatar src="iconessvg/curriculo.svg"/>
          </Link>
          </MenuItem>
          <Divider/>
          <MenuItem>
          <Link sx={{textDecoration:"none", color:"black"}} href="#home">Home</Link>
          </MenuItem>
          <MenuItem >
            <Link sx={{textDecoration:"none", color:"black"}} href="#sobre">Sobre</Link>
            </MenuItem>
            <MenuItem>
            <Link sx={{textDecoration:"none", color:"black"}} href="#icones">Ferramentas</Link>
            </MenuItem>
            <MenuItem>
            <Link sx={{textDecoration:"none", color:"black"}} href="#Projects">Projetos</Link>
            </MenuItem>
            <MenuItem>
            <Link sx={{textDecoration:"none", color:"black"}} href="#contatos">Contatos</Link>
            </MenuItem>
        </MenuList>
      </Drawer>

    </>

  )
}