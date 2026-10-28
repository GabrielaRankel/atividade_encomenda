const verificar_log = document.getElementById('verificar_log');

const token = localStorage.getItem('token');
const nome = localStorage.getItem('nomeFuncionario');

if (token) {
    verificar_log.innerHTML = `
        <span class="titulo_menu">
            Olá, ${nome || 'Funcionário'}!
        </span>
        &emsp;
        <a href="#" id="btn_logout">Logout</a>
    `;

    const btn_logout = document.getElementById('btn_logout');

    btn_logout.addEventListener('click', (e) => {
        e.preventDefault();

        localStorage.removeItem('token');
        localStorage.removeItem('nomeFuncionario');

        location.href = './html/login.html';
    });

} else {
    verificar_log.innerHTML = `
        <a href="./html/login.html">Login</a>
    `;
}