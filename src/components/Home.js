import { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { BsCurrencyDollar } from "react-icons/bs";
import axios from "axios";
import { useContext } from "react";
import NavigationContext from "../context/Navigation";

const Home = () => {
  const [items, Setitems] = useState([]);
  const { addCart } = useContext(NavigationContext);
  const[message,setmessage]=useState("");

  useEffect(() => {
    handleSubmit("fruits").then((data) => {
      const temp = data.map((item) => {
        return { url: item.urls.small, id: item.id, likes: item.likes ,width:item.width};
      });
      Setitems(temp);
    });
  }, []);

  const handleSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos?page=1&per_page=30", {
      headers: {
        Authorization: "Client-ID jnL-jP9N8PGq07W2t9LOjM-5vTtAdinxQUJbJKCBOOg",
      },
      params: {
        query: term,
      },
    });
    return response.data.results;
  };

  return (
    <div className="container">
      <div className="btns">
        <button
          onClick={() =>
            handleSubmit("cars").then((d) => {
              const temp = d.map((item) => {
                return { url: item.urls.small, id: item.id, likes: item.likes ,width:item.width};
              });
              Setitems(temp);
            })
          }
        >
          Cars
        </button>
        <button
          onClick={() =>
            handleSubmit("Mobiles").then((d) => {
              const temp = d.map((item) => {
                return { url: item.urls.small, id: item.id, likes: item.likes,width:item.width };
              });
              Setitems(temp);
            })
          }
        >
          Mobiles
        </button>
        <button
          onClick={() =>
            handleSubmit("laptops").then((d) => {
              const temp = d.map((item) => {
                return { url: item.urls.small, id: item.id, likes: item.likes ,width:item.width };
              });
              Setitems(temp);
            })
          }
        >
          Laptops
        </button>
        <button
          onClick={() =>
            handleSubmit("shirts").then((d) => {
              const temp = d.map((item) => {
                return { url: item.urls.small, id: item.id, likes: item.likes ,width:item.width};
              });
              Setitems(temp);
            })
          }
        >
          Shirts
        </button>
        <button
          onClick={() =>
            handleSubmit("footwear").then((d) => {
              const temp = d.map((item) => {
                return { url: item.urls.small, id: item.id, likes: item.likes ,width:item.width };
              });
              Setitems(temp);
            })
          }
        >
          Footwear
        </button>
        <button
          onClick={() =>
            handleSubmit("vegetables").then((d) => {
              const temp = d.map((item) => {
                return { url: item.urls.small, id: item.id, likes: item.likes ,width:item.width};
              });
              Setitems(temp);
            })
          }
        >
          Vegetables
        </button>
        {message && (
            <div className="modal">
                    <p>{message}</p>
            </div>
            )}
      </div>
      <div className="show">
        {items.map((item) => {
          return (
            <div key={item.id} className="box">
              <img src={item.url} alt="" onClick={() => {addCart(item)
            setmessage("added")}}></img>
              <h2>
                <FcLike className="like" /> {item.likes}
              </h2>
              <p>
                Cost - <BsCurrencyDollar color="green" />
                {item.width}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
