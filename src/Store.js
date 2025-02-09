 import { configureStore, createSlice } from "@reduxjs/toolkit";


const productsSlice=createSlice({

    name:'product',

    initialState:{
        veg:[
            
                {
                  name: "Aloo Gobi",
                  price: 150,
                  image: "AlooGobi.jpg"
                },
                
                {
                  name: "Chole Bhature",
                  price: 220,
                  image: "CholeBature.jpg"
                },
                {
                  name: "Pav Bhaji",
                  price: 120,
                  image: "PaavBaji.jpg"
                },
                {
                  name: "Paneer Butter Masala",
                  price: 250,
                  image: "PaneerButter.jpg"
                },
                {
                  name: "Palak Paneer",
                  price: 200,
                  image: "Palakpaneer.jpg"
                },
                {
                  name: "Aloo Paratha",
                  price: 80,
                  image: "alooParata.jpg"
                },
                {
                  name: "Samosa",
                  price: 30,
                  image: "Samosa.jpg"
                },
                {
                  name: "Dhokla",
                  price: 60,
                  image: "dhookla.jpg"
                },
                {
                  name: "Rajma",
                  price: 150,
                  image: "rajma.jpg"
                },
                {
                  name: "Roti",
                  price: 180,
                  image: "roti.jpg"
                },
                {
                  name: "Bhindi Masala",
                  price: 140,
                  image: "Bindi.jpg"
                },
                {
                  name: "Gobi Manchurian",
                  price: 170,
                  image: "Gobi.jpg"
                },
                {
                  name: "Masoor Dal",
                  price: 120,
                  image: "MasoorDal.jpg"
                },
                {
                  name: "Vegetable Biryani",
                  price: 200,
                  image: "VegBiriyani.jpg"
                },
                {
                  name: "Pulao",
                  price: 150,
                  image: "pulauo.jpg"
                },
                {
                  name: "Methi Thepla",
                  price: 80,
                  image: "Thepla.jpg"
                },
                {
                  name: "Khaman",
                  price: 50,
                  image: "kaman.jpg"
                },
                {
                  name: "Masala Dosa",
                  price: 100,
                  image: "Dose.jpg"
                },
                {
                  name: "Idli",
                  price: 160,
                  image: "Idli.jpg"
                },
                {
                    name: "RagiMudde",
                    price: 180,
                    image: "Mudde.jpg"
                  }

              
              
          ],

        nonVeg:[

                {
                  name: "Butter Chicken",
                  price: 350,
                  image: "Butter.jpg"
                },
                {
                  name: "Tandoori Chicken",
                  price: 300,
                  image: "Tandoori.jpg"
                },
                {
                  name: "Chicken Biryani",
                  price: 250,
                  image: "ChickenBiriyani.jpg"
                },
                {
                  name: "Mutton Rogan Josh",
                  price: 450,
                  image: "MuttonJosh.jpg"
                },
                {
                  name: "Fish Curry",
                  price: 380,
                  image: "FishCurry.jpg"
                },
                {
                  name: "Prawn Masala",
                  price: 400,
                  image: "Prawn.jpg"
                },
                {
                  name: "Kebabs",
                  price: 200,
                  image: "Kabaks.jpg"
                },
                {
                  name: "Chicken Korma",
                  price: 350,
                  image: "Khorma.jpg"
                },
                {
                  name: "Mutton Biryani",
                  price: 450,
                  image: "MuttunBiriyani.jpg"
                },
                {
                  name: "Fish Fry",
                  price: 300,
                  image: "Fry.jpg"
                },
                {
                  name: "Murg Musallam",
                  price: 500,
                  image: "murga.jpg"
                },
                {
                  name: "Keema Pav",
                  price: 220,
                  image: "keema.jpg"
                },
                {
                  name: "Chicken Malai Tikka",
                  price: 320,
                  image: "Thicka.jpg"
                },
                {
                  name: "Mutton Shami Kebab",
                  price: 250,
                  image: "Kebab.jpg"
                },
               
                {
                  name: "Lamb Seekh Kebab",
                  price: 280,
                  image: "SheekKabab.jpg"
                },
                {
                  name: "Chicken 65",
                  price: 280,
                  image: "Chicken65.jpg"
                },
                {
                  name: "Mutton Keema",
                  price: 300,
                  image: "MtnKeema.jpg"
                },
                {
                  name: "Fish Amritsari",
                  price: 350,
                  image: "FishAmrit.jpg"
                },
                {
                  name: "Chicken Pakora",
                  price: 200,
                  image: "Pakora.jpg"
                },
                {
                  name: "Egg Curry",
                  price: 170,
                  image: "egg.jpg"
                }
              
              
        ]
    },

    reducers:{}


})
const cartSlice=createSlice({
    name:'cart',
    initialState:[],

    reducers:{
        addToCart:(state,action)=>{
            const items=state.find((item)=>item.name === action.payload.name);
            if(items)
            {
                items.quantity+=1;
            }
            else{
                state.push({...action.payload,quantity:1});
            }
        },
        
        increement:(state,action)=>{
            let items=state.find((item)=>item.name === action.payload.name);
            if(items)
            {
                items.quantity+=1;
            }
            

        },


        decreement:(state,action)=>{
            let items=state.find((item)=>item.name === action.payload.name);
            if(items)
            {
                if(items.quantity>1)
                {
                items.quantity-=1;
                }
                else
                {
                    return state.filter((item)=>item.name !== action.payload.name)
                }
            }

        },

        remove:(state,action)=>{
            return state.filter((item)=>item.name !== action.payload.name)
        },
        clearCart:()=>[]

        
    }
})

const purchaseSlice=createSlice({
    name:'purchase',

    initialState:[],

    reducers:{
        addToOrder:(state,action)=>{
            state.push({...action.payload});
        },

        
    }
})

const authSlice=createSlice({
    name:'auth',

    initialState:{
        isAuthenticated:localStorage.getItem('username')? true :false,
        user:localStorage.getItem('username') || ""
    },
    reducers:{
        login:(state,action)=>{
            state.isAuthenticated=true;
            state.user=action.payload;

            localStorage.setItem("username",action.payload);
        },

        logout:(state)=>{
            state.isAuthenticated=false;
            state.user="";
            localStorage.removeItem("username");
        }
    }
})


let store=configureStore({
    reducer:{product:productsSlice.reducer,
            cart:cartSlice.reducer,
            purchase:purchaseSlice.reducer,
            auth:authSlice.reducer
    }
}
    
)

export const{addToCart,increement,decreement,remove,clearCart}=cartSlice.actions;
export const{addToOrder}=purchaseSlice.actions;
export const{login,logout}=authSlice.actions;

export default store;