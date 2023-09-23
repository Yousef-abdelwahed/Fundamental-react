import { useEffect, useState } from "react";
import Tour from "./Tour";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const TourMainComponent = () => {
  const [tours, setTours] = useState([]);
  //   const [readMore, setReadMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const fetchUrl = async () => {
    setLoading(true);
    try {
      const request = await fetch(url);
      const data = await request.json();
      setLoading(false);

      setTours(data);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <section>
        <button className="btn btn-primary" onClick={() => fetchUrl()}>
          Rerender
        </button>{" "}
      </section>
    );
  }
  return (
    <main>
      <Tour tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default TourMainComponent;
