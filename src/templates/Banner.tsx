import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Entre em contato conosco para fazer a sua empresa aparecer nos principais motores de buscas da internet e atrair mais clientes. "
      subtitle="Inicie o seu teste gratuito."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <Button>Pronto para começar?</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
