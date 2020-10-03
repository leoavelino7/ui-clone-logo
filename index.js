const elemRoot = document.querySelector('#root')

const fontSize = {
  initial: 10,
  final: 25
}

let template = ''

for(let i = fontSize.initial; i < fontSize.final; i++) {
  template += `
    <div class="ui-clone-netflix" style="font-size: ${i}px;">
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h3 class="ui-clone-netflix--title">Netflix</h3>
    </div>
  `;
}

elemRoot.innerHTML = template
