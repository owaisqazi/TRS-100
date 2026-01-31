import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter, QrCode } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-black text-white font-sans">
            {/* 3. Main Footer Links (5 Columns) */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-[13px]">
                    {/* Office info */}
                    <div>
                        <h4 className="font-bold mb-4 uppercase text-sm">Corporate Office</h4>
                        <address className="not-italic text-gray-400 leading-relaxed">
                            Scheme No 140, 1, The Row Eight, opp.<br />
                            Grande Exotica, Pipliyahana,<br />
                            Bicholi Mardana, Indore - 452016<br />
                            info@realestate.com<br />
                            0813-3002-1873
                        </address>
                        <h4 className="font-bold mt-6 mb-4 uppercase text-sm">R - Lounge</h4>
                        <p className="text-gray-400 leading-relaxed">
                            MZ-11, Bansi Trade Centre, 581, Mahatma<br />
                            Gandhi Rd, Opp. Jaipur Jewels, Race Course<br />
                            Road, Indore, Madhya Pradesh 452003
                        </p>
                    </div>

                    {/* Links columns */}
                    <div>
                        <h4 className="font-bold mb-4 uppercase text-sm">Company Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="/" className="hover:text-white underline decoration-gray-600">Home</Link></li>
                            <li><Link href="/about" className="hover:text-white underline decoration-gray-600">About Us</Link></li>
                            <li><Link href="/consultant" className="hover:text-white underline decoration-gray-600">Consultant Lounge</Link></li>
                            <li><Link href="/builder" className="hover:text-white underline decoration-gray-600">Builder Lounge</Link></li>
                            <li><Link href="/insights" className="hover:text-white underline decoration-gray-600">Insights & Advice</Link></li>
                            <li><Link href="/contact" className="hover:text-white underline decoration-gray-600">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 uppercase text-sm">Exclusive Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="#" className="hover:text-white underline decoration-gray-600">Best Loan Offers</Link></li>
                            <li><Link href="#" className="hover:text-white underline decoration-gray-600">EMI Calculator</Link></li>
                            <li><Link href="#" className="hover:text-white underline decoration-gray-600">Property Valuation</Link></li>
                            <li><Link href="#" className="hover:text-white underline decoration-gray-600">Legal Services</Link></li>
                            <li><Link href="#" className="hover:text-white underline decoration-gray-600">Property Management</Link></li>
                            <li><Link href="#" className="hover:text-white underline decoration-gray-600">Research & Advice</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 uppercase text-sm">Top Deals For You</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="#" className="hover:text-white underline decoration-gray-600">Commercial Properties In Indore</Link></li>
                            <li><Link href="#" className="hover:text-white underline decoration-gray-600">Luxury Villas In Indore</Link></li>
                            <li><Link href="#" className="hover:text-white underline decoration-gray-600">Residential Properties In Indore</Link></li>
                            <li><Link href="#" className="hover:text-white underline decoration-gray-600">Top Properties In Indore</Link></li>
                            <li><Link href="#" className="hover:text-white underline decoration-gray-600">Commercial Properties For Rent</Link></li>
                            <li><Link href="#" className="hover:text-white underline decoration-gray-600">Apartments For Sale In Indore</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 uppercase text-sm">Explore Properties</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="#" className="hover:text-white underline decoration-gray-600">Commercial Properties In Bangalore</Link></li>
                            <li><Link href="#" className="hover:text-white underline decoration-gray-600">Luxury Villas In Bangalore</Link></li>
                            <li><Link href="#" className="hover:text-white underline decoration-gray-600">Residential Properties In Mumbai</Link></li>
                            <li><Link href="#" className="hover:text-white underline decoration-gray-600">Top Projects In Delhi</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 4. Bottom Branding Section */}
            <div className="border-t border-white/10 py-10 bg-[#050505]">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
                    {/* Video/Thumbnail part */}
                    <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-white/10 group">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/GD55ofLDIyI?si=sG9MzRdltXNqrJe1"
                    title="TRS Property Mall Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                ></iframe>
            </div>

                    {/* Logo & Copyright */}
                    <div className="flex flex-col items-center text-center">
                        <Image src="/assets/logo/logo.png" width={180} height={60} alt="TRS" className="mb-4" />
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">© 2025 | By Total Realty Solutions Pvt. Ltd.</p>
                    </div>

                    {/* Mini About */}
                    <div>
                        <h4 className="font-bold mb-3 text-sm">About Us</h4>
                        <p className="text-[11px] text-gray-400 leading-relaxed">
                            TRS Property Mall - Indore, an initiative by Total Realty Solutions Pvt. Ltd., is a trusted real estate consultancy in Indore offering end-to-end property solutions. We specialize in buying, selling, leasing and investing in residential, commercial and plotted properties.
                        </p>
                    </div>

                    {/* Scan & Social */}
                    <div className="flex flex-col items-center md:items-end">
                        <h4 className="font-bold mb-3 text-sm">Scan for Brochure</h4>
                        <div className="bg-white p-2 rounded-sm mb-4">
                           <QrCode size={80} color="black" />
                        </div>
                        <div className="flex gap-4">
                            <Instagram size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                            <Facebook size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                            <Youtube size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                            <Twitter size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;