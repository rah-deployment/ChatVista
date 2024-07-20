import { compare } from "bcrypt";
import { User } from "../models/user.js";
import { sendToken } from "../utils/features.js";
import { TryCatch } from "../middlewares/error.js";
import { ErrorHander } from "../utils/utility.js";

// Create a new user and save it to the database and save token in cookie
const newUser = async (req, res) => {
  const { name, username, password, bio } = req.body;

  console.log(req.body);

  const avatar = {
    public_id: "jdshdj",
    url: "jdshdj",
  };

  const user = await User.create({
    name,
    bio,
    username,
    password,
    avatar,
  });

  sendToken(res, user, 201, "User created successfully!");
};

// Login user and save token in cookie
const login = TryCatch(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).select("+password");

  if (!user) return next(new ErrorHander("Invalid Username or Password", 404));

  const isMatch = await compare(password, user.password);

  if (!isMatch)
    return next(new ErrorHander("Invalid Username or Password", 404));

  sendToken(res, user, 200, `Welcome back ${user.name}!`);
});

const getMyProfile = (req, res) => {};

export { login, newUser, getMyProfile };
