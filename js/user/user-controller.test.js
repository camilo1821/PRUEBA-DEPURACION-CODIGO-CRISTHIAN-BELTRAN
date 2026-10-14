const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user);
  });

test('findByEmail devuelve el usuario cuando el email existe', () => {
  let controller = new UserController();
  let user = new User(1234, "Santiago", "santiago@generation.org");
  controller.add(user);
  expect(controller.findByEmail("santiago@generation.org")).toBe(user);
});

test('findById devuelve el usuario cuando el ID existe', () => {
  let controller = new UserController();
  let user = new User(1234, "Santiago", "santiago@generation.org");
  controller.add(user);
  expect(controller.findById(1234)).toBe(user);
});