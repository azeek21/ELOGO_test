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

// this code is a spaghetti, but it works
// TODO: clean up, optimize.
const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const logoImg = document.getElementById('logo-img');

    const isLocalStorage = hasLocalSotrage();
    let isCollapsed;
    if (isLocalStorage) {
        isCollapsed = localStorage.getItem('sidebar-collapsed');
    } else {
        isCollapsed = document.body.getAttribute('sidebar-collapsed');
    }

    if (!isCollapsed || isCollapsed.length == 0) {
        if (isLocalStorage) {
            localStorage.setItem('sidebar-collapsed', 'true');
        } else {
            document.body.setAttribute('sidebar-collapsed', 'true');
        }
        sidebar.classList.add('sidebar_collapsed');
        logoImg.setAttribute('src', 'assets/img/e.svg')
        return;
    }

    if (isCollapsed == 'true') {
        if (isLocalStorage) {
            localStorage.setItem('sidebar-collapsed', 'false');
        } else {
            document.body.setAttribute('sidebar-collapsed', 'false');
        }
        sidebar.classList.remove('sidebar_collapsed');
        logoImg.setAttribute('src', 'assets/img/logo.svg')
        return;
    }

    if (isLocalStorage) {
        localStorage.setItem('sidebar-collapsed', 'true');
    } else {
        document.body.setAttribute('sidebar-collapsed', 'true');
    }
    sidebar.classList.add('sidebar_collapsed');
    logoImg.setAttribute('src', 'assets/img/e.svg')

}

/**
 * Toggles visibility of dropdowns content (selectable options);
 * @param {Event} ev 
 */
const dropdownToggle = (ev) => {
    const dropdown = ev.target.offsetParent;
    let value_container = ev.target.getElementsByClassName('value-container')[0];
    console.log(value_container);
    const content = dropdown.querySelector('.dropdown__content');
    const options = content.querySelectorAll('.dropdown__content__item');
    if (dropdown.hasAttribute('data-open'))  {
        dropdown.removeAttribute('data-open')
        options.forEach(option => {
            option.onclick = null;
        })
    } else {
        dropdown.setAttribute('data-open', 'true');
        options.forEach(option => {
            option.onclick = () => {
                const value = option.getAttribute('data-value');
                const name = option.textContent;
                dropdown.setAttribute('data-selected', value);
                value_container.textContent = name;
                dropdown.removeAttribute('data-open')
            }
        })
    }
}