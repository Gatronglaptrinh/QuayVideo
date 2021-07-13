var input = document.getElementById('input');
function send() {
  var array = document.getElementById('input').value.split(' ');
  document.getElementById('input').value = '';
  var svg = document.getElementById('svg');
  switch (array[0]) {
    case 'rect':
    svg.innerHTML += '<rect x="' + array[1] + '"' + ' y="' + array[2] + '"' + ' width="' + array[3] + '"' + ' height="' + array[4] + '" stroke="' + array[5] + '" fill="' + array[6] + '"></rect>';
    break;
    case 'circle':
    svg.innerHTML += '<circle cx="' + array[1] + '"' + ' cy="' + array[2] + '"' + ' r="' + array[3] + '"' + ' stroke="' + array[4] + '" fill="' + array[5] + '"></rect>';
    break;
    case 'ellipse':
    svg.innerHTML += '<ellipse cx="' + array[1] + '"' + ' cy="' + array[2] + '"' + ' rx="' + array[3] + '"' + ' ry="' + array[4] + '" stroke="' + array[5] + '" fill="' + array[6] + '"></rect>';
    break;
    case 'cls':
    svg.innerHTML = '';
    break;
  }
}
input.addEventListener('keydown', (e) => {
  if (e.which == 13) {
    send();
  }
});