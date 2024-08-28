import React from "react";
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
      exit={{ opacity: 0, y: 50 }}
      viewport={{ once: false, amount: 0.5}}
      id="project"
      className="project p-10 bg-transparent justify-around flex flex-col w-full lg:w-[80vw] "
    >
      <div className="title text-center flex items-center justify-center mb-6">
        <h1 className="text-3xl md:text-4xl w-fit border-grey-100">Projects</h1>
      </div>
      <div className="cards h-fit p-4 flex flex-col lg:flex-row justify-around gap-8">
        <Card className="h-[27rem] w-full lg:w-[22rem]" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height=""
              image={expense}
              alt="Expense Management"
            />
            <CardContent className="bg-black text-white hover:text-cyan-300 transition-all duration-200">
              <Typography gutterBottom variant="h5" component="div">
                Expense Management
              </Typography>
              <Typography variant="body2" className="text-white text-lg">
                Tech Used: MERN, JWT, <br /> Material UI, Ant Design, React
                Icons.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="h-[27rem] w-full lg:w-[22rem]" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={event}
              alt="Event Management"
            />
            <CardContent className="bg-black text-white hover:text-cyan-300 transition-all duration-200">
              <Typography gutterBottom variant="h5" component="div">
                Event Management
              </Typography>
              <Typography variant="body2" className="text-white">
                Tech Used: MERN, JWT, <br /> Material UI, Ant Design, React
                Icons.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="h-[27rem] w-full lg:w-[22rem]" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={chat}
              alt="Chat Application"
            />
            <CardContent className="bg-black text-white hover:text-cyan-300 transition-all duration-200">
              <Typography gutterBottom variant="h5" component="div">
                Chat Application
              </Typography>
              <Typography variant="body2" className="text-white">
                Tech Used: MERN, JWT, WebSocket <br /> Material UI, Ant Design,
                React Icons.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </motion.div>
  );
};
