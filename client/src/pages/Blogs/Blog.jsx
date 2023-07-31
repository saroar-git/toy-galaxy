import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle('Toy Galaxy | Blogs'); // use title

  return (
    <>
      <div className="text-center my-8">
        <h1 className="md:text-4xl text-2xl font-bold font-lobster">
          Blogs
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <div className="card card-side bg-base-100 shadow-xl" data-aos="flip-left" data-aos-duration="1000">
          <div className="card-body">
            <h2 className="card-title text-justify my-0 font-semibold text-lg md:text-2xl bg-[#D3E3FD] hover:bg-[#b1cdfb] text-black  px-3 py-2 rounded-lg">
              What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </h2>

            <p className="text-slate-700 text-justify my-3 md:text-lg">
              A user is authenticated and granted access to a specific routes using an access token, which is a string of characters. It normally has a time limit and needs to be updated sometimes to keep giving access. After the initial access token has expired, a refresh token is used to receive a new access token.
              Refresh tokens are often stored in an HTTP-only cookie, whereas access tokens are normally kept on the client-side in either cookies or local storage.
            </p>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-xl" data-aos="flip-right" data-aos-duration="1000">
          <div className="card-body">
            <h2 className="card-title text-justify my-0 font-semibold text-lg md:text-2xl bg-[#D3E3FD] hover:bg-[#b1cdfb] text-black px-3 py-2 rounded-lg">
              Compare SQL and NoSQL databases?
            </h2>

            <p className="text-slate-700 text-justify my-3 md:text-lg">
              The data structures, scalability, and flexibility of SQL and NoSQL databases are different. Because SQL databases use a structured data architecture, they are perfect for use cases requiring reliable, consistent data.
              NoSQL databases, employ a non-relational data model, which gives them greater adaptability and scalability than SQL databases. Unstructured or semi-structured data, such as that found in log files and social media, is frequently stored in NoSQL databases.
            </p>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-xl" data-aos="flip-up" data-aos-duration="1000">
          <div className="card-body">
            <h2 className="card-title text-justify my-0 font-semibold text-lg md:text-2xl bg-[#D3E3FD] hover:bg-[#b1cdfb] text-black px-3 py-2 rounded-lg">
              What is express js? What is Nest JS?
            </h2>

            <p className="text-slate-700 text-justify my-3 md:text-lg">
              A well-liked web application framework for Node.js is ExpressJS. It offers a wide range of functionality, such as routing, middleware, and templating, for creating web applications and APIs. <br />
              A Node.js framework called NestJS is used to create scalable and effective server-side applications. It offers additional capabilities like dependency injection and modularity and is built on top of ExpressJS.
            </p>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-xl" data-aos="flip-down" data-aos-duration="1000">
          <div className="card-body">
            <h2 className="card-title text-justify my-0 font-semibold text-lg md:text-2xl bg-[#D3E3FD] hover:bg-[#b1cdfb] text-black px-3 py-2 rounded-lg">
              What is MongoDB aggregate and how does it work?
            </h2>
            <p className="text-slate-700 text-justify my-3 md:text-lg">
              MongoDB is an open-source document-oriented database that is designed to store a large scale of data and also allows you to work with that data very efficiently.
              Complex data analysis queries can be run on MongoDB collections using the MongoDB aggregate function. It enables the collection of numerous documents and the classification of data according to predetermined standards. The data processing and output transformation phases make up the aggregation pipeline.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
