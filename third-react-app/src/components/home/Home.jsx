import {useState} from 'react'
function Home()
{
   const [count,setCount]=useState(0)
   function handleincre()
   {
     setCount(count+1)
   }
   function handledecre() {
     setCount(count-1)
   }
   function handlereset() {
    setCount(0)
  }
  
  return(
    <div className="text-center">
      <h1>Welcome to app</h1>
      {/* <img className="p-4 rounded-pill" src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg" width="500px" alt="" />
      <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero eligendi veniam odit omnis. Debitis repellendus eligendi illo praesentium veniam soluta quia eveniet perspiciatis inventore, corporis sed, quod reprehenderit ducimus quidem quae omnis. Maiores deleniti incidunt vel vero eos saepe laborum neque sit facilis possimus, mollitia, accusantium, earum sunt? Debitis, repellendus numquam iusto praesentium eius doloremque necessitatibus corrupti itaque officia voluptates. Aliquam minus animi consectetur alias hic quibusdam distinctio ipsum labore. Similique a recusandae illo assumenda, qui quibusdam cumque illum. Praesentium itaque fuga obcaecati dignissimos beatae alias id, iste nostrum! Unde consequatur fugit explicabo, illum inventore minus reprehenderit. Quibusdam, quisquam.</p>
      <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero eligendi veniam odit omnis. Debitis repellendus eligendi illo praesentium veniam soluta quia eveniet perspiciatis inventore, corporis sed, quod reprehenderit ducimus quidem quae omnis. Maiores deleniti incidunt vel vero eos saepe laborum neque sit facilis possimus, mollitia, accusantium, earum sunt? Debitis, repellendus numquam iusto praesentium eius doloremque necessitatibus corrupti itaque officia voluptates. Aliquam minus animi consectetur alias hic quibusdam distinctio ipsum labore. Similique a recusandae illo assumenda, qui quibusdam cumque illum. Praesentium itaque fuga obcaecati dignissimos beatae alias id, iste nostrum! Unde consequatur fugit explicabo, illum inventore minus reprehenderit. Quibusdam, quisquam.</p> */}
     <div>
        <div className="borde ">1</div>
     </div>
     <h1>count:{count}</h1>
     <button className="btn btn-success m-4"onClick={handleincre}>Increment</button>
     <button className="btn btn-info m-4"onClick={handledecre}>Decrement</button>
     <button className="btn btn-danger m-4"onClick={handlereset}>Reset</button>
    
    </div>
  )
}
export default Home;