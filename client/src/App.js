import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Auth } from "./pages/auth";
import { CreateRecipe } from "./pages/create-recipe";
import { Home } from "./pages/home";
import { SavedRecipes } from "./pages/saved-recipes";

import BarC from "./Bar";
import PieC from "./Pie";
import Displat from "./displat";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/bar" element={<BarC />} />
          <Route path="/pie" element={<PieC />} />
          <Route path="/display" element={<Displat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
{/*import { useEffect, useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import Chart from 'chart.js/auto';
import PieChart from "./components/PieChart";

function App() {
  let savedRecipes=[]
  let label=[]
  let gain=[]
  =-----------{const fetchSavedRecipes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/check/checkitems`
      );
       setSavedRecipes(response.data);
       savedRecipes.map((data) =>setLabel(old=>[...old,data.year]))
       savedRecipes.map((data) =>setGain(old=>[...old,data.userGain]))
      label.map((data) =>console.log(data))
      gain.map((data) =>console.log(data))
      
    } catch (err) {
      console.log(err);
    }
  };}=--------
  const fetchUserData = async () => {
    fetch("http://localhost:3001/check/checkitems")
      .then(response => {
    
        return response.json()
      
      })
      .then(data => {
        let val=data;
        val.map(x=>
          {
            savedRecipes.push(x);
            label.push(x.year);
            gain.push(x.userGain)
          })
        console.log(gain)
        console.log(label)
      })
      
  }
  useEffect( () => {
    
    fetchUserData();
  });
  
  const [userData, setUserData] = useState({
    labels: label,
    datasets: [
      {
        label: "Users Gained",
        data: gain,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,

      },
    ],
  });

return ( <div className="App">
<div style={{ width: 700 }}>
  <BarChart chartData={userData} />
 


  
</div>

</div>
  );
}

export default App;

*/}