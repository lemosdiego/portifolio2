import { Grid } from "@mui/material";
import { MenuBar } from "./components/Menu/Menu";
import { Inicio } from "./components/Home/Home";
import { AboutMe } from "./components/Sobre";
import { Ferramentas } from "./components/Ferramentas";
import { Projetos } from "./components/Projetos";
import { Contact } from "./components/Contatos";


export default function Home() {
  return (
    <>
      <MenuBar />
      <Grid height="100vh">
      <Inicio />
      <AboutMe />
      <Ferramentas />
      <Projetos />
      <Contact />
      </Grid>
      
    </>
  )
}
