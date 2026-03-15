import express from "express"
import { getBalance, transferMoney, getStatement, getUsers } from "../controllers/accountController.js"
import authMiddleware from "../middlewares/authMiddleware.js"

const router = express.Router()

router.get("/balance", authMiddleware, getBalance)
router.post("/transfer", authMiddleware, transferMoney)
router.get("/statement", authMiddleware, getStatement)
router.get("/users", authMiddleware, getUsers)

export default router