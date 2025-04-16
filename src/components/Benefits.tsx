import React from "react";
import { BarChart, Shield, Clock, LineChart } from "lucide-react";
import { useTranslation } from "react-i18next";

const Benefits: React.FC = () => {
  const { t } = useTranslation();

  const benefitsList = [
    {
      icon: <BarChart className="w-7 h-7" />,
      title: t("increased_productivity"),
      description: t("answer_data_questions_in_seconds"),
      color: "from-[#312c86] to-[#4b45b5]",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: t("advanced_security"),
      description: t("total_information_protection"),
      color: "from-[#5751c5] to-[#4b45b5]",
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: t("time_saving"),
      description: t("understand_your_business_instantly"),
      color: "from-[#312c86] to-[#4b45b5]",
    },
    {
      icon: <LineChart className="w-7 h-7" />,
      title: t("guaranteed_scalability"),
      description: t("solution_grows_with_your_business"),
      color: "from-[#211d5e] to-[#312c86]",
    },
  ];

  return (
    <section
      id="benefits"
      className="py-20 md:py-32 bg-gradient-to-b from-black to-[#211d5e] text-white relative z-10"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            {t("key_benefits")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5751c5] to-[#312c86] mx-auto"></div>
          <p className="text-lg opacity-80 mt-6">
            {t("make_your_data_work_for_you")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefitsList.map((benefit, index) => (
            <div
              key={index}
              className="flex p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300 animate-fade-in transform hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`mr-5 rounded-full p-3 bg-gradient-to-r ${benefit.color}`}
              >
                <div className="h-full grid place-items-center">
                  {benefit.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="opacity-80">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5751c5]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-[#312c86]/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Benefits;
