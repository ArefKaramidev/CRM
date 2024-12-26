import { useState } from "react";
import Button from "../button/Button";
import Input from "../Header/Input";
const AccountInformation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    website: "",
    email: "",
    phone: "",
    billingAddress: "",
    shippingAddress: "",
    city: "",
    country: "",
    type: "",
    industry: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  console.log(formData);

  return (
    <form className="m-5">
      <div className="felx flex-col space-y-10 ">
        <div className="bg-white p-5 flex flex-col items-start gap-y-10 rounded-xl border-2">
          <div className="flex items-start gap-x-16">
            <div>
              <span className="text-gray-500 font-medium">Full name*</span>
              <Input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeHolder="Type your name"
                inputStyle="outline-none px-2 py-3 w-full text-sm"
                parentStyle="border border-slate-300 rounded-md w-80 bg-white mt-2"
                type="text"
                requiredInput={true}
              />
            </div>
            <div>
              <span className="text-gray-500 font-medium">Website*</span>
              <div className="border border-slate-300 flex items-center rounded-md w-80 mt-2">
                <span className="bg-gray-100 text-black px-2 py-3 rounded-md rounded-tr-none rounded-br-none border-r">
                  http://
                </span>
                <Input
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeHolder="your website"
                  inputStyle="outline-none w-full px-2 py-3 text-sm"
                  type="text"
                  requiredInput={true}
                />
              </div>
            </div>
            <div>
              <span className="text-gray-500 font-medium">Email*</span>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeHolder="Type your email address"
                inputStyle="outline-none px-2 py-3 text-sm w-full"
                parentStyle="border border-slate-300 rounded-md w-80 bg-white mt-2"
                type="email"
                requiredInput={true}
              />
            </div>
          </div>
          <div>
            <span className="text-gray-500 font-medium">Phone*</span>
            <div className="border border-slate-300 flex items-center rounded-md w-80 mt-2">
              <span className="bg-gray-100 text-black px-2 py-3 rounded-md rounded-tr-none rounded-br-none border-r">
                Mobile
              </span>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeHolder="0913..."
                inputStyle="outline-none w-full px-2 py-3 text-sm"
                type="tell"
                requiredInput={true}
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 flex flex-col items-start gap-y-10  rounded-xl border-2">
          <div className="flex items-start gap-x-16">
            <div>
              <span className="text-gray-500 font-medium">Billing Address</span>
              <Input
                name="billingAddress"
                value={formData.billingAddress}
                onChange={handleChange}
                placeHolder="Street address"
                inputStyle="outline-none px-2 py-3 w-full text-sm"
                parentStyle="border border-slate-300 rounded-md w-[30rem] bg-white mt-2"
                type="text"
              />
            </div>

            <div>
              <span className="text-gray-500 font-medium">
                Shipping Address
              </span>
              <Input
                name="shippingAddress"
                value={formData.shippingAddress}
                onChange={handleChange}
                placeHolder="Street address"
                inputStyle="outline-none px-2 py-3 text-sm w-full"
                parentStyle="border border-slate-300 rounded-md w-[32rem] bg-white mt-2"
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-x-10">
            <div>
              <span className="text-gray-500 font-medium">City</span>
              <Input
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeHolder="tehran"
                inputStyle="outline-none px-2 py-3 w-32 text-sm"
                parentStyle="border border-slate-300 rounded-md w-40 bg-white mt-2"
                type="text"
              />
            </div>
            <div>
              <span className="text-gray-500 font-medium">Country</span>
              <Input
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeHolder="iran"
                inputStyle="outline-none px-2 py-3 w-32 text-sm"
                parentStyle="border border-slate-300 rounded-md w-40 bg-white mt-2"
                type="text"
                requiredInput={true}
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-5 flex flex-col items-start gap-y-10  rounded-xl border-2">
          <div className="flex items-start gap-x-16">
            <div>
              <span className="text-gray-500 font-medium">Type</span>
              <Input
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeHolder="Type your business type"
                inputStyle="outline-none px-2 py-3 w-full text-sm"
                parentStyle="border border-slate-300 rounded-md w-[30rem] bg-white mt-2"
                type="text"
                requiredInput={true}
              />
            </div>

            <div>
              <span className="text-gray-500 font-medium">Industry</span>
              <Input
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                placeHolder="Type your industry"
                inputStyle="outline-none px-2 py-3 text-sm w-full"
                parentStyle="border border-slate-300 rounded-md w-[30rem] bg-white mt-2"
                type="text"
                requiredInput={true}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-gray-500 font-medium">Description</span>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border-2 outline-none p-2 w-96 h-72"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-end gap-x-5 mt-10">
        <Button style="border-slate-300 border text-gray-500 rounded-md px-5 py-2">
          cancel
        </Button>
        <Button style="bg-blue-500 text-white rounded-md px-8 py-2">
          Save
        </Button>
      </div>
    </form>
  );
};

export default AccountInformation;
