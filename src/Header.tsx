import { Link, useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  console.log("UseLocation in Header", location);
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
      </div>
    </>
  );
}
export default Header;
