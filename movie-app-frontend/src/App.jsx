import useSwr from "swr";
import "./App.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {

  const {data, error}= useSwr('http://localhost:8080/movies', fetcher)

  if(error){
    console.log(error);
    return <h1>404 found not </h1>
  }

  if(data){
    console.log(data)
    return <div>
        {data.movies.map((item)=>(
          <div style={{
            display:'flex'
,flexDirection:'column'          }}>
           <span>title: {item.title}</span>
           <span>Director: Name {item.directorName}</span>
           <span>Company: {item.company}</span>
          </div>
        ))}
    </div>;
  }
  //Using useSWR, please fetch from the movie api that you fixed and get some movies and display it in react.
  
}

export default App;
