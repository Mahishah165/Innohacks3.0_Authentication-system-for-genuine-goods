import React from 'react';
import '../styles/TeamSection.css';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img4 from '../assets/img4.jpg'
import img3 from '../assets/img3.jpg'
function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: 'Shounak Mulay',
      role: 'FullStack Developer',
      imgUrl: img1,
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
        email: ''
      }
    },
    {
      id: 2,
      name: 'Avdhut Panhale',
      role: 'Blockchain Developer',
      imgUrl: img2,
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
        email: '#'
      }
    },
    {
      id: 3,
      name: 'Amol Patil',
      role: 'FullStack Developer',
      imgUrl: img3,
      social: {
        twitter: '#',
        linkedin: '#',
        github: '',
        email: '#'
      }
    },
    {
      id: 4,
      name: 'Mahi Shah',
      role: 'Developer',
      imgUrl: img4,
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
        email: '#'
      }
    }
  ];

  return (
    <section>
      <div className="row">
        <h1>Our Team</h1>
      </div>
      <div className="row">
        {teamMembers.map(member => (
          <div className="column" key={member.id}>
            <div className="card">
              <div className="img-container">
                <img src={member.imgUrl} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="icons">
                <a href={member.social.twitter}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={member.social.linkedin}>
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={member.social.github}>
                  <i className="fab fa-github"></i>
                </a>
                <a href={member.social.email}>
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
