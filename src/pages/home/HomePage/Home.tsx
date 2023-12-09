import { Typography } from "@mui/material";
import Featured from "../Featured/Featured";
import './style.scss'
import PopularDoctor from "../PopularDoctor/PopularDoctor";
import PopularClinic from "../PopularClinic/PopularClinic";
import Header from "../../../components/layout/header/Header";

const Home = () => {
  return(
    <>
      <Header/>
      <div className="homeContainer">
        
        <Featured/>
        <Typography variant="h1" className="homeTitle">Bác sĩ nổi bật</Typography>
        <PopularDoctor/>
        <Typography variant="h1" className="homeTitle">Bệnh viện nổi bật</Typography>
        <PopularClinic/>
      </div>
    </>
    
  )
};

export default Home;
