import "./styles.css";
import st from "../src/st.jpg";

export default function App() {
  return (
    <div className="App">
      <h1>Student Details</h1>
      <img src={st} />
      <h3 style={{ marginRight: "300px" }}>Name: </h3> <lable> </lable>
      <h3 style={{ marginRight: "281px" }}>Roll No: </h3>
      <h3 style={{ marginRight: "280px" }}>Branch: </h3>
      <h3 style={{ marginRight: "310px" }}>Div: </h3>
    </div>
  );
}
