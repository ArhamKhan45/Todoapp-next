import Userhomepage from "./userhome";
import Userclient from "./userclient";
import Siteclient from "./siteclient";
import Sitehomepage from "./sitehome";
function page() {
  return (
    <>
      <Userclient>
        <Userhomepage />
      </Userclient>
      <Siteclient>
        <Sitehomepage />
      </Siteclient>
    </>
  );
}

export default page;
