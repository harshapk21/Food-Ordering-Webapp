

let state = {
    nameOfRestaurants:[
        
            {id:1,name:"Travel"},
            {id:2,name:"Tech"},
            {id:3,name:"Space"},
            {id:4,name:"Automobile"},
            {id:5,name:"Food"},
            {id:6,name:"Politics"},
            {id:7,name:"Wild-Life"},
            {id:8,name:"Oceans"},
            {id:9,name:"Food"},
            {id:10,name:"Food"},
            {id:11,name:"Food"},
            {id:12,name:"Food"},
            {id:13,name:"Food"},
            {id:14,name:"Food"},
            {id:15,name:"Food"},
        
    ],
    menuOfRestaurants:[
        {
            id:1,
            menu:[
                {
                    name:"idly",
                    cost:30,
                    count:0
                },
                {
                    name:"ice-cream",
                    cost:120,
                    count:0
                },
                {
                    name:"soup",
                    cost:300,
                    count:0
                },
            ]
        },
        {
            id:2,
            menu:[
                {
                    name:"idly",
                    cost:30,
                    count:0
                },
                {
                    name:"dosa",
                    cost:20,
                    count:0
                },
            ]
        },{
            id:3,
            menu:[
                {
                    name:"cola",
                    cost:120,
                    count:0
                },
                {
                    name:"fruits",
                    cost:50,
                    count:0
                },
            ]
        },{
            id:4,
            menu:[
                {
                    name:"cola",
                    cost:120,
                    count:0
                },
                {
                    name:"fruits",
                    cost:50,
                    count:0
                },
            ]
        },{
            id:5,
            menu:[
                {
                    name:"cola",
                    cost:120,
                    count:0
                },
                {
                    name:"fruits",
                    cost:50,
                    count:0
                },
            ]
        },{
            id:6,
            menu:[
                {
                    name:"cola",
                    cost:120,
                    count:0
                },
                {
                    name:"fruits",
                    cost:50,
                    count:0
                },
            ]
        },{
            id:7,
            menu:[
                {
                    name:"cola",
                    cost:120,
                    count:0
                },
                {
                    name:"fruits",
                    cost:50,
                    count:0
                },
            ]
        },

    ],
    hotelInAction:'',
    hotelId:'',
    itemsInCart:'',
    isLogin:false
    
}

export const mainReducer = (store=state,action)=>{

    switch (action.type) {
        case 'GET_HOTELS':return{
            ...store,   
            
        }
        case 'SET_HOTEL':console.log(action.PAYLOAD);return{
            ...store,
            hotelId:(store.menuOfRestaurants.filter(obj => { return obj.id==action.PAYLOAD }))[0].id,
            hotelInAction:(store.menuOfRestaurants.filter(obj => { return obj.id==action.PAYLOAD }))[0].menu,
        }
       
        case 'INC':return{
            ...store,
            hotelInAction:store.hotelInAction
            .map(obj => {
                if(obj.name==action.PAYLOAD)obj.count++; return obj;})
            
        }
        case 'DEC':return{
            ...store,
            hotelInAction:store.hotelInAction
            .map(obj => {
                if(obj.name==action.PAYLOAD && obj.count>0)
                obj.count--; return obj;})
           
        }
        case 'chk_sb_crt':return{
            ...store,
            itemsInCart:store.hotelInAction
            .filter(obj => { if(obj.count>0) return obj })
        }

        case 'clear_cart':return{
            ...store,
            itemsInCart:[],
            hotelInAction:store.hotelInAction
            .map(obj => {if(obj.count>0)obj.count=0; return obj;}),
            counter:0
        }
        default:
            break;
    }

    return state;
   
}

 
