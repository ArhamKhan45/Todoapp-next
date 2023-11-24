import { toast } from "react-toastify";

// LOGIN API  CONNECT

export const loginHandler = async (e, email, password, setUser, router) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    if (!data.success) {
      return toast.error(data.message);
    }

    setUser(data.user);

    toast.success(data.message);
    if (data.success) {
      router.refresh();
    }
  } catch (error) {
    return toast.error(error);
  }
};

//LOGOUT API CONNECT

export const Logouthandler = async (e, setUser) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/user/logout");

    const data = await res.json();
    if (!data.success) {
      return toast.error(data.message);
    }

    setUser({});
    return toast.success(data.message);
  } catch (error) {
    return toast.error(error);
  }
};

// REGISTER API CONNECT

export const RegisterHandler = async (e, name, email, password, setgoto) => {
  e.preventDefault();
  // console.log(name, email, password);
  try {
    const res = await fetch("/api/user/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (!data.success) return toast.error(data.message);

    toast.success(data.message);
    return setgoto(false);
  } catch (error) {
    toast.error(error);
  }
};

// SAVE LOGIN API

export const Savelogin = async (setUser) => {
  try {
    const res = await fetch("/api/user/profile");
    const data = await res.json();
    if (data.success) {
      setUser(data.user);
    }
    return toast.success(`Welcome  ${data.user.name} `);
  } catch (error) {
    toast.error(error);
  }
};

//CREATE TASK HANDLER API

export const CreatetaskHandler = async (
  e,
  title,
  description,
  router,
  setTask,
  setDescription
) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/task/createtask", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (!data.success) return toast.error(data.message);
    toast.success(data.message);
    setTask("");
    setDescription("");
    return router.refresh();
  } catch (error) {
    toast.error(error);
  }
};

//UPDATE TASK HANDLER API

export const updatetaskHandler = async (taskId, setdone) => {
  try {
    const res = await fetch(`/api/task/${taskId}`, {
      method: "PUT",
    });
    const data = await res.json();
    if (!data.success) return toast.error(data.message);
    // console.log(data.task.iscompleted);
    setdone(data.task.iscompleted);
    if (!data.task.iscompleted) return toast.error("Task is not completed");
    toast.success("Task is completed successfully");
  } catch (error) {
    return toast.error(error);
  }
};

// DELETE TASK HANDLER API

export const deleteTaskHandler = async (taskId, router) => {
  try {
    const res = await fetch(`/api/task/${taskId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    // console.log(data);
    if (!data.success) return toast.error(error.message);

    toast.success(data.message);
    return router.refresh();
  } catch (error) {
    return toast.error(error);
  }
};

// Profile Update Handler  API

export const profileUpdateHandler = async (
  e,
  name,
  password,
  newPassword,
  confirmPassword,
  setName,
  setCurrentPassword,
  setNewPassword,
  setConfirmNewPassword,
  router
) => {
  e.preventDefault();
  try {
    const res = await fetch("/api/user/editprofile", {
      method: "PUT",
      body: JSON.stringify({ name, password, newPassword, confirmPassword }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    // console.log(data);
    // router.refresh();
    if (data.successName) {
      toast.success(data.successNameMessage);
    } else {
      toast.error(data.nameErrorMessage);
    }
    if (data.successPassword) {
      toast.success(data.successPasswordMessage);
    } else {
      toast.error(data.passwordErrorMessage);
    }
    setName("");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");

    return router.refresh();
  } catch (error) {
    toast.error(error);
  }
};
