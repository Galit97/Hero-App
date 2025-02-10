import { useState } from "react";
import Form from "../Components/Form/Form";

function Dashboard() {
  const [heroes, setHeroes] = useState([
    { name: "Hero1", role: "Warrior", imageUrl: "", rating: 5 },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [showAddButton, setshowAddButton] = useState(true);

  const heroFields = [
    {
      name: "name",
      type: "text",
      placeholder: "Enter hero name",
    },
    {
      name: "role",
      type: "text",
      placeholder: "Enter hero role",
    },
    {
      name: "rating",
      type: "number",
      placeholder: "Enter hero rating",
    },
  ];

  const handleAddHero = (data: Record<string, string>) => {
    console.log("Data from form:", data);
    setShowForm(false);
    setshowAddButton(true);
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
    setshowAddButton(false);
  };
  return (
    <div>
      <h2>Hello, user</h2>
      {showAddButton && (
        <button onClick={handleToggleForm}>Add new hero</button>
      )}
      {showForm && (
        <Form fields={heroFields} buttonLabel="Add" onSubmit={handleAddHero} />
      )}

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
