import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const EcomContext = createContext();

const EcomContextProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [banners, setBanners] = useState([]);
    const [cartItem, setCartItem] = useState({});

    useEffect(() => {
        const fetchProductsData = async () => {
            try {
                const response = await axios.get("https://ecommerce-jht1.onrender.com/get-products");
                setProducts(response.data.products); // Assuming response.data is the product array
            } catch (err) {
                console.log("Error: " + err);
            }
        };

        const fetchBannerData = async () => {
            try {
                const response = await axios.get("https://ecommerce-jht1.onrender.com/get-banner");
                setBanners(response.data.banners); // Assuming response.data is the product array
            } catch (err) {
                console.log("Error: " + err);
            }
        };


        fetchProductsData();
        fetchBannerData();
    }, []);

    const deleteFromCart = (itemId, size, quantity) => {
        const updatedData = structuredClone(cartItem);
        updatedData[itemId][size] = quantity;
        setCartItem(updatedData);
    }

    const getCartTotalPrice = () => {
        let totalOriginalPrice = 0;
        let totalDiscountedPrice = 0;
        const priceObj = {};
        for (const items in cartItem) {
            const newData = products.find((item => item._id === items));
            for (const item in cartItem[items]) {
                if (cartItem[items][item] > 0) {
                    totalOriginalPrice += cartItem[items][item] * newData.price;
                    totalDiscountedPrice += cartItem[items][item] * newData.discountedPrice;
                }
            }
        }
        return {
            totalOriginalPrice,
            totalDiscountedPrice
        };
    }


    const getCartCount = () => {
        let totalCount = 0;

        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        totalCount += cartItem[items][item];
                    }
                } catch (error) {
                    console.log("Error", err);
                }
            }
        }
        return totalCount;
    }

    const getCartItem = (itemId, size) => {
        if (!size) {
            toast.error("Select Product Size!");
            return;
        }
        const cartData = structuredClone(cartItem);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItem(cartData);
        toast.success("Product added to cart");
    }

    useEffect(() => {
        console.log(cartItem)
    }, [cartItem])


    const value = {
        products, banners, getCartItem, cartItem, getCartCount, deleteFromCart, getCartTotalPrice
    };

    // console.log("Products in state:", products);
    // console.log("Hey", products) // Logs the products array or object based on response

    return (
        <EcomContext.Provider value={value}>
            {props.children}
        </EcomContext.Provider>
    );
};

export default EcomContextProvider;
