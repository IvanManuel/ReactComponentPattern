import { useEffect, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (arg: onChangeArgs) => void;
    value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {

    const [count, setCount] = useState( value );

    const increaseBy = (value: number) => {

        const newValue = Math.max(count + value, 0);        
        setCount( newValue );

        onChange && onChange({ count: newValue, product  });
    }

    useEffect(() => {
      setCount( value )
    }, [value])
    

    return {
        count,
        increaseBy,
    }
}