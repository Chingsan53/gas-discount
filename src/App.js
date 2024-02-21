import "./App.scss";
import React from "react";

const numberData = [
  // {
  //   name: "Brett Harding",
  //   phoneNumber: "(931) 357-5569",
  //   gmail: "BrettHarding381@gmail.com",
  //   status: "1 usage available",
  // },
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
    phoneNumber: "(442) 368-2173",
    gmail: "LaraHowarth011@gmail.com",
    status: "3 usage available",
  },
  // {
  //   name: "Lewis Stapleton",
  //   phoneNumber: "(630) 202-2712",
  //   gmail: "LewisStapleton991@gmail.com",
  //   status: "3 usage available",
  // },
  // {
  //   name: "Aaron Reed",
  //   phoneNumber: "(763) 288-3473",
  //   gmail: "AaronReed960@gmail.com",
  //   status: "3 usage available",
  // },
  // {
  //   name: "Ann West",
  //   phoneNumber: "(630) 237-6391",
  //   gmail: "AnnWest079@gmail.com",
  //   status: "3 usage available"
  // },
  // {
  //   name: "Jane Moffett",
  //   phoneNumber: "",
  //   gmail: "JaneMoffett100@gmail.com",
  // },
  // {
  //   name: "Gayle Holland",
  //   phoneNumber: "",
  //   gmail: "GayleHolland593@gmail.com",
  // },
  // {
  //   name: "Marcus Milstead",
  //   phoneNumber: "",
  //   gmail: "MarcusMilstead758@gmail.com",
  // },
  // {
  //   name: "Asa Heffernan",
  //   phoneNumber: "",
  //   gmail: "AsaHeffernan843@gmail.com",
  // },
  // {
  //   name: "Angela Travis",
  //   phoneNumber: "",
  //   gmail: "AngelaTravis898@gmail.com",
  // },
  // {
  //   name: "Cynthia Lachance",
  //   phoneNumber: "",
  //   gmail: "CynthiaLachance667@gmail.com",
  // },
  // {
  //   name: "Shantel Thompson",
  //   phoneNumber: "",
  //   gmail: "ShantelThompson454@gmail.com",
  // },
  // {
  //   name: "Bradley Miller",
  //   phoneNumber: "",
  //   gmail: "BradleyMiller304@gmail.com",
  // },
  // {
  //   name: "Steven Sterling",
  //   phoneNumber: "",
  //   gmail: "StevenSterling931@gmail.com",
  // },
  // {
  //   name: "Sherri Walter",
  //   phoneNumber: "",
  //   gmail: "SherriWalter820@gmail.com",
  // },
  // {
  //   name: "Nicholas Slone",
  //   phoneNumber: "",
  //   gmail: "NicholasSlone030@gmail.com",
  // },
  // {
  //   name: "Emanuel Lewis",
  //   phoneNumber: "",
  //   gmail: "EmanuelLewis377@gmail.com",
  // },
  // {
  //   name: "Thomas Roger",
  //   phoneNumber: "",
  //   gmail: "ThomasRoger531@gmail.com",
  // },
  // {
  //   name: "Barbara Duca",
  //   phoneNumber: "",
  //   gmail: "BarbaraDuca944@gmail.com",
  // },
  // {
  //   name: "William Baltz",
  //   phoneNumber: "",
  //   gmail: "WilliamBaltz495@gmail.com",
  // },
  // {
  //   name: "Gregory Robertson",
  //   phoneNumber: "",
  //   gmail: "GregoryRobertson961@gmail.com",
  // },
  // {
  //   name: "Marvin Ware",
  //   phoneNumber: "",
  //   gmail: "MarvinWare509@gmail.com",
  // },
  // {
  //   name: "Mary Saxton",
  //   phoneNumber: "",
  //   gmail: "MarySaxton956@gmail.com",
  // },
  // {
  //   name: "Richard Bronson",
  //   phoneNumber: "",
  //   gmail: "RichardBronson806@gmail.com",
  // },
  // {
  //   name: "Marcella Kerby",
  //   phoneNumber: "",
  //   gmail: "MarcellaKerby990@gmail.com",
  // },
  // {
  //   name: "Nyla Cyrus",
  //   phoneNumber: "",
  //   gmail: "NylaCyrus132@gmail.com",
  // },
  // {
  //   name: "Tammy Tong",
  //   phoneNumber: "",
  //   gmail: "TammyTong197@gmail.com",
  // },
];

const App = () => {
  return (
    <div className="container page-wrapper">
      {/* <Header /> */}
      <Menu />
      {/* <Footer /> */}
    </div>
  );
};

// const Header = () => {
//   return (
//     <header className="">
//       <h1>Gas Discount</h1>
//     </header>
//   );
// };

const Menu = () => {
  const numbers = numberData;

  return (
    <main className="page-inner">
      <Title />
      <div className="row">
        <div className="el-wrapper">
          <div className="box-up">
            <img className="img" src="./chevron-4.png" alt="" />
            <div className="img-info">
              <div className="info-inner">
                <span className="p-name">Chevron</span>
                <span className="p-company">Phone number</span>
              </div>
              <div className="a-size">
                Remaining: <span className="size">30</span>
              </div>
            </div>
          </div>
          <div className="box-down">
            <div className="h-bg">
              <div className="h-bg-inner"></div>
            </div>
            <a className="cart" href="#">
              <span className="price">Free</span>
              <span className="add-to-cart">
                <span className="txt">Request</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <ul className="contentBox">
        {numbers.map((number) => (
          <Number numberObj={number} key={number.name} />
        ))}
      </ul>
    </main>
  );
};

const Title = () => {
  return (
    <div>
      <h3>
        Hello! Please enjoy these remaining phone numbers for now. We are
        working updating the app to be more use-friendly
      </h3>
    </div>
  );
};

const Number = ({ numberObj }) => {
  return (
    <div>
      <li className="cards-container">
        <div className="card">
          <h3>{numberObj.name}</h3>
          <p>{numberObj.phoneNumber}</p>
          <p>{numberObj.gmail}</p>
          <span>{numberObj.status}</span>
        </div>
      </li>
    </div>
  );
};

// const Footer = () => {
//   return (
//     <footer className="footer">
//       {/* <p>We are updating new phone number daily. Please check back.</p> */}
//       <p>
//         Contact <span>Discord: chinglee</span> if you want a new generated phone
//         number
//       </p>
//     </footer>
//   );
// };

export default App;
