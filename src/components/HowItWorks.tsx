import React from "react";
import {
  Brain,
  TrendingUp,
  Database,
  Briefcase,
  LineChart,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: t("advanced_analytics_ai"),
      description: t("ai_understands_and_generates_analysis"),
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: t("predictive_analysis"),
      description: t("anticipate_market_and_customer_behavior"),
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: t("data_integration"),
      description: t("connect_multiple_data_sources"),
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: t("business_intelligence"),
      description: t("transform_complex_data_into_clarity"),
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      title: t("real_time_monitoring"),
      description: t("know_your_business_status_anytime"),
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: t("enterprise_security"),
      description: t("rest_easy_with_enterprise_security"),
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-32 bg-white relative overflow-hidden z-10"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            {t("how_it_works_alt")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#312c86] to-[#5751c5] mx-auto"></div>
          <p className="text-lg opacity-80 mt-6 text-gray-600">
            {t("discover_naurat_capabilities")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-[#312c86]/10 hover:border-[#312c86]/30 hover:shadow-lg transition-all duration-300 overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6 bg-gradient-to-br from-[#312c86] to-[#5751c5] text-white p-4 rounded-lg w-16 h-16 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#312c86]">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#312c86]/20 to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#312c86]/[0.03] rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/2 left-0 w-72 h-72 bg-[#5751c5]/[0.03] rounded-full blur-3xl"></div>
    </section>
  );
};

export default HowItWorks;
