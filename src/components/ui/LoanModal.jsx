"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoanModal({ isOpen, setIsOpen }) {
  const formik = useFormik({
    initialValues: {
      loanAmount: "6,00,000",
      tenure: "20",
      age: "35",
      propertyId: "",
      propertyCity: "",
      propertyCost: "37,50,000",
      employment: "Salaried",
      income: "1,00,000",
      emi: "10,000",
      name: "",
      email: "",
      mobile: "",
    },
    validationSchema: Yup.object({
      loanAmount: Yup.string().required("Loan amount is mandatory"),
      tenure: Yup.string().required("Tenure is mandatory"),
      age: Yup.string().required("Age is mandatory"),
      propertyId: Yup.string().required("Property ID is mandatory"),
      propertyCity: Yup.string().required("Property city is mandatory"),
      propertyCost: Yup.string().required("Property cost is mandatory"),
      employment: Yup.string().required("Employment type is mandatory"),
      income: Yup.string().required("Your income is mandatory"),
      emi: Yup.string().required("Current total EMIs are mandatory"),
      name: Yup.string().required("Full name is mandatory"),
      email: Yup.string().email("Invalid email").required("Email ID is mandatory"),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Invalid mobile number")
        .required("Mobile number is mandatory"),
    }),
    onSubmit: (values) => {
      console.log("Form Data:", values);
      setIsOpen(false);
    },
  });

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#000000a8] bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-center pb-4 border-b">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900"
                  >
                    We just need a few details to match you with the right home loan product
                  </Dialog.Title>
                  <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <form onSubmit={formik.handleSubmit} className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Loan Amount */}
                    <div className="relative">
                      <label htmlFor="loanAmount" className="block text-xs font-medium text-gray-700">Loan amount</label>
                      <div className="mt-1">
                        <input
                          id="loanAmount"
                          name="loanAmount"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.loanAmount}
                          className={`block w-full rounded-md shadow  p-3 text-sm focus:border-blue-500 focus:ring-blue-500 ${formik.touched.loanAmount && formik.errors.loanAmount ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="₹ 6,00,000"
                        />
                        {formik.touched.loanAmount && formik.errors.loanAmount && (
                          <p className="mt-1 text-xs text-red-500">{formik.errors.loanAmount}</p>
                        )}
                      </div>
                    </div>

                    {/* Tenure */}
                    <div className="relative">
                      <label htmlFor="tenure" className="block text-xs font-medium text-gray-700">Tenure</label>
                      <div className="mt-1 flex">
                        <input
                          id="tenure"
                          name="tenure"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.tenure}
                          className={`block w-full rounded-l-md shadow  p-3 text-sm focus:border-blue-500 focus:ring-blue-500 ${formik.touched.tenure && formik.errors.tenure ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="20"
                        />
                        <span className="inline-flex shadow items-center rounded-r-md  border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">Years</span>
                      </div>
                      {formik.touched.tenure && formik.errors.tenure && (
                        <p className="mt-1 text-xs text-red-500">{formik.errors.tenure}</p>
                      )}
                    </div>

                    {/* Age */}
                    <div className="relative">
                      <label htmlFor="age" className="block text-xs font-medium text-gray-700">Your Age</label>
                      <div className="mt-1 flex">
                        <input
                          id="age"
                          name="age"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.age}
                          className={`block w-full rounded-l-md shadow  p-3 text-sm focus:border-blue-500 focus:ring-blue-500 ${formik.touched.age && formik.errors.age ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="35"
                        />
                        <span className="inline-flex shadow items-center rounded-r-md  border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">Years</span>
                      </div>
                      {formik.touched.age && formik.errors.age && (
                        <p className="mt-1 text-xs text-red-500">{formik.errors.age}</p>
                      )}
                    </div>

                    {/* Property ID */}
                    <div className="relative">
                      <label htmlFor="propertyId" className="block text-xs font-medium text-gray-700">Is your property identified?</label>
                      <div className="mt-1">
                        <select
                          id="propertyId"
                          name="propertyId"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.propertyId}
                          className={`block w-full rounded-md shadow  p-3 text-sm focus:border-blue-500 focus:ring-blue-500 ${formik.touched.propertyId && formik.errors.propertyId ? 'border-red-500' : 'border-gray-300'}`}
                        >
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                        {formik.touched.propertyId && formik.errors.propertyId && (
                          <p className="mt-1 text-xs text-red-500">{formik.errors.propertyId}</p>
                        )}
                      </div>
                    </div>

                    {/* Property City */}
                    <div className="relative">
                      <label htmlFor="propertyCity" className="block text-xs font-medium text-gray-700">Property city</label>
                      <div className="mt-1">
                        <select
                          id="propertyCity"
                          name="propertyCity"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.propertyCity}
                          className={`block w-full rounded-md shadow  p-3 text-sm focus:border-blue-500 focus:ring-blue-500 ${formik.touched.propertyCity && formik.errors.propertyCity ? 'border-red-500' : 'border-gray-300'}`}
                        >
                          <option value="">Select</option>
                          <option value="Bangalore">Bangalore</option>
                          <option value="Mumbai">Mumbai</option>
                          <option value="Delhi">Delhi</option>
                        </select>
                        {formik.touched.propertyCity && formik.errors.propertyCity && (
                          <p className="mt-1 text-xs text-red-500">{formik.errors.propertyCity}</p>
                        )}
                      </div>
                    </div>

                    {/* Property Cost */}
                    <div className="relative">
                      <label htmlFor="propertyCost" className="block text-xs font-medium text-gray-700">Property Cost</label>
                      <div className="mt-1">
                        <input
                          id="propertyCost"
                          name="propertyCost"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.propertyCost}
                          className={`block w-full rounded-md shadow  p-3 text-sm focus:border-blue-500 focus:ring-blue-500 ${formik.touched.propertyCost && formik.errors.propertyCost ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="₹ 37,50,000"
                        />
                        {formik.touched.propertyCost && formik.errors.propertyCost && (
                          <p className="mt-1 text-xs text-red-500">{formik.errors.propertyCost}</p>
                        )}
                      </div>
                    </div>

                    {/* Employment */}
                    <div className="relative">
                      <label htmlFor="employment" className="block text-xs font-medium text-gray-700">How are you currently employed?</label>
                      <div className="mt-1">
                        <select
                          id="employment"
                          name="employment"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.employment}
                          className={`block w-full rounded-md shadow  p-3 text-sm focus:border-blue-500 focus:ring-blue-500 ${formik.touched.employment && formik.errors.employment ? 'border-red-500' : 'border-gray-300'}`}
                        >
                          <option value="">Select</option>
                          <option value="Salaried">Salaried</option>
                          <option value="Self-Employed">Self-Employed</option>
                        </select>
                        {formik.touched.employment && formik.errors.employment && (
                          <p className="mt-1 text-xs text-red-500">{formik.errors.employment}</p>
                        )}
                      </div>
                    </div>

                    {/* Income */}
                    <div className="relative">
                      <label htmlFor="income" className="block text-xs font-medium text-gray-700">Your Income</label>
                      <div className="mt-1 flex">
                        <input
                          id="income"
                          name="income"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.income}
                          className={`block w-full rounded-l-md shadow  p-3 text-sm focus:border-blue-500 focus:ring-blue-500 ${formik.touched.income && formik.errors.income ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="₹ 1,00,000"
                        />
                        <span className="inline-flex shadow items-center rounded-r-md  border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">Monthly</span>
                      </div>
                      {formik.touched.income && formik.errors.income && (
                        <p className="mt-1 text-xs text-red-500">{formik.errors.income}</p>
                      )}
                    </div>

                    {/* EMIs */}
                    <div className="relative">
                      <label htmlFor="emi" className="block text-xs font-medium text-gray-700">Current total EMIs</label>
                      <div className="mt-1 flex">
                        <input
                          id="emi"
                          name="emi"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.emi}
                          className={`block w-full rounded-l-md shadow  p-3 text-sm focus:border-blue-500 focus:ring-blue-500 ${formik.touched.emi && formik.errors.emi ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="₹ 10,000"
                        />
                        <span className="inline-flex shadow items-center rounded-r-md  border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">Monthly</span>
                      </div>
                      {formik.touched.emi && formik.errors.emi && (
                        <p className="mt-1 text-xs text-red-500">{formik.errors.emi}</p>
                      )}
                    </div>

                    {/* Full Name */}
                    <div className="relative">
                      <label htmlFor="name" className="block text-xs font-medium text-gray-700">Full name is mandatory</label>
                      <div className="mt-1">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                          className={`block w-full rounded-md shadow  p-3 text-sm focus:border-blue-500 focus:ring-blue-500 ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {formik.touched.name && formik.errors.name && (
                          <p className="mt-1 text-xs text-red-500">{formik.errors.name}</p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <label htmlFor="email" className="block text-xs font-medium text-gray-700">Email ID is mandatory</label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          className={`block w-full rounded-md shadow  p-3 text-sm focus:border-blue-500 focus:ring-blue-500 ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {formik.touched.email && formik.errors.email && (
                          <p className="mt-1 text-xs text-red-500">{formik.errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Mobile Number */}
                    <div className="relative">
                      <label htmlFor="mobile" className="block text-xs font-medium text-gray-700">Mobile number is mandatory</label>
                      <div className="mt-1">
                        <input
                          id="mobile"
                          name="mobile"
                          type="tel"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.mobile}
                          className={`block w-full rounded-md shadow  p-3 text-sm focus:border-blue-500 focus:ring-blue-500 ${formik.touched.mobile && formik.errors.mobile ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {formik.touched.mobile && formik.errors.mobile && (
                          <p className="mt-1 text-xs text-red-500">{formik.errors.mobile}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button & Consent */}
                  <div className="mt-6 flex flex-col items-center">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="consent"
                          name="consent"
                          type="checkbox"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          required
                        />
                      </div>
                      <div className="ml-3 text-xs text-gray-500">
                        I authorize Roome/relevant loan providers and their representatives to call, SMS or email me with reference to this application & accept{" "}
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                          TRS Property Mall Terms & Conditions
                        </a>
                        . This consent shall override any DND/DNIC registration.
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-[#1E102F] hover:bg-[#311752] px-6 py-3 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
                    >
                      Submit Details
                    </button>
                    <p className="mt-2 text-[10px] text-gray-400 text-center">
                      *Please note that our privacy policy does not govern the use of your data by financial institutions once it is shared; for more information, please refer to the privacy policy of related concerned banks.
                    </p>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}