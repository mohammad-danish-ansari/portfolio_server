import userAuth from "../../../../model/authUserModel.js";
import bcrypt from "bcrypt";
import { SUPER_ADMIN_USER } from "../../../../config/config.js";

export const superAdminInsertFun = async () => {
  try {
    let existsUser = await userAuth.findOne(
      { email: SUPER_ADMIN_USER.email },
      { _id: 1 }
    );

    if (!existsUser) {
      const hashedPassword = await bcrypt.hash(SUPER_ADMIN_USER.password, 10);

      await userAuth.create({
        ...SUPER_ADMIN_USER,
        password: hashedPassword,
      });
    }

    console.log("Super Admin created successfully");
  } catch (e) {
    console.error("User Not Created", e);
  }
};
