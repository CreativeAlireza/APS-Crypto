export function message(message, page = "", time = 0, title = 'Message') {
    if(!message) return;

    const modal = document.querySelector('.modal');
    const modalBody = document.querySelector('.modal-body');
    const modalCloseBtn = document.querySelector('.modal-close-btn');
    const modalFooter = document.querySelector('.modal-footer');
    const modalTitle = document.querySelector('.modal-title');
    const modalBackdrop = document.querySelector('.modal-backdrop');

    modalBody.textContent = message;
    modalTitle.textContent = title;

    if(page){
        modalCloseBtn.remove();
        modalFooter.remove();
        
        setTimeout(() => {
            modalBackdrop.remove();
            modal.classList.remove('show');
            page();
        }, time);
    }
}

