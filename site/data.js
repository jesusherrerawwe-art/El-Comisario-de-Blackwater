/* EL COMISARIO DE BLACKWATER — datos de la edición interactiva */

const PROLOGO = [
 {t:'n', bg:'noche', x:'Abril de 1899. Mercer’s Crossing, West Elizabeth. El viento soplaba del sur, trayendo ese polvo fino que se mete en los dientes y en las conciencias.'},
 {t:'n', bg:'almacen', x:'En el almacén general, bajo la lámpara de aceite, lo esperaban treinta vecinos y un forastero. El forastero tenía el chaleco limpio, los modales de un diácono y una placa federal que brillaba más de lo que brillan las placas cuando la historia que las respalda es mentira.'},
 {t:'d', s:'VANCE', bg:'almacen', x:'Comisario Pride. El gobierno agradece su servicio. Y lamenta, lamenta de veras, lo de la niña O’Dell.'},
 {t:'n', bg:'almacen', x:'El almacén entero respiró hacia adentro. Woody no movió un músculo. Seis años atrás, una bala que salió de su revólver joven había atravesado a un fugitivo y encontrado a una niña que cruzaba la calle.'},
 {t:'n', bg:'almacen', x:'Seis años, un juramento sobre la estrella de su padre, y una funda vacía que no era estética: era penitencia.'},
 {t:'d', s:'WOODY', bg:'almacen', x:'Usted vende rifles sin número de serie a quien llega primero. Los contó el herrero. Los contó el sepulturero. Yo los escribí. En este pueblo hay más balas suyas que campanas.'},
 {t:'d', s:'VANCE', bg:'almacen', x:'Palabra de un hombre desesperado… contra palabra de un agente de la Agencia Nacional de Detectives Pinkerton.'},
 {t:'n', bg:'almacen', x:'Pinkerton. En 1899, esa palabra valía más que cualquier estrella de lata cosida a un pecho. La mirada de los treinta vecinos hizo el viaje completo: del comisario de toda la vida al hombre de la placa brillante. Y en alguna estación de ese viaje, Woody los perdió a todos.'},
 {t:'d', s:'WOODY', bg:'almacen', x:'Firmo yo.'},
 {t:'n', bg:'porche', x:'No preguntó qué firmaba. Lo sabía: su destierro venía con membrete. Salió a la noche sin que nadie le abriera paso; se lo abrieron hacia atrás, como se aparta uno de un perro enfermo.'},
 {t:'n', bg:'porche', x:'En el porche de su oficina, con la llave todavía tibia de su propia puerta, hizo la única ceremonia que la noche merecía: se desprendió la estrella del pecho.'},
 {t:'n', bg:'porche', x:'No la tiró. Un comisario que tira su estrella está admitiendo que la estrella era del pueblo. La suya era de su padre, y de la niña, y de él. La envolvió en el pañuelo y la guardó en el bolsillo del chaleco, donde latió el resto de la noche como un corazón chico y terco.'},
 {t:'n', bg:'establo', x:'En el establo, Tiro al Blanco lo recibió con ese resoplido de yegua que no pregunta tonterías. Woody ensilló en la oscuridad y, al ceñir la cincha, se miró la funda vacía una vez más.'},
 {t:'d', s:'WOODY', bg:'establo', x:'Seis años… Ese hombre cree haberme quitado algo esta noche. No entiende que la única arma que yo tenía en este pueblo era la confianza, y que esa ya la regalaron ellos mismos, sin que nadie la robara.'},
 {t:'n', bg:'camino', x:'Cabalgó sin prisa, porque la prisa es la confesión de los culpables, y él quería llevarse de Mercer’s Crossing hasta la forma de andar.'},
 {t:'n', bg:'camino', x:'En la salida del pueblo, donde el camino se vuelve sugerencia, detuvo a la yegua y miró hacia atrás una sola vez: la lámpara del almacén todavía encendida, treinta sombras alrededor, y un hombre de chaleco limpio enseñándoles a tener miedo de la persona equivocada.'},
 {t:'n', bg:'camino', x:'No los maldijo. Los comisarios que maldicen ya están del otro lado. Nomás los anotó, con esa caligrafía chica y terca de su diario:'},
 {t:'d', s:'DIARIO', bg:'camino', x:'Abril de 1899. El pueblo eligió al que brilla.'},
 {t:'n', bg:'camino', x:'Tres semanas después, en Blackwater, un ferry lleno de dinero del banco se pudriría en un muelle con muertos de la banda Van der Linde todavía encima, y el mismo hombre de la placa brillante andaría tomando notas entre los curiosos.'},
 {t:'n', bg:'camino', x:'Pero eso, esa noche, Woody no podía saberlo. Lo que sabía cabía en una línea, y esa línea es la que abrió su diario y la que abre esta historia:'},
 {t:'d', s:'DIARIO', bg:'camino', x:'Un pueblo es lo que defiende cuando nadie mira. El mío dejó de mirar.'},
 {t:'n', bg:'camino', x:'Picó espuelas. Tiro al Blanco, que sí había mirado, se llevó al comisario hacia el este, donde el polvo de mayo ya esperaba otra deuda.'}
];

const PERSONAJES = [
 {n:'James “Woody” Pride', tag:'AU · PROTAGONISTA', d:'El comisario de la funda vacía. Lazo, ingenio y un juramento de seis años. Lealtad feroz, humor seco, habla solo. En la banda de Dutch será, junto a Hosea, la voz de la razón — y el único que cuenta los días de Micah.'},
 {n:'Arthur Morgan', tag:'CANON', d:'El brazo derecho de Dutch y el mejor hombre de la banda, aunque ninguno de los dos lo diga en voz alta. La amistad que define a Woody: una lealtad absoluta entre adultos que se eligen.'},
 {n:'Dutch van der Linde', tag:'CANON', d:'El profeta con planes y Tahití en los labios. Woody lo respeta sin idolatrarlo, y Dutch lo nota. Cada capítulo, un milímetro menos de fe.'},
 {n:'Micah Bell', tag:'CANON', d:'La serpiente en la bota. Llegó a la banda pocos meses antes de Blackwater; Woody es el único que anota fechas. Adulador con Dutch, veneno con los demás.'},
 {n:'Hosea Matthews', tag:'CANON', d:'La otra voz de la razón, paternal y astuto. El único que entiende el método de Woody sin necesidad de explicárselo. Su ausencia futura dejará al comisario solo con la verdad.'},
 {n:'Jessie Pride', tag:'AU', d:'La hermana pelirroja: tiradora fina, cartas explosivas, un rancho lejos del mapa donde ya pasó un hombre de traje gris preguntando por su hermano. Banca a la banda desde la distancia.'},
 {n:'Silas Vance', tag:'AU · ANTAGONISTA', d:'El Pinkerton del chaleco limpio: estafador y traficante de armas encubierto, autor del destierro de Woody… y del aviso que pudrió el ferry de Blackwater. Dos tragedias, una firma.'}
];

const MAPA = [
 {l:'Mercer’s Crossing', f:'ABR 1899', c:'PRÓLOGO', d:'El destierro: la estrella sale del pecho y entra al bolsillo.'},
 {l:'Blackwater', f:'MAY 1899', c:'CANON', d:'El ferry fallido de Dutch; el dinero escondido; Vance tomando notas.'},
 {l:'Colter', f:'MAY 1899', c:'CANON', d:'El invierno que congeló la invencibilidad de la banda.'},
 {l:'Valentine', f:'JUN 1899', c:'CAP. 1', d:'Smithfield’s Saloon: Woody salva a Arthur sin fierros. Dutch recluta.'},
 {l:'Horseshoe Overlook', f:'JUN–JUL 1899', c:'CAPS. 2–4', d:'El campamento que todavía parecía familia; la primera chispa con Micah.'},
 {l:'Clemens Point', f:'AGO–SEP 1899', c:'CAP. 5', d:'El lodazal Gray–Braithwaite; el rescate de Jack; la mansión arde.'},
 {l:'Saint Denis', f:'SEP–OCT 1899', c:'CAPS. 6–8', d:'Tranvías y gas; Vance reaparece; el banco revienta mal; Hosea cae.'},
 {l:'Guarma', f:'OCT 1899', c:'CAP. 9', d:'La isla: el lazo se pierde en el naufragio y renace con crin.'},
 {l:'Lakay → Beaver Hollow', f:'OCT–NOV 1899', c:'CAPS. 10–15', d:'El campamento-cárcel; la serpiente nombrada; el último rodeo de Arthur.'},
 {l:'Beecher’s Hope', f:'1907', c:'CAP. 16', d:'El rancho de John; Jack lee el diario; la estrella vuelve al pecho.'}
];

const OBJETOS = [
 {n:'La estrella de latón', tag:'OBJETO · ARCO COMPLETO', d:'De su padre. Desprendida en el prólogo; bolsillo del chaleco durante toda la novela; pecho, por primera vez en ocho años, en 1907. Impacto, no posesión.'},
 {n:'El lazo', tag:'OBJETO · RENACE', d:'Su única arma. Entero hasta Guarma; perdido en el naufragio; retejado con crin de Tiro al Blanco, con cicatriz visible. Un lazo nuevo no es el mismo lazo: es el mismo hombre, remendado.'},
 {n:'El sombrero', tag:'OBJETO · IDENTIDAD', d:'Perdido en el lodo del Capítulo 7, cuando el campamento le da la espalda; devuelto limpio por Arthur en el 8. Un hombre sin sombrero es un hombre a medias.'},
 {n:'El diario de comisario', tag:'OBJETO · MEMORIA', d:'Mojado en Guarma (páginas perdidas), robado en el 10, quemado a medias en el 14. En 1907 lo lee Jack: es esta novela.'},
 {n:'La funda vacía', tag:'OBJETO · PENITENCIA', d:'Sellada desde el Juramento. Nunca carga fierros; jamás sostiene uno. En el epílogo la desabrocha y la cuelga en el poste: la penitencia terminada.'}
];

const CAPITULOS = [
 {n:'P', t:'Mercer’s Crossing', e:'LEER AQUÍ'},
 {n:'01', t:'El hombre de la funda vacía', e:'EN ESCRITURA'},
 {n:'02', t:'Fuego de campamento', e:'PRÓXIMAMENTE'},
 {n:'03', t:'Cobrar deudas', e:'PRÓXIMAMENTE'},
 {n:'04', t:'Palabras de Dutch', e:'PRÓXIMAMENTE'},
 {n:'05', t:'Sangre en Lemoyne', e:'PRÓXIMAMENTE'},
 {n:'06', t:'Luces de Saint Denis', e:'PRÓXIMAMENTE'},
 {n:'07', t:'La caída', e:'PRÓXIMAMENTE'},
 {n:'08', t:'Lo que pesa la estrella', e:'PRÓXIMAMENTE'},
 {n:'09', t:'Guarma', e:'PRÓXIMAMENTE'},
 {n:'10', t:'Cenizas', e:'PRÓXIMAMENTE'},
 {n:'11', t:'El hombre de Pinkerton', e:'PRÓXIMAMENTE'},
 {n:'12', t:'Fe', e:'PRÓXIMAMENTE'},
 {n:'13', t:'La tos', e:'PRÓXIMAMENTE'},
 {n:'14', t:'La serpiente en mi bota', e:'PRÓXIMAMENTE'},
 {n:'15', t:'El último rodeo', e:'PRÓXIMAMENTE'},
 {n:'16', t:'Beecher’s Hope, 1907', e:'PRÓXIMAMENTE'}
];
