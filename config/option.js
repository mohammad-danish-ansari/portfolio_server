const OPTIONS = {
  usersRoles: {
    SUPER_ADMIN: "SUPER_ADMIN",
    EMPLOYEE: "EMPLOYEE",
    CUSTOMER: "CUSTOMER",
    ADMIN: "ADMIN",
    getAllRolesAsArray: () => {
      return [
        OPTIONS.usersRoles.SUPER_ADMIN,
        OPTIONS.usersRoles.EMPLOYEE,
        OPTIONS.usersRoles.CUSTOMER,
        OPTIONS.usersRoles.ADMIN,
      ];
    },
  },

};

export default OPTIONS;
