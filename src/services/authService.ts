import bcrypt from "bcrypt";
import jwtUtils from "../utils/jwtUtils";
import User from "../entities/User";
const register = async ({ role, email, password,username }:any) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user =  User.create({
    role,
    email,
    username,
    password: hashedPassword,
  });
  await user.save();
  return user;
};

const login = async ({ email, password }:any) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error("User not found");

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("Invalid credentials");

  const accessToken = jwtUtils.generateAccessToken(user);
  const refreshToken = jwtUtils.generateRefreshToken(user);

  return { accessToken, refreshToken };
};

export default { register, login };
