// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import WhatsapBanner from "@/components/home/whatsap-banner"
import SliderBanner from "@/components/ui/slider-banner"
import IPhoneBanner from "@/components/ui/i-phone-banner"
import PropertyMatchesCard from "@/components/(property)/property-matches/property-matches-card"
import PropertyLayout from "../PropertyLayout"

export default function PropertyMatches() {
    return (
        <>
            {/* <Header /> */}
            <PropertyLayout>
            <SliderBanner />
            <PropertyMatchesCard />
            <IPhoneBanner />
            </PropertyLayout>
            {/* <WhatsapBanner /> */}
            {/* <Footer /> */}
        </>

    )
}

