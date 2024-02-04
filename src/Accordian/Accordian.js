import react, { useState } from 'react';
import data from './data';

function Accordian() {

    let [selectedItem, setSelectedItem] = useState(null);

    function handleSingleSelection(id) {
        setSelectedItem(selectedItem === id ? null : id);
    }

    return <div>
        {
            data.map((dataItem) => {
                return <div>
                    {
                        data.length > 0 ?
                            <div>
                                <br></br>
                                <div onClick={() => { handleSingleSelection(dataItem.id) }}>
                                    {dataItem.question} <span>{selectedItem === dataItem.id ? '-' : '+'}</span>
                                </div>

                                {selectedItem == dataItem.id ?
                                    <div>{dataItem.answer}</div>
                                    : null}
                            </div> :
                            <div>No data available</div>
                    }
                </div>

            })
        }

    </div>;
}

export default Accordian;