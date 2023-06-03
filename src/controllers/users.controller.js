const getAllUsers = async (req, res) => {
  res.send("All users");
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  res.send(`User with id ${id}`);
};

const updateUserById = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const name = body.name;
  const email = body.email;
  res.send(`User with id ${id} updated`);
};

const createUser = async (req, res) => {
  const body = req.body;
  const name = body.name;
  const email = body.email;
  const password = body.password;
  const role = body.role;
  res.send(`User ${name} created`);
  //   res.json({
  //     name,
  //     email,
  //     password,
  //     role,
  //     message: `User ${name} created`,
  //   });
};

const deleteUserById = async (req, res) => {
  const id = req.params.id;
  res.send(`User with id ${id} deleted`);
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  createUser,
  deleteUserById,
};
