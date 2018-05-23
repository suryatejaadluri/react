class VisibilityToggle extends React.Component{
    constructor(props){
        super(props); 
        this.handleToggle=this.handleToggle.bind(this);
    this.app={
        title:"Visibility Toggle",
        details:"here are the details for the app"
    };
    this.state={
        visibility:false
    }
 }
 handleToggle(){
this.setState((prevState)=>{
return{
    visibility:!prevState.visibility
}
});
 }
    render()
    {
        return(
          <div>
          <h1>{this.app.title}</h1>
          <button onClick={this.handleToggle}>
          {!this.state.visibility?'Show details':'Hide details'}
          </button>
          {this.state.visibility&&<p>{this.app.details}</p>}
          </div>

        );
    }

}
ReactDOM.render(<VisibilityToggle />,document.getElementById("main")); 



