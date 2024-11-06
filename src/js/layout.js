import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import Home from "./views/home"; 
import Detail from "./views/detail"; 
import Favorites from "./views/favorites"; 
import injectContext from "./store/appContext";
import Navbar from "./component/navbar"; 
import { Footer } from "./component/footer";
import { SWAPIProvider } from "./context/SWAPIContext";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <SWAPIProvider>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/detail/:id" element={<Detail />} />
                            <Route path="/favorites" element={<Favorites />} />
                            <Route path="*" element={<h1>Not found!</h1>} />
                        </Routes>
                    </SWAPIProvider>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
