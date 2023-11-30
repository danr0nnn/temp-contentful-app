import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Activated charcoal gastropub vegan, bitters copper mug cray hella
            tousled plaid. Cray craft beer cliche narwhal mumblecore. Unicorn
            listicle man braid intelligentsia +1 praxis, next level gluten-free
            celiac cold-pressed freegan.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
