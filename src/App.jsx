// import { useState } from 'react'
// import './index.css'

import './App.css'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'



function App() {

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, []);

  return(
    <div>
      {/* <h1 className=''>New Shhit</h1>
      <button className="btn btn-accent btn-outline">Button</button> */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body glass">
            <h2 className="card-title">Login</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input type="text" placeholder="Enter your username" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="Enter your password" className="input input-bordered" />
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-primary">Login</button><br /><br />
              <select data-choose-theme>
                <option value="Sunset">Sunset</option>
                <option value="dark">Dark</option>
                <option value="silk">Silk</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
