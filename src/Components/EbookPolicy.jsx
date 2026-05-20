import { FaDownload, FaLock, FaInfinity, FaHeadset } from "react-icons/fa";

const EbookPolicy = () => {
  const policies = [
    {
      id: 1,
      icon: <FaDownload  className="text-3xl text-accent" />,
      title: "Instant Download",
      desc: "Get immediate access to your eBook right after purchase — no waiting.",
    },
    {
      id: 2,
      icon: <FaLock className="text-3xl text-accent" />,
      title: "Secure & DRM Protected",
      desc: "All books are safely encrypted and protected against unauthorized sharing.",
    },
    {
      id: 3,
      icon: <FaInfinity className="text-3xl text-accent" />,
      title: "Lifetime Access",
      desc: "Once purchased, your eBook will always be available in your library.",
    },
    {
      id: 4,
      icon: <FaHeadset className="text-3xl text-accent" />,
      title: "Reader Support",
      desc: "Need help? Our support team is available 24/7 for assistance.",
    },
  ];

  return (
    <div className="mt-10 bg-base-300 p-6 rounded-2xl shadow-md">
      <h3 className="text-xl font-bold text-center mb-6 text-accent">
        📘 Our E-Book Policies
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {policies.map((policy) => (
          <div
            key={policy.id}
            className="card bg-base-100 shadow-md hover:shadow-lg transition p-5 text-center"
          >
            <div className="flex justify-center mb-3">{policy.icon}</div>
            <h4 className="font-bold text-lg mb-2">{policy.title}</h4>
            <p className="text-sm text-gray-400">{policy.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EbookPolicy;
