import { Box, Button, Grid, Link, Typography, responsiveFontSizes } from "@mui/material"


export const Inicio = () => {
  return (
    <Grid id="home"  container width="100%" justifyContent="center" padding={12} sx={{ flexDirection: { xs: "block", md: "row" }, gap: { md: "50px" }, padding: { xs: "20px", ms: "40px" }, height: { xs: "110%",sm:"90%", md: "100%" }, paddingTop: { xs: "80px", md: "80px" },backgroundColor:"#6A0C0B"}}>
      <Grid item sx={{ height: { xs: "250px", md: "300px" }, width: { xs: "250px", md: "300px" }, marginTop: { md: "160px" } }}>
        <img src="/minhafoto5.png" height="100%" width="100%"/>
        <Grid sx={{paddingLeft:{xs:"25px",md:"50px"}, display:{xs:"flex",md:"flex"}, gap:{xs:"4px", md:"4px"}, paddingTop:{xs:"2px", md:"10px"}}}>
        <Link href="https://www.linkedin.com/in/washington-lemos-033177186/" target="_blank">
        <Button  sx={{width:"100px", color:"#FBCA03",background:"#AA0505"}}>Linkedin</Button >
        </Link>
        <Link href="https://github.com/lemosdiego" target="_blank">
        <Button sx={{width:"100px", color:"#FBCA03",background:"#AA0505"}}>Github</Button>
        </Link>
        </Grid>
      </Grid>
      <Grid
        sx={{ width: { xs: "100%", md: "40%" }, height: { xs: "50%", md: "50%" }, marginTop: { md: "160px" } }}
        item
        textAlign="left"
        fontFamily="arial"
        fontSize="14px" >
        <Typography sx={{ paddingTop: {xs:"20px", md: "20px", sm:"50px", lg:"48px" } }} variant="h4" color="#FBCA03">Olá, me chamo Washington!</Typography>
        <Typography variant="subtitle1" color="#FBCA03" sx={{ paddingTop: { xs: "20px",sm:"20px", md: "10px" }, paddingBottom: { xs: "20px" } }}> Sou um estudante apaixonado por tecnologia e estou determinado a conquistar um estágio na área. Quero aproveitar ao máximo cada oportunidade para aprender e crescer, aplicando o que aprendo no mundo real. Vamos juntos nessa jornada de aprendizado e desenvolvimento!
        </Typography>
        <Link href="https://drive.google.com/file/d/1yOj0rzD5tzgOHgO-stWb5n4rkse6j08m/view?usp=drive_link" target="_blank">
        <Button sx={{background:"#AA0505",color:"#FBCA03"}}>currículo</Button>
        </Link>
      </Grid>
    </Grid>
  )
}