import Message from "./Message";
import Student from "./Student";
import ListGroup from "./components/ListGroup";
import Commerce from "./Commerce.jsx";
import Profile from "./components/Profile";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import About from "./components/About";
import DateTimeDisplay from "./components/DateTimeDisplay.jsx"
import Counter from "./components/Counter";
import LoginStatus from "./components/LoginStatus";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <LoginStatus />

      <Message />
      <Student />
      <ListGroup />
      <Counter />
      <div>
        <DateTimeDisplay />
      </div>
      <Commerce />

      <Profile
        image="https://images.pexels.com/photos/17689342/pexels-photo-17689342.jpeg"
        name="Steve Oduor"
        description="Learning React Basics as I try some assignments"
      />

    
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "140px",
          margin: "40px auto",
        }}
      >
        <Button text="Add to cart" />
        <Button text="Check Out" />
        <Button text="Submit" />
      </div>   

    
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
          padding: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <ProductCard
          image="https://images.pexels.com/photos/9229979/pexels-photo-9229979.jpeg"
          name="HP 1040 G7 Laptop"
          price="46,000"
        />

        <ProductCard
          image="https://images.pexels.com/photos/1359327/pexels-photo-1359327.jpeg"
          name="Lenovo T14"
          price="66,000"
        />

        <ProductCard
          image="https://images.pexels.com/photos/9474023/pexels-photo-9474023.jpeg"
          name="Dell XPS"
          price="80,000"
        />

        <ProductCard
          image="https://images.pexels.com/photos/9229979/pexels-photo-9229979.jpeg"
          name="HP 1040 G7 Laptop"
          price="46,000"
        />

        <ProductCard
          image="https://images.pexels.com/photos/35056963/pexels-photo-35056963.jpeg"
          name="Asus Zenbook"
          price="46,000"
        />

        <ProductCard
          image="https://images.pexels.com/photos/4581903/pexels-photo-4581903.jpeg"
          name="Graphics Card: GTX 1080T"
          price="46,000"
        />

        <ProductCard
          image="https://images.pexels.com/photos/7080083/pexels-photo-7080083.jpeg"
          name="HP 1040 G6 Laptop"
          price="37,000"
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
