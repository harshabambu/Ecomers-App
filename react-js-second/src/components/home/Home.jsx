import { sampleContext } from "../../contexts/testContext";
import { useContext } from "react";
function Home()
{
  let {users,setusers}=useContext(sampleContext)
  let {a,setA}=useContext(sampleContext);
  return(
    <div className="text-center">
      <h1>Welcome to app</h1>
      {/* context obj is printing */}
      <h2>{a}</h2>
      <h1>user[0]?.username</h1>
      <img className="p-4 rounded-pill" src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg" width="500px" alt="" />
      <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero eligendi veniam odit omnis. Debitis repellendus eligendi illo praesentium veniam soluta quia eveniet perspiciatis inventore, corporis sed, quod reprehenderit ducimus quidem quae omnis. Maiores deleniti incidunt vel vero eos saepe laborum neque sit facilis possimus, mollitia, accusantium, earum sunt? Debitis, repellendus numquam iusto praesentium eius doloremque necessitatibus corrupti itaque officia voluptates. Aliquam minus animi consectetur alias hic quibusdam distinctio ipsum labore. Similique a recusandae illo assumenda, qui quibusdam cumque illum. Praesentium itaque fuga obcaecati dignissimos beatae alias id, iste nostrum! Unde consequatur fugit explicabo, illum inventore minus reprehenderit. Quibusdam, quisquam.</p>
      <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero eligendi veniam odit omnis. Debitis repellendus eligendi illo praesentium veniam soluta quia eveniet perspiciatis inventore, corporis sed, quod reprehenderit ducimus quidem quae omnis. Maiores deleniti incidunt vel vero eos saepe laborum neque sit facilis possimus, mollitia, accusantium, earum sunt? Debitis, repellendus numquam iusto praesentium eius doloremque necessitatibus corrupti itaque officia voluptates. Aliquam minus animi consectetur alias hic quibusdam distinctio ipsum labore. Similique a recusandae illo assumenda, qui quibusdam cumque illum. Praesentium itaque fuga obcaecati dignissimos beatae alias id, iste nostrum! Unde consequatur fugit explicabo, illum inventore minus reprehenderit. Quibusdam, quisquam.</p>
    </div>
  )
}
export default Home;