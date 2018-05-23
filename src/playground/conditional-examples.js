const user={
    name:"Surya",
    age:22,
    Location:"Hyd"
};
function getLocation(Location)
{
    if(Location)
    {
        return Location;
    }
};

const template2=(
<div id="wrapper">
<h1>{user.name?user.name:"Anonymous"}</h1>
<p>{(user.age&&user.age>17) && user.age}</p>
{getLocation(user.Location)}
</div>
);