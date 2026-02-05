// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import WhatsapBanner from "@/components/home/whatsap-banner"
import SliderBanner from "@/components/ui/slider-banner"
import IPhoneBanner from "@/components/ui/i-phone-banner"
import MyPropertyCard from "@/components/(property)/my-property/my-property-card"
import PropertyLayout from "../PropertyLayout"

export default function MyProperty() {
    return (

        <>
            <PropertyLayout>
            <SliderBanner  />
            <MyPropertyCard />
            <IPhoneBanner />
            </PropertyLayout>
            {/* <WhatsapBanner /> */}
            {/* <Footer /> */}
        </>

    )
}

