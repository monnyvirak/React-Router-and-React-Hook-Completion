import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-4">
      <h2 className="text-primary">Home Page</h2>
      <p className="lead">You clicked {count} times</p>
      <button 
        className="btn btn-success" 
        onClick={() => setCount(count + 1)}
      >
        Click Me
      </button>
    </div>
  );
}

export default Home;
