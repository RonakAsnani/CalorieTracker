//storage controller

// item controller
const ItemCtrl = (function(){
    // item constructor
    const Item = function(id,name,calories){
        this.id = id;
        this.name = name;
        this,calories = calories;
    }

    // data structure
    const data = {
        item : [
            {id:0,name: 'Steak Dinner',calories : 1200},
            {id:1,name: 'cookie',calories : 600},
            {id:2,name: 'egg',calories : 400},
        ],
        currentItem : null,
        totalCalories:0
    }

    return {
        logData : function(){
            return data;
        }
    }
})();

// UI controller

const UICtrl = (function(){
    
})();

// app controller

const App = (function(ItemCtrl, UICtrl){
    

    return {
        init : function(){
            
        }
    }
})(ItemCtrl, UICtrl);