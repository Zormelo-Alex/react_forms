import { useRef, useState } from "react";
const Forme = () => {
  
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");

        const usernameRef = useRef();
        const passwordRef = useRef();

        console.log(username,password);
        const handleSubmit = (e)=>{
            e.preventDefault();
            //console.log(username, password);
            console.log(usernameRef.current.value, passwordRef.current.value);
        };

   
  return (
    <div className="bg-yellow-200 h-screen flex w-screen justify-center items-center">
        <form action="" className="h-[400px] w-[400px] bg-gray-200 rounded-3xl shadow-2xl flex flex-col px-10 gap-10 py-6">
            <div className="place-self-center">
                <h1 className="text-2xl font-bold text-gray-700"> Test Login</h1>
                <small className="text-xs italic font-light text-gray-700">
                     just texting this out
                </small>
            </div>
            <div>
                <label>Email/Username: </label>
                <input type="text" required placeholder="enter name" className="w-full h-10 outline-none border-emerald-700 bg-white px-5"
                ref={usernameRef}
                onChange={(e)=> setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input type="text" required placeholder="password" className="w-full h-10 outline-none border-emerald-700 bg-white px-5"
                ref={passwordRef}
                />
            </div>
            <button className="w-full h-14 text-center text-white font-bold bg-emerald-600 hover:bg-emerald-700 rounded-full">
                Login
            </button>
        </form>

    </div>
  )
}

export default Forme