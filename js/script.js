var i = 0;
var txt = "Paso la mayor parte de mi tiempo estudiando, soy el tipo de persona a la que siempre le gusta hacer preguntas. Cada uno de mis lugares de trabajo pasados (y actuales) está repleto de muchos profesionales que tienen toneladas de experiencias y conocimientos para compartir. Me mantengo frente a ellos sabiendo que puedo confiar y absorber parte de su experiencia. Los lugares que fomentan el aprendizaje y el buen trabajo en equipo son los lugares con los que me siento más cómodo. Y del mismo modo, siempre me encanta compartir mis propias experiencias.";
var speedtypeWriter = 30;
var porcentajeBarraIntermedio = '0%';

var educaciones = [
    {
        institucion: 'Universidad Tecnológica Nacional',
        titulo: 'Bachelor of Technology - BTech, Programación informática',
        comienzo: '2021',
        finalizacion: 'Cursando',
        imagen: 'https://innovavista.net/imagenes/archivos/proyectos/272_imagen_750x480xrecortarSuperior.jpg?random=1671817665',
        link: 'https://www.utn.edu.ar/es/'
    },
    {
        institucion: 'Universidad Tecnológica Nacional',
        titulo: 'Ingeniero Electrónico, Ingeniería eléctrica y electrónica',
        comienzo: '2017',
        finalizacion: '2019',
        imagen: 'https://innovavista.net/imagenes/archivos/proyectos/272_imagen_750x480xrecortarSuperior.jpg?random=1671817665',
        link: 'https://www.utn.edu.ar/es/'
    },
    {
        institucion: 'Instituto Industrial Luis A. Huergo',
        titulo: 'Técnico electrónico especializado en informática., Tecnología/Técnico informático',
        comienzo: '2011',
        finalizacion: '2016',
        imagen: 'https://lh3.googleusercontent.com/p/AF1QipMN8lWlKje1HbpnE06KyMSAhpwhFRTlqhK8cPEE=s680-w680-h510',
        link: 'https://huergo.edu.ar/'
    }
]

var experienciaLaboral = [
    {
        id: 0,
        cargo: 'Especialista en cumplimiento normativoEspecialista',
        empresa: 'Smurfit Kappa',
        tipoContrato: 'Jornada completa',
        descripcion: '-Soporte de TI de hardware<br>-Soporte de TI de software<br>-Informes en la nube (McAfee, Wsus, Snow)<br>-Cumplimiento de incidentes',
        fecha: 'jul. 2021 - actualidad',
        imageUrl: './Imagenes/logoSmurfitKappa.png'
    },
    {
        id: 1,
        cargo: 'Técnico del servicio de atención al cliente',
        empresa: 'ITC Soluciones',
        tipoContrato: 'Profesional independiente',
        descripcion: '-Soporte técnico pc -Soporte a proveedores<br>-Instalación de aplicaciones en windows (PcPos y Sitel)<br>*PcPos y Sitel: aplicaciones que permiten al usuario informar sus servicios (sector salud).',
        fecha: 'oct. 2018 - ene. 2022',
        imageUrl: './Imagenes/logoITCSoluciones.png'
    },
    {
        id: 2,
        cargo: 'Especialista en soporte técnico',
        empresa: 'Cruz Medical',
        tipoContrato: 'Jornada parcial',
        descripcion: '-Soporte de TI de hardware<br>-Soporte de TI de software<br>-Soporte de VoIP<br>-Soporte de red<br>-Administración de proveedores',
        fecha: 'abr. 2021 - jun. 2021',
        imageUrl: './Imagenes/logoCruzMedical.png'
    },
    {
        id: 3,
        cargo: 'Profesor substituto',
        empresa: 'Instituto Industrial Luis A. Huergo',
        tipoContrato: 'Contrato temporal',
        descripcion: '-C programación profesor (Nivel Secundaria)<br>-Electronica Basica Profesor (Nivel Secundaria)',
        fecha: 'may. 2018 - jun. 2018',
        imageUrl: './Imagenes/logoHuergo.png'
    },
    {
        id: 4,
        cargo: 'Becario',
        empresa: 'Cromo Gráfica Quilmes',
        tipoContrato: 'Seasonal',
        descripcion: '-Servicio al cliente.<br>-Use una variedad de máquinas como cutter y guillotina',
        fecha: 'dic. 2017 - mar. 2018',
        imageUrl: './Imagenes/logoCromo.png'
    },
    {
        id: 5,
        cargo: 'Pasante',
        empresa: 'Instituto Industrial Luis A. Huergo',
        tipoContrato: 'Contrato de prácticas',
        descripcion: '-Instalación de sistemas operativos y aplicaciones en PC como Office y Autocad.<br>-Asistente de configuración de red.<br>-Asistente de clases complementarias.<br>-Soporte técnico de PC',
        fecha: 'mar. 2016 - dic. 2016',
        imageUrl: './Imagenes/logoHuergo.png'
    }
]

var certificaciones = [
    {
        nombre: 'Introducción a Linux',
        empresa: 'EducacionIT',
        fecha: 'Julio 2022',
    },
    {
        nombre: 'GitHub para programadores',
        empresa: 'LinkedIn',
        fecha: 'Abril 2021',
    },
    {
        nombre: 'SQL esencial',
        empresa: 'LinkedIn',
        fecha: 'Abril 2021',
    },
    {
        nombre: 'Scrum: Roles',
        empresa: 'LinkedIn',
        fecha: 'Abril 2021',
    },
    {
        nombre: 'Aprende SCRUM',
        empresa: 'LinkedIn',
        fecha: 'Marzo 2021',
    },
    {
        nombre: 'Aprende diseño de base de datos relacionales',
        empresa: 'LinkedIn',
        fecha: 'Marzo 2021',
    },
    {
        nombre: 'JavaScript avanzado: Buenas prácticas',
        empresa: 'LinkedIn',
        fecha: 'Marzo 2021',
    },
    {
        nombre: 'JavaScript avanzado: Expresiones regulares',
        empresa: 'LinkedIn',
        fecha: 'Marzo 2021',
    },
    {
        nombre: 'Node.js esencial',
        empresa: 'LinkedIn',
        fecha: 'Marzo 2021',
    },
    {
        nombre: 'Node.js práctico: Sitio web',
        empresa: 'LinkedIn',
        fecha: 'Marzo 2021',
    },
    {
        nombre: 'Fundamentos de la gestión de programas',
        empresa: 'LinkedIn',
        fecha: 'Noviembre 2020',
    },
    {
        nombre: 'Fundamentos de la gestión de proyectos: Calidad',
        empresa: 'LinkedIn',
        fecha: 'Noviembre 2020',
    },
    {
        nombre: 'Fundamentos de la gestión de proyectos: Cambios',
        empresa: 'LinkedIn',
        fecha: 'Noviembre 2020',
    },
    {
        nombre: 'Fundamentos de la gestión de proyectos: Integración',
        empresa: 'LinkedIn',
        fecha: 'Noviembre 2020',
    },
    {
        nombre: 'Fundamentos de la gestión de proyectos: Liderazgo',
        empresa: 'LinkedIn',
        fecha: 'Noviembre 2020',
    },
    {
        nombre: 'Fundamentos de la gestión de proyectos: Riesgos',
        empresa: 'LinkedIn',
        fecha: 'Noviembre 2020',
    },
    {
        nombre: 'Big Data Foundations',
        empresa: 'LinkedIn',
        fecha: 'Octubre 2020',
    },
    {
        nombre: 'Fundamentos de la gestión de proyectos: Comunicación',
        empresa: 'LinkedIn',
        fecha: 'Octubre 2020',
    },
    {
        nombre: 'Fundamentos de la gestión de proyectos: Stakeholders',
        empresa: 'LinkedIn',
        fecha: 'Octubre 2020',
    },
    {
        nombre: 'JavaScript esencial',
        empresa: 'LinkedIn',
        fecha: 'Octubre 2020',
    },
    {
        nombre: 'Learning Visual Studio Code',
        empresa: 'LinkedIn',
        fecha: 'Octubre 2020',
    },
    {
        nombre: 'Managing Project Foundations: Budgets',
        empresa: 'LinkedIn',
        fecha: 'Octubre 2020',
    },
    {
        nombre: 'Project 2019 y Project Online Professional esencial',
        empresa: 'LinkedIn',
        fecha: 'Octubre 2020',
    },
    {
        nombre: 'Project Management Foundations',
        empresa: 'LinkedIn',
        fecha: 'Octubre 2020',
    },
    {
        nombre: 'Project Management Foundations: Ethics',
        empresa: 'LinkedIn',
        fecha: 'Octubre 2020',
    },
    {
        nombre: 'Project Management Foundations: Procurement',
        empresa: 'LinkedIn',
        fecha: 'Octubre 2020',
    },
    {
        nombre: 'Project Management Foundations: Schedules',
        empresa: 'LinkedIn',
        fecha: 'Octubre 2020',
    },
    {
        nombre: 'Project Management Foundations: Teams',
        empresa: 'LinkedIn',
        fecha: 'Octubre 2020',
    },
    {
        nombre: 'Python course: "Classify space rocks by using Python and artificial intelligence"',
        empresa: 'Microsoft',
        fecha: 'Octubre 2020',
    },
    {
        nombre: 'Python course: "Discover the role of Python in space exploration"',
        empresa: 'Microsoft',
        fecha: 'Octubre 2020',
    },
    {
        nombre: 'Python course: "Predict rocket launch delays with machine learning"',
        empresa: 'Microsoft',
        fecha: 'Octubre 2020',
    },
    {
        nombre: 'Python: Data structures',
        empresa: 'Universidad Austral, Argentina',
        fecha: 'Octubre 2020',
    },
    {
        svg_empresa: '<path fill="blue" d="M142 910 c-18 -11 -41 -34 -52 -52 -19 -31 -20 -51 -20 -386 l0 -353 25 -25 25 -25 293 3 292 3 57 28 c69 34 121 91 148 164 18 49 20 78 20 306 0 234 -2 254 -20 285 -11 18 -34 41 -52 52 -31 19 -51 20 -358 20 -307 0 -327 -1 -358 -20z m203 -410 l0 -265 -55 0 -55 0 -3 255 c-1 140 0 261 3 268 3 9 21 12 57 10 l53 -3 0 -265z m465 210 l0 -59 -72 -3 -73 -3 0 -205 -1 -205 -57 -3 -57 -3 0 210 0 210 -72 3 -73 3 -3 44 c-5 74 -15 71 208 71 l200 0 0 -60z"/>',
        nombre: 'Web Developer Foundations: Full Stack vs. Front End',
        empresa: 'LinkedIn',
        fecha: 'Octubre 2020',
    },
    {
        nombre: 'English course: Consolidation 2',
        empresa: 'Centro Universitario de Idiomas (CUI)',
        fecha: 'Diciembre 2019',
    },
    {
        nombre: 'English course: Consolidation 1',
        empresa: 'Centro Universitario de Idiomas (CUI)',
        fecha: 'Julio 2019',
    },
    {
        nombre: 'Teaching course: "La simulación en el proceso educativo: Una herramienta de enseñanza y aprendizaje"',
        empresa: 'Gobierno de la Ciudad de Buenos Aires',
        fecha: 'Marzo 2019',
    },
    {
        nombre: 'English course: Basic 6',
        empresa: 'Centro Universitario de Idiomas (CUI)',
        fecha: 'Diciembre 2018',
    },
    {
        nombre: 'English course: Basic 5',
        empresa: 'Centro Universitario de Idiomas (CUI)',
        fecha: 'Julio 2018',
    },
    {
        nombre: 'English course: Upper-Intermediate',
        empresa: 'St Giles International',
        fecha: 'Febrero 2016',
    }
]

function CambiarBarraProgreso(){
    var anios = obtenerAnios();
    anios.sort();
    document.querySelectorAll('.timeline__input').forEach(input => {
        input.addEventListener('click', () =>{
            var anioSelecionado = input.getAttribute('data-description');
            var porcentajeFinal = 100/(anios.length-1) * anios.indexOf(anioSelecionado)+'%';

            crearTarjetasCertificacionesPorAnio(anioSelecionado);
            document.documentElement.style.setProperty('--end--bar--width', porcentajeFinal );
            document.querySelector('.timeline__bar__full').style.animation = 'none';
            window.requestAnimationFrame(function(){
                document.querySelector('.timeline__bar__full').style.animation = 'progressBar 3s forwards';
              });

            if(porcentajeBarraIntermedio != porcentajeFinal);
            {
                document.documentElement.style.setProperty('--start--bar--width', porcentajeBarraIntermedio);
            }
            porcentajeBarraIntermedio = porcentajeFinal;
        })
    });
}

function typeWriterSobreMy() {

    if (i < txt.length) {
        document.getElementById("sobreMi-texto").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriterSobreMy, speedtypeWriter);
    }
}

function crearGrillaEducacion() {
    var i = 0;
    var contador = 0;
    var fila = 0;
    var grilla = document.getElementById('Grilla-Educacion');

    educaciones.forEach(educacion => {
        var a = document.createElement('a');
        var col = document.createElement('div');
        var card = document.createElement('div');
        var img = document.createElement('img');
        var cardBody = document.createElement('div');
        var h5 = document.createElement('h5');
        var pTitulo = document.createElement('p');
        var p = document.createElement('p');


        switch (contador) {
            case 0:
                var row = document.createElement('div');
                row.classList.add('row');
                row.id = 'row-' + fila;
                break;

            case 2:
                var row = document.getElementById('row-' + fila);
                contador = -1;
                fila++;
                break;

            default:
                var row = document.getElementById('row-' + fila);
                break;
        }

        a.classList.add('navbar-brand');
        col.classList.add('col', 'd-flex2', 'justify-content-center');
        card.classList.add('card');
        img.classList.add('card-img-top', 'imagen-educacion');
        cardBody.classList.add('card-body');
        h5.classList.add('card-title');
        pTitulo.classList.add('card-text');
        p.classList.add('card-text');

        img.src = educacion.imagen;
        h5.textContent = educacion.institucion;
        p.textContent = educacion.comienzo + ' - ' + educacion.finalizacion;
        pTitulo.textContent = educacion.titulo;
        a.href = educacion.link;

        cardBody.appendChild(h5);
        cardBody.appendChild(pTitulo);
        cardBody.appendChild(p);

        card.appendChild(img);
        card.appendChild(cardBody);

        a.appendChild(card);

        col.appendChild(a);

        row.appendChild(col);

        grilla.appendChild(row);

        contador++;
    });



}

function experienciaLaboralTabs() {
    crearTabs();
}

function crearTabsExperiencia() {
    var ul = document.getElementById('myTab');
    experienciaLaboral.forEach(experiencia => {
        var li = document.createElement('li');
        var button = document.createElement('button');

        li.classList.add('nav-item');
        li.id = experiencia.empresa;
        li.role = 'presentation';

        button.classList.add('nav-link');
        button.textContent = experiencia.empresa;
        button.type = 'button';
        button.role = 'tab';
        button.setAttribute('data-bs-toggle', 'tab');
        button.setAttribute('data-bs-target', '#' + experiencia.empresa.replace(/\s+/g, '') + experiencia.id);
        button.setAttribute('aria-controls', experiencia.empresa.replace(/\s+/g, '') + '-tab-pane');

        li.appendChild(button);

        ul.appendChild(li);
        crearContenidoTabsExperiencia(experiencia);
    });

    var primerTab = document.querySelector('li button')
    primerTab.classList.add('active');
    primerTab.ariaSelected = "true";
}

function crearContenidoTabsExperiencia(experiencia) {
    var tabContent = document.getElementById('myTabContent');
    var contenido = document.createElement('div');
    var div = document.createElement('div');
    var img = document.createElement('img');
    var p = document.createElement('p');
    var fecha = document.createElement('p');
    var nombreEmpresa = experiencia.empresa.replace(/\s+/g, '')

    div.classList.add('tab-pane', 'fade');
    div.id = nombreEmpresa + experiencia.id;
    div.role = 'tabpanel';
    div.setAttribute('aria-labelledby', nombreEmpresa + '-tab')
    img.classList.add('empresaLogo');
    fecha.classList.add('fecha');
    contenido.classList.add('contenido');

    p.innerHTML = experiencia.descripcion;
    img.src = experiencia.imageUrl;
    fecha.textContent = experiencia.fecha;

    contenido.appendChild(img);
    contenido.appendChild(p);
    div.appendChild(contenido);
    div.appendChild(fecha);
    tabContent.appendChild(div);

    if (experiencia.empresa === experienciaLaboral[0].empresa) {
        div.classList.add('show', 'active');
    }
}

function obtenerAnios() {
    var anios = new Array();
    certificaciones.forEach(certificacion => {
        if (anios.indexOf(certificacion.fecha.replace(/[^0-9]+/g, "")) == -1) {
            anios.push(certificacion.fecha.replace(/[^0-9]+/g, ""))
        }
    });

    return anios;
}

function crearTimeLineDeCertificaciones() {
    const anios = obtenerAnios();
    anios.sort();
    anios.forEach(anio => {
        var divTimeLineInput = document.querySelector('.timeline__input__container');
        var divInput = document.createElement('div');
        var input = document.createElement('input');
        var span = document.createElement('span');

        divInput.classList.add('timeline__input__group');

        input.classList.add('timeline__input');
        input.type = 'radio';
        input.name = 'timeline-check';
        input.setAttribute('data-description', anio);

        span.classList.add('timeline__year')
        span.textContent = anio;

        divInput.appendChild(input);
        divInput.appendChild(span);

        divTimeLineInput.appendChild(divInput);
    });
}

function crearTarjetasCertificacionesPorAnio(anio) {
    var certContent = document.getElementById('certificaciones__contenido');

    certContent.innerHTML = '';
    certificaciones.forEach(certificacion => {
        if(certificacion.fecha.replace(/[^0-9]+/g, "") == anio){
            crearContenidoTarjetasCertificaciones(certificacion, certContent);
        }
    });

}

function crearContenidoTarjetasCertificaciones(certificacion, certContent) {
    /* Creacion Tarjeta */
    var tarjeta = document.createElement('div');


    /* Creacion info Tarjeta*/
    var logo = document.createElement('img');
    var contInfoCert = document.createElement('div');
    var nombreCert = document.createElement('h4');
    var nombreEmp = document.createElement('h5');
    var fecha = document.createElement('h5');

    /* aplicando clases */
    tarjeta.classList.add('certificacion__tarjeta');

    contInfoCert.classList.add('Certificacion__tarjeta__contenedor__info');
    logo.classList.add('certificacion__tarjeta__imagen__logo');
    nombreCert.classList.add('certificacion__tarjeta__titulo');

    nombreCert.textContent = certificacion.nombre;
    nombreEmp.textContent = certificacion.empresa;
    fecha.textContent = certificacion.fecha;
    logo.src = './Imagenes/' + certificacion.empresa + '.svg';

    /* Enlazar elementos */
    contInfoCert.appendChild(nombreCert);
    contInfoCert.appendChild(nombreEmp);
    contInfoCert.appendChild(fecha);

    tarjeta.appendChild(logo);
    tarjeta.appendChild(contInfoCert);

    /* Añado los elemento a Dom */
    certContent.appendChild(tarjeta);

}

function cargarWeb(){
    typeWriterSobreMy();
    crearTabsExperiencia();    
    crearGrillaEducacion();
    crearTimeLineDeCertificaciones();
    CambiarBarraProgreso();
}

cargarWeb();