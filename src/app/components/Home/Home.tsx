import { Box, Button, Grid, Link, Typography, responsiveFontSizes } from "@mui/material"


export const Inicio = () => {
  return (
    <Grid id="home" container width="100%" justifyContent="center" padding={12} sx={{ flexDirection: { xs: "block", md: "row" }, gap: { md: "50px" }, padding: { xs: "20px", ms: "40px" }, height: { xs: "105%",sm:"90%", md: "100%" }, paddingTop: { xs: "80px", md: "80px" }, boxShadow: "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;" }}  >

      <Grid item sx={{ height: { xs: "250px", md: "300px" }, width: { xs: "250px", md: "300px" }, marginTop: { md: "160px" },boxShadow:"" }}>
        <img src="/minhafoto.png" height="100%" width="100%" />
        <Grid sx={{paddingLeft:{xs:"25px",md:"50px"}, display:{xs:"flex",md:"flex"}, gap:{xs:"4px", md:"4px"}, paddingTop:{xs:"2px", md:"10px"}}}>
        <Link href="https://www.linkedin.com/in/washington-lemos-033177186/" target="_blank">
        <Button sx={{boxShadow:"rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;",width:"100px", backgroundColor:"#81c9fa", color:"black"}}>Linkedin</Button>
        </Link>
        <Link href="https://github.com/lemosdiego" target="_blank">
        <Button sx={{boxShadow:"rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px", width:"100px", backgroundColor:"#81c9fa", color:"black"}}>Github</Button>
        </Link>
        </Grid>
      </Grid>
      <Grid
        sx={{ width: { xs: "100%", md: "40%" }, height: { xs: "50%", md: "50%" }, marginTop: { md: "160px" } }}
        item
        textAlign="left"
        fontFamily="arial"
        fontSize="14px" >

        <Typography sx={{ paddingTop: {xs:"20px", md: "20px", sm:"50px", lg:"48px" } }} variant="h4" >Olá, me chamo Washington!</Typography>
        <Typography variant="subtitle1" sx={{ paddingTop: { xs: "20px",sm:"20px", md: "10px" }, paddingBottom: { xs: "20px" } }}> Sou um estudante apaixonado por tecnologia e estou determinado a conquistar um estágio na área. Quero aproveitar ao máximo cada oportunidade para aprender e crescer, aplicando o que aprendo no mundo real. Vamos juntos nessa jornada de aprendizado e desenvolvimento!
        </Typography>
        <Link href="https://drive.google.com/file/d/1is49CLQl7NqUM9UD_Kho12KINuq1dVie/view?usp=sharing" target="_blank">
        <Button sx={{boxShadow:"rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset", backgroundColor:"#a5b3aa"}}>currículo</Button>
        </Link>
      </Grid>


    </Grid>
  )
}