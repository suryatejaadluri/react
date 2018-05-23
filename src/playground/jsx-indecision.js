
const app={
    title:"Indecision App",
    subtitle:"App that let's you decide which task to do first when in confusion.",
    options:[]

};
const onformsubmit=(e)=>{
    e.preventDefault();
    const option=e.target.elements.option.value;
    if(option){
    app.options.push(option);
    renderfunction();
    e.target.elements.option.value=' ';
}
};
const removeall=()=>{
app.options=[];
renderfunction();
}
const decide=()=>{
    const random=Math.floor(Math.random() * app.options.length);
    const option=app.options[random];
    alert(option);
}
const renderfunction=()=>{ 
    const template2=(
        <div>
        <h1>{app.title}</h1>
        {app.subtitle&&<p>{app.subtitle}</p>}
        <p>{app.options.length>0?"Here are your options":"No options found"}</p>
        <button disabled={app.options.length==0} onClick={decide}>What should I do?</button>
        <button onClick={removeall}>Remove all</button>
        <ol>
        {
            app.options.map((item)=>{
                return <li key={item}>{item}</li>;
            })
        }
        </ol>
        <form onSubmit={onformsubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
    
        </form>
        </div>
        );
        ReactDOM.render(template2,appRoot);
}


const appRoot=document.getElementById("main");
renderfunction();






