import React, { useState, useEffect } from "react";

export default function ProjCard() {
  const [proj, setProj] = useState([]);
  


  
  //fetch api data
  const fetchData = () => {
    fetch(
      "https://script.google.com/macros/s/AKfycbwd2lJn56Ih2XkFPt08Jz5CFGsPYX6Iz7PV_0hiGDtiYRZw8eVV3hxmAXIxzC6Z9xMpvQ/exec").then((response)=>{
        return response.json()
      }).then((data=>{
        // console.log(data.name[0])
        let projects = data.data
        setProj(projects)
      }))
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    
      <div id="projects-container">

        <h2 className="page-title monof">Projects</h2>
        <p className="title-desc">
          List of Projects submitted by our club memebers
        </p>

        {/* Projects Container  */}
        <div className="proj-card-container">
          <div className="proj-card">
            {proj.map(data => (
              <div key={data.id.value}>
            <div className="card">
              <div className="body-left">
                  {/* Project image  */}
                  <div className="proj-image">
                  <img
                      src={data.image}
                      alt="proj-image"
                    />
                  </div>
                  {/* Project title  */}
                    <h5 className="proj-title monof">
                      {data.name}
                    </h5>
              </div>
              <div className="body-middle">    
                  {/* Project details  */}
                  
                  <div className="proj-desc monof">
                    <h4 className="monof">{data.description}</h4>
        
                      <a href="#" className="srccode monof">
                      {data.code_link}
                      </a>

                      <div className="plink">
                      <a href="#" className="monof">
                        {data.link}
                      </a>
                      </div>
                      <div className="phearts">
                        <span class="heartsymb">💚</span>{data.id}
                      </div>
                    </div>
                 
          
              </div>
                
              <div className="body-right">
                
              {/* Project creator  */}
                <h4 className="creator monof">DEVELOPED BY</h4>
                <div className="developer-img"><img src={data.mentor}/></div>
                <div className="proj-developer monof">{data.authors}</div> 
              </div>  
              

              </div>

            </div>
            ))}
 
          </div>
        </div>
 
      </div>
    
);
}
