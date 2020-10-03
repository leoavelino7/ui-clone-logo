const elemRoot = document.querySelector('#root')

const fontSize = {
  initial: 2,
  final: 50
}

let template = ''

for(let i = fontSize.initial; i < fontSize.final; i++) {
  template += `
    <div class="ui-clone-apple" style="font-size: ${i}px;"></div>
  `;
}

elemRoot.innerHTML = template
