function elementocreado() {
    const midiv = document.createElement("div")
    console.log(midiv);

    //Sirve para agregar texto//
    midiv.textContent = "clase de ADSI";
    midiv.id = "id Uno";
    midiv.className = "frase Div";


    midiv.style = "color:blue;"

    var otroDiv = midiv.cloneNode();
    //Sirve para agregar texto//
    otroDiv.textContent = "tengo otra copia del div"
    console.log(otroDiv);

    console.log("el div creado tiene id?" + "" + midiv.hasAttribute("id"));
    console.log("el div tiene atributos?" + "" + midiv.hasAttributes());


    //getAttributeNames//
    /* este devuelve los nombres del atributo del elemnto
    como una matriz de cadenas. si el elemnto no tiene atributos,
    este devolvera un vacio arreglo*/

    console.log(midiv.getAttributeNames());
    midiv.setAttribute("id", "nuevo id");





    //etiqueta span//

    const span = document.createElement("span")
    console.log(span);
    //etiqueta imagenes//
    const img = document.createElement("img")
    console.log(img);

    //etiqueta (comment) comentario//
    const comentario = document.createElement("comentario")
    console.log(comentario);

    /*document.createElement
   crea el elemento HTML especificado portagName 
   o unHTMLUnknownElementsi no se reconocetagName.
   */

    const Minodo = document.createElement("hola")
    console.log(Minodo);


    //---------------------------------------//------------------------------------

    var contenedor = document.getElementById("idcontenedor");

    var tengoid = contenedor.getAttributeNode("tengoid");

    console.log(tengoid);

    midiv.style = "color:blue;"

    otroDiv.textContent = "karen"

    /*
    setAttribute
    Establece el valor de un atributo en el elemento indicado. 
    Si el atributo ya existe, el valor es actualizado, 
    en caso contrario, el nuevo atributo es añadido con 
    el nombre y valor indicado.*/

    otroDiv.setAttribute("id", "otro  id");

    /*getAttributeNode
    
    evuelve el valor del atributo especificado en el elemento.
        Si el atributo especificado no existe, 
        el valor retornado puede ser tanto null como "" 
        (una cadena vacía); */
    otroDiv.getAttributeNode("nombreAtributo");

    //---------------------------------------//------------------------------------



    // var imagen = document.createElement("idimagen");
    // console.log(imagen);
    var img2 = document.createElement("img");
    img2.id = "idimg";
    img2.alt = "img_prueba";
    img2.setAttribute("id", "nuevoimagen");
    console.log(img2);

    console.log(midiv.getAttributeNames());
    console.log("el div tiene atributos?" + "" + midiv.hasAttributes());
    contenedor.removeAttribute("otra  imgen")

}


//---------------------------------------//------------------------------------

function implementando() {

    /*imagen*/

    const fragmento = document.createDocumentFragment();
    const imgn = document.createElement('img');

    imgn.src = "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg "

    imgn.alt = "imagen de gato";
    fragmento.appendChild(imgn);



    var divPrincipal = document.createElement("div");
    divPrincipal.textContent = ("Este es mi div principal");



    var otrodiv2 = document.createElement("div");
    otrodiv2.id = "id-div";
    otrodiv2.textContent = "nuevo_div";


    divPrincipal.appendChild(otrodiv2);
    fragmento.appendChild(divPrincipal);
    document.body.appendChild(fragmento);






    var antesinicio = document.createElement("div");
    antesinicio.textContent = "antesinicio";

    var despuesinicio = document.createElement("div");
    despuesinicio.textContent = "despuesinicio";

    var antesfin = document.createElement("div");
    antesfin.textContent = "antesfin";

    var despuesfin = document.createElement("div");
    despuesfin.textContent = "despuesfin";


    /*insertAdjacentElement
    inserta un elemento nodo dado en una posición dada 
    con respecto al elemento sobre el que se invoca.*/

    divPrincipal.insertAdjacentElement("beforebegin", antesinicio);
    divPrincipal.insertAdjacentElement("beforebegin", despuesinicio);

    divPrincipal.insertAdjacentElement("afterbegin", antesfin);
    divPrincipal.insertAdjacentElement("afterbegin", despuesfin);

    console.log(antesinicio, despuesinicio, antesfin, despuesfin);



    var contiene = document.querySelector("html").contains(document.querySelector("body"))
    console.log(contiene);

    console.log("numero de items en fragmento " + fragmento.childElementCount);




    // -----ciclo for-------!/------------------------

    for (i = 0; i <= 5; i++) {
        const creoDiv = document.createElement('div');
        creoDiv.textContent = (`numero div:${i}`);


        fragmento.appendChild(creoDiv);


        console.log("se ha creado el nodo:" + "" + creoDiv + creoDiv.nodeType);
        var textNodo = document.createTextNode('hola me llamo karen');
        console.log("creamos un nodo" + textNodo, textNodo.nodeType);

        document.body.appendChild(fragmento);

    }
}




//viñetas//


/* addEventListener

es un escuchador que indica al navegador 
que este atento a la interacción del usuario.*/

document.querySelector('#boton3').addEventListener('click', () => {

    //forEach hace arreglos con un for por cada elemento

    ["oso", "perro", "conejo", "cuy"].forEach(function (e) {
        var li = document.createElement("li");
        li.textContent = e
        document.body.appendChild(li);





    });

});



/*Tablas- */


function tablas() {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    // Adding the entire table to the body tag
    document.getElementById('body').appendChild(table);




    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Nombre";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Apellido";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "direccion";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Telefono";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    thead.appendChild(row_1);


    // Creating and adding data to second row of the table
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = "Maria karen ";
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = "Morales Morales";
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML = "calle 73-33 barrio la primavera";
    let row_2_data_4 = document.createElement('td');
    row_2_data_4.innerHTML = "3135006566";


    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    row_2.appendChild(row_2_data_4);


    tbody.appendChild(row_2);

}




/* mostrando los datos en el formulario*/


document.querySelector('#btn-formulario').addEventListener('click', () => {

    const btn_trabajo = document.getElementById('btn-formulario');

    const tabla = document.createElement('table');
    const tr = document.createElement('tr');

    const contenido = [];
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellidos').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    contenido.push(nombre, apellido, direccion, telefono);
    console.log(contenido);


    ["nombre", "apellido", "direccion", "telefono"].forEach(function (e) {
        var th = document.createElement('th');
        th.textContent = e;
        tabla.appendChild(th);
    });

    tabla.appendChild(tr);

    for (i = 0; i < contenido.length; i++) {
        const td = document.createElement('td');
        td.textContent = contenido[i];
        tr.appendChild(td)
        btn_trabajo.style = "display:none";
    }

    document.body.appendChild(tabla)
    document.getElementById('div_button').innerHTML = '<br> <button class="button" id="btn-colocar">colocar Contenido</button>';

    document.querySelector('#btn-colocar').addEventListener('click', () => {

        const contenido = [];
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellidos').value;
        const direccion = document.getElementById('direccion').value;
        const telefono = document.getElementById('telefono').value;
        contenido.push(nombre, apellido, direccion, telefono);

        const tr = document.createElement('tr');
        tabla.appendChild(tr);

        for (i = 0; i < contenido.length; i++) {
            const td = document.createElement('td');
            td.textContent = contenido[i];
            tr.appendChild(td)
        }

    });
});