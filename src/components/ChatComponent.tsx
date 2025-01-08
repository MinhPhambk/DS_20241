import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  IconButton,
  Paper,
  TextField,
  Typography,
  Avatar,
  Divider,
  Button,
} from "@mui/material";
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoMdSend } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { fengShuiAppApi } from "../assets/api";

type Message = {
  id: number;
  text: string;
  isUser: boolean;
};

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<Message[]>(() => {
    const savedMessages = sessionStorage.getItem("chatMessages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  const [isVerified, setIsVerified] = useState<boolean>(() => {
    const saved = sessionStorage.getItem("isVerified");
    return saved ? JSON.parse(saved) : false;
  });

  const [isShowCancle, setIsShowCancle] = useState<boolean>(() => {
    const saved = sessionStorage.getItem("isShowCancle");
    return saved ? JSON.parse(saved) : false;
  });

  const [chatId, setChatId] = useState<string>(() => {
    const saved = sessionStorage.getItem("chatId");
    return saved ? saved : "";
  });

  const [showGreetingButton, setShowGreetingButton] = useState<boolean>(() => {
    const saved = sessionStorage.getItem("showGreetingButton");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    sessionStorage.setItem("isVerified", JSON.stringify(isVerified));
  }, [isVerified]);

  useEffect(() => {
    sessionStorage.setItem("chatId", chatId);
  }, [chatId]);

  useEffect(() => {
    sessionStorage.setItem("showGreetingButton", JSON.stringify(showGreetingButton));
  }, [showGreetingButton]);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (message.trim()) {
      setIsShowCancle(false);
      setShowGreetingButton(false);
      const userMessage = {
        id: messages.length + 1,
        text: message,
        isUser: true,
      };
      const updatedMessages = [...messages, userMessage];
      setMessages((prev) => [...prev, userMessage]);
      setMessage("");
      sessionStorage.setItem("chatMessages", JSON.stringify(updatedMessages));

      if (userMessage.text === "Thoát") {
        setChatId("-1");
        setIsVerified(false);

        const botMessage = {
          id: messages.length + 2,
          text: "Bạn đã thoát phiên đăng nhập! \n\nGõ gì đó để tiếp tục!",
          isUser: false,
        };

        setMessages((prev) => [...prev, botMessage]);
        sessionStorage.setItem(
          "chatMessages",
          JSON.stringify([...updatedMessages, botMessage])
        );

        return;
      }

      if (chatId === "-1" && isVerified === false) {
        botSendMess("Hãy nhập số điện thoại của bạn!");
        setIsShowCancle(false);
        setChatId("");
        return;
      }

      if (!(!isVerified || chatId === undefined || chatId === null || chatId === "")) {
        setIsTyping(true);

        try {
          const response = await axios.post(fengShuiAppApi.chatAsk, { "id": chatId, "text": userMessage.text });

          const botMessage = {
            id: messages.length + 2,
            text: response.data.data,
            isUser: false,
          };

          setMessages((prev) => [...prev, botMessage]);
          sessionStorage.setItem(
            "chatMessages",
            JSON.stringify([...updatedMessages, botMessage])
          );
        } catch (error) {
          const errorMessage = {
            id: messages.length + 2,
            text: "Chat đang bận, hãy thử lại sau!",
            isUser: false,
          };
          setMessages((prev) => [...prev, errorMessage]);
          setIsShowCancle(true);
        } finally {
          setIsTyping(false);
        }
      } else {
        try {
          const response = await axios.post(fengShuiAppApi.chatVerify, { phoneNumber: userMessage.text });

          if (response.status === 200) {
            if (response.data.code === "00003" || response.data.code === "00001") {
              const botMessage = {
                id: messages.length + 2,
                text: response.data.message,
                isUser: false,
              };

              setMessages((prev) => [...prev, botMessage]);
              sessionStorage.setItem(
                "chatMessages",
                JSON.stringify([...updatedMessages, botMessage])
              );

              setIsVerified(false);
              setIsShowCancle(true);
            } else if (response.data.code === "00002") {
              const resInit = await axios.post(fengShuiAppApi.chatInit, { phoneNumber: userMessage.text });

              if (resInit.status === 200) {
                if (resInit.data.code === "00003" || resInit.data.code === "00001") {
                  const botMessage = {
                    id: messages.length + 2,
                    text: resInit.data.message,
                    isUser: false,
                  };

                  setMessages((prev) => [...prev, botMessage]);
                  sessionStorage.setItem(
                    "chatMessages",
                    JSON.stringify([...updatedMessages, botMessage])
                  );

                  setIsVerified(false);
                  setIsShowCancle(true);
                } else if (resInit.data.code === "00002") {
                  setShowGreetingButton(true);
                  setIsVerified(true);
                  setIsShowCancle(false);
                  setChatId(resInit.data.data._id);
                  sessionStorage.setItem("chatId", resInit.data.data._id);
                }
              } else {
                botSendMess("Chat đang bận, hãy thử lại sau!");
                setIsShowCancle(true);
              }
            }
          } else {
            botSendMess("Chat đang bận, hãy thử lại sau!");
            setIsShowCancle(true);
          }
        } catch (error) {
          botSendMess("Chat đang bận, hãy thử lại sau!");
          setIsShowCancle(true);
        }
      }
    }
  };

  function botSendMess(text: string) {
    try {
      const botMessage: Message = {
        id: messages.length + 1,
        text: text,
        isUser: false,
      };
      const updatedMessages = [...messages, botMessage];
      setMessages(updatedMessages);
      sessionStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
    } catch (error) {
      console.error("Error during chat flow:", error);
    }
  }

  const handleGreetingClick = () => {
    botSendMess(`## Chào mừng bạn! 🚀 \nChúng tôi rất vui được hỗ trợ bạn.\n## Hướng dẫn sử dụng: \n1. **Nhập số điện thoại**: Xác minh thông tin của bạn. \n2. **Đặt câu hỏi**: Hãy hỏi bất cứ điều gì bạn cần giúp đỡ. \n3. **Thoát phiên trò chuyện**: Gõ "Thoát" để đăng xuất khỏi phiên trò chuyện này.\n\n`);
    setShowGreetingButton(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const fetchVerifyStatus = async () => {
    if (!isVerified || chatId === undefined || chatId === null || chatId === "") {
      botSendMess("Hãy nhập số điện thoại của bạn!");
      setIsShowCancle(false);
      setChatId("");

      // try {
      //   const savedData = sessionStorage.getItem("phone");
      //   let p_nb = savedData ? savedData : "";
      //   const response = await axios.post(fengShuiAppApi.chatVerify, { phoneNumber: p_nb });
      //   if (response.status == 200) {
      //     if (response.data.code == "00003" || response.data.code == "00001") {
      //       botSendMess(response.data.message);
      //       setIsVerified(false);
      //     }
      //     else if (response.data.code == "00002") {
      //       const res_init = await axios.post(fengShuiAppApi.chatInit, { phoneNumber: p_nb });
      //       if (res_init.status == 200) {
      //         if (res_init.data.code == "00003" || res_init.data.code == "00001") {
      //           botSendMess(res_init.data.message);
      //           setIsVerified(false);
      //         }
      //         else if (res_init.data.code == "00002") {
      //           setShowGreetingButton(true);
      //           setIsVerified(true);
      //           setChatId(res_init.data.data._id);
      //           sessionStorage.setItem("chatId", JSON.stringify(res_init.data.data._id));
      //         }
      //       }
      //       else {
      //         botSendMess(res_init.data.message);
      //         setIsVerified(false);
      //       }
      //     }
      //   }
      //   else {
      //     botSendMess("Có chút lỗi, vui lòng thử lại!");
      //     setIsVerified(false);
      //   }
      // } catch (error) {
      //   console.error("Error fetching verify status:", error);
      // }
    }
  };

  const handleRedirect = () => {
    if (window.location.href.includes("/fengShui") || window.location.href.includes("/trip-planning")) {
      navigate("/");
    } else {
      window.location.reload();
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchVerifyStatus();
    }
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      {/* Chat icon */}
      {!isOpen && (
        <IconButton
          onClick={() => setIsOpen(true)}
          sx={{
            backgroundColor: "#DA0530",
            color: "white",
            "&:hover": { backgroundColor: "#B00428" },
            width: 56,
            height: 56,
            animation: "blink 1.5s infinite",
            "@keyframes blink": {
              "0%, 100%": { transform: "scale(1)" },
              "50%": { transform: "scale(1.2)" },
            },
          }}
        >
          <BiMessageRoundedDots size={24} />
        </IconButton>
      )}

      {/* Chat box */}
      {isOpen && (
        <Paper
          elevation={3}
          sx={{
            position: "absolute",
            bottom: 80,
            right: 0,
            width: {
              xs: 300,
              md: 400,
            },
            height: {
              xs: 400,
              md: 500,
            },
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
            borderRadius: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1.6,
              backgroundColor: "#DA0530",
              color: "white",
            }}
          >
            <Typography variant="h6">Chat Support</Typography>
            <IconButton
              size="medium"
              sx={{
                color: "white",
                fontSize: "1.5rem",
              }}
              onClick={() => setIsOpen(false)}
            >
              <IoClose />
            </IconButton>
          </Box>

          <Divider />

          <Box
            sx={{
              flex: 1,
              overflow: "auto",
              padding: 2,
              backgroundColor: "#f5f5f5",
            }}
          >
            {messages.map((msg) => (
              <Box
                key={Date.now() + Math.random()}
                sx={{
                  display: "flex",
                  justifyContent: msg.isUser ? "flex-end" : "flex-start",
                  mb: 1,
                }}
              >
                {!msg.isUser && (
                  <Avatar
                    src="/page1/icAI.svg"
                    sx={{ width: 32, height: 32, mr: 1 }}
                  />
                )}
                <Paper
                  sx={{
                    p: 1,
                    backgroundColor: msg.isUser ? "#DA0530" : "background.paper",
                    color: msg.isUser ? "white" : "inherit",
                    maxWidth: "75%",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    minHeight: "auto",
                    paddingX: 2,
                    paddingY: 0.1,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.2,
                      overflowWrap: "break-word",
                      wordBreak: "break-word",
                      textAlign: "justify",
                      "& ul, & ol": {
                        paddingLeft: 2,
                        marginTop: 0,
                        marginBottom: 0,
                      },
                      "& li": {
                        marginBottom: 0.5,
                      },
                    }}
                  >
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </Typography>
                </Paper>
              </Box>
            ))}

            {isTyping && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Avatar
                  src="/page1/icAI.svg"
                  sx={{ width: 32, height: 32, mr: 1 }}
                />
                <Box
                  sx={{
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                  }}
                >
                  {[...Array(3)].map((_, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#ccc",
                        borderRadius: "50%",
                        animation: "bounce 1.2s infinite",
                        animationDelay: `${i * 0.2}s`,
                        "@keyframes bounce": {
                          "0%, 100%": {
                            transform: "translateY(0)",
                          },
                          "50%": {
                            transform: "translateY(-8px)",
                          },
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            )}

            {showGreetingButton && (
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Button
                  onClick={handleGreetingClick}
                  startIcon={
                    <img src="/page1/icSp.svg" alt="icon" width={"90%"} />
                  }
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(92.4deg, #A8F5FF -8.37%, #FF4E72 10.92%, #DA0530 81.42%, #E9A2C2 102.96%)",
                    borderRadius: "20px",
                    color: "white",
                    textTransform: "none",
                    "&:hover": {
                      background:
                        "linear-gradient(92.4deg, #E9A2C2 102.96%, #DA0530 81.42%, #FF4E72 10.92%, #A8F5FF -8.37%)",
                    },
                    fontSize: {
                      xs: "12px",
                    },
                  }}
                >
                  BẮT ĐẦU TRÒ CHUYỆN!
                </Button>
              </Box>
            )}

            {isShowCancle && (
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Button
                  onClick={handleRedirect}
                  startIcon={
                    <img src="/page1/icSp.svg" alt="icon" width={"90%"} />
                  }
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(92.4deg, #A8F5FF -8.37%, #FF4E72 10.92%, #DA0530 81.42%, #E9A2C2 102.96%)",
                    borderRadius: "20px",
                    color: "white",
                    textTransform: "none",
                    "&:hover": {
                      background:
                        "linear-gradient(92.4deg, #E9A2C2 102.96%, #DA0530 81.42%, #FF4E72 10.92%, #A8F5FF -8.37%)",
                    },
                    fontSize: {
                      xs: "12px",
                    },
                  }}
                >
                  KHÁM PHÁ NGAY!
                </Button>
              </Box>
            )}

            <div ref={chatEndRef} />
          </Box>

          <Divider />

          <Box
            sx={{
              p: 2,
              display: "flex",
              gap: 1,
              borderTop: "1px solid #e0e0e0",
            }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Đặt câu hỏi ở đây ..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              sx={{
                backgroundColor: "white",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#e0e0e0",
                  },
                  "&:hover fieldset": {
                    borderColor: "#DA0530",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#DA0530",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "black",
                },
              }}
            />

            <IconButton
              sx={{
                backgroundColor: "#DA0530",
                color: "white",
                "&:hover": { backgroundColor: "#B00428" },
              }}
              onClick={handleSend}
              disabled={!message.trim()}
            >
              <IoMdSend />
            </IconButton>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default Chat;
