import { Box, Button, Grid, Link, Typography } from "@mui/material"


export const Inicio = () => {
    return (
        <Grid id="home" container  width="100%" justifyContent="center" padding={12} sx={{ flexDirection: { xs: "block", md: "row" }, gap: {md:"50px"}, padding: {xs:"20px", ms:"40px"}, height:{xs:"100%", md:"100%"}, paddingTop:{xs:"80px",md:"80px"},boxShadow:"rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;" }}  >
            
            <Grid item sx={{height: {xs: "250px", md:"300px"}, width: {xs:"250px", md: "300px"},marginTop:{xs:"8px",md:"160px"} }}>
                <img src="/minhafoto.png" height="100%" width="100%" />
            </Grid>
            <Grid 
                sx={{width: {xs:"100%", md:"40%"}, height: {xs:"50%", md:"50%" }, marginTop:{md:"160px"}}}
                item
                textAlign="left"
                fontFamily="arial"
                fontSize="14px" >
                
                <Typography sx={{paddingTop: {md:"48px"}}} variant="h4" >Olá, me chamo Washington!</Typography>
                <Typography variant="subtitle1" sx={{paddingTop:{xs:"20px", md:"20px"}, paddingBottom:{xs:"20px"}}}> Sou um estudante apaixonado por tecnologia e estou determinado a conquistar um estágio na área. Quero aproveitar ao máximo cada oportunidade para aprender e crescer, aplicando o que aprendo no mundo real. Vamos juntos nessa jornada de aprendizado e desenvolvimento! 
                <Link href="https://drive.google.com/file/d/1wvHvvNM5X29PYuuiLpmeqhJ_YSQGqrRU/view?usp=drive_link" target="_blank"><Button>Saiba mais...</Button></Link>
                </Typography>
               
            </Grid>


        </Grid>
    )
}