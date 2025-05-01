import Navbar from "../components/Navbar";
import "./About.css";
import CoachCard from "../components/CoachCard";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-us" id="about-us">
        <div className="container-aboutPage">
          <img
            src="/assets/kids_playing.png"
            alt="aboutImg"
            className="about-img"
          />
          <div className="about-description">
            <p className="about-heading">About Us </p>
            <p className="about-subtext">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
              qui officia nam reiciendis nihil sapiente totam ratione voluptatem
              nulla dolore. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Maxime, fuga veritatis! Hic magni ratione veritatis minima,
              aspernatur voluptas iusto ipsa nobis officiis earum aliquam
              dignissimos! Natus odit expedita cumque reprehenderit?
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis
              voluptatum aliquam veritatis, numquam minima inventore ea
              repudiandae dolores voluptate.
            </p>
          </div>
        </div>
        <div className="about-vision">
          <p className="underlined-text">Our Vision</p>
          <p className="about-vision-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            beatae soluta incidunt! Ullam mollitia praesentium unde eaque quas
            sed ad voluptates facere, modi iusto voluptatibus porro debitis
            saepe sint quasi libero consequatur. Quisquam adipisci quod illo,
            eaque voluptatibus delectus enim?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ad
            tenetur quae? Dolores enim est corporis dolorem quam aspernatur
            obcaecati veritatis minus, ipsam dicta earum. Quia similique, in
            unde ut laudantium accusamus, necessitatibus libero ipsa nihil
            eligendi pariatur, error id harum voluptates! Nesciunt illum ad
            quisquam quam beatae sapiente delectus officiis. Sint quam adipisci
            molestiae quia rerum necessitatibus aut rem.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            commodi doloribus voluptas fuga voluptate necessitatibus omnis
            asperiores inventore, et, ad ducimus labore perspiciatis alias ut a!
            Qui, explicabo illo fugit cupiditate eius error eligendi sit nihil
            molestiae sequi magni laborum, officiis praesentium dicta ex veniam
            ipsam ducimus quos in minima alias adipisci! Aperiam, consequuntur
            quo ducimus, pariatur repudiandae cumque voluptates eligendi, error
            reprehenderit aspernatur fugit. Consectetur eos sapiente aliquam
            natus.
          </p>
        </div>
        <div className="about-coaches">
          <p className="underlined-text">Our Coaches</p>
          <p className="coach-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            aut, assumenda, ratione rem inventore sapiente unde corporis et
            voluptatem reprehenderit beatae incidunt dolore qui non perferendis
            laboriosam ex aliquam aliquid?
          </p>
          <div className="coach-imgs">
            {/* add 4 images */}
            <div className="about-coach-imgs">
              <div className="card-container">
                <CoachCard
                  image="/assets/humanImgNoFace.png"
                  name="John Doe"
                  designation="Fitness Coach"
                />
                <CoachCard
                  image="/assets/humanImgNoFace.png"
                  name="Jane Smith"
                  designation="Strength Trainer"
                />
                <CoachCard
                  image="/assets/humanImgNoFace.png"
                  name="Mike Johnson"
                  designation="Yoga Instructor"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="about-administration">
          <p className="underlined-text">Administration</p>
          <div className="administration-imgs">
            <div className="about-coach-imgs">
              <div className="card-container">
                <CoachCard
                  image="/assets/humanImgNoFace.png"
                  name="John Doe"
                  designation="Fitness Coach"
                />
                <CoachCard
                  image="/assets/humanImgNoFace.png"
                  name="Jane Smith"
                  designation="Strength Trainer"
                />
                <CoachCard
                  image="/assets/humanImgNoFace.png"
                  name="Mike Johnson"
                  designation="Yoga Instructor"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
