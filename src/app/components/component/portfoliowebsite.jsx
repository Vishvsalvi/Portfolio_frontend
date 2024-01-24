"use client"
import Link from "next/link"
import Image from "next/image"
import { CardTitle, 
  CardHeader, 
  CardContent, 
  CardFooter, 
  Card
} from "../ui/card"

import { Badge } from "../ui/badge"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

import axios from "axios"
import { useState } from "react"
import { useToast } from "../ui/use-toast"


export default function Portfoliowebsite() {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const {toast} = useToast()

  const projects = [
    {
      title: "Karnix 3d Farm",
      demoLink: "https://k3df.onrender.com/",
      description: "Website made for a 3d printing business. This was my first freelance project.",
      image: "/Images/Project_1.png",
    }, 
    {
      title: "Flipkart Clone",
      demoLink: "https://flipkart-clone.pages.dev/",
      description: "Flipkart Clone made using React and Tailwind CSS. It is a frontend project.",
      image: "/Images/Project_2.png",
    },
    {
      title: "Ahead Group (In progress)",
      demoLink: "#",
      description: "Website made for a Educational Trust. This is a freelance gig.",
      image: "/Images/Project_3.png",
    }
  ]

  const blogs = [
    {
      title: "Node.js: The Scalable and Lightweight Choice for Developers",
      visitBlog: "https://vishvsalvi.hashnode.dev/nodejs-the-scalable-and-lightweight-choice-for-developers",
      image: "/Images/Node_blog.avif",

    },
    {
      title: "Difference Between Access Token And Refresh Token",
      visitBlog: "https://vishvsalvi.hashnode.dev/difference-between-access-token-and-refresh-token",
      image: "/Images/Token_blog.avif",
    },
    {
      title: "Setup a Fake Rest-API in 5 steps",
      visitBlog: "https://vishvsalvi.hashnode.dev/setup-a-fake-rest-api-in-5-steps",
      image: "/Images/Fake_blog.avif",
    }
  ]

  const handleSubmit = async (e) => {


    e.preventDefault();
    
    try {
      setLoading(true)
      await axios.post(`https://portfolio-backend-867a.onrender.com/send-email`, { name, email, message })
     
      setName("")
      setEmail("")
      setMessage("")
  
      toast({
        title: "Your message has been sent!",
       
      })
    } catch (error) {
      console.log(error.message)
      toast({
        title: "Something went wrong!",
        description: "Please try again later.",
        status: "error",
      })
    } finally {
      setLoading(false)
    }

  }

  return (
    <div key="1" className="flex flex-col min-h-screen bg-white">
      {/* Header section */}
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white">
        <Link className="flex items-center justify-center" href="#">
          <span className="text-2xl font-bold text-[#343A40] bg-clip-text">
            Vishv Salvi
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#343A40] " href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#343A40] " href="#blogs">
            Blogs
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#343A40] " href="#skills">
            Skills
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#343A40] " href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        {/* Hero section */}
        <section className="w-full pb-[14rem] pt-12 sm:pb-[14rem] sm:pt-24 md:pt-32 md:pb-[21rem] lg:pb-[22rem] lg:py-48 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-600">
                  Hi, I&apos;m Vishv Salvi
                </h1>
                <p className="mx-auto max-w-[700px] text-[#343A40] md:text-xl">
                  A full-stack developer with a passion for creating beautiful, functional web applications and writing blogs.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Projects */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black" id="projects">
          <div className="container px-4 md:px-6">
            <h2 className="pb-3 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-212529 ">
              Projects
            </h2>
            <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
              {
                projects.map((project, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image width={500} height={100} alt="Project 1" className="w-full object-cover mb-4 rounded-md" src={project.image} />
                      <p className="text-gray-400">{project.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Link target="_blank" className="text-sm font-medium hover:underline underline-offset-4 text-black" href={project.demoLink}>
                        View Demo
                      </Link>
                    </CardFooter>
                  </Card>
                ))
              }
              
              
            </div>
          </div>
        </section>
        {/* Blogs */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="blogs">
          <div className="container px-4 md:px-6">
            <h2 className="pb-3 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-600 ">
              Blogs
            </h2>
            <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">

{
                blogs.map((blog, index) => (  
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{blog.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image width={500} height={100} alt="Project 1" className="w-full object-cover mb-4 rounded-md" src={blog.image} />
                    </CardContent>
                    <CardFooter>
                      <Link target="_blank" className="text-sm font-medium hover:underline underline-offset-4 text-black" href={blog.visitBlog}>
                        Visit Blog
                      </Link>
                    </CardFooter>
                  </Card>
                ))
}
             
            </div>
            <div className="flex flex-wrap justify-center mt-10" >
              <Link target="_blank" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"  href="https://vishvsalvi.hashnode.dev" >Read more</Link>
            </div>
          </div>
        </section>
        {/* Skills */}  
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8F9FA]" id="skills">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-[#212529] to-white">
              Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge>
                <ItalicIcon className="h-4 w-4 mr-2" />
                HTML
              </Badge>
              <Badge>
              <i className="devicon-tailwindcss-plain mr-2"></i>
               Tailwind CSS
              </Badge>
              
              <Badge>
              <i className="devicon-react-original mr-2"></i>
                React
              </Badge>
             
              <Badge>
              <i className="devicon-express-original mr-2"></i>
                Express
              </Badge>
              <Badge>
              <i className="devicon-mongodb-plain-wordmark mr-2"></i>
                MongoDB
              </Badge>
            </div>
          </div>
        </section>
        {/* Contact */}
        <section className="w-full py-12 md:py-24 bg-black lg:py-32 " id="contact">
          <div className="container  px-4 md:px-6 py-5">
            <h2 className="text-3xl text-[#ADB5BD] font-bold tracking-tighter sm:text-4xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#212529]">
              Contact
            </h2>
            <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto space-y-6">
              <div className="space-y-1">
                <Label className="text-white" htmlFor="name">Name</Label>
                <Input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white" id="name" required />
              </div>
              <div className="space-y-1">
                <Label
                className="text-white" htmlFor="email">Email</Label>
                <Input 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white" id="email" required type="email" />
              </div>
              <div className="space-y-1">
                <Label className="text-white" htmlFor="message">Message</Label>
                <Textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-white" id="message" required />
              </div>
              <Button disabled={loading} className="w-full bg-white text-black hover:bg-gray-200 " type="submit">
              {loading ? 'Please wait...' : 'Submit'}

              </Button>
            </form>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="px-5 h-16 flex items-center justify-between  text-gray-400  bg-black">
        <div className="text-sm" >
        © 2024 Vishv Salvi
        </div>
        <div>
        <Link target="_blank" href="https://www.linkedin.com/in/vishvsalvi/" >
        <i className="devicon-linkedin-plain text-lg mx-2 hover:cursor-pointer ">
        </i>
        </Link>
        <Link target="_blank" href="https://www.github.com/vishvsalvi/" >
        <i className="devicon-github-original text-lg mx-2 hover:cursor-pointer "></i>
        </Link>
          
        <Link target="_blank" href="https://x.com/SalviVishv" >
        <i className="devicon-twitter-original text-lg mx-2 hover:cursor-pointer "></i>
        </Link>
          
        <Link target="_blank" href="https://vishvsalvi.hashnode.dev" >
        <span className="mx-3 font-semibold" >Blogs</span>
        </Link>
          
        </div>
      </footer>
    </div>
  )
}



function ItalicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" x2="10" y1="4" y2="4" />
      <line x1="14" x2="5" y1="20" y2="20" />
      <line x1="15" x2="9" y1="4" y2="20" />
    </svg>
  )
}


