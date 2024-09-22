import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import expense from "../assets/expense.jpg";
import event from "../assets/event.png";
import chat from "../assets/chat.jpg";
import { motion } from "framer-motion";
export const Projects = () => {
  return (
    <div className="w-[90vw] mt-[22rem] m-auto p-5 ">
      <div className="box flex flex-col justify-center">
        <div className="title">
          <h1 className="tracking-[0.4rem] text-center text-2xl">Projects</h1>
        </div>
        <div className="cards flex flex-col md:flex-row justify-between gap-10 flex-wrap md:flex-nowrap mt-12">
        <Card className="w-full md:w-1/3" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height=""
              image={expense}
              alt="Expense Management"
            />
            <CardContent className="bg-black text-white hover:text-cyan-300 transition-all duration-200">
              <Typography gutterBottom variant="h5" component="div">
                <a href='https://github.com/Adnan2k5/Expense-Management'>
                  Expense Management
                </a>
              </Typography>
              <Typography variant="body2" className="text-white text-lg">
                Tech Used: MERN, JWT, <br /> Material UI, Ant Design, React
                Icons.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="w-full md:w-1/3" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height=""
              image={event}
              alt="Expense Management"
            />
            <CardContent className="bg-black text-white hover:text-cyan-300 transition-all duration-200">
              <Typography gutterBottom variant="h5" component="div">
                <a href='https://github.com/Adnan2k5/Event-Management'>Event Mangement</a>
              </Typography>
              <Typography variant="body2" className="text-white text-lg">
                Tech Used: MERN, JWT, <br /> Material UI, Ant Design, React
                Icons.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="w-full md:w-1/3" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height=""
              image={chat}
              alt="Expense Management"
            />
            <CardContent className="bg-black text-white hover:text-cyan-300 transition-all duration-200">
              <Typography gutterBottom variant="h5" component="div">
                Chat Application
              </Typography>
              <Typography variant="body2" className="text-white text-lg">
                Tech Used: MERN, JWT, <br /> Material UI, Ant Design, React
                Icons.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </div>
      </div>
    </div>
  )
}
