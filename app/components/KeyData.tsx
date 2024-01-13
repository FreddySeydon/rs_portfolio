import React from 'react'
import calculateAge from '@/utils'

const KeyData = () => {
  return (
    <table>
        <thead>
            <tr>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
    <tr>
      <td>
        <h3 className="text-large font-bold text-accent-blue">Name</h3>
      </td>
      <td>
        <h3 className="text-xl font-bold text-accent-blue">
          Renja Ferry Schmakeit
        </h3>
      </td>
    </tr>
    <tr>
      <td>
        <h3 className="text-large font-bold text-accent-blue">Age</h3>
      </td>
      <td>
        <h3 className="text-xl font-bold text-accent-blue">
          {calculateAge(761875200)}
        </h3>
      </td>
    </tr>
    <tr>
      <td>
        <h3 className="text-large font-bold text-accent-blue">
          E-Mail
        </h3>
      </td>
      <td>
        <h3 className="text-xl font-bold text-accent-blue">
          it@renja.cc
        </h3>
      </td>
    </tr>
    <tr>
      <td>
        <h3 className="text-large font-bold text-accent-blue">
          Pronouns
        </h3>
      </td>
      <td>
        <h3 className="text-xl font-bold text-accent-blue">he/him</h3>
      </td>
    </tr>
    <tr>
      <td>
        <h3 className="text-large font-bold text-accent-blue">
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
        <h3 className="text-large font-bold text-accent-blue">
          Qualification
        </h3>
      </td>
      <td>
        <h3 className="text-xl font-bold text-accent-blue">
          Web- & App-Development Bootcamp at WBS Coding School
        </h3>
      </td>
    </tr>
    <tr>
      <td>
        <h3 className="text-large font-bold text-accent-blue">
          Social
        </h3>
      </td>
      <td className="flex gap-2">
        <div>
          <h3 className="text-xl font-bold text-accent-blue">
            LinkedIn
          </h3>
        </div>
        <div>
          <h3 className="text-xl font-bold text-accent-blue">Insta</h3>
        </div>
        <div>
          <h3 className="text-xl font-bold text-accent-blue">
            Facebook
          </h3>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <h3 className="text-large font-bold text-accent-blue">Motto</h3>
      </td>
      <td>
        <h3 className="text-xl font-bold text-accent-blue">
          One Way or Another
        </h3>
      </td>
    </tr>
    </tbody>
  </table>
  )
}

export default KeyData
