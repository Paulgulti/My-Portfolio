import React from 'react'
import './Projects.css'
import Card from './Card'
import shoppingCartImg from '/shoping-cart-1.png'
import expenseTrackerImg from '/Expense-Tracker-1.png'
import foodRecipeImg from '/food-recipe.png'
import moviePosterAppImg from '/movie-poster-4.png'
import personalBlogAppImg from '/Personal-blog-app.png'

const Projects = () => {
  return (
    <div className='container projects' id="projects">
      <h3>Projects</h3>
      <Card title="E-commerce Storefront" stack="HTML, Tailwind, React" liveLink="https://e-commerce-storefront-pi.vercel.app/" sourceCodeLink="https://github.com/Paulgulti/E-commerce-Storefront" imgSrc={shoppingCartImg} />
      <Card title="Expense Tracker" stack="HTML, CSS, React" liveLink="https://paulgulti.github.io/ET/" sourceCodeLink="https://github.com/Paulgulti/ET" imgSrc={expenseTrackerImg} />
      <Card title="Recipe Finder" stack="HTML, CSS, React" liveLink="https://recipe-finder-eight-steel.vercel.app/" sourceCodeLink="https://github.com/Paulgulti/Recipe-finder" imgSrc={foodRecipeImg} />
      <Card title="Personal Blog App" stack="HTML, Next.js, Sanity, Tailwind, Shadcn" liveLink="https://personal-blog-nu-amber.vercel.app/" sourceCodeLink="https://github.com/Paulgulti/Personal_Blog" imgSrc={personalBlogAppImg} />
      <Card title="Movie Poster Finder" stack="HTML, Tailwind, React" liveLink="https://movie-poster-app-black.vercel.app/" sourceCodeLink="https://github.com/Paulgulti/Movie-Poster-App" imgSrc={moviePosterAppImg} />
    </div>
  )
}

export default Projects