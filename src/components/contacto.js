import '../App.css';
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button';

export const Contacto = () => {
    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Mensaje enviado</Popover.Title>
          <Popover.Content>
            Gracias por contactarte con nostros. En breve, nos comunicaremos contigo
          </Popover.Content>
        </Popover>
      );
      
      const Example = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="success">Enviar</Button>
        </OverlayTrigger>
      );

    return (
    <div>            
        <div>
            <img src="https://i.ibb.co/2ZDD6LP/bannercontacto.jpg" alt="marca" className="bannermarca"/>
        </div>
        <div>
            <section className="Material-contact-section section-padding section-dark">
                <div className="container">
                <div className="row">
              <div className="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
                  <h1 className="section-title">Nos gustaría saber de ti</h1>
              </div>
          </div>
                <div className="row">
                <div className="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
                <p>
                    ¡Bienvenida Consultora!
                    Nos reinventamos para ayudarte a potenciar tu negocio de manera más fácil, rápida y segura con la ayuda de nuestras herramientas digitales.
                    Sigue nuestra página o comunicate con nosotros, para enterarte de las novedades que tenemos para ti.</p>
                <div className="find-widget">
                 Company:  <a href="https://www.somosbelcorp.com/">Belcorp</a>
                </div>
                <div className="find-widget">
                 Dirección: <a href="https://www.google.com/search?q=ubicacion%20belcorp&rlz=1C1AVFC_enPE865PE865&oq=ubicacion+belrcorp&aqs=chrome.1.69i57j0i13i30j0i8i13i30.6303j1j4&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:4&tbm=lcl&sxsrf=ALeKk019tY_bNpbIVNLsXXePdMI_IEN_5g:1611783471249&rflfq=1&num=10&rldimm=17798119845327134407&lqi=ChF1YmljYWNpb24gYmVsY29ycCIDiAEBWhIKB2JlbGNvcnAiB2JlbGNvcnA&ved=2ahUKEwjCrIiqib3uAhWFHbkGHRKmBu4QvS4wAHoECAUQGg&rlst=f#rlfi=hd:;si:17798119845327134407,l,ChF1YmljYWNpb24gYmVsY29ycCIDiAEBWhIKB2JlbGNvcnAiB2JlbGNvcnA;mv:[[-11.933058299999999,-76.9341219],[-12.229834799999999,-77.10824219999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:4">Lima, Perú</a>
                </div>
                <div className="find-widget">
                Teléfono:  <a href="/">(+51 1) 2113300</a>
                </div>              
                <div className="find-widget">
                Website:  <a href="https://www.somosbelcorp.com/">www.somosbelcorp.com</a>
                </div>
              </div>
              <div className="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
                  <form className="shake" method="post" id="contactForm" name="contact-form" data-toggle="validator">
                      <div className="form-group label-floating">
                        <label className="control-label" for="name">Nombre</label>
                        <input className="form-control" id="name" type="text" name="name" required data-error="Por favor ingresa tu nombre"></input>
                        <div className="help-block with-errors"></div>
                      </div>
 
                      <div className="form-group label-floating">
                        <label className="control-label" for="email">Email</label>
                        <input className="form-control" id="email" type="email" name="email" required data-error="Please enter your Email"></input>
                        <div className="help-block with-errors"></div>
                      </div>
                   
                      <div className="form-group label-floating">
                        <label className="control-label">Asunto</label>
                        <input className="form-control" id="msg_subject" type="text" name="subject" required data-error="Please enter your message subject"></input>
                        <div className="help-block with-errors"></div>
                      </div>
               
                      <div className="form-group label-floating">
                          <label for="message" class="control-label">Mensaje</label>
                          <textarea className="form-control" rows="3" id="message" name="message" required data-error="Write your message"></textarea>
                          <div className="help-block with-errors"></div>
                      </div>
                
                      <div className="form-submit mt-5">
                       <Example />
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </section>
        </div>
    </div>
    )
}