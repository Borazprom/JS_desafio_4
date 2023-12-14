
let html = "";
const propiedades_alquiler = [
  {
    Nombre: "Apartamento en el centro de la ciudad",
    scr: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2 Habitaciones",
    baños: "2 Baños",
    costo: 450000,
    smoke: false,
    pets: true,
  },
  {
    Nombre: "Apartamento luminoso con vista al mar",
    scr: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion:"456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones:"3 habitaciones",
    baños: "3 baños",
    costo: 500000,
    smoke: true,
    pets: true
  },
  {
    Nombre: "Condominio moderno en zona residencial",
    scr: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion:"123 Main Street, Anytown, CA 91234",
    habitaciones:"2 habitaciones",
    baños: "2 baño",
    costo: 450000,
    smoke: false,
    pets: true
  },
  {
    Nombre: "Penthouse de lujo con terraza panorámica",
    scr: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion:"567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones:"3 habitaciones",
    baños:"3 baños",
    costo: 500000,
    smoke: false,
    pets: true
  },
  {
      Nombre: "Penthouse de lujo con terraza panorámica",
      scr: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
      ubicacion:"567 Skyline Avenue, Skyview City, CA 56789",
      habitaciones:"3 habitaciones",
      baños:"3 baños",
      costo: 450000,
      smoke: false,
      pets: true
    },
    {
      Nombre: "Penthouse de lujo con terraza panorámica",
      scr: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
      ubicacion:"567 Skyline Avenue, Skyview City, CA 56789",
      habitaciones:"3 habitaciones",
      baños:"3 baños",
      costo: 480000,
      smoke: false,
      pets: true
    }
];
for (let propiedad of propiedades_alquiler) {
  html += `
    <div id="alquiler-card" >
      <img
        src="${propiedad.src}"
        class="card-img-top"
        alt="Imagen de la propiedad"
      />
      <div class="card-body">
        <h5 class="card-title mt-2">${propiedad.Nombre}</h5>
        <p class="card-text mt-3">${propiedad.descripcion}</p>
        <p>
          <i class="fas fa-map-marker-alt m-1"></i>${propiedad.ubicacion}
        </p>
        <p m-1>
          <i class="fas fa-bed m-1"></i>${propiedad.habitaciones} |
          <i class="fas fa-bath m-1"></i>${propiedad.baños}
        </p>
        <p>
          <i class="fas fa-dollar-sign m-1"></i>${propiedad.costo}
        </p>
        <p class="color-smoke">
          <i class="fas fa-smoking-ban m-1"></i>${propiedad.smoke}
        </p>
        <p class="color-pets">
          <i class="fa-solid fa-ban m-1"></i>${propiedad.pets}
        </p>
      </div>
    </div>
  `;
  let ele = document.querySelector("#propiedades_alquiler");
  ele.innerHTML = html;
}