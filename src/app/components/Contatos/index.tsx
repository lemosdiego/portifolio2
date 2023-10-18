import { Grid, Icon, Link, Typography } from "@mui/material"


export const Contact = () => {
  return (
  <Grid id="contatos" container alignItems="center" height="200px" width="100%" justifyContent="center" display="flex" gap={1} sx={{padding:{xs:"20px"},background:"#67C7EB"}}>
      <Grid item sx={{paddingBottom:{md:"30px"}}}>
        <Typography variant="h6">Vamos conversar?</Typography>
      </Grid>
      <Grid item display="flex" gap="2px">
        <Link href="https://wa.me/5581982383803" target="_blank" >
        <Icon sx={{ width:{xs:"50px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius: 50}}><img src="/iconessvg/whats.svg" alt="whatsapp" width="50px" height="50px" />
        </Icon>
        </Link>
        <Link href="https://www.linkedin.com/in/washington-lemos-033177186/" target="_blank">
        <Icon sx={{ width:{xs:"50px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius: 50 }}><img src="/iconessvg/linkedin.svg" alt="linkedin" width="50px" height="50px" />
        </Icon>
        </Link>
        <Link href="https://www.instagram.com/washington.lemos_/" target="_blank">
        <Icon sx={{ width:{xs:"50px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius: 50 }}><img src="/iconessvg/insta.svg" alt="instagram" width="50px" height="50px" />
        </Icon>
        </Link>
       <Link>
       <Icon sx={{ width:{xs:"50px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius: 50 }}><img src="/iconessvg/gmail.svg" alt="gmail" width="50px" height="50px" />
        </Icon>
       </Link>
       <Link href="https://www.facebook.com/washington.lemos.961" target="_blank">
       <Icon sx={{ width:{xs:"50px", md:"80px"}, height:{xs:"50px", md:"80px"}, borderRadius: 50 }}><img src="/iconessvg/face.svg" alt="facebook" width="50px" height="50px" />
        </Icon>
       </Link>
        
      </Grid>
    </Grid>
    )
}

