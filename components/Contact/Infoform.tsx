"use client";

import React, {
  useEffect,
  useState,
  ChangeEvent,
  FormEvent,
  useRef,
} from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "react-phone-input-2/lib/style.css";

const PhoneInput = dynamic(() => import("react-phone-input-2"), {
  ssr: false,
});

interface Country {
  name: string;
  iso2: string;
  long: number;
  lat: number;
}

interface State {
  name: string;
}

export default function Infoform() {
  const [hasMounted, setHasMounted] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => setHasMounted(true), []);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/positions")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) setCountries(data.data);
      })
      .catch(() => console.error("Error fetching countries"));
  }, []);

  const oneCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const countryName = e.target.value;
    setSelectedCountry(countryName);
    setStates([]);

    if (countryName) {
      fetch("https://countriesnow.space/api/v0.1/countries/states", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country: countryName }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.data?.states) setStates(data.data.states);
        })
        .catch(() => console.error("Error fetching states"));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    const data = {
      firstName: formData.get("firstName"),
      email: formData.get("email"),
      country: formData.get("country"),
      state: formData.get("state"),
      phone: phone,
      message: formData.get("message"),
    };

    setLoading(true);

    try {
      const res = await fetch("/api/sendContactForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        alert("✅ " + (result.message || "Message sent successfully!"));
        form.reset();
        setPhone("");
        setSelectedCountry("");
        setStates([]);
      } else {
        alert("❌ " + (result.error || "Something went wrong."));
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("❌ Failed to submit form.");
    } finally {
      setLoading(false);
    }
  };

  if (!hasMounted) return null;

  return (
    <div id="contact-form" className="py-4 lg:py-6">
      <div className="lg:bg-[url('https://officebanao.com/wp-content/uploads/2023/09/luxury-working-room-.jpg')] py-4 lg:py-16 bg-cover bg-center">
        <div className="container">
          <div className="lg:flex justify-center">
            <div className="bg-[#032035] md:w-[65%] w-full text-white rounded-xl px-4 py-8 lg:p-14">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-normal">
                  Get Started with{" "}
                  <span className="text-[#0B96F3]">Your Application!</span>
                </h2>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="w-full">
                <div className="flex gap-6">
                  <div className="mb-6 w-full md:w-1/2">
                    <label className="text-base text-white block mb-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="Jane"
                      className="appearance-none w-full border-b border-gray-500 py-3 bg-transparent text-white focus:outline-none"
                    />
                  </div>

                  <div className="mb-6 w-full md:w-1/2">
                    <label className="text-base text-white block mb-2">
                      Your Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="example@gmail.com"
                      className="appearance-none w-full border-b border-gray-500 py-3 bg-transparent text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-2 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="text-base text-white mb-2 block">
                      Country*
                    </label>
                    <select
                      name="country"
                      value={selectedCountry}
                      onChange={oneCountryChange}
                      required
                      className="w-full border-b border-gray-500 bg-[#032035] text-white py-3 focus:outline-none"
                    >
                      <option value="">- Select -</option>
                      {countries.map((item, i) => (
                        <option key={i} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="w-full md:w-1/2 px-3">
                    <label className="text-base text-white mb-2 block">
                      State*
                    </label>
                    <select
                      name="state"
                      disabled={!states.length}
                      required
                      className="w-full border-b border-gray-500 bg-[#032035] text-white py-3 focus:outline-none"
                    >
                      <option value="">- Select -</option>
                      {states.map((item, i) => (
                        <option key={i} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="text-base text-white block mb-2">
                    Mobile Number*
                  </label>
                  <PhoneInput
                    country={"in"}
                    value={phone}
                    onChange={(value) => setPhone(value)}
                    inputProps={{ required: true, name: "phone" }}
                    inputStyle={{
                      backgroundColor: "transparent",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                      borderBottom: "1px solid #ccc",
                      borderRadius: 0,
                      color: "white",
                      width: "100%",
                    }}
                    buttonStyle={{
                      backgroundColor: "transparent",
                      border: "none",
                      borderRadius: 0,
                    }}
                    enableSearch
                  />
                </div>

                <div className="mt-7">
                  <label htmlFor="message" className="text-base py-2 block">
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message here..."
                    rows={4}
                    required
                    className="w-full border-b py-3 bg-transparent text-white outline-none"
                  ></textarea>
                </div>

                <div className="lg:flex mt-8 justify-between gap-10">
                  <div className="text-center mt-8 lg:text-right lg:mt-0">
                    <button
                      type="submit"
                      disabled={loading}
                      className="py-3 px-10 rounded flex items-center gap-3 justify-center text-base text-white bg-[#0B96F3] hover:bg-[#2f2a4f] cursor-pointer"
                    >
                      {loading ? "Sending..." : "Submit"}
                      <Image src="/arrowb.svg" alt="arrow" width={20} height={20} />
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
