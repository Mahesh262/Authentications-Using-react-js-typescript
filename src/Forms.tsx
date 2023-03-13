import * as React  from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

interface Iddata{
  name:string,
  password:any

}
interface AuthResponse {
  token: string;
  user: {
    name: string;
  };
}
export default function Forms() {
  const [user,setUser]= React.useState<Iddata>({
    name:"",
    password:"",
  })
  const history= useNavigate()
   const {name,password}=user
  const [authResponse, setAuthResponse] = React.useState<AuthResponse | null>(null)


const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
     setUser({...user,[e.target.name]:e.target.value})
   }
    const handlesubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()

      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts/1/comments', {
          name:name,
          password:password
        });
         setAuthResponse(response.data)
         const expiresAt = Date.now() + 1* 60 * 1000;
        const dataToStore = { name:name,password:password, expiresAt };
          sessionStorage.setItem('user', JSON.stringify(dataToStore));
          history('/RedirectedForm')
      } catch (error) {
        console.error(error);
      } finally{
        console.log(user)
      }
    }
  return (
    <div className="App">
      <h1>Post Call</h1>
      <h2>Start</h2>
      <form onSubmit={handlesubmit}>
      <input type='text' name='name' value={name} onChange={handleChange} />
      <input type="password" name='password' value={password} onChange={handleChange}/>
      <button type='submit'>Submit</button>
</form>
      {authResponse ? (<div>Hellow</div>): (<div>Null</div>)}
    </div>
  );
}

