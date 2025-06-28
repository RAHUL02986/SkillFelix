"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Dialog } from "@headlessui/react";
import allCourse from "@/lib/allCourses";
import Image from "next/image";
interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  experience?: string;
  location?: string;
}

export default function CoursesFilter() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [category, setCategory] = useState("All Categories");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);
  const [showForm, setShowForm] = useState(false);
  const [searchTriggered, setSearchTriggered] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    course: "",
    file: null as File | null,
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    form.append("firstName", formData.firstName);
    form.append("lastName", formData.lastName);
    form.append("email", formData.email);
    form.append("mobile", formData.mobile);
    form.append("course", formData.course);
    form.append("message", formData.message);
    if (formData.file) {
      form.append("file", formData.file);
    }

    try {
      const res = await fetch("/api/jobOpeningForm", {
        method: "POST",
        body: form,
      });
      const result = await res.json();

      if (res.ok) {
        alert("✅ Application submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          course: "",
          file: null,
          message: "",
        });
        setShowForm(false);
      } else {
        alert(`❌ Error: ${result.error || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("❌ Failed to submit the form.");
    }
  };

  const filteredCourses = allCourse.filter((course) => {
    if (!searchTriggered) return true;
    const matchesKeyword = course.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesLocation =
      location === "All Locations" ||
      course.location?.toLowerCase() === location.toLowerCase();
    const matchesCategory =
      category === "All Categories" || course.category === category;
    return matchesKeyword && matchesLocation && matchesCategory;
  });

  const visibleCourses = filteredCourses.slice(0, visibleCount);

  const inputClass =
    "focus:border-2 border p-2 rounded w-full outline-none transition-colors duration-300 border-gray-300 focus:border-blue-500";

  return (
    <div className="p-6 container">
      <h2 className="text-3xl md:text-5xl font-medium text-center mb-8">
        We&apos;re <span className="text-[#0B96F3]">hiring</span>
      </h2>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-60"
          placeholder="Search job title"
        />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded w-60"
        >
          <option>All Locations</option>
          <option>Bangalore</option>
          <option>Hyderabad</option>
          <option>Pune</option>
          <option>Noida</option>
          <option>Remote</option>
          <option>Chennai</option>
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded w-60"
        >
          <option>All Categories</option>
          <option>Job-Oriented Specialization</option>
          <option>Academic Programs</option>
          <option>Emerging Technology</option>
          <option>VLSI Internship</option>
          <option>Part-Time Courses</option>
          <option>Online Courses</option>
          <option>Core Technical Courses</option>
        </select>
        <button
          onClick={() => setSearchTriggered(true)}
          className="bg-[#0B96F3] hover:bg-[#012d49] text-white px-6 py-2 rounded"
        >
          Search
        </button>
      </div>

      {/* Course List */}
      <div className="space-y-6">
        {visibleCourses.length > 0 ? (
          visibleCourses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded flex-direction-col sm:flex items-center space-y-3 justify-between"
            >
              <div>
                <h3 className="font-semibold text-xl">{course.title}</h3>
                <p>Experience: {course.experience || "N/A"}</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="bg-[#012d49] hover:bg-[#0B96F3] text-white px-4 py-2 rounded"
                >
                  Know more
                </button>
                <button
                  onClick={() => {
                    setFormData({ ...formData, course: course.title });
                    setShowForm(true);
                  }}
                  className="bg-[#0B96F3] hover:bg-[#012d49] text-white px-4 py-2 rounded"
                >
                  Apply now ↗
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No courses found.</p>
        )}

        {visibleCount < filteredCourses.length && (
          <div className="text-center mt-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + 10)}
              className="px-6 py-2 bg-[#0B96F3] hover:bg-[#012d49] text-white rounded"
            >
              See More
            </button>
          </div>
        )}
      </div>

      {/* Know More Dialog */}
      <Dialog
        open={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        className="fixed inset-0 z-50"
      >
        <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="bg-white p-6 mx-2 rounded shadow-xl max-w-md w-full">
            <Dialog.Title className="text-xl font-bold mb-4">
              {selectedCourse?.title}
            </Dialog.Title>
            <p className="mb-2">
              <strong>Experience:</strong> {selectedCourse?.experience || "N/A"}
            </p>
            <p className="mb-2">
              <strong>Location:</strong> {selectedCourse?.location || "N/A"}
            </p>
            <p className="mb-4">
              <strong>Category:</strong> {selectedCourse?.category}
            </p>
            <p className="text-sm text-gray-700">{selectedCourse?.description}</p>
            <button
              onClick={() => setSelectedCourse(null)}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Application Form Modal */}
      {showForm && (

          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white sm:p-6 p-4 rounded-xl w-full mx-2 max-w-xl shadow-lg relative">
              <button
                className="absolute top-2 right-2 text-2xl text-white pb-1 bg-[#0B96F3] rounded-full w-6 h-6 flex items-center justify-center hover:bg-[#0B96F9]"
                onClick={() => setShowForm(false)}
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Job Openings</h2>
              <form
                className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 gap-2"
                onSubmit={handleSubmit}
              >
                <input
                  name="course"
                  type="text"
                  placeholder="Course"
                  className={inputClass}
                  value={formData.course}
                  readOnly
                />
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name*"
                  className={inputClass}
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name*"
                  className={inputClass}
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email ID*"
                  className={inputClass}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  name="mobile"
                  type="text"
                  placeholder="Mobile*"
                  className={inputClass}
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />


                <div className="">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer inline-block bg-white text-blue-600 font-medium border border-blue-600 rounded px-4 py-2 hover:bg-blue-600 hover:text-white transition"
                  >
                    Upload Resume
                  </label>
                  <input
                    id="file-upload"
                    name="file"
                    type="file"
                    onChange={handleChange}
                    className="hidden"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    {formData.file ? formData.file.name : "No file chosen"}
                  </span>
                </div>

                <textarea
                  name="message"
                  placeholder="Message"
                  className={`md:col-span-2 sm:h-32 h-20 ${inputClass}`}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <div className="md:col-span-2 flex justify-start">
                  <button
                    type="submit"
                    className="btn-primary flex items-center mt-4 gap-2 text-white bg-[#0B96F3] px-6 py-2 rounded hover:bg-[#000717]"
                  >
                    Submit <Image src="/arrow.svg" alt="arrow" height={16} width={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>
      )}
    </div>
  );
}
