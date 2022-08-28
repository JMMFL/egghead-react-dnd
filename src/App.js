import { useState } from "react";
import ColumnList from "./components/ColumnList";
import inital from "./data";

export default function App() {
  const [data, setData] = useState(inital);
  return <ColumnList {...data} />;
}
