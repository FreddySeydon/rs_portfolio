import React from "react";
import calculateAge from "@/utils";

const KeyData = () => {
  return (
    <div>
      <table className="table table-zebra w-full hidden lg:block">
        <tbody>
          <tr>
            <td>
              <h3 className="text-large font-bold text-accent-blue text-base uppercase">
                Name
              </h3>
            </td>
            <td>
              <h3 className="text-xl font-bold text-accent-blue">
                Renja Ferry Schmakeit
              </h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3 className="text-large font-bold text-accent-blue text-base uppercase">
                Age
              </h3>
            </td>
            <td>
              <h3 className="text-xl font-bold text-accent-blue">
                {calculateAge(761875200)}
              </h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3 className="text-large font-bold text-accent-blue text-base uppercase">
                Email
              </h3>
            </td>
            <td>
              <h3 className="text-xl font-bold text-accent-blue">
                <a href="mailto:it@renja.cc" className="underline">
                  it@renja.cc
                </a>
              </h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3 className="text-large font-bold text-accent-blue text-base uppercase">
                Pronouns
              </h3>
            </td>
            <td>
              <h3 className="text-xl font-bold text-accent-blue">he/him</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3 className="text-large font-bold text-accent-blue text-base uppercase">
                Degree
              </h3>
            </td>
            <td>
              <h3 className="text-xl font-bold text-accent-blue">
                MA Design & Media
              </h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3 className="text-large font-bold text-accent-blue text-base uppercase">
                Qualification
              </h3>
            </td>
            <td>
              <h3 className="text-xl font-bold text-accent-blue pr-5">
                Web- & App-Development Bootcamp at WBS Coding School
              </h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3 className="text-large font-bold text-accent-blue text-base uppercase">
                Social
              </h3>
            </td>
            <td className="flex gap-2">
              <div>
                <h3 className="text-xl font-bold text-accent-blue">
                  <a
                    href="http://www.linkedin.com/in/renja-schmakeit"
                    target="_blank"
                    className="link"
                  >
                    LinkedIn
                  </a>
                </h3>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/renja.ferry"
                  target="_blank"
                  className="link"
                >
                  <h3 className="text-xl font-bold text-accent-blue">Insta</h3>
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/renja.schmakeit"
                  target="_blank"
                  className="link"
                >
                  <h3 className="text-xl font-bold text-accent-blue">
                    Facebook
                  </h3>
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <h3 className="text-large font-bold text-accent-blue text-base uppercase">
                Slogan
              </h3>
            </td>
            <td>
              <h3 className="text-xl font-bold text-accent-blue">
                One Way or Another
              </h3>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="block lg:hidden">
        <h3 className="text-2xl font-semibold text-gray-600 uppercase text-center">Name</h3>
        <h2 className="text-3xl font-bold text-accent-blue text-center">
          Renja Ferry Schmakeit
        </h2>
        <div className="divider divider-secondary"></div>
        <h3 className="text-2xl font-semibold text-gray-600 uppercase text-center">Age</h3>
        <h2 className="text-3xl font-bold text-accent-blue text-center">
          {calculateAge(761875200)}
        </h2>
        <div className="divider divider-secondary"></div>
        <h3 className="text-2xl font-semibold text-gray-600 uppercase text-center">
          Email
        </h3>
        <h2 className="text-3xl font-bold text-accent-blue text-center">
          <a href="mailto:it@renja.cc" className="underline">
            it@renja.cc
          </a>
        </h2>
        <div className="divider divider-secondary"></div>
        <h3 className="text-2xl font-semibold text-gray-600 uppercase text-center">
          Pronouns
        </h3>
        <h2 className="text-3xl font-bold text-accent-blue text-center">he/him</h2>
        <div className="divider divider-secondary"></div>
        <h3 className="text-2xl font-semibold text-gray-600 uppercase text-center">
          Degree
        </h3>
        <h2 className="text-3xl font-bold text-accent-blue text-center">
          MA Design & Media
        </h2>
        <div className="divider divider-secondary"></div>
        <h3 className="text-2xl font-semibold text-gray-600 uppercase text-center">
          Qualification
        </h3>
        <h2 className="text-3xl font-bold text-accent-blue text-center">
          Web- & App-Development Bootcamp at WBS Coding School
        </h2>
        <div className="divider divider-secondary"></div>
        <h3 className="text-2xl font-semibold text-gray-600 uppercase text-center">
          Social
        </h3>
        <h2 className="text-3xl font-bold text-accent-blue">
          <div className="flex gap-2 justify-center">
            <div>
              <h3 className="text-3xl font-bold text-accent-blue text-center">
                <a
                  href="http://www.linkedin.com/in/renja-schmakeit"
                  target="_blank"
                  className="link"
                >
                  LinkedIn
                </a>
              </h3>
            </div>
            <div>
              <a
                href="https://www.instagram.com/renja.ferry"
                target="_blank"
                className="link"
              >
                <h3 className="text-3xl font-bold text-accent-blue">Insta</h3>
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/renja.schmakeit"
                target="_blank"
                className="link"
              >
                <h3 className="text-3xl font-bold text-accent-blue">
                  Facebook
                </h3>
              </a>
            </div>
          </div>
        </h2>
        <div className="divider divider-secondary"></div>
        <h3 className="text-2xl font-semibold text-gray-600 uppercase text-center">
          Slogan
        </h3>
        <h2 className="text-3xl font-bold text-accent-blue text-center">
          One Way or Another
        </h2>
      </div>
    </div>
  );
};

export default KeyData;
