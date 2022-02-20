import React, { useState } from "react";
import { FiltersContainer } from "../Style/FiltersContainer.style";
import { TypeFilter } from "../Style/TypeFilter.style";
import { Checkbox } from "../Style/Checkbox.style";

import arrowUp from '../up-arrow.png'
import arrowDown from '../down-arrow.png'

function FiltersBar({filterType,setFilterType}) {

    const filtersList = [
        {id: "private", label: "Private Room"},
        {id: "entire", label: "Entire Property"},
        {id: "shared", label: "Shared Room"},
        {id: "studio", label: "Studio"},        
    ]

    const [isOpen, setIsOpen] = useState(false);

    function openDropdown() {
        setIsOpen(!isOpen);
    }

    function typeHandler(event) {
        const checked = event.target.checked
        if (checked) {
            setFilterType(filterType.concat(event.target.value));
        } else {
            setFilterType(filterType.filter(el => !(el === event.target.value)));
        }
    }

    return(
        <FiltersContainer>
            <TypeFilter>
                <div className="select" onClick={openDropdown}>
                    <span className="text">Tipologia</span>
                    {isOpen ? (
                        <div className="arrow">
                            <img src={arrowUp} alt="" />
                        </div>
                    ) : (
                        <div className="arrow">
                            <img src={arrowDown} alt="" />
                        </div>
                    )}
                </div>
                {isOpen && (
                    <div className="dropdown">
                        {filtersList.map(filter => (
                            <Checkbox key={filter.id} htmlFor={filter.id}>
                                <input onChange={(checkingEvent) => {
                                    typeHandler(checkingEvent);
                                }} type="checkbox" value={filter.label} id={filter.id} />
                                <span className="label">{filter.label}</span>
                            </Checkbox>
                        ))}
                    </div>
                )}
            </TypeFilter>
            <Checkbox htmlFor="availability">
                <input type="checkbox" value="availability" id="availability" />
                <span className="label">Disponibile subito</span>
            </Checkbox>
        </FiltersContainer>
    );
}

export default FiltersBar;