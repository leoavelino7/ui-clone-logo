const elemRoot = document.querySelector('#root')

const fontSize = {
  initial: 2,
  final: 20
}

let template = ''

for(let i = fontSize.initial; i < fontSize.final; i++) {
  template += `
    <div class="ui-clone-google" style="font-size: ${i}px;"></div>
  `;
}

elemRoot.innerHTML = template
