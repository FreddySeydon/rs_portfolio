import React from "react";
import calculateAge from "@/utils";

const KeyData = () => {
  return (
    <table className="table table-zebra w-full">
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
              E-Mail
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
                <h3 className="text-xl font-bold text-accent-blue">Facebook</h3>
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
  );
};

export default KeyData;
