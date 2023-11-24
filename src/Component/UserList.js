import User from "./User";

const users = [{
    name: "No1",
    pic : "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00435efcedf7c93b3471d3753418554e077e495c_full.jpg"
},
{
    name : "No2",
    pic : "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/45/4588766d3293d536c8f3fe95bf61f2d4d998b0b6_full.jpg"
},
{ 
    name : "No3",
    pic : "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/45/4568e3c245097aeb36b349ce8fe7d543a3eedfa1_full.jpg"
},
{
    name : "No4",
    pic : "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d6/d6e40a4bd4acba604ee5183579f1d098db39cd3a_full.jpg"
    }
]
    
export default function UserList(){
    return (
        <div className="App">
            {users.map((user) => (
                <User name={user.name} pic={user.pic} />
            ))}
        </div>
    );
}