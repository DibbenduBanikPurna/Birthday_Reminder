import React from 'react';

const List = ({team}) => {
    console.log(team)
    return (
        <div className="col-md-12">
        <div className="card-body b d-flex">
                    <div>

                   
                <img className="img-fluid rounded-circle" style={{height:'100px', width:'100px'}} src={team.image} alt={team.id}/>
                </div>
            
            <div className="m-2">

           
                <h5>  {team.name}</h5>
               
                <p className="text-muted"> {team.age} years </p>
                </div>
           
            
        </div>
        </div>
    );
};

export default List;