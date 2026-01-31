"use client";

import Image from "next/image";

const blogs = [
  {
    date: "May 23",
    title: "Fractional ownership in real estate: How it works and its benefits",
    img: "/assets/images/blog/blog1.avif",
  },
  {
    date: "May 23",
    title: "Top reasons why homebuyers are considering this villa...",
    img: "/assets/images/blog/blog2.avif",
  },
  {
    date: "May 23",
    title: "Understanding leasehold property: Legal rights and renewal process",
    img: "/assets/images/blog/blog3.avif",
  },
];

const BlogSection = ({tittle}) => {
  return (
    <section className="patner-gradient py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-white">
            {tittle}
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:px-20">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="w-full h-56 relative">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
                <h3 className="text-lg font-medium text-black">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
