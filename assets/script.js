const propiedades_alquiler = [
    {
      Nombre: "",
      scr: "",
      descripcion: "",
      ubicacion:"",
      habitaciones:"",
      costo: ,
      smoke: false,
      pets: true
    },
    {
      Nombre: "",
      scr: "",
      descripcion: "",
      ubicacion:"",
      habitaciones:"",
      costo: ,
      smoke: false,
      pets: true
    },{
      Nombre: "",
      scr: "",
      descripcion: "",
      ubicacion:"",
      habitaciones:"",
      costo: ,
      smoke: false,
      pets: true
    },{
      Nombre: "",
      scr: "",
      descripcion: "",
      ubicacion:"",
      habitaciones:"",
      costo: ,
      smoke: false,
      pets: true
    },
  ];

    function propiedadesAlquiler (){
    
    let html = "";
      const propiedades_alquiler = [
        {
          Nombre: "propiedad en viña del mar",
          scr: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          descripcion: "esta ubicada en un lugar residencial",
          ubicacion: "ulises poirier 289 achupalla",
          habitaciones: "3 habitaciones",
          costo: 350.0,
          smoke: false,
          pets: true,
        },
        // {
        //   Nombre: "",
        //   scr: "",
        //   descripcion: "",
        //   ubicacion:"",
        //   habitaciones:"",
        //   costo: ,
        //   smoke: false,
        //   pets: true
        // },{
        //   Nombre: "",
        //   scr: "",
        //   descripcion: "",
        //   ubicacion:"",
        //   habitaciones:"",
        //   costo: ,
        //   smoke: false,
        //   pets: true
        // },{
        //   Nombre: "",
        //   scr: "",
        //   descripcion: "",
        //   ubicacion:"",
        //   habitaciones:"",
        //   baños:"",
        //   costo: ,
        //   smoke: false,
        //   pets: true
        // },
      ];

      for (let propiedad of propiedades_alquiler) {
        html += `
          <div id="propiedad">
            <img
              src="${propiedad.src}"
              class="card-img-top"
              alt="Imagen del departamento"
            />
            <div>
              <h5>${propiedad.Nombre}</h5>
              <p>${propiedad.descripcion}</p>
              <p>
                <i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}
              </p>
              <p>
                <i class="fas fa-bed"></i>${propiedad.habitaciones} |
                <i class="fas fa-bath"></i>${propiedad.baños}
              </p>
              <p>
                <i class="fas fa-dollar-sign"></i>${propiedad.costo}
              </p>
              <p class="text-danger">
                <i class="fas fa-smoking-ban"></i>${propiedad.smoke}
              </p>
              <p class="text-danger">
                <i class="fa-solid fa-ban"></i>${propiedad.pets}
              </p>
            </div>
          </div>
        `;
      }
      const ele = document.querySelector("#propiedades");
      ele.innerHTML = html;
    }