import logo from './logo.svg'
import './App.css';
import ItemList from './Component/ItemList';
import { useState } from 'react';


const Text = ({style = {} }) => (
    <p style={{...style, fontFamily: "Inter"}}>Hello World!</p>
);
const StyledText = withStyles(Text); //new Component

function withStyles(Component){
    return (props) => {
        const style = {
            color: "red",
            fontSize: "2em",
            //Merge props
            ...props.style,
        };
        return <Component {...props} style={style} />;
    };
}

export default function MyApp(){
    return (
        <div className='App'>
            <ItemList />
        </div>
    );
}