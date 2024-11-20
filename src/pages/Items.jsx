//css
import "./pages.css";
function Items() {
  return (
    <div>
      {/* items abs bg */}
      <figure className="items-abs">
        <img src="./image/image_items_bg.png" />

        <div className="items-abs-texts">
          <p className="items-abs-title">ITEMS</p>
          <p className="items-abs-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            mod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      </figure>
      {/* items abs bg */}

      {/* items search */}
      <div className="items-search-container">
        <div className="items-search">
          <p className="items-search-title">
            It’s the food and groceries you Love, delivered
          </p>

          <form>
            <div className="form-input">
              <input type="search" placeholder="Search your Items" />
            </div>
            <button type="submit">Go</button>
          </form>
        </div>
      </div>
      {/* items search */}

      {/* items box */}
      <div className="itemsBox-container">
        <div className="itemsBoxes container">
          <div className="itemsBoxA">
            <div className="itemsBoxA-a">
              {dataA.map((itemA) => {
                return (
                  <div key={itemA.id} className="itemsBox">
                    <div>
                      <p className="itemsBox-title">{itemA.title}</p>
                      <p className="itemsBox-info">{itemA.info}</p>
                      <p className="itemsBox-price">{itemA.price}</p>
                    </div>
                    <figure>
                      <img src={itemA.img} className="itemsBox-smds" />
                    </figure>
                  </div>
                );
              })}
            </div>

            <div className="itemsBoxA-b">
              <figure className="itemsBox-offerSmd">
                <img src="./image/image_itemsList_ooffer.png" />
              </figure>
            </div>
          </div>

          <div className="itemsBoxB">
            {dataB.map((itemB) => {
              return (
                <div key={itemB.id} className="itemsBox">
                  <div>
                    <p className="itemsBox-title">{itemB.title}</p>
                    <p className="itemsBox-info">{itemB.info}</p>
                    <p className="itemsBox-price">{itemB.price}</p>
                  </div>
                  <figure className="itemsBox-smds">
                    <img src={itemB.img} />
                  </figure>
                </div>
              );
            })}
          </div>

          <figure className="itemsBox-offer">
            <img src="./image/image_itemsList_ooffer_2.png" />
          </figure>

          <div className="itemsBoxB">
            {dataC.map((itemC) => {
              return (
                <div key={itemC.id} className="itemsBox">
                  <div>
                    <p className="itemsBox-title">{itemC.title}</p>
                    <p className="itemsBox-info">{itemC.info}</p>
                    <p className="itemsBox-price">{itemC.price}</p>
                  </div>
                  <figure className="itemsBox-smds">
                    <img src={itemC.img} />
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
const dataA = [
  {
    id: 1,
    title: "Chicken Supreme Pizza",
    info: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: "From $150",
    img: "./image/image_itemsList_1.png",
  },
  {
    id: 2,
    title: "Hamburger Burger with Beef",
    info: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: "From $150",
    img: "./image/image_itemsList_2.png",
  },

  {
    id: 3,
    title: "Belgium waffles with strawberries",
    info: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: "From $150",
    img: "./image/image_itemsList_3.png",
  },
];
const dataB = [
  {
    id: 4,
    title: "Chicken skewers",
    info: "Mutton or lamb biriyani",
    price: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    img: "./image/image_itemsList_4.png",
  },
  {
    id: 5,
    title: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    info: "From $150",
    price: "From $150",
    img: "./image/image_itemsList_5.png",
  },
  {
    id: 6,
    title: "Delicious food on a white plate",
    info: "Spicy fried tubtim fish salad",
    price: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    img: "./image/image_itemsList_6.png",
  },
  {
    id: 7,
    title: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    info: "From $150",
    price: "From $150",
    img: "./image/image_itemsList_7.png",
  },
];
const dataC = [
  {
    id: 8,
    title: "Fresh cola drink with green lime",
    info: "Ice cream cone",
    price: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    img: "./image/image_itemsList_8.png",
  },
  {
    id: 9,
    title: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    info: "From $150",
    price: "From $150",
    img: "./image/image_itemsList_9.png",
  },
  {
    id: 10,
    title: "Chocolate ice cream",
    info: "Chocolate topping for ice cream cups",
    price: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    img: "./image/image_itemsList_10.png",
  },

  {
    id: 11,
    title: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    info: "From $150",
    price: "From $150",
    img: "./image/image_itemsList_11.png",
  },
  {
    id: 12,
    title: "Healthy breakfast",
    info: "Breakfast with coffee and fresh croissants",
    price: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    img: "./image/image_itemsList_12.png",
  },
  {
    id: 13,
    title: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    info: "From $150",
    price: "From $150",
    img: "./image/image_itemsList_13.png",
  },

  {
    id: 14,
    title: "Ried eggs, sausages, zucchini",
    info: "Salad, fried eggs and pastry",
    price: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    img: "./image/image_itemsList_14.png",
  },

  {
    id: 15,
    title: "Topped with chicken, onion, capsicum, black olive & Green chilli",
    info: "From $150",
    price: "From $150",
    img: "./image/image_itemsList_15.png",
  },
];

export default Items;
