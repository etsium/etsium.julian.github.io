var i = 0;
var txt = "Paso la mayor parte de mi tiempo estudiando, soy el tipo de persona a la que siempre le gusta hacer preguntas. Cada uno de mis lugares de trabajo pasados (y actuales) está repleto de muchos profesionales que tienen toneladas de experiencias y conocimientos para compartir. Me mantengo frente a ellos sabiendo que puedo confiar y absorber parte de su experiencia. Los lugares que fomentan el aprendizaje y el buen trabajo en equipo son los lugares con los que me siento más cómodo. Y del mismo modo, siempre me encanta compartir mis propias experiencias.";
var speed = 30;

var educaciones = [
    {
        institucion: 'Universidad Tecnológica Naciona',
        comienzo: '2021',
        finalizacion: 'Cursando',
        imagen: 'https://innovavista.net/imagenes/archivos/proyectos/272_imagen_750x480xrecortarSuperior.jpg?random=1671817665',
        link: 'https://www.utn.edu.ar/es/'
    },
    {
        institucion: 'Universidad Tecnológica Nacional',
        comienzo: '2017',
        finalizacion: '2019',
        imagen: 'https://innovavista.net/imagenes/archivos/proyectos/272_imagen_750x480xrecortarSuperior.jpg?random=1671817665',
        link: 'https://www.utn.edu.ar/es/'
    },
    {
        institucion: 'Instituto Industrial Luis A. Huergo',
        comienzo: '2011',
        finalizacion: '2016',
        imagen: 'https://lh3.googleusercontent.com/p/AF1QipMN8lWlKje1HbpnE06KyMSAhpwhFRTlqhK8cPEE=s680-w680-h510',
        link: 'https://huergo.edu.ar/'
    }   
]

var experienciaLaboral = [ 
    {
        id:0,
        cargo: 'Especialista en cumplimiento normativoEspecialista',
        empresa: 'Smurfit Kappa',
        tipoContrato: 'Jornada completa',
        descripcion: '-Soporte de TI de hardware<br>-Soporte de TI de software<br>-Informes en la nube (McAfee, Wsus, Snow)<br>-Cumplimiento de incidentes',
        fecha: 'jul. 2021 - actualidad',
        imageUrl: 'https://media.licdn.com/dms/image/C4E0BAQHgD8IVRy11QA/company-logo_200_200/0/1656655805339?e=1683158400&v=beta&t=TuQ9t-2tCTrn5XbVs-B_xEnnjK6-7uPIwGOWeAq2nKI'
    },
    {
        id:1,
        cargo: 'Técnico del servicio de atención al cliente',
        empresa: 'ITC Soluciones',
        tipoContrato: 'Profesional independiente',
        descripcion: '-Soporte técnico pc -Soporte a proveedores<br>-Instalación de aplicaciones en windows (PcPos y Sitel)<br>*PcPos y Sitel: aplicaciones que permiten al usuario informar sus servicios (sector salud).',
        fecha: 'oct. 2018 - ene. 2022',
        imageUrl: 'https://media.licdn.com/dms/image/C4E0BAQGBvHWSFx1xWg/company-logo_200_200/0/1628777229867?e=1683158400&v=beta&t=7BXQRpeG0jfpXWTCVWV_WGg6iTIfGn4Y3qrEW8rw6L4'
    },
    {
        id:2,
        cargo: 'Especialista en soporte técnico',
        empresa: 'Cruz Medical',
        tipoContrato: 'Jornada parcial',
        descripcion: '-Soporte de TI de hardware<br>-Soporte de TI de software<br>-Soporte de VoIP<br>-Soporte de red<br>-Administración de proveedores',
        fecha: 'abr. 2021 - jun. 2021',
        imageUrl: 'https://cruzmedical.com.ar/wp-content/uploads/2020/04/cruzmedical-logo.png'
    },
    {
        id:3,
        cargo: 'Profesor substituto',
        empresa: 'Instituto Industrial Luis A. Huergo',
        tipoContrato: 'Contrato temporal',
        descripcion: '-C programación profesor (Nivel Secundaria)<br>-Electronica Basica Profesor (Nivel Secundaria)',
        fecha: 'may. 2018 - jun. 2018',
        imageUrl: 'https://huergo.edu.ar/images/logo85.png'
    },
    {
        id:4,
        cargo: 'Becario',
        empresa: 'Cromo Gráfica Quilmes',
        tipoContrato: 'Seasonal',
        descripcion: '-Servicio al cliente.<br>-Use una variedad de máquinas como cutter y guillotina',
        fecha: 'dic. 2017 - mar. 2018',
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipPe-dOcsRWR1EDt50wCpRuljvsnwRStXZpe2Mhy=w768-h768-n-o-v1'
    },
    {
        id:5,
        cargo: 'Pasante',
        empresa: 'Instituto Industrial Luis A. Huergo',
        tipoContrato: 'Contrato de prácticas',
        descripcion: '-Instalación de sistemas operativos y aplicaciones en PC como Office y Autocad.<br>-Asistente de configuración de red.<br>-Asistente de clases complementarias.<br>-Soporte técnico de PC',
        fecha: 'mar. 2016 - dic. 2016',
        imageUrl: 'https://huergo.edu.ar/images/logo85.png'
    }
]

function typeWriter() {

    if (i < txt.length) {
        document.getElementById("sobreMi-texto").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function GrillaEducacion() {
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
        var p = document.createElement('p');
        

        switch (contador) {
            case 0:
                var row = document.createElement('div');
                row.classList.add('row');
                row.id = 'row-'+fila; 
                break;

            case 2:
                var row = document.getElementById('row-'+fila);
                contador=-1;
                fila++;
            break;

            default:
                var row = document.getElementById('row-'+fila);
            break;
        }

        a.classList.add('navbar-brand');
        col.classList.add('col', 'd-flex2', 'justify-content-center');
        card.classList.add('card');
        img.classList.add('card-img-top','imagen-educacion');
        cardBody.classList.add('card-body');
        h5.classList.add('card-title');
        p.classList.add('card-text');       

        img.src = educacion.imagen;
        h5.textContent = educacion.institucion;
        p.textContent = educacion.comienzo + ' - ' + educacion.finalizacion;
        a.href = educacion.link;

        cardBody.appendChild(h5);
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

function experienciaLaboralTabs(){
    crearTabs();
}

function crearTabs(){
    var ul = document.getElementById('myTab');
    experienciaLaboral.forEach(experiencia => {
        var li = document.createElement('li');
        var button = document.createElement('button');

        li.classList.add('nav-item');
        li.id= experiencia.empresa;
        li.role = 'presentation';

        button.classList.add('nav-link');
        button.textContent = experiencia.empresa;
        button.type = 'button';
        button.role = 'tab';      
        button.setAttribute('data-bs-toggle','tab');
        button.setAttribute('data-bs-target', '#' + experiencia.empresa.replace(/\s+/g, '')+experiencia.id);
        button.setAttribute('aria-controls', experiencia.empresa.replace(/\s+/g, '') + '-tab-pane');
        
        li.appendChild(button);

        ul.appendChild(li);
        crearContenidoTabs(experiencia);
    });

    var primerTab  = document.querySelector('li button')
    primerTab.classList.add('active');
    primerTab.ariaSelected = "true";
}

function crearContenidoTabs(experiencia){
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

    if(experiencia.empresa === experienciaLaboral[0].empresa){
        div.classList.add('show', 'active');
    }
}
/*<li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
</li>
*/
crearTabs();
typeWriter();
GrillaEducacion();