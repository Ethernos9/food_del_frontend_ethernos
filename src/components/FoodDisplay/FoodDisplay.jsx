
import "./FoodDisplay.css"
import FoodItem from '../FoodItem/FoodItem'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
const FoodDisplay = ({category}) => {
  const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id = "food-display">
       <h2>Top Dishes Near You</h2>
       <div className='food-display-list'>
        {
          food_list.map((item,index)=>{
               if (category==="All" || category===item.category){
                return <FoodItem key = {item._id} id = {item._id} image= {item.image} name= {item.name} desc= {item.description} price= {item.price}  />
               }
          })
        }
       </div>
    </div>
  )
}

export default FoodDisplay