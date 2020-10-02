const elemRoot = document.querySelector('#root')

const fontSize = {
  initial: 2,
  final: 100
}

let template = ''

for(let i = fontSize.initial; i < fontSize.final; i++) {
  template += `
    <div class="ui-clone-chrome" style="font-size: ${i}px;">
      <div class="ui-clone-chrome-circle"></div>
      <div class="ui-clone-chrome-yellow"></div>
      <div class="ui-clone-chrome-green"></div>
    </div>
  `;
}

elemRoot.innerHTML = template
