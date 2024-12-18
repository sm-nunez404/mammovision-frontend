import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  ArrowTrendingDownIcon,
  ClockIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  ChartBarSquareIcon 
} from '@heroicons/react/24/outline';

export default function Impact() {
  const impacts = [
    {
      icon: ArrowTrendingDownIcon,
      title: "Reducción de Mortalidad",
      description: "Mejora significativa en las tasas de detección temprana y supervivencia del cáncer de mama.",
      metrics: [
        { label: "Detección", value: "+20%" },
        { label: "Supervivencia", value: "+30%" }
      ]
    },
    {
      icon: ClockIcon,
      title: "Optimización de Recursos",
      description: "Disminución de la carga de trabajo de los radiólogos para enfoque en casos críticos.",
      metrics: [
        { label: "Carga Laboral", value: "-40%" },
        { label: "Eficiencia", value: "+65%" }
      ]
    },
    {
      icon: GlobeAltIcon,
      title: "Accesibilidad Global",
      description: "Democratización de tecnología avanzada para hospitales con recursos limitados.",
      metrics: [
        { label: "Cobertura", value: "+60%" },
        { label: "Adopción", value: "89%" }
      ]
    },
    {
      icon: CurrencyDollarIcon,
      title: "Reducción de Costos",
      description: "Minimización de gastos asociados a diagnósticos tardíos y tratamientos complejos.",
      metrics: [
        { label: "Ahorro", value: "40%" },
        { label: "ROI", value: "+65%" }
      ]
    }
  ];

  return (
    <Section decorative>
      <SectionHeader
        title="Impacto Transformador"
        subtitle="Revolucionando la detección temprana del cáncer de mama"
        badge={{
          text: "Resultados Esperados",
          icon: ChartBarSquareIcon
        }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {impacts.map((impact, index) => (
          <div key={index} className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl" />
            <div className="relative bg-[#021526]/60 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFD700]/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <impact.icon className="w-7 h-7 text-[#021526]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{impact.title}</h3>
              <p className="text-[#EIF3F9]/80 leading-relaxed mb-6 flex-grow">{impact.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {impact.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-[#021526]/40 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-[#FFD700] mb-1">{metric.value}</div>
                    <div className="text-sm text-[#EIF3F9]/70">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}