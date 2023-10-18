import { Avatar, Box, CircularProgress, Grid, Icon, LinearProgress, Typography } from "@mui/material"
import { url } from "inspector"


export const Ferramentas = () => {
  return (
    <Grid sx={{ width: "100%", height: { xs: "550px", sm: "350px", md: "100%"}, background:"#6A0C0B" }} id="icones">
      <Grid padding={2} item textAlign="center"  >
        <Typography color="#FBCA03" variant="h5" sx={{ paddingTop: { xs: "20px", md: "170px" }, paddingBottom: { xs: "10px", md: "40px" } }}>Ferramentas que uso:</Typography>
      </Grid>
      <Grid container display="flex" sx={{ gap: { xs: "20px", md: "20px" }, justifyContent: "center", paddingTop: { xs: "30px", md: "80px" }, flexWrap: { xs: "wrap" }, padding: "40px" }}>
        <Grid item  >
          <Icon sx={{ width: { xs: "70px", md: "80px" }, height: { xs: "50px", md: "80px" }, borderRadius: 50 }}><img src="/iconessvg/js.svg" alt="javascript" width="50px" height="50px" /></Icon>
          <LinearProgress variant="determinate" color="primary" value={70} />
          <Typography color="#FBCA03">70%</Typography>
        </Grid>
        <Grid item  >
          <Icon sx={{ width: { xs: "70px", md: "80px" }, height: { xs: "50px", md: "80px" }, borderRadius: 50 }}><img src="/iconessvg/css.svg" alt="css" width="50px" height="50px" /></Icon>
          <LinearProgress variant="determinate" color="primary" value={80} />
          <Typography color="#FBCA03">80%</Typography>
        </Grid>
        <Grid item  >
          <Icon sx={{ width: { xs: "70px", md: "80px" }, height: { xs: "50px", md: "80px" }, borderRadius: 50 }}><img src="/iconessvg/html.svg" alt="html" width="50px" height="50px" /></Icon>
          <LinearProgress color="primary" variant="determinate" value={100} />
          <Typography color="#FBCA03">100%</Typography>
        </Grid>
        <Grid item  >
          <Icon sx={{ width: { xs: "70px", md: "80px" }, height: { xs: "50px", md: "80px" }, borderRadius: 50 }}><img src="/iconessvg/next.svg" alt="nextjs" width="50px" height="50px" /></Icon>
          <LinearProgress color="primary" variant="determinate" value={80} />
          <Typography color="#FBCA03">80%</Typography>
        </Grid>
        <Grid item  >
          <Icon sx={{ width: { xs: "70px", md: "80px" }, height: { xs: "50px", md: "80px" }, borderRadius: 50 }}><img src="/iconessvg/github.svg" alt="github" width="50px" height="50px" /></Icon>
          <LinearProgress color="primary" variant="determinate" value={100} />
          <Typography color="#FBCA03">100%</Typography>
        </Grid>
        <Grid item  >
          <Icon sx={{ width: { xs: "70px", md: "80px" }, height: { xs: "50px", md: "80px" }, borderRadius: 50 }}><img src="/iconessvg/git.svg" alt="git" width="50px" height="50px" /></Icon>
          <LinearProgress color="primary" variant="determinate" value={100} />
          <Typography color="#FBCA03">100%</Typography>
        </Grid>
        <Grid item  >
          <Icon sx={{ width: { xs: "70px", md: "80px" }, height: { xs: "50px", md: "80px" }, borderRadius: 50 }}><img src="/iconessvg/python.svg" alt="python" width="50px" height="50px" /></Icon>
          <LinearProgress color="primary" variant="determinate" value={60} />
          <Typography color="#FBCA03">60%</Typography>
        </Grid>
        <Grid item  >
          <Icon sx={{ width: { xs: "70px", md: "80px" }, height: { xs: "50px", md: "80px" }, borderRadius: 50 }}><img src="/iconessvg/exel.svg" alt="exel" width="50px" height="50px" /></Icon>
          <LinearProgress color="primary" variant="determinate" value={100} />
          <Typography color="#FBCA03">100%</Typography>
        </Grid>
        <Grid item  >
          <Icon sx={{ width: { xs: "70px", md: "80px" }, height: { xs: "50px", md: "80px" }, borderRadius: 50 }}><img src="/iconessvg/typescript.svg" alt="typescript" width="50px" height="50px" /></Icon>
          <LinearProgress color="primary" variant="determinate" value={70} />
          <Typography color="#FBCA03">70%</Typography>
        </Grid>
        <Grid item  >
          <Icon sx={{ width: { xs: "70px", md: "80px" }, height: { xs: "50px", md: "80px" }, borderRadius: 50 }}><img src="/iconessvg/react.svg" alt="react" width="50px" height="50px" /></Icon>
          <LinearProgress color="primary" variant="determinate" value={80} />
          <Typography color="#FBCA03">80%</Typography>
        </Grid>
        <Grid item  >
          <Icon sx={{ width: { xs: "70px", md: "80px" }, height: { xs: "50px", md: "80px" }, borderRadius: 50 }}><img src="/iconessvg/mui.svg" alt="MUI" width="50px" height="50px" /></Icon>
          <LinearProgress color="primary" variant="determinate" value={100} />
          <Typography color="#FBCA03">100%</Typography>
        </Grid>
      </Grid>
    </Grid>

  )
}