import aboutImage from '../images/about.png'

export const About = () => {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={aboutImage} alt='' />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur laboriosam delectus quasi nemo dolor sint ut enim praesentium aliquid ducimus, dignissimos aliquam veritatis optio dolorum natus harum consequuntur hic velit!
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  )
}
