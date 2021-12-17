import React, { Component } from 'react';
class Todobox extends React.Component {
    render() { 
        return <div>
            <div style={{backgroundColor:"#ccffff",marginTop:"5%",marginLeft:"25%",marginRight:"25%",marginBottom:"1%", padding:"1% 1%"}}>
                <div className="row">
                    <div className="col">Title</div>
                    <div className="col">Date</div>
                </div>
                <div style={{backgroundColor:"#66ffff"}}>
                    <p >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    </p>
                </div>
            </div>
            <button type="button" style={{marginTop:"0.5%",marginLeft:"25%",marginRight:"25%",marginBottom:"1%"}} class="btn btn-danger">Delete Todo</button>
        </div>;
    }
}
 
export default Todobox;