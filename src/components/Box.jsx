
export const Featurebox = ({image, title}) => {
  return (
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={image} alt='' />
      </div>
      <div className='a-b-text'>
        <h2>{title}</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis ipsa exercitationem, quis perspiciatis nostrum aliquam dolores quas reprehenderit voluptatibus rerum laboriosam eveniet molestias fuga et, veritatis explicabo eos, ea adipisci.</p>
      </div>
    </div>
  )
}
