'use strict';
var inputArea = $('.message-form > .message-field');
var ouputArea = $('main > .message-formatted');
var textModifyingForm = $('main > .message-form');

function handleModifyText() {
    ouputArea.text(
        inputArea.val().trim()
        .replace(/[\s{2,}]+/g, ' ')
        .toLowerCase()
    );
}

function resetOutput() {
    ouputArea.text('');
}

inputArea.on('keyup', handleModifyText);
textModifyingForm.on('reset', resetOutput);
console.log($)