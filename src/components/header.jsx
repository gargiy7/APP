import Title from './Title';

function header() {
  return (
    <>
    <div className="header">
      {/* <h1>This is Header</h1> */}
      <Title />
      <ul>
        <li><a href="/"> Home</a></li>
        <li><a href="/"> About</a></li>
        <li><a href="/"> Instamart</a></li>
        <li><a href="/"> Cart</a></li>
      </ul>
      </div>
      </>
  )
}
export default header ;