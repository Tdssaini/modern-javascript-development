// Model
class UserModel {
  constructor(name) {
    this.name = name;
  }
}

// View
class UserView {
  render(user) {
    console.log(`User Name: ${user.name}`);
  }
}

// Controller
class UserController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  setUserDetails(name) {
    this.model.name = name;
  }

  updateUserView() {
    this.view.render(this.model);
  }
}

const user = new UserModel("John Doe");
const userView = new UserView();
const userController = new UserController(user, userView);

userController.updateUserView(); 

userController.setUserDetails("Jane Doe");

userController.updateUserView();