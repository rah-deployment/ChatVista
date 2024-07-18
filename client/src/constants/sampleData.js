export const sampleChats = [
  {
    avatar: ["http://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["http://www.w3schools.com/howto/img_avatar.png",
    ],
    name: "Aleena Hadid",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["http://www.w3schools.com/howto/img_avatar.png"],
    name: "Selena Gomez",
    _id: "3",
    groupChat: false,
    members: ["1", "2", "3"],
  },
];

export const sampleUsers = [
  {
    avatar: ["http://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
  },
  {
    avatar: ["http://www.w3schools.com/howto/img_avatar.png"],
    name: "Aleena Hadeed",
    _id: "2",
  }
]

export const sampleNotifications = [
  {
    sender: {
      avatar: ["http://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe"
  },
    _id: "1",
  },
  {
    sender: {
      avatar: ["http://www.w3schools.com/howto/img_avatar.png"],
    name: "Aleena Hadeed"
  },
    _id: "2",
  }
]

export const sampleMessage =[
  {
    attachments: [],
    content: "Hello",
    _id: "asjsdj",
    sender: {
      _id: "user._id",
      name: "John Doe",
    },
    chat: "chatId",
    createdAt: "2024-07-05T20:00:00.000Z",
  },
  {
    attachments: [
      {
        public_id: "rahii",
        url: "http://www.w3schools.com/howto/img_avatar.png"
      },
    ],
    content: "",
    _id: "asjsdjii",
    sender: {
      _id: "123",
      name: "Selena Gomez",
    },
    chat: "chatId",
    createdAt: "2024-07-05T20:00:00.000Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "John Doe",
      avatar: ["http://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      username: "john_doe",
      friends: 15,
      groups: 6,
    },
    {
      name: "Aleena Hadeed",
      avatar: ["http://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      username: "aleena_hadeed",
      friends: 10,
      groups: 4,
    },
    {
      name: "Selena Gomez",
      avatar: ["http://www.w3schools.com/howto/img_avatar.png"],
      _id: "3",
      username: "selena_gomez",
      friends: 20,
      groups: 8,
    },
  ]
}