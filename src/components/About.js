function About({ blogDataObj }) {
  return (
    <aside>
      <img src={blogDataObj.image} alt="blog logo" />
      <p>{blogDataObj.about}</p>
    </aside>
  );
}

export default About