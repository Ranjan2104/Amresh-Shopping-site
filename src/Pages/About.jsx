import { Paper, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Paper elevation={12}>
        <Typography variant='h6' sx={{ fontWeight: 'bold', textAlignLast:'center' }} p={2}>Welcome to Amresh Shopping Site</Typography>
        <Typography sx={{ fontSize:'18', fontWeight: '400' }} p={2}>
          Amresh Shopping Site is a cutting-edge online shopping platform that offers
          a wide range of products to cater to the needs of diverse customers. 
          Our user-friendly interface provides an enjoyable shopping experience, 
          making it easy for customers to browse, select, and purchase their favorite items.
          <br />
          <br />
          1. Extensive Product Selection: Discover an extensive collection of products, including electronics, fashion, home essentials, beauty products, and much more.
          <br />
          2. Personalized Recommendations: Our smart algorithms analyze your browsing and purchase history to offer personalized product recommendations.
          <br />
          3. Secure Payment Options: Enjoy a secure checkout process with various payment options, ensuring a smooth and safe transaction.
          <br />
          4.Fast and Reliable Delivery: We strive to deliver your orders quickly and reliably to your doorstep.
          <br />
          5.4/7 Customer Support: Our dedicated support team is available round-the-clock to assist you with any queries or concerns.
          <br />
          <br />
          Explore the latest trends, find exclusive deals, and experience the joy of shopping from the comfort of your home with Amresh Shopping Site. Happy shopping!
          <br />
          <br />  
          Of course, this description is entirely fictional, and if "Amresh Shopping Site" is a real project, the actual description would depend on its unique features, offerings, and target audience.
        </Typography>
      </Paper>
    </div>
  )
}

export default About