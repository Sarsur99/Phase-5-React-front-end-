import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
    return (
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 ">
        <div className="rounded-lg bg-white shadow-lg md:flex md:items-center">
          <div className="p-8 md:w-3/5">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
              About Me
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-6 text-gray-500">
              Hi! I'm Soren Sonstein, a full-stack software developer. I specialize
              in creating web applications using the latest technologies and
              tools. I'm passionate about learning and developing efficient
              applications that solve real-world problems!
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:w-2/5 ">
            <img
              className="shadow-md rounded-lg h-64"
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="profile_pic"
            />
          </div>
        </div>
        <div className="mt-8 md:flex md:items-center rounded-lg bg-white shadow-lg md:flex md:items-center">
          <div className="w-3/5">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
              Education
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-6 text-gray-500">
              I'm a graduate of the Flatiron School, with a specialization in web development. As well as some foundational education in the department of psychology via the University of California, Riverside.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:w-2/5">
            <img
              className="shadow-md rounded-lg h-64"
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/FS_wiki.png"
              alt="Flatiron"
            />
          </div>
        </div>
        <div className="mt-8 md:flex md:items-center rounded-lg bg-white shadow-lg md:flex md:items-center">
          <div className="w-3/5">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
              Skills
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-6 text-gray-500">
              I am a fullstack developer with experience in Javascript, React.js, Ruby, RoR, CSS, HTML, and Tailwind CSS, 
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:w-2/5">
            <img
              className="shadow-md rounded-lg h-64"
              src="https://miro.medium.com/max/960/1*PFEk9y9K_k5Ql58pC567-A.png"
              alt="Skills"
            />
          </div>
        </div>
        <div className="mt-8 md:flex md:items-center rounded-lg bg-white shadow-lg md:flex md:items-center">
          <div className="w-3/5">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
              Ambition
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-6 text-gray-500">
              My goal is to become a Dev employed in the industry; and to develop
              efficient and secure applications for clients. I'm also
              interested in exploring new technologies and furthering my
              knowledge in software engineering.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:w-2/5">
            <img
              className="shadow-md rounded-lg h-64"
              src="https://cdn-employer-wp.arc.dev/wp-content/uploads/2022/04/software-development-costs-1128x635.jpg"
              alt="Ambition"
            />
          </div>
        </div>
      </div>
    );
};

export default About;