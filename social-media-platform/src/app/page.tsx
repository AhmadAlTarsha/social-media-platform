
import Link from "next/link";
// import Posts from "./posts/page";
// import HomeScreen from "./Home/page";


export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="text-center">
      <p className="mb-4 text-lg text-gray-800">ConnectSphere is your go-to platform for meaningful social connections. Discover, share, and connect in a vibrant community tailored to your interests.</p>
      <Link 
    
        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out" href='/posts'        >
        Enter ConnectSphere
      </Link>
    </div>
  </div>
  );
}
