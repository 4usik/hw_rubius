import React from "react";
import { useMasters } from "../MastersContext";

export function Master({ data, isPositionHide = false }) { /* возвращает разметку карточки мастера */
    const { id, surName, firstName, position, photo } = data;
    const { removeMaster } = useMasters();

    return (
      <div className="master">
        <div className="master__photo">
          <img src={photo} alt="" />
        </div>
        
        
        <h3 className='master__name'>{surName} {firstName}</h3>
        {!isPositionHide && <p className='master__position'>{position}</p>}
        
        <button className='master__remove' onClick={() => removeMaster(id)}>Удалить</button>
      </div>
    );
  }