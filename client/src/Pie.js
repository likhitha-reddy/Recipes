import { useEffect, useState } from "react";
import PieChart from "./components/PieChart";
import Chart from 'chart.js/auto';


function PieC() {
  let savedRecipes=[]
  let label=[]
  let gain=[]
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
  <PieChart chartData={userData} />
 


  
</div>

</div>
  );
}

export default PieC;

