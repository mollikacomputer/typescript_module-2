//module 2-8
// 3/05/2026 time 7:33pm
// --experimental-transform-types
//set of fixed string leteral এক জায়গায় রাখে
// 1. way
// type UserRoles = "Admin" | "Editor" | "Viewer";
//2. way
enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}
//1. way
// const canEdit = (role: UserRoles) => {
//   if (role === "Admin" || role === "Editor") {
//     return true;
//   } else return false;
// };

const canEdit = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};
// 9.42 second
const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
