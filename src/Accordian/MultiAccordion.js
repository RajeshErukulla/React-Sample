import { useState } from 'react';
import data from './data';

function MultiAccordion() {

    let [selectedItems, setSelectedItems] = useState([]);

    function handleMultiSelection(id){
        let selectedItemsList = [...selectedItems];
        const findIndexofCurrentItem = selectedItemsList.indexOf(id);
        findIndexofCurrentItem === -1
        ? selectedItemsList.push(id)
        : selectedItemsList.splice(findIndexofCurrentItem, 1)

        setSelectedItems(selectedItemsList);
        
    }

    console.log(selectedItems);

    return <div>
        {data.map((dataItem) => {
            return <div>
                <br></br>
                {data && data.length > 0 ? 
                <div onClick={() => handleMultiSelection(dataItem.id)}>
                    {dataItem.question} <span>+</span>

                    {selectedItems.indexOf(dataItem.id) !== -1
                    ? <div>{dataItem.answer}</div>
                    : null}
                </div> 
                
                : <div>No data found</div>}
            </div>
        })}
    </div>
}

export default MultiAccordion;