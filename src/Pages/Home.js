import HeroSection from "../Component/HeroSection";
import React from 'react'
import Card from "../Component/Card";
import Introduction from "../Component/Introduction";
import FeatureBlog from "../Component/FeatureBlog";
import SellingInfo from "../Component/SellingInfo";

function Home() {
    window.scrollTo(0, 0)
    return (
        <>
            <HeroSection/>
            <Card/>
            <SellingInfo/>
            <FeatureBlog/>
            <Introduction/>
        </>
    )
}

export default Home

