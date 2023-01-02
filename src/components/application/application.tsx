import React from 'react'

const Application = () => {
  return (
    <div>
      <h1>Job application</h1>
      <h2>section 1</h2>
      <p>All fields are mandatory</p>
      <span title="close">x</span>

      <img src="https://via.placeholder.com/150" alt="placeholder-img" />

      <div data-testid="custom-element">custom input elemet</div>

      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="fullName"
          value="nawazish"
          onChange={() => {}}
        />
      </div>
      <div>
        <label htmlFor="bio">Bio</label>
        <input type="text" name="bio" id="bio" />
      </div>
      <div>
        <label htmlFor="job-location">job location</label>
        {/* <label htmlFor="job-location">Name</label> */}
        <select id="job-location">
          <option value="pune">Pune</option>
          <option value="bangalore">bangalore</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" name="terms" id="terms" />I agree to the terms
          & condition
        </label>
      </div>
      <button disabled>submit</button>
    </div>
  )
}

export default Application
