import { Button, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material"


export const Projetos = () => {
  return (
    <Grid id="Projects" width="100%" sx={{ height: { xs: "1150px", md: "100%" }, background:"#6A0C0B" }}>
      <Grid item textAlign="center"  >
        <Typography color="#FBCA03" variant="h5" sx={{ paddingTop: { xs: "30px", md: "80px" }, paddingBottom: { xs: "10px", md: "40px" } }}>Alguns projetos:</Typography>
      </Grid>
      <Grid gap={2} sx={{ display: { xs: "flex", md: "flex" }, alignItems: { xs: "center", md: "center" }, flexDirection: { xs: "column", md: "row" }, justifyContent: { md: "center" }, marginTop: { xs: "20px  ", md: "80px" }, flexWrap: { md: "no-wrap" }}}>
        <Card sx={{ maxWidth:"300px",background:"#AA0505"}}>
          <CardMedia
            sx={{ height: 140 }}
            image="projeto1.jpeg"
            title="Findmybeer"
          />
          <CardContent>
            <Typography color="#FBCA03" gutterBottom variant="h5" component="div">
              Find my beer
            </Typography>
            <Typography color="#FBCA03" variant="body2">
              Em andamento...Tem como objetivo me fornecer na tela uma lista de cervejarias a partir da localização do usuário.
            </Typography>
          </CardContent>
          <CardActions>
            <Link href="https://github.com/lemosdiego/find-my-beer" target="_blank">
              <Button sx={{color:"#FBCA03",background:"#6A0C0B"}}>Repositório</Button>
            </Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth:"300px",background:"#AA0505"}}>
          <CardMedia
            sx={{ height: 140 }}
            image="projeto2.jpeg"
            title="Cadastro"
          />
          <CardContent>
            <Typography color="#FBCA03" gutterBottom variant="h5" component="div">
              Cadastro de Usuário
            </Typography>
            <Typography color="#FBCA03" variant="body2">
              Em andamento...Tem como objetivo um formulário de cadastro de usuário no banco de dados.
            </Typography>
          </CardContent>
          <CardActions>
            <Link href="https://github.com/lemosdiego/Formulario" target="_blank">
              <Button sx={{color:"#FBCA03",background:"#6A0C0B"}}>Repositório</Button>
            </Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth:"300px",background:"#AA0505"}}>
          <CardMedia
            sx={{ height: 140 }}
            image="projeto3.jpeg"
            title="lista de tarefas"
          />
          <CardContent>
            <Typography color="#FBCA03" gutterBottom variant="h5" component="div">
              Lista de tarefas
            </Typography>
            <Typography color="#FBCA03"  variant="body2">
              Lista de tarefas básica, feita no inicio do aprendizado tecnologias usadas HTML5 CSS3
              JavaScript
            </Typography>
          </CardContent>
          <CardActions>
            <Link href="https://github.com/lemosdiego/Tarefas-Diarias" target="_blank">
              <Button sx={{color:"#FBCA03",background:"#6A0C0B"}}>Repositório</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}