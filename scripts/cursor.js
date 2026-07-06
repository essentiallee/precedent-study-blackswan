const cursorImage = 'assets/black-swan-main.png';
const supportsFinePointer = window.matchMedia('(pointer: fine)').matches;

if (supportsFinePointer) {
    const cursor = document.createElement('img');
    cursor.src = cursorImage;
    cursor.alt = '';
    cursor.className = 'swan-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cursor);
    document.body.classList.add('has-swan-cursor');

    let cursorX = 0;
    let cursorY = 0;
    let renderedX = 0;
    let renderedY = 0;

    const renderCursor = () => {
        renderedX += (cursorX - renderedX) * 0.24;
        renderedY += (cursorY - renderedY) * 0.24;
        cursor.style.transform = `translate3d(${renderedX}px, ${renderedY}px, 0) translate(-50%, -50%)`;
        requestAnimationFrame(renderCursor);
    };

    window.addEventListener('pointermove', (event) => {
        cursorX = event.clientX;
        cursorY = event.clientY;
        cursor.classList.add('is-visible');
    });

    window.addEventListener('pointerleave', () => {
        cursor.classList.remove('is-visible');
    });

    renderCursor();
}
