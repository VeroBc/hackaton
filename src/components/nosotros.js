import '../App.css';
import './nosotros.css'
import ReactPlayer from 'react-player'

export const Nosotros = () => {
    return (
        <div>
            <div class="grid-containerNosotros">
                <div class="bannerNosotros">
                <img src="https://i.ibb.co/jJkVhTH/nosotros.jpg" alt="marca" className="bannermarca"/>
                </div>
                <div class="videonosotros">
                <ReactPlayer
                        url="https://www.youtube.com/watch?v=r_Cny9XFzAY&ab_channel=BelcorpCorporativo"
                        controls
                        className='react-player'
                        playbackRate = {2}
                        width = "100%"
                        height = "100%"
                    />
                </div>
                <div className="fontTitulo">Nosotros</div>
                <div className="fontTexto">Somos una corporación multinacional de belleza con más de 50 años de experiencia en la venta directa. Desde nuestra fundación, hemos acompañado a millones de mujeres en el logro de su independencia económica a través de la venta de productos de nuestras tres marcas, Ésika, L’Bel y Cyzone.</div>
                <div className="fontTexto">Con un propósito que trasciende el resultado económico -Impulsamos belleza para lograr la realización personal–, inspiramos a cada persona a dar lo mejor de sí para que ella y su entorno logren lo extraordinario.</div>
                
            </div>
            <div className="cont-img-nosotros">
                <img src="https://i.ibb.co/YjZdcqB/Whats-App-Image-2021-01-27-at-8-40-39-PM.jpg" alt="marca" className="img-nosotros"/>
            </div>
        <div>
        </div>
        </div>
    )
}