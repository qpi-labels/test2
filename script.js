function checkPIN() {
    const pin = document.getElementById('pin').value;
    if (pin === '0000') {
        document.querySelector('.container').classList.add('hidden');
        document.getElementById('main-page').classList.remove('hidden');
    } else {
        alert('Incorrect PIN');
    }
}
