// Desc: Home page banner component

export const Banner = () => {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://img.freepik.com/free-photo/black-headphones-digital-device_53876-97302.jpg?t=st=1731518528~exp=1731522128~hmac=4cfc581a9baeb5c9718cb5008b0a8135332501b300d15d0df9dee1f3f2374f54&w=826)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome To Gadget Shop</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}
export default Banner;
