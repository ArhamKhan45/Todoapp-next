import Useraboutpage from "./useraboutpage.jsx";
import Userclient from "./Useraboutclient.jsx";
import Siteclient from "./Siteaboutclient.jsx";
import Siteaboutpage from "./siteaboutpage.jsx";
function About() {
  return (
    <>
      <Userclient>
        <Useraboutpage />
      </Userclient>
      <Siteclient>
        <Siteaboutpage />
      </Siteclient>
    </>
  );
}

export default About;
