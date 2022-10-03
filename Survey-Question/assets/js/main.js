const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$('#btn__submit').onclick = function () {
    var radioGroups = $$('.radio__group');
    var isError = false;
    radioGroups.forEach(function (element, index) {
        var isChecked = element.querySelectorAll('input[type="radio"]:checked').length == 1;
        if (isChecked) {
            element.classList.remove('bg-warning');
        } else {
            element.classList.add('bg-warning');
            isError = true;
        }
    });

    if (!isError) {
        $('form').submit();
    }
}