//your code here!
document.addEventListener('DOMContentLoaded', () => {
    const infiList = document.getElementById('infi-list');
    const main = document.querySelector('main');

    function addItems() {
        const currentItemCount = infiList.children.length;
        
        for (let i = 0; i < 2; i++) {
            const li = document.createElement('li');
            li.textContent = `Item ${currentItemCount + i + 1}`;
            infiList.appendChild(li);
        }
    }

    function checkScroll() {
        if (main.scrollTop + main.clientHeight >= main.scrollHeight) {
            addItems();
        }
    }
    for (let i = 1; i <= 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i}`;
        infiList.appendChild(li);
    }

    main.addEventListener('scroll', checkScroll);
});


