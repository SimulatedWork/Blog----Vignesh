import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import {v4 as uuidv4} from 'uuid'
import { hashString } from '.'
import Verification from '../Models/EmailVerificationSchema'

dotenv.config()

const {AUTH_EMAIL, AUTH_PASSWORD, APP_URL} = process.env

let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", 
    auth: {
        user: AUTH_EMAIL, 
        password: AUTH_PASSWORD
    }
})

export const sendVerificationEmail = async(req, res) => {
    const {_id, email, lastName} = user

    const token = _id + uuidv4()

    const link = APP_URL + 'users/verify/' + _id + '/' + token

    const mailOptions = {
        from: AUTH_EMAIL,
        to: email, 
        subject: "Email Verification", 
        html: 
        `<div style='font-family: Arial, sans-serif; font-size: 20px; color: #333; background-color: white'>
        <h1 style='color: rgb(8, 56, 188)'>Please Verify your Email Address</h1>
        <hr>
        <h4>Hi ${lastName},</h4>
        <p>
            Please Verify your Email Address so that we can know that it's you, 
            <br>
            <p>This Link <b>expires in 1h</b></p>
            <br>
            <a href=${link} style='color: #fff; padding: 14px; text-decoration: none; background-color: #000;'>Email Address</a>
        </p>
        <div style='margin-top: 20px;'>
            <h5>Best Regards</h5>
            <h5>BloggyVerse</h5>
        </div>
        </div>`
    }

    try {
        const hashedToken = await hashString(token)

        const newVerifiedEmail = await Verification.create({
            userId: _id, 
            token: hashedToken, 
            createdAt: Date.now(),
            updatedAt: Date.now() + 3600000 
        })

        if(newVerifiedEmail){
            transporter
                .sendMail(mailOptions)
                .then(()=>{
                    res.status(201).send({
                        success: "pending", 
                        message: "Verification Email has been sent to your account. Check your Email for further instructions."
                    })
                })
        }
    } catch (error) {
        console.log(error)
        res.status(404).json({Message: error.message})
    }
}