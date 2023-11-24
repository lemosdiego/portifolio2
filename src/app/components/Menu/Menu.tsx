"use client"
import { useState } from "react";
import { Avatar, Box, Divider, Drawer, Grid, Link, MenuItem, MenuList, Toolbar } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import { Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material"




export const MenuBar = () => {
  const [open, OpenMenu] = useState(false)
  const handleToogleMenu = () => {
    OpenMenu(!open)
  }
  return (
    <>
      <Grid width="100%" height="60px" position="fixed" sx={{ background:"#67C7EB",zIndex:"1" }} >
        <Toolbar sx={{ justifyContent: "flex-end"}}>
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
            <MenuItem>
              <Link sx={{ textDecoration: "none", color: "black" }} href="#home">Home</Link>
            </MenuItem>
            <MenuItem >
              <Link sx={{ textDecoration: "none", color:"black" }} href="#sobre">Sobre</Link>
            </MenuItem>
            <MenuItem>
              <Link sx={{ textDecoration: "none", color:"black" }} href="#icones">Ferramentas</Link>
            </MenuItem>
            <MenuItem>
              <Link sx={{ textDecoration: "none", color:"black" }} href="#Projects">Projetos</Link>
            </MenuItem>
            <MenuItem>
              <Link sx={{ textDecoration: "none", color:"black" }} href="#contatos">Contatos</Link>
            </MenuItem>
          </Box>
        </Toolbar>
      </Grid>
      <Drawer 
        anchor="right"
        ModalProps={{
          sx: {
            marginTop: 7,
          },
        }}
        PaperProps={{
          sx: {
            marginTop: 7,
            width: '50%',
            background:"#AA0505"
          }
        }}
        open={open}
        hideBackdrop
      >
        <MenuList sx={{ padding: "20px"}}>
          <MenuItem>
            <Link href="https://drive.google.com/file/d/1yOj0rzD5tzgOHgO-stWb5n4rkse6j08m/view?usp=drive_link" target="_blank">
              <Avatar src="logo.png" />
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem>
            <Link sx={{ textDecoration: "none", color: "#FBCA03" }} href="#home">Home</Link>
          </MenuItem>
          <MenuItem >
            <Link sx={{ textDecoration: "none", color: "#FBCA03" }} href="#sobre">Sobre</Link>
          </MenuItem>
          <MenuItem>
            <Link sx={{ textDecoration: "none", color: "#FBCA03" }} href="#icones">Ferramentas</Link>
          </MenuItem>
          <MenuItem>
            <Link sx={{ textDecoration: "none", color: "#FBCA03" }} href="#Projects">Projetos</Link>
          </MenuItem>
          <MenuItem>
            <Link sx={{ textDecoration: "none", color: "#FBCA03" }} href="#contatos">Contatos</Link>
          </MenuItem>
        </MenuList>
      </Drawer>
    </>

  )
}