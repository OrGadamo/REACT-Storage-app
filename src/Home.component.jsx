import Header from "./Header.component";
import Footer from "./Footer.component";
import Employees from "./Employees.component";
export default function Home(props) {
  return (
    <div>
      <Header />
      <h1>Welcome {props.fullName}</h1>
      <Employees />
      <Footer />
    </div>
  );
}
