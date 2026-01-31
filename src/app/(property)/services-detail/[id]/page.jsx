"use client";
// import Footer from "@/components/footer";
// import Header from "@/components/header";
// import SliderBanner from "@/components/ui/slider-banner";
import { useLoanCalculationMutation } from "@/service/propertyApi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import EmiChart from "@/components/ui/EmiChart";
import FAQSection from "@/components/home/faq-section";
import { Mail } from "lucide-react";
import LoanModal from "@/components/ui/LoanModal";
// import WhatsapBanner from "@/components/home/whatsap-banner";

function ServicesDetailId() {
    const [loanCalculation] = useLoanCalculationMutation();
    const [loading, setLoading] = useState(false);
    const [emi, setEmi] = useState(0);
    const [dataChart, setdataChart] = useState();
    const [interestAmount, setInterestAmount] = useState(0);
    const [principalAmount, setPrincipalAmount] = useState(0);
    const [showModal, setShowModal] = useState(false);

    // ✅ formik setup
    const formik = useFormik({
        initialValues: {
            loan_amount: "",
            tenure_years: "",
            rate_of_interest: "",
        },
        validationSchema: Yup.object({
            loan_amount: Yup.number().required("Loan amount is required"),
            tenure_years: Yup.number().required("Tenure is required"),
            rate_of_interest: Yup.number().required("Interest rate is required"),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            try {
                const res = await loanCalculation(values).unwrap();
                if (res?.status) {
                    const loanData = res.data;
                    console.log(res?.pie_chart, 'loanData--->')
                    setEmi(Math.round(loanData.emi));
                    setdataChart(res.pie_chart);
                    setInterestAmount(Math.round(loanData.interest_payable));
                    setPrincipalAmount(Math.round(loanData.principal_amount));
                }
            } catch (err) {
                console.error("Error calculating EMI:", err);
            }
            finally {
                setLoading(false);
            }
        },
    });

    const chartDataArray = dataChart
        ? [
            { name: "Principal", value: principalAmount || 0 },
            { name: "Interest", value: interestAmount || 0 },
        ]
        : [{ name: "No Data", value: 1 }];
    const COLORS = ["#20A387", "#FBBF24"];

    console.log(chartDataArray, 'chartDataArray--->')
    // 👇 yeh effect formik ke values pe chalega
    useEffect(() => {
        if (
            formik.values.loan_amount &&
            formik.values.tenure_years &&
            formik.values.rate_of_interest
        ) {
            formik.handleSubmit(); // auto API call
        }
    }, [
        formik.values.loan_amount,
        formik.values.tenure_years,
        formik.values.rate_of_interest,
    ]);


    const faqs = [
        {
            id: 1,
            question: "How do I create an account?",
            answer:
                "Creating an account is simple! Click on the 'Sign Up' button in the top right corner, fill in your details including name, email, and phone number, verify your email address, and you're ready to start exploring properties.",
        },
        {
            id: 2,
            question: "Is my personal information secured?",
            answer:
                "Yes, absolutely! We use industry-standard encryption and security measures to protect your personal information. Your data is stored securely and we never share your information with third parties without your explicit consent.",
        },
        {
            id: 3,
            question: "How do I post a property for sale or rent?",
            answer:
                "After logging in, click on 'Post Property' in the navigation menu. Choose whether you want to sell or rent, select your property type, fill in all the required details, upload high-quality photos, and submit for review. Your property will be live within 24 hours after approval.",
        },
        {
            id: 4,
            question: "What are the charges for posting a property?",
            answer:
                "We offer both free and premium listing options. Basic listings are free and include standard features. Premium listings start from ₹999 and include featured placement, priority support, and advanced analytics.",
        },
        {
            id: 5,
            question: "How can I contact property owners?",
            answer:
                "Once you find a property you're interested in, you can contact the owner through our secure messaging system, call them directly using the provided contact number, or schedule a property visit through our platform.",
        },
        {
            id: 6,
            question: "Can I get a home loan through your platform?",
            answer:
                "Yes! We partner with leading banks and financial institutions to offer competitive home loan rates. Use our EMI calculator to estimate your monthly payments and apply for pre-approval directly through our platform.",
        },
        {
            id: 7,
            question: "How do I verify property documents?",
            answer:
                "We offer professional property verification services. Our legal experts will verify all property documents, check for clear titles, ensure compliance with local regulations, and provide you with a detailed verification report.",
        },
        {
            id: 8,
            question: "What if I face issues with a property transaction?",
            answer:
                "Our customer support team is available 24/7 to help resolve any issues. We also offer legal assistance and mediation services to ensure smooth property transactions for all parties involved.",
        },
    ]
    const loanProviders = [
        {
            name: "Kotak Mahindra Bank",
            logo: "/assets/emi/1.png",
            interestRate: "7.55",
            emi: "₹10,000",
            loanAmount: "₹35,689",
            loanToValue: "90%",
        },
        {
            name: "HDFC",
            logo: "/assets/emi/2.png",
            interestRate: "8.50",
            emi: "₹13,000",
            loanAmount: "₹37,195",
            loanToValue: "90%",
        },
        {
            name: "LIC Housing Finance Ltd",
            logo: "/assets/emi/3.png",
            interestRate: "6.90",
            emi: "₹5,000",
            loanAmount: "₹34,678",
            loanToValue: "90%",
        },
        {
            name: "SBI Home Loans",
            logo: "/assets/emi/4.png",
            interestRate: "6.80",
            emi: "₹10,000",
            loanAmount: "₹34,524",
            loanToValue: "90%",
        },
        {
            name: "ICICI Bank",
            logo: "/assets/emi/5.png",
            interestRate: "6.80",
            emi: "₹7,500",
            loanAmount: "₹34,524",
            loanToValue: "90%",
        },
        {
            name: "AXIS Bank",
            logo: "/assets/emi/6.png",
            interestRate: "6.90",
            emi: "₹10,000",
            loanAmount: "₹34,678",
            loanToValue: "90%",
        },
        {
            name: "PNB Housing Finance",
            logo: "/assets/emi/7.png",
            interestRate: "9.25",
            emi: "₹10,000",
            loanAmount: "₹38,409",
            loanToValue: "90%",
        },
    ];

    return (
        <>
            {/* <Header /> */}
            {/* <SliderBanner /> */}
            <section className="bg-[#F2F4F7]">
                <div className="flex flex-col space-y-6 container mx-auto pt-10 px-10 lg:px-16">
                    {loanProviders.map((deal, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4"
                        >
                            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                                <div className="flex items-center  justify-center border-none rounded-full md:w-[140px] md:h-[140px] w-[100px] h-[100px] shadow-sm">
                                    <img
                                        src={deal.logo}
                                        alt={deal.name}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <h3 className="text-gray-800 font-semibold">{deal.name}</h3>
                            </div>
                            <div className="flex flex-wrap items-center gap-6 text-gray-700 text-sm">
                                <div className="text-lg font-bold text-green-600">
                                    {deal.interestRate}
                                    <span className="text-sm">%</span>
                                </div>
                                <div>
                                    <div className="font-semibold">{deal.emi}</div>
                                    <div className="text-xs text-gray-500">EMI</div>
                                </div>
                                <div>
                                    <div className="font-semibold">{deal.loanAmount}</div>
                                    <div className="text-xs text-gray-500">Loan Amount</div>
                                </div>
                                <div>
                                    <div className="font-semibold">{deal.loanToValue}</div>
                                    <div className="text-xs text-gray-500">Loan to value ratio</div>
                                </div>
                                <div className="flex items-center text-gray-500 cursor-pointer">
                                    <Mail className="w-4 h-4 mr-1" />
                                    <span className="text-xs">Email me this deal</span>
                                </div>
                                <button onClick={() => setShowModal(true)} className="px-4 py-2 rounded-lg cursor-pointer text-sm bg-[#1E102F] hover:bg-[#311752] text-white">
                                    Get me this deal
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className="flex flex-col min-h-screen text-black bg-[#F2F4F7] pb-6">
                <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-6 lg:p-10 max-w-8xl mx-auto">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">
                            Home Loan EMI Calculator
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Home Loan EMI Calculator provides an instant estimate of your EMI
                            by requiring the loan amount, interest rate, and loan tenure. This
                            ensures manageable debt repayment and aids in budget planning.
                        </p>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                                {/* Input Section */}
                                <div className="flex flex-col space-y-6 col-span-2">
                                    <h2 className="text-2xl font-semibold text-gray-700">
                                        Home Loans
                                    </h2>

                                    {/* Loan Amount */}
                                    <div>
                                        <label
                                            htmlFor="loan_amount"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Loan Amount
                                        </label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500">₹</span>
                                            </div>
                                            <input
                                                type="number"
                                                id="loan_amount"
                                                name="loan_amount"
                                                value={formik.values.loan_amount}
                                                onChange={formik.handleChange}
                                                className="block w-full rounded-md p-3 border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Enter loan amount"
                                            />
                                        </div>
                                        {formik.touched.loan_amount && formik.errors.loan_amount && (
                                            <p className="text-red-500 text-sm">
                                                {formik.errors.loan_amount}
                                            </p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        {/* Tenure */}
                                        <div>
                                            <label
                                                htmlFor="tenure_years"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Loan Tenure
                                            </label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <select
                                                    id="tenure_years"
                                                    name="tenure_years"
                                                    value={formik.values.tenure_years}
                                                    onChange={formik.handleChange}
                                                    className="block w-full rounded-md p-3 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                >
                                                    <option value="">Select Tenure</option>
                                                    {[...Array(30).keys()].map((i) => (
                                                        <option key={i + 1} value={i + 1}>
                                                            {i + 1} yrs
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            {formik.touched.tenure_years &&
                                                formik.errors.tenure_years && (
                                                    <p className="text-red-500 text-sm">
                                                        {formik.errors.tenure_years}
                                                    </p>
                                                )}
                                        </div>

                                        {/* Interest Rate */}
                                        <div>
                                            <label
                                                htmlFor="rate_of_interest"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Interest Rate % (p.a.)
                                            </label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <input
                                                    type="number"
                                                    id="rate_of_interest"
                                                    name="rate_of_interest"
                                                    value={formik.values.rate_of_interest}
                                                    onChange={formik.handleChange}
                                                    step="0.1"
                                                    className="block w-full rounded-md p-3 border-gray-300 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="7.4"
                                                />
                                            </div>
                                            {formik.touched.rate_of_interest &&
                                                formik.errors.rate_of_interest && (
                                                    <p className="text-red-500 text-sm">
                                                        {formik.errors.rate_of_interest}
                                                    </p>
                                                )}
                                        </div>
                                    </div>

                                    {/* Finalized Property */}
                                    <div className="mt-4">
                                        <p className="text-sm font-medium text-gray-700">
                                            Have you finalized your property?
                                        </p>
                                        <div className="mt-2 flex items-center space-x-4">
                                            <div className="flex items-center">
                                                <input
                                                    id="property-yes"
                                                    name="property-finalized"
                                                    type="radio"
                                                    className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                                />
                                                <label
                                                    htmlFor="property-yes"
                                                    className="ml-2 block text-sm text-gray-700"
                                                >
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="property-no"
                                                    name="property-finalized"
                                                    type="radio"
                                                    className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                                />
                                                <label
                                                    htmlFor="property-no"
                                                    className="ml-2 block text-sm text-gray-700"
                                                >
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className={`w-full py-3 px-6 mt-4 rounded-full text-white font-semibold transition-colors ${loading
                                            ? "bg-gray-400 cursor-not-allowed"
                                            : "bg-[#1E102F] hover:bg-[#311752]"
                                            }`}
                                    >
                                        {loading ? (
                                            <div className="flex items-center justify-center space-x-2">
                                                <svg
                                                    className="animate-spin h-5 w-5 text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                                    ></path>
                                                </svg>
                                                <span>Calculating...</span>
                                            </div>
                                        ) : (
                                            "Recalculate Your EMI"
                                        )}
                                    </button>
                                </div>

                                {/* Result Section */}
                                <div className="flex flex-col col-span-3 items-center p-6 bg-gray-50 rounded-lg lg:mt-0">
                                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                                        You are Eligible for EMI Amount{" "}
                                        <span className="text-2xl font-bold text-gray-900">
                                            ₹{emi.toLocaleString("en-IN")}
                                        </span>
                                    </h3>
                                    <div className="relative w-60 h-60 mb-6">
                                        <EmiChart data={chartDataArray} COLORS={COLORS} />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center">
                                                <span className="w-3 h-3 rounded-full bg-[#20A387] mr-2"></span>
                                                <span className="text-sm font-medium text-gray-700">
                                                    Principal Amount
                                                </span>
                                            </div>
                                            <span className="text-base font-semibold text-gray-900">
                                                ₹{principalAmount.toLocaleString("en-IN")}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <span className="w-3 h-3 rounded-full bg-[#FBBF24] mr-2"></span>
                                                <span className="text-sm font-medium text-gray-700">
                                                    Interest Amount
                                                </span>
                                            </div>
                                            <span className="text-base font-semibold text-gray-900">
                                                ₹{interestAmount.toLocaleString("en-IN")}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bank Offers Section */}
                                    <div className="mt-10">
                                        <h3 className="text-xl font-semibold text-gray-700 mb-4">
                                            Top Banks home loan Offers
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Bank of Baroda Offer */}
                                            <div onClick={() => setShowModal(true)} className="flex cursor-pointer items-center justify-between p-4 bg-gray-100 rounded-lg">
                                                <div className="flex items-center space-x-4">
                                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                                        <span className="text-lg font-bold">B</span>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-gray-800">
                                                            Bank of Baroda
                                                        </p>
                                                        <p className="text-sm text-gray-600">
                                                            Rate 8.4% | Max Term 30yrs
                                                        </p>
                                                    </div>
                                                </div>
                                                <a
                                                    href="#"
                                                    className="text-sm mb-5 text-indigo-600 hover:underline"
                                                >
                                                    View
                                                </a>
                                            </div>
                                            {/* SBI Offer */}
                                            <div onClick={() => setShowModal(true)} className="flex cursor-pointer items-center justify-between p-4 bg-gray-100 rounded-lg">
                                                <div className="flex items-center space-x-4">
                                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                                        <span className="text-lg font-bold">SBI</span>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-gray-800">
                                                            State Bank of India
                                                        </p>
                                                        <p className="text-sm text-gray-600">
                                                            Rate 8.5% | Max Term 30yrs
                                                        </p>
                                                    </div>
                                                </div>
                                                <a
                                                    href="#"
                                                    className="text-sm mb-5 text-indigo-600 hover:underline"
                                                >
                                                    View
                                                </a>
                                            </div>
                                        </div>
                                        <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 p-4 rounded-lg mt-6 text-sm">
                                            <p className="font-semibold">Elite Club</p>
                                            <p className="mt-1">
                                                <span className="font-bold">
                                                    Assured Rewards Worth ₹90K
                                                </span>
                                                <br />
                                                ✨ FREE B.B Prime ✨ Movie Tickets ✨ 2000- Gift Card ✨
                                                1000- Gift Card ✨ wall-Gift Card
                                            </p>
                                        </div>
                                        <div className="flex justify-center mt-6">
                                            <button onClick={() => setShowModal(true)} className="py-3 w-full px-6 rounded-full text-white font-semibold bg-[#1E102F] cursor-pointer hover:bg-[#311752]transition-colors">
                                                Check Bank Offers
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
            {/* <FAQSection faqs={faqs} /> */}
            {/* <WhatsapBanner /> */}
            {/* <Footer /> */}

            {/* 🔹 Loan Form Modal */}
            <LoanModal isOpen={showModal} setIsOpen={setShowModal} />
        </>
    );
}

export default ServicesDetailId;
