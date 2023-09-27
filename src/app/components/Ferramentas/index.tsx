import { Avatar, Box, Grid, Icon, Typography } from "@mui/material"


export const Ferramentas = () => {
    return (
        <Grid  sx={{  width:"100%", height:{xs:"350px", md:"100%"}, boxShadow:"rgba(0, 0, 0, 0.1) 0px 10px 50px;" }} id="icones">
            <Grid padding={2} item textAlign="center"  >
                <Typography  variant="h5" sx={{paddingTop:{xs:"20px", md:"170px"}, paddingBottom:{xs:"10px", md:"40px"}}}>Habilidades:</Typography>
            </Grid>
            <Grid container display="flex" sx={{ gap: {md: "20px" }, justifyContent: "center", paddingTop:{xs:"30px", md:"80px"},flexWrap:{xs:"wrap"}, padding:"40px" }}>
                <Grid item  >
                <Icon sx={{width:{xs:"70px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius:50}}><img src="/js.ico" alt="javascript" width="50px" height="50px"/></Icon>
                </Grid>
                <Grid item  >
                <Icon sx={{width:{xs:"70px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius:50}}><img src="/css.ico" alt="css" width="50px" height="50px"/></Icon>
                </Grid>
                <Grid item  >
                <Icon sx={{width:{xs:"70px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius:50}}><img src="/html.ico" alt="html" width="50px" height="50px"/></Icon>
                </Grid>
                <Grid item  >
                <Icon sx={{width:{xs:"70px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius:50}}><img src="/nextjs.ico" alt="nextjs" width="50px" height="50px"/></Icon>
                </Grid>
                <Grid item  >
                <Icon sx={{width:{xs:"70px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius:50}}><img src="/github.ico" alt="github" width="50px" height="50px"/></Icon> 
                </Grid>
                <Grid item  >
                <Icon sx={{width:{xs:"70px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius:50}}><img src="/python.ico" alt="python" width="50px" height="50px"/></Icon>
                </Grid>
                </Grid>
            </Grid>
       
    )
}