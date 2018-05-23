
class Counter extends React.Component{

constructor()
{
    super();
this.addOne=this.addOne.bind(this);
this.minusOne=this.minusOne.bind(this);
this.resetCount=this.resetCount.bind(this);
this.state={
    count:0
}
}

addOne(){
this.setState((prevState)=>{
    return{
        count:prevState.count+1
    }

});
}
minusOne(){
    this.setState((prevState)=>{
        return{
            count:prevState.count-1
        }
    });
}
resetCount(){
    this.setState(()=>{
        return{
        count:0
        }
    });
}
    render(){
    return(
        <div><h1>Count:{this.state.count}</h1>
         <button onClick={this.addOne}>+1 </button>
         <button onClick={this.minusOne}>-1</button>
         <button onClick={this.resetCount}>reset</button>
          </div>  
    );
}
}

ReactDOM.render(<Counter />,document.getElementById("main"));


// let count=0;

// const addOne=()=>{
    
//     count++;
//     renderAPP();
// };
// const minusOne=()=>{
//     count=count-1;
//     renderAPP();
// };
// const resetcount=()=>{
//     count=0;
//     renderAPP();
// };

// const appRoot=document.getElementById("main");

// const renderAPP=()=>{
//     const template2=(
//         <div><h1>Count:{count}</h1>
//         <button onClick={addOne}>+1 </button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={resetcount}>reset</button>
//         </div>
//     );
//     ReactDOM.render(template2,appRoot);
    
// }

// renderAPP();