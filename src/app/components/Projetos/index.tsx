import {  Grid, Typography } from "@mui/material"


export const Projetos = () => {
  return (
    <Grid id="Projects" 
    sx={{
      height:{xs:"70%", md:"100%"}, 
      gap:{xs:"20px",md:"14px"}, 
      boxShadow:"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;"}} 
      width="100%" display="flex" 
      flexDirection="column" 
      alignItems="center" >
      <Grid item textAlign="center"  >
        <Typography variant="h5" sx={{ paddingTop: { xs: "20px", md: "80px" }, paddingBottom: { xs: "10px", md: "40px" } }}>Alguns projetos:</Typography>
      </Grid>
      <Grid container sx={{ height: { xs: "190px", sm:"200px", md: "250px" }, width: { xs: "98%",sm:"60%", md: "50%" }, flexDirection:"row", boxShadow:"rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;"}}>
        <Grid item width="40%"  height="100%" borderRadius="50%" boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;">
        <img src="/projeto1.png" height="100%" width="100%" />
        </Grid>
        <Grid item width="60%"  height="100%" textAlign="left">
          <Typography variant="h6" sx={{paddingTop:{xs:"20px", md:"50px"}}}>Find my beer</Typography>
          <Typography variant="subtitle2" sx={{paddingTop:{md:"16px"}, paddingLeft:{xs:"8px"}, paddingRight:{xs:"8px"}}}>Em andamento...O objetivo dessa aplicação é me fornecer no mapa uma lista de cervejarias.</Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ height: { xs: "190px", sm:"200px", md: "250px" }, width: { xs: "98%",sm:"60%", md: "50%" }, flexDirection:"row", boxShadow:"rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;"}}>
      <Grid item width="60%"  height="100%" textAlign="right">
        <Typography variant="h6" sx={{paddingTop:{xs:"20px",md:"50px"}}}>Cadastro de Usuário</Typography>
          <Typography variant="subtitle2" sx={{paddingTop:{md:"16px"}, paddingRight:{xs:"8px"}}}>Em andamento...Tem como objetivo um formulário de cadastro de usuário, onde os dados que o usuário me fornecer irá ser salvo no banco de dados. </Typography>
        </Grid>
        <Grid item width="40%"  height="100%" borderRadius="50%" boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;">
        <img src="/projeto2.png" height="100%" width="100%" />
        </Grid>
       
      </Grid>
    </Grid>
  )
}