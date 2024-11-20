//css
import "./components.css";

function SpecialAll() {
  return (
    <div className="container">
      <div className="specialAll-conatiner">
        <p className="specialAll-title">SPECIALS MANU FOR ALL TIME</p>

        <div className="specialAll-box">
          {data.map((item) => {
            return (
              <div className="specialAll-box-item" key={item.text}>
                <figure>
                  <img src={item.img} />
                </figure>
                <p className="specialAll-box-text">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    id: 1,
    text: "Burger",
    img: "./image/image_specialManu_1.png",
  },
  {
    id: 2,
    text: "Fried chicken",
    img: "./image/image_specialManu_2.png",
  },
  {
    id: 3,
    text: "Doner with Grilled Chicken",
    img: "./image/image_specialManu_3.png",
  },
  {
    id: 4,
    text: "Pizza",
    img: "./image/image_specialManu_4.png",
  },
  {
    id: 5,
    text: "Hot Dogs",
    img: "./image/image_specialManu_5.png",
  },
  {
    id: 6,
    text: "Chicken Skewers",
    img: "./image/image_specialManu_6.png",
  },
  {
    id: 7,
    text: "Greek Salad",
    img: "./image/image_specialManu_7.png",
  },
  {
    id: 8,
    text: "Dahi Puri",
    img: "./image/image_specialManu_8.png",
  },
  {
    id: 9,
    text: "Ice cream with Chocolate",
    img: "./image/9.png",
  },
  {
    id: 10,
    text: "Cocktail Glasses",
    img: "./image/image_specialManu_10.png",
  },
];

export default SpecialAll;
