// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import WhatsapBanner from "@/components/home/whatsap-banner"
import SliderBanner from "@/components/ui/slider-banner"
import IPhoneBanner from "@/components/ui/i-phone-banner"
import PropertyFavouriteCard from "@/components/(property)/property-favourite/property-favourite-card"
import PropertyLayout from "../PropertyLayout"

export default function PropertyFavourite() {
    return (

        <>
            {/* <Header /> */}
            <PropertyLayout>
            <SliderBanner />
            <PropertyFavouriteCard />
            <IPhoneBanner />
            </PropertyLayout>
            {/* <WhatsapBanner /> */}
            {/* <Footer /> */}
        </>

    )
}

