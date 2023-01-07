import mealsImg from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";
const Header =(props)=>{
    return (
        <>
           <header className={classes.header}>
            <h1>Yummy Tasty Healthy</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
           </header> 
           <div className={classes['main-image']}>
            <img src={mealsImg} alt="this is an image"/>
           </div>
        </>
    );
}

export default Header;