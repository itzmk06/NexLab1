export const userData = {
    name: "Manoj Kumar M",
    username: "jetfuze",
    profilePic:
      "https://images.unsplash.com/photo-1603005901058-02e1cfc65270?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    bio: "I love building and scaling websites and learning to automate the same because I'm a lazy dev :P",
    skills: ["MERN", "Machine Learning", "Python", "Java", "C++"],
    socialLinks: [
      {
        name: "LinkedIn",
        icon: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
      },
      {
        name: "X",
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png",
      },
      {
        name: "GitHub",
        icon: "https://cdn-icons-png.flaticon.com/128/25/25657.png",
      },
    ],
    stats: [
      {
        title: "Following",
        count: "1",
        iconClass: "fi fi-br-following",
        colorClass: "text-[#FF6B6B]",
      },
      {
        title: "Followers",
        count: "10",
        iconClass: "fi fi-br-users",
        colorClass: "text-[#4CAF50]",
      },
    ],
    projects: {
      posted: 5,
      contributed: 12,
      recentContributions: [
        { title: "Open Source Contribution to Project X", link: "#" },
        { title: "Developed Feature Y in ABC Corp", link: "#" },
        { title: "Optimized Backend for Project Z", link: "#" },
      ],
    },
  };

export const projectData={
  data1:[
        {
        project_logo:"https://cdn-icons-png.flaticon.com/128/3670/3670147.png",
        project_title:"1OOx YouTube",
        project_description:"Most Powerful version of YouTube",
        project_stack:['React.js', 'MongoDB', 'Node.js'],
        project_likes:100
      },
      {
        project_logo:"https://cdn-icons-png.flaticon.com/128/6033/6033716.png",
        project_title:"Scaling Meta backend",
        project_description:"I don't know what i wrote",
        project_stack:['Spring boot', 'Spring', 'Microservice'],
        project_likes:150
      },
      {
        project_logo:"https://cdn-icons-png.flaticon.com/128/12222/12222588.png",
        project_title:"ChatGPT Helper",
        project_description:"ChatGPT Zindabad",
        project_stack:["Prompt Engineering"],
        project_likes:6000
      }
  ]
}