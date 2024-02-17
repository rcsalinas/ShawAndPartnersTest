import express from 'express'
import { searchUsers } from '../controllers/usersController'

const router = express.Router()

router.get('/', searchUsers)

export default router
