const elemRoot = document.querySelector('#root')

const fontSize = {
  initial: 2,
  final: 50
}

let template = ''

for(let i = fontSize.initial; i < fontSize.final; i++) {
  template += `
    <div class="ui-clone-pepsi" style="font-size: ${i}px;"></div>
  `;
}

elemRoot.innerHTML = template
