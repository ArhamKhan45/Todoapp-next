import { usermodel } from "@/Schema/usermodel";
import bcrypt from "bcrypt";
import { serialize } from "cookie";
import jwt from "jsonwebtoken";

// functions

export const setemail = (em) => {
  const email = em.toLowerCase();
  return email;
};

export const setpassword = async (pass) => {
  const password = await bcrypt.hash(pass, 10);
  return password;
};

export const comparepassword = async (pass, hashedpass) => {
  const match = await bcrypt.compare(pass, hashedpass);
  return match;
};

export const generatetoken = (_id) => {
  const token = jwt.sign({ _id }, process.env.SECRET_KEY);
  return token;
};

export const setCookie = (res, token, set) => {
  res.setHeader(
    "Set-Cookie",
    serialize("token", set ? token : "", {
      path: "/",
      httpOnly: true,
      maxAge: set ? 15 * 24 * 60 * 60 * 1000 : 0,
    })
  );
};

export const getCookieName = (req) => {
  let mycookie = req.headers.cookie;
  mycookie = mycookie.split("=");
  return mycookie[0];
};

// user checker

export const checkauth = async (req) => {
  let mycookie = req.headers.cookie;

  if (!mycookie) return null;

  const token = mycookie.split("=")[1];
  const decodedId = jwt.verify(token, process.env.SECRET_KEY);

  return await usermodel.findById(decodedId._id);
};

export const Userwithoutpassword = (obj) => {
  let freshobj = structuredClone(obj);
  freshobj = freshobj._doc;
  delete freshobj.password;
  freshobj._id = obj._id;
  return freshobj;
};
