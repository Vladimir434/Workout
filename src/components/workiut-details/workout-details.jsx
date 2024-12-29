import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { instance } from "../../api/instonse.api"

const WorkoutDetails = () => {
  const {id} = useParams()
  const [data, setData] = useState()
  useEffect(() => {
    const getDetails = async() => {
      const token = localStorage.getItem('token')
      const details = await instance.get(`/workouts/${id}/`, {headers: {
        'Authorization': `Bearer ${token}`
      }})
      setData(details.data)
    }
    getDetails()
  },[id])
  console.log(data);
  
  return (
    <div>
      {data?.name}
    </div>
  )
}

export default WorkoutDetails