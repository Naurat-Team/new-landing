import React from "react";
import { CheckCircle2 } from "lucide-react";
import VideoDemo from "@/components/VideoDemo";
import { useTranslation } from "react-i18next";

const DemoVideo: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    t("intuitive_and_easy_interface"),
    t("advanced_predictive_analysis"),
    t("integration_with_multiple_sources"),
  ];

  return (
    <section
      id="demo"
      className="py-20 md:py-32 bg-gradient-to-b from-[#f8f8ff] to-white relative overflow-hidden z-10"
    >
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="max-w-xl">
              <span className="inline-block px-4 py-1.5 bg-[#312c86]/10 text-[#312c86] rounded-full text-sm font-medium mb-4">
                {t("demo")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                {t("naurat_in_action")}
              </h2>
              <p className="text-lg opacity-80 mb-8 text-gray-600">
                {t("discover_how_naurat_revolutionizes_data_use")}
              </p>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#312c86] h-5 w-5 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://calendly.com/team-naurat-kdlj/30min"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#312c86] text-white rounded-md hover:bg-[#312c86]/90 transition-colors"
              >
                {t("view_full_demo")}
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <VideoDemo />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#312c86]/[0.03] rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#5751c5]/[0.04] rounded-full blur-3xl"></div>
    </section>
  );
};

export default DemoVideo;
