// Set the form__button to automatically move when scrolling
window.onscroll = function () {
    document.querySelector('.form__button').style.top = window.scrollY + "px";
}

// Event add question button
var form = document.querySelector('.form');
var addQuestionBtn = document.querySelector('#add-question');
var addRadioBtn = document.querySelector('#add-radio');
var addCheckBtn = document.querySelector('#add-check');

// Question element
function Card(elements) {
    var div = document.createElement('div');
    div.className = 'card';
    elements.forEach(e => {
        div.appendChild(e);
    });
    return div;
}

// Input group element
function InputGroup(text = 'Câu hỏi: ') {
    var div = document.createElement('div');
    div.className = 'input__group';
    div.innerHTML = '<label>' + text + '</label><input type="text" /><button onclick="remove(this)" title="Xoá câu hỏi"><i class="fas fa-trash-alt"></i></button>';
    return div;
}

// Check group element
function CheckGroup(type = 'check') {
    var icon = type == 'check' ? 'fas fa-check-circle' : 'fas fa-check-square';
    var div = document.createElement('div');
    div.className = 'check__group';
    div.innerHTML = '<label><i class="' + icon + '"></i></label><input type="text" /><button onclick="remove(this, \'2\')"><i class="fas fa-trash-alt"></i></button>';
    return div;
}

// Check group button element
function CheckGroupBtn(type = 'check') {
    var div = document.createElement('div');
    div.className = 'check__group';
    div.innerHTML = '<div class="btn" onclick="AddCheckGroup(this, \'' + type + '\')"><i class="fas fa-plus-circle"></i> Thêm</div>';
    return div;
}

// Add element check group
function AddCheckGroup(_this, type = 'check') {
    var card = _this.parentElement.parentElement;
    var groupBtn = _this.parentElement;
    card.appendChild(CheckGroup(type));
    card.appendChild(groupBtn);
}

// Delete element
function remove(_this, type = '1') {
    var element = type == '2' ? _this.parentElement : _this.parentElement.parentElement;
    element.parentElement.removeChild(element);
}

addQuestionBtn.onclick = function () {
    var card = Card([InputGroup()]);
    form.appendChild(card);
}

addRadioBtn.onclick = function () {
    var card = Card([InputGroup('Câu trắc nghiệm: '), CheckGroup(), CheckGroup(), CheckGroupBtn()]);
    form.appendChild(card);
}

addCheckBtn.onclick = function () {
    var card = Card([InputGroup('Hộp kiểm: '), CheckGroup('radio'), CheckGroup('radio'), CheckGroupBtn('radio')]);
    form.appendChild(card);
}

// Initial page
window.onload = function () {
    addQuestionBtn.onclick();
    addRadioBtn.onclick();
    addCheckBtn.onclick();
}