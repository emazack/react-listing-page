import React from "react";
import { FiltersContainer } from "../Style/FiltersContainer.style";
import { TypeFilter } from "../Style/TypeFilter.style";
import { Checkbox } from "../Style/Checkbox.style";

function FiltersBar() {

    return(
        <FiltersContainer>
            <TypeFilter>
                <div className="select">
                    <span className="text">Tipologia</span>
                    <span className="arrow-open">
                        ^
                    </span>
                    <span className="arrow-closed">
                        v
                    </span>
                </div>
                <div className="dropdown">
                    <Checkbox name="private">
                        <input type="checkbox" name="private" id="private" />
                        <span className="label">Private room</span>
                    </Checkbox>
                    <Checkbox name="entire">
                        <input type="checkbox" name="entire" id="entire" />
                        <span className="label">Entire property</span>
                    </Checkbox>
                    <Checkbox name="shared">
                        <input type="checkbox" name="shared" id="shared" />
                        <span className="label">Shared room</span>
                    </Checkbox>
                    <Checkbox name="studio">
                        <input type="checkbox" name="studio" id="studio" />
                        <span className="label">Studio</span>
                    </Checkbox>
                </div>
            </TypeFilter>
            <Checkbox name="availability">
                <input type="checkbox" name="availability" id="availability" />
                <span className="label">Disponibile subito</span>
            </Checkbox>
        </FiltersContainer>
    );
}

export default FiltersBar;