import './AboutUs.css';

import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const AboutUs = () => {
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">Odiseas Urbanas y de Montaña</h2>

            <p className="section-subtitle">
              {' '}
              Nuestra pasión por la aventura y la comunidad nos impulsó a crear una
              plataforma donde los viajes se convierten en sueños realizados.
            </p>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://res.cloudinary.com/djglk3cso/image/upload/v1686559547/UserFTProyect/rfimrylpbiixauupnmwq.png"
                alt="person-review"
                className="team-img"
              />
              <h3>CARLOS MARTIN</h3>
              <div className="team-info">
                <p>Las Palmas de Gran Canaria</p>
              </div>
              <p>
                Me apasionó la programación por su inmenso potencial para crear e innovar.
                Es a través de esta herramienta que podemos transformar ideas abstractas
                en soluciones tangibles y eficientes, para hacer así la vida más fácil y
                emocionante.
              </p>

              <ul className="team-icon">
                <li>
                  <a
                    href="https://github.com/Cmrdevelopment"
                    className="gitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub size={38} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@neoland-school"
                    className="youTube"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillYoutube size={44} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/NeolandStudio"
                    className="twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillTwitterCircle size={40} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/NeolandStudio/?locale=es_ES"
                    className="facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook size={33} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687627364/vegano_rvseme.jpg"
                alt="person-review"
                className="team-img"
              />

              <h3>IGOR LUZARRAGA</h3>

              <div className="team-info">
                <p>Barcelona</p>
              </div>

              <p>
                Soy un apasionado programador con una paciencia incansable. Disfruto cada
                línea de código como un desafío creativo, encontrando soluciones con
                perseverancia. La programación es mi lenguaje para dar vida a ideas y
                superar obstáculos con determinación.
              </p>

              <ul className="team-icon">
                <li>
                  <a
                    href="https://github.com/IgorLuzarraga"
                    className="gitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub size={38} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@neoland-school"
                    className="youTube"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillYoutube size={44} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/NeolandStudio"
                    className="twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillTwitterCircle size={40} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/NeolandStudio/?locale=es_ES"
                    className="facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook size={33} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687627660/1675093921794_r3evad.jpg"
                alt="person-review"
                className="team-img"
              />

              <h3>Jonathan Rodríguez</h3>

              <div className="team-info">
                <p>A Coruña</p>
              </div>

              <p>
                Soy un programador al que le apasiona crear soluciones completas y
                eficientes. Mi atención a los pequeños detalles asegura que cada aspecto
                del desarrollo esté cuidadosamente diseñado para ofrecer una user
                experience excepcional.
              </p>

              <ul className="team-icon">
                <li>
                  <a
                    href="https://github.com/jonathanrodvaz"
                    className="gitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub size={38} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@neoland-school"
                    className="youTube"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillYoutube size={44} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/NeolandStudio"
                    className="twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillTwitterCircle size={40} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/NeolandStudio/?locale=es_ES"
                    className="facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook size={33} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
