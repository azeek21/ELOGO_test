/**
 * 
 * @param {Event} ev 
 */
const collapseToggler = (ev) => {
    const sidebar = document.getElementById('sidebar');
    document.body.setAttribute('sidebar-collapsed', 'true');
}

function tester() {
    console.log('hi')
}

export {tester, collapseToggler}