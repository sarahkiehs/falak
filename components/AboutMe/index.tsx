import { pageRoutes } from "../../lib/routes";

const AboutMe = () => (
  <div className="flex flex-col space-y-4 text-md md:max-w-2xl place-self-center">
    <h1>My Story</h1>
    <p>I am Falak.</p>
    <h2>
      <a href={pageRoutes.writing}>Writing</a>
    </h2>
    I have written some stuff here
  </div>
);

export default AboutMe;
