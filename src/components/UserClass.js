import React from 'react'

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            userInfo:{
                name:"",
                email:"",
                avtar:"",
                bio:""
            }
            
        }
    }

   async componentDidMount(){
    const data = await fetch("https://api.github.com/users/kumarshanu12")
    const json = await data.json()
    console.log(json)
    this.setState({
        userInfo: json
    })
    // console.log(this.userInfo.name)
   }
    
render(){
    const {name,bio,following} = this.state.userInfo;
    const {count } = this.state
    return(
        <div style={{border:'3px solid '}}>
        
         
        <div style={{display:'flex'}} > <label>Name:</label> <h6 style={{paddingTop:'0.25rem'}}>{name}</h6></div> 
        <div style={{display:'flex'}} > <label>Address:</label> <h6 style={{paddingTop:'0.25rem'}}>{}</h6></div> 
        <div style={{display:'flex'}} > <label>image:</label> <img src={this.state.userInfo.avatar_url}></img></div> 

        <div style={{display:'flex'}} > <label>Email:</label> <h6 style={{paddingTop:'0.25rem'}}>kshanu233@gmail.com</h6></div> 
        </div>
    )  
}

     
     

}

export default UserClass