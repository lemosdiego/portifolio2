import { Avatar, Box, Grid, Icon, Typography } from "@mui/material"
import { url } from "inspector"


export const Ferramentas = () => {
    return (
        <Grid  sx={{  width:"100%", height:{xs:"350px", md:"100%"}, boxShadow:"rgba(0, 0, 0, 0.1) 0px 10px 50px;", }} id="icones">
            <Grid padding={2} item textAlign="center"  >
                <Typography  variant="h5" sx={{paddingTop:{xs:"20px", md:"170px"}, paddingBottom:{xs:"10px", md:"40px"}}}>Habilidades:</Typography>
            </Grid>
            <Grid container display="flex" sx={{ gap: {md: "20px" }, justifyContent: "center", paddingTop:{xs:"30px", md:"80px"},flexWrap:{xs:"wrap"}, padding:"40px" }}>
                <Grid item  >
                <Icon sx={{width:{xs:"70px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius:50}}><img src="/iconessvg/js.svg" alt="javascript" width="50px" height="50px"/></Icon>
                </Grid>
                <Grid item  >
                <Icon sx={{width:{xs:"70px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius:50}}><img src="/iconessvg/css.svg" alt="css" width="50px" height="50px"/></Icon>
                </Grid>
                <Grid item  >
                <Icon sx={{width:{xs:"70px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius:50}}><img src="/iconessvg/html.svg" alt="html" width="50px" height="50px"/></Icon>
                </Grid>
                <Grid item  >
                <Icon sx={{width:{xs:"70px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius:50}}><img src="/iconessvg/next.svg" alt="nextjs" width="50px" height="50px"/></Icon>
                </Grid>
                <Grid item  >
                <Icon sx={{width:{xs:"70px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius:50}}><img src="/iconessvg/github.svg" alt="github" width="50px" height="50px"/></Icon> 
                </Grid>
                <Grid item  >
                <Icon sx={{width:{xs:"70px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius:50}}><img src="/iconessvg/git.svg" alt="python" width="50px" height="50px"/></Icon>
                </Grid>
                <Grid item  >
                <Icon sx={{width:{xs:"70px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius:50}}><img src="/iconessvg/python.svg" alt="python" width="50px" height="50px"/></Icon>
                </Grid>
                <Grid item  >
                <Icon sx={{width:{xs:"70px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius:50}}><img src="/iconessvg/exel.svg" alt="python" width="50px" height="50px"/></Icon>
                </Grid>
                </Grid>
            </Grid>
       
    )
}