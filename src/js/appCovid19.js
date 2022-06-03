        /* App desarrollada por ServerBKD
                                 con la API de covid19.patria.org.ve
                                 30/09/2020
                                 */

        let url = "https://covid19.patria.org.ve/api/v1/summary";
        fetchApi(url);

        function handleData(data) {
            console.log('ServerBKD');
            console.log('Mi dato es URL 1:', data);
            console.log('Total de Casos Activos hasta hoy:', data.Active.Count);
            console.log('Total de Casos Confirmados hasta hoy:', data.Confirmed.Count);
            console.log('Total por Genero, Masculino:', data.Confirmed.ByGender.male);
            const MALE = data.Confirmed.ByGender.male
            console.log('Total por Genero, Femenino:', data.Confirmed.ByGender.female);
            const FMALE = data.Confirmed.ByGender.female
            console.log('Total de Muertes confirmadas:', data.Deaths.Count);
            const DTHS = data.Deaths.Count;
            console.log('Total de Recuperados:', data.Recovered.Count);
            const RCVD = data.Recovered.Count;
            // console.log(data.Confirmed.ByState);
            console.log('El total de Casos Confirmados en Carabobo hasta hoy:', data.Confirmed.ByState.Carabobo);
            const Carabobo = data.Confirmed.ByState.Carabobo;

            const pintarz = document.querySelector('#statez')
            pintarz.innerHTML = ""
            pintarz.innerHTML = `<div class="card my-3 border border-warning">
                                                    <div class="card-header">
                                                        <p class="bg-warning">Casos por Estados:</p>
                                                      </div>
                                                 <div class="card" >
                                                    <!--  -->
                                                        <ul class="list-group list-group-flush">
                                                            <!-- Amazonas -->
                                                            <li class="list-group-item"><p>Amazonas:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState.Amazonas)}</p></li>
                                                            <!-- Anzoátegui -->
                                                            <li class="list-group-item"><p>Anzoátegui:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState.Anzoátegui)}</p></li>
                                                            <!-- Apure -->
                                                            <li class="list-group-item"><p>Apure:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState.Apure)}</p></li>
                                                            <!-- Aragua -->
                                                            <li class="list-group-item"><p>Aragua:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState.Aragua)}</p></li>
                                                            <!-- Barinas -->
                                                            <li class="list-group-item"><p>Barinas:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState.Barinas)}</p></li>
                                                            <!-- Bolívar -->
                                                            <li class="list-group-item"><p>Bolívar:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState.Bolívar)}</p></li>
                                                            <!-- Carabobo -->
                                                            <li class="list-group-item"><p>Carabobo:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState.Carabobo)}</p></li>
                                                            <!-- Cojedes -->
                                                            <li class="list-group-item"><p>Cojedes:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState.Cojedes)}</p></li>
                                                            <!-- Delta Amacuro -->
                                                            <li class="list-group-item"><p>Delta Amacuro:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState["Delta Amacuro"])}</p></li>
                                                            <!-- Distrito Capital -->
                                                            <li class="list-group-item"><p>Distrito Capital:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState["Distrito Capital"])}</p></li>
                                                            <!-- Falcón -->
                                                            <li class="list-group-item"><p>Falcón:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState.Falcón)}</p></li>
                                                            <!-- Guárico -->
                                                            <li class="list-group-item"><p>Guárico:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState.Guárico)}</p></li>
                                                            <!-- La Guaira -->
                                                            <li class="list-group-item"><p>La Guaira:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState["La Guaira"])}</p></li>
                                                            <!-- Lara -->
                                                            <li class="list-group-item"><p>Lara:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState.Lara)}</p></li>
                                                            <!-- Los Roques -->
                                                            <li class="list-group-item"><p>Los Roques:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState["Los Roques"])}</p></li>
                                                            <!-- Miranda -->
                                                            <li class="list-group-item"><p>Miranda:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState.Miranda)}</p></li>
                                                            <!-- Monagas -->
                                                            <li class="list-group-item"><p>Monagas:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState.Monagas)}</p></li>
                                                            <!-- Mérida -->
                                                            <li class="list-group-item"><p>Mérida:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState.Mérida)}</p></li>
                                                            <!-- Nueva Esparta -->
                                                            <li class="list-group-item"><p>Nueva Esparta:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState["Nueva Esparta"])}</p></li>
                                                            <!-- Portuguesa -->
                                                            <li class="list-group-item"><p>Portuguesa:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState.Portuguesa)}</p></li>
                                                            <!-- Sucre -->
                                                            <li class="list-group-item"><p>Sucre:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState.Sucre)}</p></li>
                                                            <!-- Trujillo -->
                                                            <li class="list-group-item"><p>Trujillo:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState.Trujillo)}</p></li>
                                                            <!-- Táchira -->
                                                            <li class="list-group-item"><p>Táchira:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState.Táchira)}</p></li>
                                                            <!-- Yaracuy -->
                                                            <li class="list-group-item"><p>Yaracuy:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState.Yaracuy)}</p></li>
                                                            <!-- Zulia -->
                                                            <li class="list-group-item"><p>Zulia:</p><p class="bg-info">${JSON.stringify(data.Confirmed.ByState.Zulia)}</p></li>
                                                        </ul>
                                                        </div>
                                                </div>`;

            let url = 'https://covid19.patria.org.ve/api/v1/timeline'
            fetchApi2(url, MALE, FMALE, DTHS, RCVD);

        }


        function fetchApi(url) {
            fetch(url)
                .then(response => response.ok ? response.json() : Promise.reject({
                    err: response.status
                }))
                .then(data => handleData(data))
                .catch(error => console.log('Request Failed:', error));
        }

        function fetchApi2(url, MALE, FMALE, DTHS, RCVD, carabobo) {
            fetch(url)
                .then(response => response.ok ? response.json() : Promise.reject({
                    err: response.status
                }))
                .then(data => {
                    console.log('Mi dato es:', data);
                    const i = data.length - 1
                    console.log('Fecha de Última Actualización:', data[i].Date);
                    console.log('Confirmaciones de las ultimas 24 hrs: ', data[i].Confirmed.New);
                    console.log('Recuperados de las últimas 24 hrs: ', data[i].Recovered.New);
                    console.log('Muertes de las ultimas 24 hrs: ', data[i].Deaths.New);
                    const pintar = document.querySelector('#apiz')
                    pintar.innerHTML = ""
                    pintar.innerHTML = `<div class="card my-3 border border-warning">
                                                    <div class="card-header">
                                                        <p class="bg-warning">Fecha de Última Actualización:</p>
                                                      </div>
                                                 <div class="card" >
                                                    <!--  -->
                                                        <ul class="list-group list-group-flush">
                                                            <!-- Fecha de Hoy -->
                                                            <li class="list-group-item bg-info">                                      <span > ${data[i].Date}</span></li>
                                                            <!-- Dias Cuarentena -->
                                                            <li class="list-group-item"><p><p>Total de Días en Cuarentena:</p><p class="bg-info">${i}</p></li>
                                                             <!-- Activos -->
                                                            <li class="list-group-item"><p>Total de Casos Activos hasta hoy:</p><p class="bg-warning">${JSON.stringify(data[i].Active.Count)}</p></li>
                                                            <!--Confirmados 24 -->
                                                            <li class="list-group-item"><p>Casos confirmados de las ultimas 24 hrs:</p><p class="bg-info">${JSON.stringify(data[i].Confirmed.New)}</p></li>
                                                            <!--Total Confirmados  -->
                                                            <li class="list-group-item"><p>Total de Casos Confirmados: </p><p class="bg-warning">${JSON.stringify(data[i].Confirmed.Count)}</p></li>
                                                            <!-- Hombres -->
                                                            <li class="list-group-item"><p>Total de Casos Confirmados por Generos (Masculinos):</p> 
                                                            <p class="bg-warning">${JSON.stringify(MALE)}</p></li>
                                                            <!-- Mujeres -->
                                                            <li class="list-group-item"><p>Total de Casos Confirmados por Generos (Femeninos):</p> 
                                                            <p class="bg-warning">${JSON.stringify(FMALE)}</p></li>
                                                            <!-- Total de Muertes -->
                                                            <li class="list-group-item"><p>Total de Muertes hasta la fecha:</p> 
                                                            <p class="bg-danger">${JSON.stringify(data[i].Deaths.Count)}</p></li>
                                                            <!-- Muertes -->
                                                            <li class="list-group-item"><p>Muertes de las ultimas 24 hrs:</p> 
                                                            <p class="bg-danger">${JSON.stringify(data[i].Deaths.New)}</p></li>
                                                            <!-- Total de Recuperados -->
                                                            <li class="list-group-item"><p>Total de Recuperados:</p> 
                                                            <p class="bg-success">${JSON.stringify(data[i].Recovered.Count)}</p></li>
                                                            <!-- Recuperados 24hrs -->
                                                            <li class="list-group-item"><p>Recuperados de las últimas 24 hrs:</p> 
                                                            <p class=" card-text bg-success">${JSON.stringify(data[i].Recovered.New)}</p></li>
                                                        </ul>
                                                        </div>
                                                </div>`;

                })
                .catch(error => console.log('Request Failed:', error))
        };