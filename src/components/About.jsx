import avatar from "../img/avatar.png";

function About() {
  return (
    <div className="about">
      <h1>Who is Peggy Barranca? </h1>
      <div className="aboutContent">
        <div>
          {" "}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            voluptas maxime consequatur magnam, itaque eligendi architecto
            aspernatur quibusdam hic similique aut nihil temporibus, repudiandae
            culpa dignissimos doloremque, enim incidunt. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Aperiam voluptas maxime
            consequatur magnam, itaque eligendi architecto aspernatur quibusdam
            hic similique aut nihil temporibus, repudiandae culpa dignissimos
            doloremque, enim incidunt.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            voluptas maxime consequatur magnam, itaque eligendi architecto
            aspernatur quibusdam hic similique aut nihil temporibus, repudiandae
            culpa dignissimos doloremque, enim incidunt. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Aperiam voluptas maxime
            consequatur magnam, itaque eligendi architecto aspernatur quibusdam
            hic similique aut nihil temporibus, repudiandae culpa dignissimos
            doloremque, enim incidunt.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            voluptas maxime consequatur magnam, itaque eligendi architecto
            aspernatur quibusdam hic similique aut nihil temporibus, repudiandae
            culpa dignissimos doloremque, enim incidunt. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Aperiam voluptas maxime
            consequatur magnam, itaque eligendi architecto aspernatur quibusdam
            hic similique aut nihil temporibus, repudiandae culpa dignissimos
            doloremque, enim incidunt.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            voluptas maxime consequatur magnam, itaque eligendi architecto
            aspernatur quibusdam hic similique aut nihil temporibus, repudiandae
            culpa dignissimos doloremque, enim incidunt. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Aperiam voluptas maxime
            consequatur magnam, itaque eligendi architecto aspernatur quibusdam
            hic similique aut nihil temporibus, repudiandae culpa dignissimos
            doloremque, enim incidunt.
          </p>
        </div>
        <img
          src={avatar}
          alt={"logo"}
          id="logo"
          style={{
            maxWidth: 400,
            minWidth: 400,
            maxHeight: 400,
            minHeight: 400,
          }}
        />
      </div>
    </div>
  );
}

export default About;
