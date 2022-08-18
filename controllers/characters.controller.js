const ApiService = require("../services/api.service");
const apiService = new ApiService();
const createError = require("http-errors");

module.exports.home = (req, res, next) => {
  apiService
    .getAllCharacters()
    .then((response) => {
      res.render("home", { characters: response.data });
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

module.exports.addNew = (req, res, next) => {
  res.render("createForm");
};

module.exports.doAddNew = (req, res, next) => {
  apiService
    .createCharacter(req.body)
    .then((created) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

module.exports.delete = (req, res, next) => {
  const { id } = req.params;
  apiService
    .deleteCharacter(id)
    .then((character) => {
      res.status(204).send(character);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};
