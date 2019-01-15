import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
         <div className="card z-depth-3">
            <div className="card-content ">
                <span className="card-title">Project title -{id}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut? Pariatur quaerat doloribus quis amet esse voluptatum? Cupiditate, earum fugit, fugiat non illo possimus, est necessitatibus doloribus dolorum impedit ea.</p>
                <p className="grey-text">3rd Septempr, 2am</p>
            </div>
            <div className="card-action gret lighten-4 gray-text">
              <div>posted by islam</div>
              <div>2nd September, 2am</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
