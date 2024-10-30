let idCounter = 1; // Variable global para ID autoincremental

function onClick() {
    let tbody = document.getElementsByTagName('tbody')[0];

    let tr = document.createElement('tr');

    // columna ID
    let td = document.createElement('td');
    td.innerText = idCounter;
    tr.appendChild(td);

    // columna nombre
    td = document.createElement('td');
    td.innerText = 'Example';
    tr.appendChild(td);

    // columna apellido
    td = document.createElement('td');
    td.innerText = 'Surname';
    tr.appendChild(td);

    // columna acciones
    td = document.createElement('td');
    let editLink = document.createElement('a');
    editLink.href = `http://localhost/edit/${idCounter}`;
    editLink.innerText = 'Editar';
    td.appendChild(editLink);
    tr.appendChild(td);

    tbody.appendChild(tr);
    console.log('Fila añadida con ID:', idCounter);

    idCounter++; // ID autoincremental
}