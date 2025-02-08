import { useState } from 'react';

function Dashboard() {
  const [heroes, setHeroes] = useState([{ name: 'Hero1', role: 'Warrior', imageUrl: '', rating: 5 }]);

  return (
    <div>
      <h2>Hello, user</h2>
      <button>Add new hero</button>
      <input type="text" placeholder="Filter by rating, name" />
      <div className="hero-list">
        {heroes.map((hero, index) => (
          <div key={index} className="hero-card">
            <p>{hero.name}</p>
            <p>{hero.role}</p>
            <p>{hero.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
