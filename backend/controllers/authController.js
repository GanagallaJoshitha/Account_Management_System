import supabase from "../config/supabaseClient.js"
import bcrypt from "bcryptjs"
import generateToken from "../utils/generateToken.js"

export const signup = async (req, res) => {

  try {

    const { name, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          name,
          email,
          password: hashedPassword,
          balance: 10000
        }
      ])

    if (error) {
      return res.status(400).json({ message: error.message })
    }

    res.json({ message: "User created successfully" })

  } catch (err) {

    res.status(500).json({ message: "Server error" })

  }

}


export const login = async (req, res) => {

  try {

    const { email, password } = req.body

    const { data: user } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single()

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    const validPassword = await bcrypt.compare(password, user.password)

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password" })
    }

    const token = generateToken(user.id)

    res.json({
      token,
      user
    })

  } catch (err) {

    res.status(500).json({ message: "Server error" })

  }

}