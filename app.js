//storage controller

// item controller
const ItemCtrl = (function(){
    // item constructor
    const Item = function(id,name,calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // data structure
    const data = {
        items : [
            {id:0,name: 'Steak Dinner',calories : 1200},
            {id:1,name: 'cookie',calories : 600},
            {id:2,name: 'egg',calories : 400},
        ],
        currentItem : null,
        totalCalories:0
    }

    return {
        getItems: function(){
            return data.items;
        },
        addItem: function(name,calories){
            let ID;
            // create id
            if(data.items.length > 0){
                ID = data.items.length[data.items.length - 1].id + 1;
            }else{
                ID = 0;
            }

            // calories to number
            calories = parseInt(calories);

            // create new item
            newItem = new Item(ID,name,calories);
            // add to items array
            data.items.push(newItem);

            return newItem;
        },
        logData : function(){
            return data;
        }
    }
})();

// UI controller

const UICtrl = (function(){
    const UISelectors = {
        itemList : '#item-list',
        addBtn : '.add-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calorie'
    }
    return{
        populateItemList : function(items){
            let html ='';
    
            items.forEach(function(item){
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong><em>${item.calories} Calories</em>
                <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
            </li>`;
            });

            // insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getItemInput: function(){
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },
        getSelectors: function(){
            return UISelectors;
        }
    }
   
})();

// app controller

const App = (function(ItemCtrl, UICtrl){
    // Load event listener
    const loadEventListeners = function(){
        //get UI selectors
        const UISelectors = UICtrl.getSelectors();

        // add item event
        document.querySelector(UISelectors.addBtn).addEventListener
        ('click',itemAddSubmit);
    }

    // add item submit
    const itemAddSubmit = function(e){
        // get form input from UI ctrl
        const input = UICtrl.getItemInput();

        // check for name and calorie input
        if(input.name != '' && input.calories != ''){
            // add item
            const newItem = ItemCtrl.addItem(input.name, input.calories);
        }

        e.preventDefault();
    }

    return {
        init : function(){
           
            // fetch items from data structure
            const items = ItemCtrl.getItems();
            

            //populate list with items
            UICtrl.populateItemList(items);

            // load event listener
            loadEventListeners();
            
        }
    }
})(ItemCtrl, UICtrl);

App.init();