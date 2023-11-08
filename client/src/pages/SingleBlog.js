import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, CardMedia, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const [blog, setBlog] = useState({});
  const id = useParams().id;
  const [inputs, setInputs] = useState({});

  const getBlogDetail = async () => {
    try {
      const { data } = await axios.get(`/api/v1/blog/get-blog/${id}`);
      if (data?.success) {
        setBlog(data?.blog);
        setInputs({
          title: data?.blog.title,
          description: data?.blog.description,
          image: data?.blog.image,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogDetail();
  }, [id]);

  return (
    <>
      <Box
        width={"80%"}
        border={1}
        borderRadius={3}
        padding={3}
        sx={{ mb: 3 }}
        margin={"auto"}
        boxShadow={"2px 2px 6px #ccc"}
        display={"flex"}
        flexDirection={"column"}
        marginTop={"30px"}
      >
        <Typography
          variant="h4"
          textAlign={"center"}
          fontWeight={"bold"}
          padding={3}
          color={"black"}
        >
          {inputs.title}
        </Typography>

        <CardMedia
          component="img"
          sx={{
            width: "50%",
            mx: "auto",
          }}
          objectFit="cover"
          image={inputs.image}
          alt={inputs.title}
        />
        <Typography variant="h6" marginTop={"20px"} color="text.secondary">
          {inputs.description}
        </Typography>
      </Box>
    </>
  );
};

export default SingleBlog;
