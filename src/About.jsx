import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
    return (
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
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
          <div className="mt-8 md:mt-0 md:w-2/5">
            <img
              className="shadow-md rounded-lg h-64"
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="profile_pic"
            />
          </div>
        </div>
        <div className="mt-8 md:flex md:items-center">
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
        <div className="mt-8 md:flex md:items-center">
          <div className="w-3/5">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
              Skills
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-6 text-gray-500">
              I'm an experienced full-stack developer with expertise in
              React.js, Node.js, and MongoDB. I'm also familiar with
              technologies such as HTML, CSS, and JavaScript.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:w-2/5">
            <img
              className="shadow-md rounded-lg h-64"
              src="https://images.unsplash.com/photo-1563109392-edc1a0ae8f8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="Skills"
            />
          </div>
        </div>
        <div className="mt-8 md:flex md:items-center">
          <div className="w-3/5">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
              Ambition
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-6 text-gray-500">
              My goal is to become a Senior Software Developer and to develop
              efficient and secure applications for clients. I'm also
              interested in exploring new technologies and furthering my
              knowledge in software engineering.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:w-2/5">
            <img
              className="shadow-md rounded-lg h-64"
              src="https://images.unsplash.com/photo-1518506118471-d5b3c2f5e2f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="Ambition"
            />
          </div>
        </div>
      </div>
    );
};

export default About;