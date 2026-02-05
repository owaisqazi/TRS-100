"use client";
// import Footer from "@/components/footer";
// import Header from "@/components/header";
// import WhatsapBanner from "@/components/home/whatsap-banner";
import CustomQuickLoanChart from "@/components/ui/CustomQuickLoanChart";
import LoanModal from "@/components/ui/LoanModal";
import SliderBanner from "@/components/ui/slider-banner";
import { Mail } from "lucide-react";
import { useState } from "react";

function PropWorthQuickDetailId() {
  const [showModal, setShowModal] = useState(false);
  const [age, setAge] = useState(35);
  const [occupation, setOccupation] = useState('Salaried');
  const [netIncome, setNetIncome] = useState('2,00,000');
  const [existingEmi, setExistingEmi] = useState('20,000');
  const [interestRate, setInterestRate] = useState(8.9);
  const [tenure, setTenure] = useState(20);
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
      <div className="bg-gray-100 min-h-screen font-sans">
        {/* <Header /> */}
        {/* <SliderBanner /> */}
        <main className="container mx-auto px-4 py-8">
          <section className="bg-[#F2F4F7]">
            <div className="flex flex-col space-y-6 container mx-auto pt-10 px-10 lg:px-16">
              {loanProviders.map((deal, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4"
                >
                  <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                    <div className="flex items-center justify-center border-none rounded-full md:w-[140px] md:h-[140px] w-[100px] h-[100px] shadow-sm">
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
          <section className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Calculate housing loan eligibility</h2>
            <p className="text-gray-500 mb-6 text-sm">Calculate your borrowing eligibility by submitting your details below</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg border border-gray-200">
                  <div className="font-medium text-gray-700">Number of Borrowers</div>
                  <div className="flex space-x-1 p-1 bg-gray-200 rounded-md">
                    <button className="px-4 py-2 bg-[#1E102F] hover:bg-[#311752] text-white rounded-md text-sm">One</button>
                    <button className="px-4 py-2 text-gray-700 rounded-md text-sm">Two</button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Your Age */}
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Your Age</label>
                    <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 p-3">
                      <input
                        type="number"
                        id="age"
                        // 2. Value ko state variable se link karein
                        value={age}
                        // 3. onChange handler add karein
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full bg-transparent focus:outline-none text-gray-800"
                      />
                      <span className="text-gray-500 ml-2">Years</span>
                    </div>
                  </div>

                  {/* Occupation */}
                  <div>
                    <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
                    <div className="relative">
                      <select
                        id="occupation"
                        // Value ko state variable se link karein
                        value={occupation}
                        // onChange handler add karein
                        onChange={(e) => setOccupation(e.target.value)}
                        className="block w-full bg-gray-50 rounded-lg border border-gray-200 p-3 pr-10 focus:outline-none appearance-none text-gray-800"
                      >
                        <option>Salaried</option>
                        <option>Self-Employed</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                  </div>

                  {/* Net Income */}
                  <div>
                    <label htmlFor="net-income" className="block text-sm font-medium text-gray-700 mb-1">Net Income</label>
                    <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 p-3">
                      <span className="text-gray-500 mr-2">₹</span>
                      <input
                        type="text"
                        id="net-income"
                        value={netIncome}
                        onChange={(e) => setNetIncome(e.target.value)}
                        className="w-full bg-transparent focus:outline-none text-gray-800"
                      />
                      <span className="text-gray-500 ml-2">Monthly</span>
                    </div>
                  </div>

                  {/* Existing Monthly EMI */}
                  <div>
                    <label htmlFor="existing-emi" className="block text-sm font-medium text-gray-700 mb-1">Existing Monthly EMI</label>
                    <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 p-3">
                      <span className="text-gray-500 mr-2">₹</span>
                      <input
                        type="text"
                        id="existing-emi"
                        value={existingEmi}
                        onChange={(e) => setExistingEmi(e.target.value)}
                        className="w-full bg-transparent focus:outline-none text-gray-800"
                      />
                      <span className="text-gray-500 ml-2">Monthly</span>
                    </div>
                  </div>

                  {/* Rate of Interest */}
                  <div>
                    <label htmlFor="interest-rate" className="block text-sm font-medium text-gray-700 mb-1">Rate of Interest</label>
                    <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 p-3">
                      <input
                        type="number"
                        step="0.1"
                        id="interest-rate"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        className="w-full bg-transparent focus:outline-none text-gray-800"
                      />
                      <span className="text-gray-500 ml-2">%</span>
                    </div>
                  </div>

                  {/* Tenure */}
                  <div>
                    <label htmlFor="tenure" className="block text-sm font-medium text-gray-700 mb-1">Tenure</label>
                    <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 p-3">
                      <input
                        type="number"
                        id="tenure"
                        value={tenure}
                        onChange={(e) => setTenure(e.target.value)}
                        className="w-full bg-transparent focus:outline-none text-gray-800"
                      />
                      <span className="text-gray-500 ml-2">Years</span>
                    </div>
                  </div>
                </div>

                <button className="w-full  bg-[#1E102F] hover:bg-[#311752] text-white font-semibold py-3 rounded-lg text-lg transition-colors">
                  Calculate
                </button>
              </div>
              <CustomQuickLoanChart />
              {/* Right Side: Estimated Results */}

            </div>
          </section>
        </main>
        {/* <WhatsapBanner /> */}
        {/* <Footer /> */}
      </div>
      <LoanModal isOpen={showModal} setIsOpen={setShowModal} />
    </>
  );
}

export default PropWorthQuickDetailId;