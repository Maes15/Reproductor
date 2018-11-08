function miOnDrag (event) {

    console.log('Arrastrando elemento', event.target)
}

function miOnStart(e) {

    e.dataTransfer.setData('id', e.target.id);

    console.log('Drag Start', e.target.id, ' - ', e.dataTransfer.getData('id'))
}
function miOnEnter(e) {
    console.log('Drag Enter')
}
function miOnLeave(e) {
    console.log('Drag Leave')
}
function miOnOver(e) {
    e.preventDefault();
        console.log('Drag Over')
}

function miOnEnd(e) {
    console.log('Drag DragEnd')
}
function miOnDrop(ev) {
    ev.preventDefault();// prevenir el comportamiento por defecto
    var data = ev.dataTransfer.getData('id'); // guarda los datos de id
    ev.target.appendChild(document.getElementById(data))   //

    console.log('Drag Drop', data)
}

