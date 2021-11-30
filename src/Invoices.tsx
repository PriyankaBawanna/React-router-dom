import { useLocation } from "react-router-dom";
import Header from "./Header";

export default function Invoices() {
  const location = useLocation();
  console.log("UseLocation in Invoices", location);
  return (
    <main style={{ padding: "1rem 0" }}>
      <Header />
      <h2>Invoices</h2>
      <p>my current location is</p>
    </main>
  );
}
