import express from "express"
import { getBalance, processTransfer, fetchTransactions, getUsers } from "../controllers/accountController.js"
import authMiddleware from "../middlewares/authMiddleware.js"

const router = express.Router()

router.get("/balance", authMiddleware, getBalance)
router.post("/transfer", authMiddleware, processTransfer)
router.get("/statement", authMiddleware, fetchTransactions)
router.get("/users", authMiddleware, getUsers)

export default router