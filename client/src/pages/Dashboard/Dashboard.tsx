import { useState } from "react";
import Form from "../Components/Form/Form";
import { useAppVM } from "./DashboardVM";
import Card from "../Components/Card/Card";
import FormTitle from "../Components/FormTitle/FormTitle";

function Dashboard() {
const { heros } = useAppVM();

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
      <FormTitle title="Hello User"></FormTitle>
      {showAddButton && (
        <button onClick={handleToggleForm}>Add new hero</button>
      )}
      {showForm && (
        <Form fields={heroFields} buttonLabel="Add" onSubmit={handleAddHero} />
      )}

      <div className="hero-list">
        {heros.map((hero, index) => (
          <Card key={index} name={hero.name} imageUrl={hero.imageUrl} role={hero.role} rating={hero.rating}></Card>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
