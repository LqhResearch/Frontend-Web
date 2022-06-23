var addCheckBtn = document.querySelectorAll('.check__group .btn');

function checkGroup(icon = "check") {
    var div = document.createElement("div");
    div.className = "check__group";
    // Label
    var label = document.createElement("label");
    var i = document.createElement("i");
    i.className = icon == "check" ? "fas fa-check-circle" : "fas fa-check-square";
    label.appendChild(i);
    div.appendChild(label);

    // Input
    div.appendChild(document.createElement("input"));

    // Button
    var button = document.createElement("button");
    button.dataset.type = 'sub';
    button.onclick = function () {
        div.parentElement.removeChild(div);
    }
    var i = document.createElement("i");
    i.className = "fas fa-trash-alt";
    button.appendChild(i);
    div.appendChild(button);
    return div;
}

addCheckBtn.forEach(element => {
    element.onclick = function () {
        const checkGroupElement = checkGroup(this.dataset.icon);
        const btnGroupElemnt = this.parentElement;
        var card = this.parentElement.parentElement;
        card.appendChild(checkGroupElement);
        card.appendChild(btnGroupElemnt);
    }
});


const dataTypeSubs = document.querySelectorAll('[data-type="sub"]');
console.log(dataTypeSubs);

dataTypeSubs.forEach(element => {
    element.onclick = function () {
        var child = this.parentElement;
        child.parentElement.removeChild(child);
    }
});

var btnAddText = document.querySelector('#add-text');
var btnAddRadio = document.querySelector('#add-radio');
var btnAddCheck = document.querySelector('#add-check');
var form = document.querySelector('.form');

btnAddText.onclick = function () {
    const cardText = createCardText();
    form.appendChild(cardText);
}

function createCardText(text = "Câu hỏi: ") {
    var div = document.createElement("div");
    div.className = "card";
    var div1 = document.createElement("div");
    div1.className = "input__group";

    // Label
    var label = document.createElement("label");
    label.innerText = text;
    div1.appendChild(label);

    // Input
    var input = document.createElement("input");
    input.type = "text";
    div1.appendChild(input);

    // Button
    var button = document.createElement("button");
    button.dataset.type = 'main';
    button.onclick = function() {
        div.parentElement.removeChild(div);
    }
    var i = document.createElement("i");
    i.className = "fas fa-trash-alt";
    button.appendChild(i);

    div1.appendChild(button);

    div.appendChild(div1);
    return div;
}

function createCardCheck() {
    var div1 = document.createElement("div");
    div1.className = "input__group";

    // Label
    var label = document.createElement("label");
    label.innerText = "Câu trắc nghiệm: ";
    div1.appendChild(label);

    // Input
    var input = document.createElement("input");
    input.type = "text";
    div1.appendChild(input);

    // Button
    var button = document.createElement("button");
    button.dataset.type = 'main';
    var i = document.createElement("i");
    i.className = "fas fa-trash-alt";
    button.appendChild(i);

    div1.appendChild(button);

    return div1;
}

btnAddRadio.onclick = function() {
    var div = document.createElement("div");
    div.className = "card";
    var div1 = document.createElement("div");
    div1.className = "input__group";

    // Label
    var label = document.createElement("label");
    label.innerText = "Câu trắc nghiệm: ";
    div1.appendChild(label);

    // Input
    var input = document.createElement("input");
    input.type = "text";
    div1.appendChild(input);

    // Button
    var button = document.createElement("button");
    button.dataset.type = 'main';
    button.onclick = function() {
        div.parentElement.removeChild(div);
    }
    var i = document.createElement("i");
    i.className = "fas fa-trash-alt";
    button.appendChild(i);

    div1.appendChild(button);

    // Button add
    var div3 = document.createElement("div");
    div3.classList = "check__group";
    var div4 = document.createElement("div");
    div4.classList = "btn";
    div4.dataset.icon = "check";
    div4.innerHTML = '<i class="fas fa-plus-circle"></i> Thêm';


    div3.appendChild(div4);

    div.appendChild(div1);
    div.appendChild(checkGroup('check'));
    div.appendChild(checkGroup('check'));
    div.appendChild(div3);

    form.appendChild(div);
}

btnAddCheck.onclick = function() {
    var div = document.createElement("div");
    div.className = "card";
    var div1 = document.createElement("div");
    div1.className = "input__group";

    // Label
    var label = document.createElement("label");
    label.innerText = "Hộp kiểm: ";
    div1.appendChild(label);

    // Input
    var input = document.createElement("input");
    input.type = "text";
    div1.appendChild(input);

    // Button
    var button = document.createElement("button");
    button.dataset.type = 'main';
    button.onclick = function() {
        div.parentElement.removeChild(div);
    }
    var i = document.createElement("i");
    i.className = "fas fa-trash-alt";
    button.appendChild(i);

    div1.appendChild(button);

    // Button add
    var div3 = document.createElement("div");
    div3.classList = "check__group";
    var div4 = document.createElement("div");
    div4.classList = "btn";
    div4.dataset.icon = "radio";
    div4.innerHTML = '<i class="fas fa-plus-circle"></i> Thêm';


    div3.appendChild(div4);

    div.appendChild(div1);
    div.appendChild(checkGroup('radio'));
    div.appendChild(checkGroup('radio'));
    div.appendChild(div3);

    form.appendChild(div);
}

const dataTypeMains = document.querySelectorAll('[data-type="main"]');

dataTypeMains.forEach(element => {
    element.onclick = function() {
        var card = this.parentElement.parentElement;
        card.parentElement.removeChild(card);
    }
});