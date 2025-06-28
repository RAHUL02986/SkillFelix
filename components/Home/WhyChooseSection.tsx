// components/WhyChooseUs.tsx
import Image from 'next/image';

const features: { title: string; icon: string; hoverBg: string }[] = [
  { title: '1:1 Mentor Support', icon: '/g1.svg', hoverBg: '#E3F2FD' },
  { title: 'Practice Tests', icon: '/g2.svg', hoverBg: '#E8F5E9' },
  { title: 'Hands on Training', icon: '/g3.svg', hoverBg: '#FFF3E0' },
  { title: 'Real-world Projects', icon: '/courses/Group 71831 (1).svg', hoverBg: '#FFF3E0' },
  { title: 'Mock Interviews', icon: '/courses/Group 71833.svg', hoverBg: '#F3E5F5' },
  { title: 'Community Support', icon: '/courses/Group 71834 (1).svg', hoverBg: '#E0F7FA' },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-[#f6fbff] to-white py-16 relative">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-normal mb-12 text-[#0B96F3]">
          Why choose Us <span className="text-black">?</span>
        </h2>

        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-5 relative z-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white border border-[#0B96F3] rounded-xl shadow-[0_4px_24px_-10px_rgba(8,60,96,0.38)] md:p-16 p-10 flex flex-col items-center text-center group transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:scale-105 hover:shadow-[0_8px_30px_-10px_rgba(8,60,96,0.4)]"
            >
              <div
                className="absolute inset-0 z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] rounded-xl"
                style={{ backgroundColor: feature.hoverBg }}
              />
              <div className="text-center z-10">
                <div className="mb-4 flex justify-center transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-110">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={97}
                    height={97}
                  />
                </div>
                <p className="font-normal text-xl text-[#1a1a1a] group-hover:text-black transition-colors duration-500 ease-in-out">
                  {feature.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
