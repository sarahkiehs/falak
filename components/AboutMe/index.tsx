import { pageRoutes } from "../../lib/routes";

const AboutMe = () => (
  <div className="flex flex-col space-y-4 text-md md:max-w-2xl">
    <p>I am Falak.</p>
    <p>Yo yo.</p>
    <h2>
      <a href={pageRoutes.writing}>Writing</a>
    </h2>
    I have written some stuff here
    <h2>Shop [TODO]</h2>
    Support me by buying from here
  </div>
);

export default AboutMe;
