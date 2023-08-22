import React from 'react';

const Cards = () => {
  return (
    <div className="container">
      <div className="card" style={{ '--clr': '#009688' }}>
        <div className="img-box">
          <img
            src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
            alt="Desert"
          />
        </div>
        <div className="content">
          <h2>Desert</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, hic? Magnam eum error saepe doloribus corrupti
            repellat quisquam alias doloremque!
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div className="card" style={{ '--clr': '#009688' }}>
        <div className="img-box">
          <img
            src="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
            alt="Mountain"
          />
        </div>
        <div className="content">
          <h2>Mountain</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, hic? Magnam eum error saepe doloribus corrupti
            repellat quisquam alias doloremque!
          </p>
          <a href="#">Read More</a>
        </div>
      </div><div className="card" style={{ '--clr': '#009688' }}>
        <div className="img-box">
          <img
          src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
          alt="Ocean"
          />
        </div>
        <div className="content">
          <h2>Ocean</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, hic? Magnam eum error saepe doloribus corrupti
            repellat quisquam alias doloremque!
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    position: 'relative',
  },
  card: {
    width: '300px',
    margin: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  imgBox: {
    position: 'relative',
    overflow: 'hidden',
    flex: 1,
  },
  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  content: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  h2: {
    fontSize: '1.5rem',
    margin: 0,
    color: 'var(--clr, #333)',
  },
  p: {
    marginTop: '10px',
    fontSize: '0.875rem',
    color: '#666',
  },
  a: {
    marginTop: 'auto',
    textDecoration: 'none',
    color: '#009688',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },
  aHover: {
    color: '#007a6e',
  },
};

export default Cards;
