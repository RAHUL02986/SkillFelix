// components/BlogCard.tsx
import React from "react";
import Image from "next/image";

type BlogCardProps = {
  title: string;
  date: string;
  author: string;
  image: string;
  category: string;
  featured?: boolean;
};

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  author,
  image,
  category,
  featured = false,
}) => {
  if (featured) {
    return (
      <div className="md:w-2/3 relative h-[450px] rounded-2xl overflow-hidden shadow-md">
        <Image
          src={image}
          alt={title}
          fill
          className="absolute inset-0 w-full h-full object-cover z-0"
          priority
        />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,_#000_0%,_#000_32.5%,_transparent)]" />
        
          <div className="relative z-20 p-6 h-full flex flex-col justify-end text-white cursor-pointer">
            <p className="text-sm inline-block bg-white text-black px-2 py-1 rounded mb-2 w-fit">
              {category}
            </p>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-sm mt-2">
              BY {author} • {date}
            </p>
          </div>
        
      </div>
    );
  }

  return (
    
      <div className="flex flex-col sm:flex-row items-start gap-4 cursor-pointer group">
        <Image
          src={image}
          alt={title}
          width={128}
          height={128}
          className="w-full sm:w-32 h-32 object-cover transition-all duration-300 group-hover:scale-105 group-hover:rounded-t-2xl"
        />
        <div className="flex-1">
          <p className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded mb-1 inline-block">
            {category}
          </p>
          <h4 className="text-xl font-semibold leading-tight">{title}</h4>
          <p className="text-xs mt-1">
            BY {author} • {date}
          </p>
        </div>
      </div>
    
  );
};

export default BlogCard;
