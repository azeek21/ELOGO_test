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