let isOpen = false;
let currentPage = 1;

function openLetter() {
    if (!isOpen) {
        document.getElementById('letter').classList.add('open');
        isOpen = true;
    }
}

function turnPage(event) {
    event.stopPropagation();
    document.getElementById(`page${currentPage}`).classList.remove('active');
    currentPage = currentPage === 1 ? 2 : 1;
    document.getElementById(`page${currentPage}`).classList.add('active');
}
