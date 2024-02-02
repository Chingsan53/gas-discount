import "./App.css";
import React from "react";

const numberData = [
  {
    name: "Brett Harding",
    phoneNumber: "(931) 357-5569",
    gmail: "BrettHarding381@gmail.com",
    status: "3 usage available",
  },
  {
    name: "Rick Robertson",
    phoneNumber: "(920) 791-1869",
    gmail: "RickRobertson766@gmail.com",
    status: "3 usage available",
  },
  {
    name: "Steven Adams",
    phoneNumber: "(704) 495-7404",
    gmail: "StevenAdams964@gmail.com",
    status: "2 usage available",
  },
  {
    name: "Greg Stevenson",
    phoneNumber: "(731) 991-3368",
    gmail: "GregStevenson454@gmail.com",
    status: "3 usage available",
  },
  {
    name: "Lara Howarth",
    phoneNumber: "",
    gmail: "LaraHowarth011@gmail.com",
  },
  {
    name: "Lewis Stapleton",
    phoneNumber: "",
    gmail: "LewisStapleton991@gmail.com",
  },
  {
    name: "Aaron Reed",
    phoneNumber: "",
    gmail: "AaronReed960@gmail.com",
  },
  {
    name: "Ann West",
    phoneNumber: "",
    gmail: "AnnWest079@gmail.com",
  },
  {
    name: "Jane Moffett",
    phoneNumber: "",
    gmail: "JaneMoffett100@gmail.com",
  },
  {
    name: "Gayle Holland",
    phoneNumber: "",
    gmail: "GayleHolland593@gmail.com",
  },
  {
    name: "Marcus Milstead",
    phoneNumber: "",
    gmail: "MarcusMilstead758@gmail.com",
  },
  {
    name: "Asa Heffernan",
    phoneNumber: "",
    gmail: "AsaHeffernan843@gmail.com",
  },
  {
    name: "Angela Travis",
    phoneNumber: "",
    gmail: "AngelaTravis898@gmail.com",
  },
  {
    name: "Cynthia Lachance",
    phoneNumber: "",
    gmail: "CynthiaLachance667@gmail.com",
  },
  {
    name: "Shantel Thompson",
    phoneNumber: "",
    gmail: "ShantelThompson454@gmail.com",
  },
  {
    name: "Bradley Miller",
    phoneNumber: "",
    gmail: "BradleyMiller304@gmail.com",
  },
  {
    name: "Steven Sterling",
    phoneNumber: "",
    gmail: "StevenSterling931@gmail.com",
  },
  {
    name: "Sherri Walter",
    phoneNumber: "",
    gmail: "SherriWalter820@gmail.com",
  },
  {
    name: "Nicholas Slone",
    phoneNumber: "",
    gmail: "NicholasSlone030@gmail.com",
  },
  {
    name: "Emanuel Lewis",
    phoneNumber: "",
    gmail: "EmanuelLewis377@gmail.com",
  },
  {
    name: "Thomas Roger",
    phoneNumber: "",
    gmail: "ThomasRoger531@gmail.com",
  },
  {
    name: "Barbara Duca",
    phoneNumber: "",
    gmail: "BarbaraDuca944@gmail.com",
  },
  {
    name: "William Baltz",
    phoneNumber: "",
    gmail: "WilliamBaltz495@gmail.com",
  },
  {
    name: "Gregory Robertson",
    phoneNumber: "",
    gmail: "GregoryRobertson961@gmail.com",
  },
  {
    name: "Marvin Ware",
    phoneNumber: "",
    gmail: "MarvinWare509@gmail.com",
  },
  {
    name: "Mary Saxton",
    phoneNumber: "",
    gmail: "MarySaxton956@gmail.com",
  },
  {
    name: "Richard Bronson",
    phoneNumber: "",
    gmail: "RichardBronson806@gmail.com",
  },
  {
    name: "Marcella Kerby",
    phoneNumber: "",
    gmail: "MarcellaKerby990@gmail.com",
  },
  {
    name: "Nyla Cyrus",
    phoneNumber: "",
    gmail: "NylaCyrus132@gmail.com",
  },
  {
    name: "Tammy Tong",
    phoneNumber: "",
    gmail: "TammyTong197@gmail.com",
  },
];

const App = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>Chevron $1/gallon Discount</h1>
    </header>
  );
};

const Menu = () => {
  const numbers = numberData;

  return (
    <main className="menu">
      <h2>
        Our Phone Numbers give you $1/gallon up to 25 gallon. You can use it up
        to 3 times per number
      </h2>
      <ul className="pizzas">
        {numbers.map((number) => (
          <Number numberObj={number} key={number.name} />
        ))}
      </ul>
    </main>
  );
};

const Number = ({ numberObj }) => {
  return (
    <li className="pizza">
      <div>
        <h3>{numberObj.name}</h3>
        <p>{numberObj.phoneNumber}</p>
        <p>{numberObj.gmail}</p>
        <span>{numberObj.status}</span>
      </div>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>We are updating new phone number daily. Please check back.</p>
    </footer>
  );
};

export default App;
