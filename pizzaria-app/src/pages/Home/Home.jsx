import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container container mt-4">

      {/* OUR STORY */}
      <section className="row align-items-center mb-5">
        <div className="col-md-7">
         <h3>Our Story</h3>
            <p>
              At Pizzeria, our love for great food started with one simple idea — pizza should
              be more than just a meal, it should be an experience. What began as a small passion
              for crafting the perfect pan pizza soon turned into a journey of flavors, smiles
              and unforgettable moments.
            </p>
            <p>
              With our signature soft, buttery crust, rich cheese, and fresh toppings, every pizza
              is made to satisfy real cravings. From classic favorites to bold new creations, we
              believe every bite should make you come back for more. Because at Pizzeria, good food
             isn’t just served — it’s celebrated.
            </p>

        </div>

        <div className="col-md-5">
          <img
            src="/images/pizza-2.jpg"
            alt="Ingredients"
            className="img-fluid rounded"
          />
        </div>
      </section>

      {/* INGREDIENTS */}
      <section className="row align-items-center mb-5 flex-md-row-reverse">
        <div className="col-md-7">
          <h3>Ingredients</h3>
            <p>
                We believe great pizza starts with great ingredients. That’s why we use fresh,
                hand-picked vegetables, high-quality cheese, and carefully sourced dough to ensure
                every bite is full of flavor.
            </p>
            <p>
                From farm-fresh produce to rich, creamy toppings, nothing goes into our kitchen
                unless it meets our standards of freshness, taste, and quality.
            </p>

        </div>

        <div className="col-md-5">
          <img
            src="/images/ingredients-2.jpg"
            alt="Fresh Ingredients"
            className="img-fluid rounded"
          />
        </div>
      </section>

      {/* OUR CHEFS */}
      <section className="row align-items-center mb-5">
        <div className="col-md-7">
          <h3>Our Chefs</h3>
          <p>
            Behind every great pizza is a skilled chef who loves what they do. Our team combines
            experience, creativity, and precision to deliver flavors that truly stand out.
          </p>
          <p>
            Every recipe is crafted with passion, ensuring consistent quality and unforgettable
            taste in every bite.
          </p>

        </div>

        <div className="col-md-5">
          <img
            src="/images/chef.jpg"
            alt="Our Chef"
            className="img-fluid rounded"
          />
        </div>
      </section>

      {/* DELIVERY */}
      <section className="row align-items-center mb-5">
        <div className="col-md-5">
          <img
            src="/images/delivery.jpg"
            alt="Fast Delivery"
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-7">
          <h3>45-Minute Delivery</h3>
          <p>
            We know your cravings can’t wait. That’s why our pizzas are prepared fresh and
            delivered hot to your doorstep within 45 minutes — without compromising on quality
            or taste.
          </p>

        </div>
      </section>

    </div>
  );
};

export default Home;
