import './App.css';
import imageData from './components/DataComponents';

function App(props) {
  const imgData = props.myData();
  console.log(imageData)
  return (
  <div>
    <div><h1> Kalvium gallary</h1></div>
    <div className='image'>
      {imgData.map((item)=>{
        return <img key={item.id} src={item.img}/>
      })}
    </div>
  </div>
  )
}

export default App;
