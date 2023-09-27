import { Grid, Icon, Typography } from "@mui/material"


export const Contact = () => {
  return (
  <Grid id="contatos" container alignItems="center" height="200px" width="100%" justifyContent="center" display="flex" boxShadow="rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;" gap={1} sx={{padding:{xs:"20px"}}}>
      <Grid item sx={{paddingBottom:{md:"30px"}}}>
        <Typography variant="h6">Vamos conversar?</Typography>
      </Grid>
      <Grid item display="flex" gap="2px">
        <Icon sx={{ width:{xs:"50px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius: 50 }}><img src="/whats.ico" alt="whatsapp" width="50px" height="50px" />
        </Icon>
        <Icon sx={{ width:{xs:"50px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius: 50 }}><img src="/linkedin.ico" alt="linkedin" width="50px" height="50px" />
        </Icon>
        <Icon sx={{ width:{xs:"50px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius: 50 }}><img src="/insta.ico" alt="instagram" width="50px" height="50px" />
        </Icon>
        <Icon sx={{ width:{xs:"50px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius: 50 }}><img src="/gmail.ico" alt="gmail" width="50px" height="50px" />
        </Icon>
        <Icon sx={{ width:{xs:"50px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius: 50 }}><img src="/face.ico" alt="facebook" width="50px" height="50px" />
        </Icon>
        
      </Grid>
    </Grid>
    )
}

