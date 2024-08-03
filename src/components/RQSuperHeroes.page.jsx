import axios from "axios";
import { useQuery } from "react-query";
export const RQSuperHeroesPage = () => {
  const fetchData = () => {
    return axios.get("http://localhost:4000/heros");
  };
  const {isLoading,data,error}= useQuery("super-heros", fetchData);

  if(isLoading){
    return <h2>Loading...</h2>
  }
  if(error){
    return <h2>{error.message}</h2>
  }

  return <>
    {
      data.data.map((e)=>{
        return <div key={e.name}>{e.name}</div>
      })
    }

  </>;
};
