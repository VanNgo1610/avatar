import "./App.css"
// function App2(){
//     return( <div className="App2">
//         <Welcome2 name="Neooo" />
//     </div>);
// }
// function Welcome2(props){
//     return (
//         <section>
//             <h1>Hello, <span>{props.name}</span></h1>
//         </section>
//     )
// }
// export default App2;
function User({name, pic}){
    return (
        <section>
            <img className="user-profile-pic" src={pic} alt={name} />
            <h2 className="user-name">
                Hello, <span className="user-first-name">{name}</span>
            </h2>
        </section>
    )
}
function App(){
    // const names = ["Cuban", "Biden", "Donnal", "Apieceofshit"];
    // return (
    //     <div className="App">
    //         {names.map((nm) =>(<User name= {nm} />))}
    //     </div>
    // )
    const users = [{
        name: "Cuban",
        pic : "https://static01.nyt.com/images/2021/07/17/us/17miami-cuba-1/17miami-cuba-1-jumbo.jpg?quality=75&auto=webp"
    },
    {
        name : "Biden",
        pic : "https://i.abcnewsfe.com/a/226153b3-d616-43b5-82a0-de1e23dc01de/wirestory_f665f9ba7d1785e2688749d18fdf3f8c_16x9.jpg?w=992"
    },
       { name : "Donnal",
        pic : "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2023-11/231114-donald-trump-jm-1039-d6fab2.jpg"
       }
       ,{
        name : "Apieceofshit",
        pic : "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFY2h8NXx8cHJvZmkszXxlbnwwfHwwfHw%3D&w=1000&q=80"
       }
    ]
    return (
        <div className="App">
            {users.map((user) => (
                <User name={user.name} pic={user.pic} />
            ))}
        </div>
    )
}
export default App;