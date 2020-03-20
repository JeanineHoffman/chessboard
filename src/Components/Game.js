import React from 'react';



let knightPosition = [0,0];
let observer = null;
function emitChange(){
    observer(knightPosition);
}

export const ItemTypes = {
    KNIGHT: "knight",

    }

// export const [{isDragging}, drag] = useDrag({
//     item: { type: ItemTypes.KNIGHT },
//     collect: monitor => ({
//         isDragging: !!monitor.isDragging(),

//     }),

// })


export default function observe(o) {
    if (observer){
        throw new Error('multiple observers not implemented')
    }
    observer = o 
    emitChange()
}

export function moveKnight(toX, toY){
    knightPosition = [toX, toY];
    emitChange()
}
export function canMoveKnight(toX, toY){
    const [x, y]= knightPosition;
    const dx = toX - x;
    const dy = toY - y;
    return (
        (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    )
}