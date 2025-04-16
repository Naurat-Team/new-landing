import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CallToAction: React.FC = () => {
  const { t } = useTranslation();

  const benefits = [
    t("smarter_data_driven_decisions"),
    t("time_saving_through_automation"),
    t("real_time_business_insights"),
    t("enterprise_level_security"),
  ];

  return (
    <section
      id="cta"
      className="py-20 md:py-32 bg-[#312c86] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>

      {/* Decorative shapes */}
      <div
        className="absolute top-0 left-0 w-full h-20 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-full h-20 bg-white"
        style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-3xl md:text-5xl max-w-lg font-bold mb-6 tracking-tight animate-fade-in">
              {t("boost_your_business")}
            </h2>

            <p className="text-lg mb-8 text-white/80 max-w-xl animate-fade-in">
              {t("optimize_and_maximize_with_naurat")}
            </p>

            <ul className="space-y-3 mb-10">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="text-white/90 h-5 w-5 flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-5/12 animate-fade-in-delay">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {t("get_started_today")}
                  </h3>
                </div>
                <p className="text-white/100 mb-6">
                  {t("experience_naurat_power")}
                </p>
                <a
                  href="https://calendly.com/team-naurat-kdlj/30min"
                  className="w-full py-4 bg-white text-[#312c86] rounded-md font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                >
                  <span>{t("request_demo")}</span>
                  <ArrowRight size={18} />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/[0.05] rounded-full blur-3xl animate-bg-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-indigo-300/[0.05] rounded-full blur-3xl"></div>
    </section>
  );
};

export default CallToAction;
