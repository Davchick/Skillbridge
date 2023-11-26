import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

/* REGISTER */
export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const salt = bcrypt.genSaltSync();
    const passwordHash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: passwordHash,
    });

    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const validUser = await User.findOne({ email });
    if (!validUser) return res.status(400).json("User does not exist");

    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) return res.status(400).json("Invalid credentials");

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: none, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
