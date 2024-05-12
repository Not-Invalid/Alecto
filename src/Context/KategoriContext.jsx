import React, {createContext} from 'react';
import all_product from '../Components/Assets/Data/all_product';

export const KategoriContext = createContext(null);

const KategoriContextProvider = (props) => {
    const contextValue = {all_product};

    return (
        <KategoriContext.Provider value={contextValue}>
            {props.children}
        </KategoriContext.Provider>
    )
}

export default KategoriContextProvider;