import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { BsCurrencyDollar } from "react-icons/bs";
import axios from "axios";
import { useContext } from "react";
import NavigationContext from "../context/Navigation";

const BestDeals = () => {
    const [items, setItems] = useState([]);
    const [successModal, setSuccessModal] = useState(false); // Step 1
    const [successMessage, setSuccessMessage] = useState(""); // Step 2
    const { addCart } = useContext(NavigationContext);

    useEffect(() => {
        handleSubmit("music").then((data) => {
            const temp = data.map((item) => {
                return { url: item.urls.small, id: item.id, likes: item.likes,width:item.width };
            });
            setItems(temp);
        });
    }, []);

    const handleSubmit = async (term) => {
        const response = await axios.get("https://api.unsplash.com/search/photos?page=1&per_page=30", {
            headers: {
                Authorization: "Client-ID jnL-jP9N8PGq07W2t9LOjM-5vTtAdinxQUJbJKCBOOg",
            },
            params: {
                query: term,
            }
        });
        return response.data.results;
    };

    const handleAddToCart = (item) => {
        addCart(item);
        showSuccessModal("Item added to cart"); // Show success modal with a message
    };

    const showSuccessModal = (message) => {
        setSuccessMessage(message);
        setSuccessModal(true);

        // Hide the success modal after 5 seconds
        setTimeout(() => {
            setSuccessModal(false);
        }, 2000); // 2000 milliseconds = 5 seconds
    };

    return (
        <div className="container">
            {/* ...existing code... */}
            <div className="show">
                {items.map((item) => {
                    return (
                        <div key={item.id} className="box">
                            <img src={item.url} alt="" onClick={() => handleAddToCart(item)}></img>
                            <h2>
                                <FcLike className="like" /> {item.likes}
                            </h2>
                            <p>
                                Cost - <BsCurrencyDollar color="green" /> {item.width}
                            </p>
                        </div>
                    );
                })}
            </div>
            {successModal && (
            <div className="modal">
                    <p>{successMessage}</p>
            </div>
            )}
        </div>
    );
};

export default BestDeals;
