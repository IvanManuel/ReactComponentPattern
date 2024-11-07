import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';


export interface Props {
    className?: string;
    style?: CSSProperties;
}
export const ProductsButtons = ({ className, style } : Props) => {

    const { count, increaseBy } = useContext( ProductContext );

    return (
        <div 
            className={`${ styles.buttonsContainer } ${ className }`} 
            style={ style }
        >
                <button
                    className={styles.buttonMinus}
                    onClick={() => increaseBy( -1 )}>-</button>
                <div className={styles.countLabel} >{count}</div>
                <button
                    className={styles.buttonAdd}
                    onClick={() => increaseBy( 1 )}>+</button>
            </div>
    )
  }