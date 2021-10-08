import React, {useEffect} from "react";
import './App.css';
import axios from "axios";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import AppRouters from "./components/AppRouters/AppRouters";
import Sidebar from "./components/Sidebar/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {bucketsOperations, bucketsSelectors} from "./store/shop";

const title = 'Самый лучший магазин ведёрок';

const App = () => {

    const dispatch = useDispatch()
    const buckets = useSelector(bucketsSelectors.getBuckets())
    const isLoading = useSelector(bucketsSelectors.isLoading())

    useEffect(() => {
        setTimeout(() => {
            axios("/api/shop")
                .then(res => {
                    dispatch(bucketsOperations.setBuckets(res.data))
                })
        }, 500)
    }, [dispatch])

    return (
        <div>
            {!isLoading && <Loader/>}
            {isLoading &&
            <div className="mainContent">
                <div>
                    <Header title={title}/>
                    <Sidebar/>
                </div>
                <AppRouters
                    cards={buckets}
                />
                <Footer/>
            </div>}
        </div>
    );

}

export default App