function Child({setCounter})
{
  function Incre()
  {
    setCounter(c=>c+1);
  }
  function Decre()
  {
    setCounter(c=>c-1);
  }
  return(
    <div className="child">
        <h1>child</h1>
        <div>
          <button onClick={Incre}>Increment</button>
          <button onClick={Decre}>Decrement</button>
        </div>
    </div>
  )
}
export default Child