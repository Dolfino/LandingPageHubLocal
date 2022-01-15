import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/Dolfino/LandingPageHubLocal2">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="https://hublocal.com.br/">
            <a>Contato</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Transforme sua empresa numa\n máquina de atrair clientes\n'}
            <span className="text-primary-500">Sua empresa disponível em todos
              os mapas e listas da internet</span>
          </>
        }
        description="Encontre o plano certo para sua empresa"
        button={
          <Link href="https://hublocal.com.br/planos/">
            <a>
              <Button xl>CONSULTE NOSSO PLANOS</Button>
            </a>
          </Link>
        }
      />
    </Section>
    {/* <Section>
      <div className="elementor-row">
        <div className="has_ae_slider elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-9a6d474 ae-bg-gallery-type-default" data-id="9a6d474" data-element_type="column">
          <div className="elementor-column-wrap elementor-element-populated">
            <div className="elementor-widget-wrap">
              <section className="has_ae_slider elementor-section elementor-inner-section elementor-element elementor-element-8c5d4ce elementor-section-boxed elementor-section-height-default elementor-section-height-default ae-bg-gallery-type-default" data-id="8c5d4ce" data-element_type="section">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-row">
                    <div className="has_ae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-d6edab7 ae-bg-gallery-type-default" data-id="d6edab7" data-element_type="column">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <div className="elementor-element elementor-element-08896e8 elementor-widget__width-auto dce_masking-none elementor-widget elementor-widget-image" data-id="08896e8" data-element_type="widget" data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-image">
                                <img width={34} height={32} src="https://hublocal.com.br/wp-content/uploads/2021/03/II_cone_Azul.png" className="attachment-large size-large" alt="Listas, Mapas e Diretórios da internet | HubLocal" loading="lazy" />
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-9bf4c5e elementor-widget__width-auto elementor-widget elementor-widget-text-editor" data-id="9bf4c5e" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-text-editor elementor-clearfix">
                                <strong>Hub</strong> Start
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-2081459 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id={2081459} data-element_type="widget" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" className="fas fa-check" />
                                  </span>
                                  <span className="elementor-icon-list-text">CADASTRO MAPAS E LISTAS</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" className="fas fa-check" />
                                  </span>
                                  <span className="elementor-icon-list-text">ACESSO AO GERENCIADOR</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="elementor-element elementor-element-14fd656 elementor-align-justify elementor-widget elementor-widget-button" data-id="14fd656" data-element_type="widget" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjE5MjYiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">CONSULTAR PREÇO</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="has_ae_slider elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-cef0dc4 ae-bg-gallery-type-default" data-id="cef0dc4" data-element_type="column">
          <div className="elementor-column-wrap elementor-element-populated">
            <div className="elementor-widget-wrap">
              <section className="has_ae_slider elementor-section elementor-inner-section elementor-element elementor-element-30cc578 elementor-section-boxed elementor-section-height-default elementor-section-height-default ae-bg-gallery-type-default" data-id="30cc578" data-element_type="section">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-row">
                    <div className="has_ae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-148d05f ae-bg-gallery-type-default" data-id="148d05f" data-element_type="column">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <div className="elementor-element elementor-element-73360ca elementor-widget__width-auto dce_masking-none elementor-widget elementor-widget-image" data-id="73360ca" data-element_type="widget" data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-image">
                                <img width={34} height={32} src="https://hublocal.com.br/wp-content/uploads/2021/03/II_cone_Azul.png" className="attachment-large size-large" alt="Listas, Mapas e Diretórios da internet | HubLocal" loading="lazy" />
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-ff26f73 elementor-widget__width-auto elementor-widget elementor-widget-text-editor" data-id="ff26f73" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-text-editor elementor-clearfix">
                                <strong>Hub</strong> Standard
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-88f8c80 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="88f8c80" data-element_type="widget" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" className="fas fa-check" />
                                  </span>
                                  <span className="elementor-icon-list-text">TUDO DO PLANO START</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" className="fas fa-check" />
                                  </span>
                                  <span className="elementor-icon-list-text">OPERADOR DE SUPORTE</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" className="fas fa-check" />
                                  </span>
                                  <span className="elementor-icon-list-text">ATUALIZAÇÃO SEMANAL</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" className="fas fa-check" />
                                  </span>
                                  <span className="elementor-icon-list-text">PUBLICAÇÃO DE CONTEÚDOS</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" className="fas fa-check" />
                                  </span>
                                  <span className="elementor-icon-list-text">GESTÃO DE AVALIAÇÕES</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="elementor-element elementor-element-dcc1e1d elementor-align-justify elementor-widget elementor-widget-button" data-id="dcc1e1d" data-element_type="widget" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjE5MjYiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">CONSULTAR PREÇO</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="has_ae_slider elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-923017c ae-bg-gallery-type-default" data-id="923017c" data-element_type="column">
          <div className="elementor-column-wrap elementor-element-populated">
            <div className="elementor-widget-wrap">
              <section className="has_ae_slider elementor-section elementor-inner-section elementor-element elementor-element-b78190c elementor-section-boxed elementor-section-height-default elementor-section-height-default ae-bg-gallery-type-default" data-id="b78190c" data-element_type="section">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-row">
                    <div className="has_ae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-7b2d25f ae-bg-gallery-type-default" data-id="7b2d25f" data-element_type="column">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <div className="elementor-element elementor-element-4a5f250 elementor-widget__width-auto dce_masking-none elementor-widget elementor-widget-image" data-id="4a5f250" data-element_type="widget" data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-image">
                                <img width={34} height={32} src="https://hublocal.com.br/wp-content/uploads/2021/03/II_cone_Azul.png" className="attachment-large size-large" alt="Listas, Mapas e Diretórios da internet | HubLocal" loading="lazy" />
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-e2fab3a elementor-widget__width-auto elementor-widget elementor-widget-text-editor" data-id="e2fab3a" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-text-editor elementor-clearfix">
                                <strong>Hub</strong> Premium
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-201d791 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="201d791" data-element_type="widget" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" className="fas fa-check" />
                                  </span>
                                  <span className="elementor-icon-list-text">TUDO DO PLANO STANTARD</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" className="fas fa-check" />
                                  </span>
                                  <span className="elementor-icon-list-text">REGISTRO DE CHAMADAS</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" className="fas fa-check" />
                                  </span>
                                  <span className="elementor-icon-list-text">GRAVAÇÃO DE LIGAÇÕES</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" className="fas fa-check" />
                                  </span>
                                  <span className="elementor-icon-list-text">ALERTAS DE LIGAÇÕES PERDIDAS</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" className="fas fa-check" />
                                  </span>
                                  <span className="elementor-icon-list-text">REGISTRO DE ROTAS</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" className="fas fa-check" />
                                  </span>
                                  <span className="elementor-icon-list-text">MAPA DE ORIGEM DE ROTAS</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" className="fas fa-check" />
                                  </span>
                                  <span className="elementor-icon-list-text">BUSINESS INTELLIGENCE</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="elementor-element elementor-element-6c31396 elementor-align-justify elementor-widget elementor-widget-button" data-id="6c31396" data-element_type="widget" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjE5MjYiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">CONSULTAR PREÇO</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="has_ae_slider elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-5341350 ae-bg-gallery-type-default" data-id={5341350} data-element_type="column">
          <div className="elementor-column-wrap elementor-element-populated">
            <div className="elementor-widget-wrap">
              <section className="has_ae_slider elementor-section elementor-inner-section elementor-element elementor-element-9e60249 elementor-section-boxed elementor-section-height-default elementor-section-height-default ae-bg-gallery-type-default" data-dce-background-color="#0385FD" data-id="9e60249" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-row">
                    <div className="has_ae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-2ab955e ae-bg-gallery-type-default" data-id="2ab955e" data-element_type="column">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <div className="elementor-element elementor-element-7b84d19 elementor-widget__width-auto dce_masking-none elementor-widget elementor-widget-image" data-id="7b84d19" data-element_type="widget" data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-image">
                                <img width={34} height={32} src="https://hublocal.com.br/wp-content/uploads/2021/03/II_cone_Branco_Check_Verde.png" className="attachment-large size-large" alt="Listas, Mapas e Diretórios da internet | HubLocal" loading="lazy" />
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-9f6bd79 elementor-widget__width-auto elementor-widget elementor-widget-text-editor" data-id="9f6bd79" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-text-editor elementor-clearfix">
                                <strong>Hub</strong> Enterprise
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-0c69dbd elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="0c69dbd" data-element_type="widget" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" className="fas fa-check" />
                                  </span>
                                  <span className="elementor-icon-list-text">PLANO CUSTOMIZÁVEL</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-c6c88ae elementor-widget elementor-widget-text-editor" data-id="c6c88ae" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-text-editor elementor-clearfix">
                                Ideal para rede de empresas com múltiplas unidades
                                de negócios e pontos de vendas.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="elementor-element elementor-element-bfd9b7b elementor-align-justify elementor-widget elementor-widget-button" data-id="bfd9b7b" data-element_type="widget" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjE5MjYiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">CONSULTAR PREÇO</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Section> */}
  </Background>
);

export { Hero };
