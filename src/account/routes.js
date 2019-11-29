import { Router } from "express";
import { createNewAccount, getAccountByID, getAccounts } from "./controller";

const router = Router();
router.post("/", (req, res) => {
  createNewAccount(req.body)
    .then(Account => {
      return res.send("Account");
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/", (req, res) => {
  getAccounts()
    .then(Account => {
      res.send(Account);
    })
    .catch(err => {
      console.log(err);
    });
});
router.get("/:id", (req, res) => {
  getAccountByID(req.params.id)
    .then(Account => {
      res.send(Acoount);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

export default router;
