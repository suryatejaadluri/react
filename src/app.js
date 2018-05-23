class IndecisionApp extends React.Component{
    
    constructor(props)
    {
        super(props);
        this.state={
            options:[]
        }
        this.handleRemoveall=this.handleRemoveall.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handlePushOption=this.handlePushOption.bind(this);
        
    }
    handleRemoveall(){
        this.setState(()=>{
            return {
                options:[]
            }
        });
    }
    handlePick(){
        
        const option=Math.floor((Math.random() * this.state.options.length));
        alert(this.state.options[option]);
        
    }
    handlePushOption(option)
    {
        if(!option)
        {
            return 'Enter a valid option'
        }
        if(this.state.options.indexOf(option)>-1)
        {
            return 'Value already exists'
        }
        this.setState((prevState)=>{
            return{
                options:prevState.options.concat(option)
            }
        });
    } 
    render(){
        const title="Indecision App";
        const subtitle="Put your life in the hands of a computer";
    
        return(
            <div>
            <Header title={title} subtitle={subtitle} />
            <Action 
             handlePick={this.handlePick}
             hasOptions={this.state.options.length>0} />
            <Options handleRemoveall={this.handleRemoveall} options={this.state.options} />
            <AddOption handlePushOption={this.handlePushOption}/>
            </div>
        ); 
    }
}

class Header extends React.Component{
    render()
    {
        return(
            <div>
            <h1>{this.props.title}</h1>
            {this.props.subtitle&& <p>{this.props.subtitle}</p>}
            </div>
        );
    }
}

class Action extends React.Component{
      
    render()
    {
        return(
            <div>
            <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do</button>
            </div>
        ); 
    }
}

class Options extends React.Component{
    
   
    render()
        {
            return(
                <div>
                <button onClick={this.props.handleRemoveall}>Remove all</button>
               <p> {this.props.options.length>0?'Here Are your Options':'No options'}</p>
                {
                this.props.options.map((option)=> <Option key={option} optionText={option} />)
                }
                
                
                 </div> 
            );
        }
    }
class Option extends React.Component{
    render()
    {
        return(
            <div>
            <p>{this.props.optionText}</p>
            </div>
        );
    }
}
    class AddOption extends React.Component{
        constructor(props)
        {
            super(props);
            this.handleAddOption=this.handleAddOption.bind(this);
            this.state={
                error:undefined
            }
        }
        handleAddOption(e){
            e.preventDefault();
            const value=e.target.elements.option.value.trim();
            const error= this.props.handlePushOption(value);
            e.target.elements.option.value=' ';
            this.setState(()=>{
                return{error}
            }
                );        
        }
        render(){
            return(
                <div>
                {this.state.error&&<p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
                </form>
                </div>
            );
        }
    }

    

    ReactDOM.render(<IndecisionApp />,document.getElementById("main")); 