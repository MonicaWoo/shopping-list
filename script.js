//Add items to list via form

const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')

function addItem(e){

    e.preventDefault();

    const newItem = itemInput.value;

    if (newItem === ''){
        alert('Please add an Item')
        return;
    }

    const li = document.createElement('li')
    const text = document.createTextNode(newItem);
    li.appendChild(text);
   
    const button = createButton('remove-item btn-link text-red')
    console.log(button);
    
    li.appendChild(button);
    console.log(li);

    itemList.appendChild(li);

    itemList.value = '';

}


    
function createButton (classes) {
    const button = document.createElement('button'); 
    button.className = classes
    const i = createI('fa-solid fa-xmark')
    button.appendChild(i)
    return button;
}

function createI(classes){
    const i = document.createElement('i')
    i.className = classes ;
    return i
}


itemForm.addEventListener('submit', addItem)





/* <ul id="item-list" class="items">
        <li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul> */