const transporter = require("../config/emailConfig");
require("dotenv").config();

const sendRegistrationEmail = async (email, name) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Registration successful",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bharat Tech Xperience 2.0 - Registration Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        .email-container {
            max-width: 400px;
            border: 1px solid #e1e1e1;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        img{
            width: 100%;
            object-fit: cover;
            height: 100px;
            object-position: center;
        }
        .header {
            background: black;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .content h2 {
            font-size: 18px;
            margin: 0 0 10px;
            text-decoration: underline;
        }
        .content>p {
            margin: 25px 0;
            font-size: 14px;
        }
        
        .social-icons {
            display: flex;
            justify-content: center;
            margin: 20px 0;
            text-align: center;
        }
        .social-icons a {
            margin: 0 10px;
            text-decoration: none;
            display: inline-block;
        }
        .social-icons img{
            width: 40px;
            object-fit: cover;
            height: 40px;
        }
        
        .footer {
            text-align: center;
            font-size: 12px;
            color: #666;
            background: #f4f4f4;
            padding: 10px;
        }
        .details{
            display: flex;
            gap: 8px;
            flex-direction: column;    
        }
        .what-div{
            display: flex;
            justify-content: center;
            margin: auto;
            margin-bottom: 20px;
            
        }
        .what{
            width: 120px;
            padding: 10px;
            background: #25d366;
            display: block;
            border: 0;
            border-radius: 30px;
            margin: auto;
            object-position: center;
            color: white;
        }
        .heading{
            font-weight: bold;
            font-size: 18px;
            text-decoration: none;
        }
        .insta{
            width: 43px;
            height: 43px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <img src="https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j1XBMcF2I5MLKCsAboJV8YcS0hQlt3zjI6PH7w" alt="">
            <p>Hi, <strong>${name}</strong> and team</p>
        </div>
        <div class="content">
            <h2 class="heading">Congratulations on successfully registering for Bharat Tech Xperience 2.0! 🎉</h2>
            <p>We're thrilled to have you and your team onboard. As the next step, please join our exclusive Team Leaders' WhatsApp Group: <strong>"Astronauts-in-Chief"</strong> to stay updated with all event details:</p>
            <div class="whatsapp-div">
                <div class="what-div">
                    
                        <button class="what"><a href="https://chat.whatsapp.com/Ba72dIm8ufhCUzXVv92TKs">Click Here</a></button>
                </div>
            </div>
            <div>
                Stay updated with all the event updates by following us on our social media platforms below:
            </div>
            <div class="social-icons">
                <a href="https://www.instagram.com/theuniquesofficial/" target="_blank">
                    <img class="insta" src="https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j1eHpEjHaqBE3Tc9OfeNG6Ht0Q1DCAhwvkjIs2" alt="">
                </a>
                <a href="https://www.linkedin.com/company/theuniquesofflicial/posts/?feedView=all" target="_blank">
                    <img src="https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j174YHWjCMxuLOtErmzaW9I3DTZvypBwif5AKU" alt="linkedin">
                </a>
            </div>
            <div>
                <p>For any queries, feel free to reach out to us at: <br><a href="mailto:team.theuniques@sviet.ac.in">The Unqiues Community</a></p>
            </div>
            <div class="details">
                <p style="font-size: small; font-weight: 600;">Event Venue: Swami Vivekanand Institute of Engineering and Technology, Banur, 140601</p>
                <p style="font-size: small; font-weight: 600;">Date: 08<sup>th</sup> to 09<sup>th</sup> February, 2025</p>
            </div>
            
            
        </div>
        <div class="footer">
            <p>Thank you for joining us at <span style="font-weight: 700;">Bharat Tech Xperience 2.0!</span></p>
        </div>
    </div>
</body>
</html>
`,
    });
  } catch (error) {
    console.error("Error sending registration email:", error);
  }
};

module.exports = { sendRegistrationEmail };
