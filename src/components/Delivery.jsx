function Delivery() {
  return (
    <div className="container">
      <div className="delivery-container">
        <p className="delivery-name">Delivery</p>
        <div className="delivery">
          <div>
            <p className="delivery-title">
              <span> A Moments Of</span> <br />
              Delivered On Right Time & Place
            </p>

            <p className="delivery-info">
              Food Khan is a restaurant, bar and coffee roastery located on a
              busy corner site in Farringdon's Exmouth Market. With glazed
              frontage on two sides of the building, overlooking the market and
              a bustling London inteon.
            </p>

            <div className="delivery-a">
              <div className="delivery-b">
                <div>
                  <p className="delivery-b-name">Delivery Order</p>
                  <p className="delivery-b-num">+880 1630 225 015</p>
                </div>
                <figure className="delivery-b-img">
                  <img src="./image/food 1.png" />
                </figure>
              </div>
              <button className="delivery-btn">Order Now</button>
            </div>
          </div>

          <div>
            <figure className="delivery-food-delivery">
              <img src="./image/image_delivery.png" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
