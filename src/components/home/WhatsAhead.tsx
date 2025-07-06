import { FiCode, FiFeather, FiBookOpen } from 'react-icons/fi';

const WhatsAhead = () => {
  return (
    <section className="py-20 bg-[#18191b] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What&apos;s Ahead?
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Dive into a world where code meets creativity. Here&apos;s a glimpse of
            what you&apos;ll discover:
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#232427] rounded-xl p-8 text-center hover:bg-[#2a2b2e] transition-colors">
            <FiCode className="text-5xl text-blue-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Deep Dives into Code</h3>
            <p className="text-white/70">
              In-depth tutorials, best practices, and real-world coding journeys.
            </p>
          </div>
          <div className="bg-[#232427] rounded-xl p-8 text-center hover:bg-[#2a2b2e] transition-colors">
            <FiFeather className="text-5xl text-green-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Creative Writing</h3>
            <p className="text-white/70">
              Stories, essays, and explorations at the intersection of tech and art.
            </p>
          </div>
          <div className="bg-[#232427] rounded-xl p-8 text-center hover:bg-[#2a2b2e] transition-colors">
            <FiBookOpen className="text-5xl text-purple-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Tech Tutorials</h3>
            <p className="text-white/70">
              Step-by-step guides to help you master new tools and frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAhead;