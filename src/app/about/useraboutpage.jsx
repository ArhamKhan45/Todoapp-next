import { cookies } from "next/headers";
import { toast } from "react-toastify";
import ProfileEdit from "./profileEdit.jsx";
import ShowAlltask from "./profileAlltask.jsx";

const profileHandler = async (token) => {
  try {
    const res = await fetch(`${process.env.MYURL}/api/user/profile`, {
      cache: "no-cache",
      headers: {
        cookie: `token=${token}`,
      },
    });
    const data = await res.json();

    if (!data.success) {
      return [];
    }

    return data.user;
  } catch (error) {
    toast.error(error);
  }
};
async function Useraboutpage() {
  let tokenmaker = cookies().getAll();

  var token;
  if (tokenmaker.length > 0) {
    token = tokenmaker[0].value;
  } else {
    token = [];
  }

  const UserAbout = await profileHandler(token);

  return (
    <div className="w-75 mx-auto">
      <div className="text-center text-danger mt-3">
        <h1>User Profile</h1>
      </div>
      <div id=" mt-4">
        <h3 className="text-success">Hello, {UserAbout.name}</h3>
        <p>
          Welcome to your profile page. Here, you can customize your experience
          and stay organized with the Todo App.
        </p>
        <ul>
          <li>
            <span>Name -</span> {UserAbout.name}
          </li>
          <li>
            <span>E-mail -</span> {UserAbout.email}
          </li>
          <li>
            <span>Created At - </span>
            {UserAbout.createdAt}
          </li>
        </ul>
      </div>

      <ProfileEdit />
      <ShowAlltask />
    </div>
  );
}

export default Useraboutpage;
