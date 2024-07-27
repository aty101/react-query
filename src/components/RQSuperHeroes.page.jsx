import axios from "axios"
import { useQuery } from "react-query"
export const RQSuperHeroesPage = () => {
  useQuery("super-heros",()=>{
    return axios.get()
  })
  return <h2>React Query Super Heroes Page</h2>
}
