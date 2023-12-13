    // Pagina INDEX---

    // ----------- >>>>

    // Pagina Propiedades en Venta -----
    let html_venta = "";
      const propiedades_venta = [
        {
          Nombre: "Casa Amareto",
          scr: "https://unsplash.com/es/fotos/edificio-de-hormigon-marron-y-blanco-MAnVoJlQUvg",
          descripcion: "Esta hermosa Casa de lujo está ubicada en un lugar residencial",
          ubicacion: "Alto de mar #389 Con Con",
          habitaciones: "4 habitaciones",
          baños: "3 baños",
          costo: 5.000,
          smoke: true,
          pets: true,
        },
        {
          Nombre: "Apartamento de lujo en zona exclusiva",
          scr: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
          descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
          ubicacion:"123 Luxury Lane, Prestige Suburb, CA 45678",
          habitaciones:"4 habitaciones",
          baños: "4 baños",
          costo: 5.000,
          smoke: false,
          pets: false
        },
        {
          Nombre: ">Apartamento acogedor en la montaña",
          scr: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
          descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
          ubicacion:"789 Mountain Road, Summit Peaks, CA 23456",
          habitaciones:"2 habitaciones",
          baños: "1 baño",
          costo: 3.000,
          smoke: true,
          pets: true
        },
        {
          Nombre: "Penthouse de lujo con terraza panorámica",
          scr: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
          descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
          ubicacion:"567 Skyline Avenue, Skyview City, CA 56789",
          habitaciones:"3 habitaciones",
          baños:"3 baños",
          costo: 3.000,
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
            costo: 3.000,
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
            costo: 3.000,
            smoke: false,
            pets: true
          }
      ];
      for (let propiedad of propiedades_venta) {
        html_venta += `
          <div id="propiedad">
            <img
              src="${propiedad.src}"
              class="card-img-top"
              alt="Imagen de la propiedad"
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
        const ele = document.querySelector("#propiedades");
        ele.innerHTML = html_venta;
    };
    // -------- >>>>>



    // Pagina propiedades en Alquiler ----

    let html = "";
      const propiedades_alquiler = [
        {
          Nombre: "Casa Amareto",
          scr: "https://unsplash.com/es/fotos/edificio-de-hormigon-marron-y-blanco-MAnVoJlQUvg",
          descripcion: "Esta hermosa Casa de lujo está ubicada en un lugar residencial",
          ubicacion: "Alto de mar #389 Con Con",
          habitaciones: "4 habitaciones",
          baños: "3 baños",
          costo: 5.000,
          smoke: true,
          pets: true,
        },
        {
          Nombre: "Apartamento de lujo en zona exclusiva",
          scr: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
          descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
          ubicacion:"123 Luxury Lane, Prestige Suburb, CA 45678",
          habitaciones:"4 habitaciones",
          baños: "4 baños",
          costo: 5.000,
          smoke: false,
          pets: false
        },
        {
          Nombre: ">Apartamento acogedor en la montaña",
          scr: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
          descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
          ubicacion:"789 Mountain Road, Summit Peaks, CA 23456",
          habitaciones:"2 habitaciones",
          baños: "1 baño",
          costo: 3.000,
          smoke: true,
          pets: true
        },
        {
          Nombre: "Penthouse de lujo con terraza panorámica",
          scr: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
          descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
          ubicacion:"567 Skyline Avenue, Skyview City, CA 56789",
          habitaciones:"3 habitaciones",
          baños:"3 baños",
          costo: 3.000,
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
            costo: 3.000,
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
            costo: 3.000,
            smoke: false,
            pets: true
          }
      ];
      for (let propiedad of propiedades_alquiler) {
        html += `
          <div id="propiedad">
            <img
              src="${propiedad.src}"
              class="card-img-top"
              alt="Imagen de la propiedad"
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
        const ele = document.querySelector("#propiedades");
        ele.innerHTML = html;
    }

    // -------->>>>>>
    