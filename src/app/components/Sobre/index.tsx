import { Button, Grid, Link, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const AboutMe = () => {
  return (
    <Grid id="sobre" container justifyContent="center" sx={{ flexDirection: { xs: "block", md: "row" }, gap: { xs: "10px", md: "30px" }, padding: { xs: "40px", ms: "40px" }, height: { xs: "90%", md: "100%" }, background: "#6A0C0B" }} >
      <Grid item sx={{ height: { xs: "280px", md: "100%" }, width: { xs: "100%", md: "40%" }, paddingTop: { md: "170px" } }} textAlign="left" >
        <Typography color="#FBCA03" variant='h6' sx={{ paddingTop: { xs: "10px", md: "40px" } }}>Além dos estudos:</Typography>
        <Typography color="#FBCA03" variant='subtitle1' sx={{ paddingTop: { xs: "10px", md: "30px" } }}>Sou alguém que ama aventuras ao ar livre. Adoro fazer trilhas, jogar futebol e também sou um entusiasta do ciclismo. Estou sempre em busca de desafios e novas experiências, seja na tecnologia ou explorando a natureza.</Typography>
        <Grid paddingTop="10px">
          <Link href="https://www.instagram.com/washington.lemos_/" target="_blank">
            <InstagramIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/washington-lemos-033177186/" target="_blank">
            <LinkedInIcon />
          </Link>
        </Grid>
      </Grid>
      <Grid
        sx={{ width: { xs: "100%", md: "40%" }, height: { xs: "300px", md: "100%" }, paddingTop: { md: "160px" } }}
        item
        textAlign="left"
        fontFamily="arial"
        fontSize="14px"
      >
        <Typography color="#FBCA03" variant='h6' sx={{ paddingTop: { xs: "20px", md: "50px" } }}>Estudante de Análise e Desenvolvimento de Sistemas</Typography>
        <Typography color="#FBCA03" variant='subtitle2' sx={{ paddingTop: { xs: "20px", md: "20px" } }}>Minha jornada na tecnologia começou como uma fuga do cotidiano, mas rapidamente se transformou em uma paixão genuína. Enxerguei na tecnologia a oportunidade de transformar essa paixão em uma carreira significativa. Como estudante de Análise e Desenvolvimento de Sistemas, estou empenhado em aprender e crescer nesse campo, ansioso para contribuir e fazer o que realmente amo.
        </Typography>
        <Link href="https://github.com/lemosdiego/Certificados" target="_blank">
          <Button sx={{ width: "140px", color: "#FBCA03", background: "#AA0505" }}>Certificados</Button>
        </Link>
      </Grid>
    </Grid>
  )
}