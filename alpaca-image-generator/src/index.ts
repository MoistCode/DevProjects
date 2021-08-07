function generatePreviewOnSelection(e: HTMLElementEventMap['change']) {
    const target = e.target as HTMLOptionElement;
    const value = target.value;
    const type = target.id;

    let imgEl = document.querySelector(`[data-type=${type}]`);
    imgEl.src = `./public/assets/images/${type}/${value.replace(' ', '-')}.png`;
}

function addSelectionListeners() {
    let accessoriesEl = document.getElementById('accessories')
    accessoriesEl?.addEventListener('change', generatePreviewOnSelection);

    let eyesEl = document.getElementById('eyes')
    eyesEl?.addEventListener('change', generatePreviewOnSelection);

    let backgroundsEl = document.getElementById('backgrounds')
    backgroundsEl?.addEventListener('change', generatePreviewOnSelection);

    let hairEl = document.getElementById('hair')
    hairEl?.addEventListener('change', generatePreviewOnSelection);

    let earsEl = document.getElementById('ears')
    earsEl?.addEventListener('change', generatePreviewOnSelection);

    let legEl = document.getElementById('leg')
    legEl?.addEventListener('change', generatePreviewOnSelection);

    let mouthEl = document.getElementById('mouth')
    mouthEl?.addEventListener('change', generatePreviewOnSelection);

    let neckEl = document.getElementById('neck')
    neckEl?.addEventListener('change', generatePreviewOnSelection);
}

function addDefaultSelectinos() {
    document.querySelectorAll('select').forEach((node) => {
        const value = node.value;
        const type = node.id;

        let imgEl = document.querySelector(`[data-type=${type}]`);
        imgEl.src = `./public/assets/images/${type}/${value.replace(' ', '-')}.png`;
    });
}

function setup() {
    addSelectionListeners();
    addDefaultSelectinos();
}

setup();