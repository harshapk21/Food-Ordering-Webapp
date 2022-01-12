export const getHotels = ()=>{
    console.log("olabola");
    return {
        type:'GET_HOTELS',

    }
}

export const setCurrentHotel = (id)=>{
    console.log(id);
    return {
        type:'SET_HOTEL',
        PAYLOAD:id

    }
}

export const setMenu = ()=>{
    console.log("bol");
    return {
        type:'SET_MENU',
    }
}

export const incCount = (name)=>{
    console.log(name);
    return {
        type:'INC',
        PAYLOAD:name
    }
}

export const decCount = (name)=>{
    console.log("dec");
    return {
        type:'DEC',
        PAYLOAD:name
    }
}

export const checkSubmitCart = ()=>{
    return {
        type:'chk_sb_crt',
    }
}

export const emptyCart = ()=>{
    return {
        type:'clear_cart'
    }
}