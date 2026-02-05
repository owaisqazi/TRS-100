// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import WhatsapBanner from "@/components/home/whatsap-banner"

import PropertyLayout from "../PropertyLayout"

const Layout = ({ children }) => {
    return (
        <>
            {/* <Header /> */}
            <PropertyLayout>
            {children}
            </PropertyLayout>
            {/* <WhatsapBanner /> */}
            {/* <Footer /> */}
        </>
    )
}

export default Layout

