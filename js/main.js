function miOnStart(event) {
    event.dataTransfer.setData('id', event.target.id);
    console.log('Drag Start', event.target.id,  event.dataTransfer.getData('id'));
    // return event.target.id;
}
function miOnOver(event) {
    event.preventDefault();
    console.log('Drag Over');
}
function miOnDrop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('id');
    console.log(data);
    event.target.appendChild(document.getElementById(data));
    return data;
}
