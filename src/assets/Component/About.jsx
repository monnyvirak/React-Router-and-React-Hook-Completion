import { useState, useEffect } from "react";

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-info">About Page</h2>
      <ul className="list-group">
        {data.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
