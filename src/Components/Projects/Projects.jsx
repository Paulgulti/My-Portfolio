import React from 'react'
import './Projects.css'
import Card from './Card'
import shoppingCartImg from '/shoping-cart-1.png'
import expenseTrackerImg from '/Expense-Tracker-1.png'
import foodRecipeImg from '/food-recipe.png'
import moviePosterAppImg from '/movie-poster-4.png'
import personalBlogAppImg from '/Personal-blog-app.png'
import merkeMarketImg from '/merke-market.png'
import bsfriend from '/BS-friend.jpg'

const Projects = () => {
  return (
    <div className='container' id="projects">
      <h3>Projects</h3>
      <p>Below are some of the projects i built.</p>
      <div className='projects'>
        <Card title="BS-friend" desc="AI-powered Bible Study Friend." stack="Next.Js, Typescript, Prisma, Tailwind, Clerk, Redis, Supabase" liveLink="https://bs-friend.vercel.app" sourceCodeLink="https://github.com/Paulgulti/BS-Friend" imgSrc={bsfriend} />
        <Card title="Merke-Market" desc="Fully fledged E-commerce Store." stack="Next.Js, Typescript, Prisma, Sanity, Zustand, Tailwind" liveLink="https://merke-market.vercel.app" sourceCodeLink="https://github.com/Paulgulti/et-market" imgSrc={merkeMarketImg} />
        <Card title="Expense Tracker" desc="Advanced expense tracker with easy visual display." stack="HTML, CSS, React" liveLink="https://paulgulti.github.io/ET/" sourceCodeLink="https://github.com/Paulgulti/ET" imgSrc={expenseTrackerImg} />
        <Card title="Food Recipe" desc="Food recipe finder." stack="HTML, CSS, React" liveLink="https://recipe-finder-eight-steel.vercel.app/" sourceCodeLink="https://github.com/Paulgulti/Recipe-finder" imgSrc={foodRecipeImg} />
        <Card title="SK Blog" desc="My personal blog app." stack="HTML, Next.js, Sanity, Tailwind, Shadcn" liveLink="https://personal-blog-nu-amber.vercel.app/" sourceCodeLink="https://github.com/Paulgulti/Personal_Blog" imgSrc={personalBlogAppImg} />
        <Card title="Movify" desc="Movie poster finder." stack="HTML, Tailwind, React" liveLink="https://movie-poster-app-black.vercel.app/" sourceCodeLink="https://github.com/Paulgulti/Movie-Poster-App" imgSrc={moviePosterAppImg} />
      </div>
    </div>
  )
}

export default Projects