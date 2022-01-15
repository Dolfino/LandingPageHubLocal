import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Uma máquina constante de atração de clientes"
    description="Imagine uma máquina trabalhando em tempo real para fazer a sua empresa ser encontrada em todos os principais mapas e listas da internet? A HubLocal faz isso para sua empresa através de 4 passos simplificados e automatizados."
  >
    <VerticalFeatureRow
      title="01 | Análise de Presença"
      description="Verifique se sua empresa está presente de forma otimizada em todos os mapas e listas da internet de forma otimizada."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="02 | Correção de Presença"
      description="Com as funcionalidades de correção automatizada e checagem em tempo real da HubLocal, mantenha as informações sobre o seu negócio sempre completas, atualizadas e não perca mais oportunidades para a sua concorrência local."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="03 | Manutenção de Presença"
      description="Com as funcionalidades de divulgação do HubLocal, divulgue facilmente promoções, cupons de descontos e campanhas regionais de sua empresa sem complicações. E tudo nos sites, apps e diretórios que mais interessam."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
