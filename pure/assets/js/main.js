/**
 * Check if client localStorage can be accessed.
 * @returns true if localStorage is available
 */
const hasLocalSotrage = () => {
    try {
        localStorage.setItem('test', 'test');
        const tmp = localStorage.getItem('test');
        if (!tmp || tmp != 'test') {
            return false;
        }
    } catch (error) {
        return false;
    }
    return true;
}

// I know this code is a spaghetti, but it works
// TODO: clean up, optimize.
const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const isLocalstorage = hasLocalSotrage();
    if (sidebar.classList.contains('sidebar_collapsed')) {
        sidebar.classList.remove('sidebar_collapsed');
        if (isLocalstorage) {
            localStorage.setItem('sidebar-collapsed', 'false');
        }
    } else {
        sidebar.classList.add('sidebar_collapsed');
        if (isLocalstorage) {
            localStorage.setItem('sidebar-collapsed', 'true');
        }
    }
}


const showModal = () => {
    const modal = document.getElementById('action-dialog');
    modal.showModal();
}

const closeModal = () => {
    const modal = document.getElementById('action-dialog');
    modal.close();
}

const sidebarInit = () => {
    const sidebar = document.getElementById('sidebar');
    let collapse = null;
    if (hasLocalSotrage()) {
        collapse = localStorage.getItem('sidebar-collapsed');
        if (collapse && collapse == 'true') {
            sidebar.classList.add('sidebar_collapsed');
        }
    }
    // a bit of innteligent sidebar collapse for mobile visiting for the first time
    if (window.innerWidth < 500) {
        sidebar.classList.add('sidebar_collapsed');
    }
}

const initDropdown = () => {
    const items = document.querySelectorAll('.dropdown__content__item');
    if (!items || items.length == 0) {
        return ;
    }
    console.log(items);
    items.forEach(item => {
        item.addEventListener('click', (event) => {
            const dropdown = event.target.parentElement.parentElement;
            const value_container = dropdown.querySelector('.value-container');
            dropdown.setAttribute('data-selected', event.target.getAttribute('data-value'));
            value_container.textContent = event.target.textContent;
        })
    });
}

const initNotifications = () => {
    const notifications = document.querySelector('#notifications');
    const handler = () => {
        if (window.scrollY > 20) {
            notifications.classList.add('sticked');
        } else {
            notifications.classList.remove('sticked');
        }
    }
    let timeoutId = null;
    window.onscroll = () => {
        clearTimeout(timeoutId);
        setTimeout(() => {
            timeoutId = null;
            handler();
        }, 200);
    }
}
