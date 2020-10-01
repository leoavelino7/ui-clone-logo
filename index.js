const elemRoot = document.querySelector('#root')

const fontSize = {
  initial: 2,
  final: 200
}

let template = ''

for(let i = fontSize.initial; i < fontSize.final; i++) {
  template += `
    <div class="ehash-logo" style="font-size: ${i}px;">
      <div class="ehash-logo__head">
        <div class="ehash-logo__head--top-point"></div>
        <div class="ehash-logo__head--bottom-point"></div>
      </div>
      <div class="ehash-logo__body">
        <span class="ehash-logo__body--text">E</span>
        <div class="ehash-logo__body__hash">
          <span class="ehash-logo__body__hash--text">#</span>
        </div>
      </div>
    </div>
  `;
}

elemRoot.innerHTML = template
