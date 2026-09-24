/* EL COMISARIO DE BLACKWATER — datos de la edición interactiva */
/* Escena jugable: CAPÍTULO 1, ESCENA I — LA PROVEEDURÍA (texto canónico de Chuy) */

const ESCENA1 = [
 {t:'n', bg:'noche', x:'22 de abril de 1899. La lluvia sobre Mercer’s Crossing no caía: sentenciaba. Golpeaba el tejado de la proveeduría como un jurado que ya hubiera decidido.'},
 {t:'n', bg:'almacen', x:'Adentro, Silas Vance pasaba la cuenta con el lápiz, y había cajas que no debían estar ahí y estaban. Woody empujó la puerta sin prisa. Un comisario que entra apurado es un comisario que ya perdió.'},
 {t:'d', s:'VANCE', bg:'almacen', x:'Tienda cerrada, comisario.'},
 {t:'d', s:'WOODY', bg:'almacen', x:'Tienda abierta para el inventario. Tres cajas de rifles Spencer sin factura. Dos de cartuchos del 44 que no vende un tendero a esta hora. Y un libro de cuentas donde usted anota con la izquierda lo que vende con la derecha.'},
 {t:'n', bg:'almacen', x:'Vance por fin se volvió. No miró el libro: lo miró a él, con esa paciencia de quien ya ganó en otro cuarto que uno no conoce.'},
 {t:'d', s:'VANCE', bg:'almacen', x:'Usted es un hombre cuidadoso, Pride. Eso lo vuelve peligroso y aburrido. En ese orden.'},
 {t:'n', bg:'almacen', x:'Entonces se abrió la puerta de la trastienda y entró el marshal Dobbs con dos alguaciles, y detrás, el comité del pueblo: el del banco, el de la funeraria, el del hotel. Los mismos que seis meses atrás le habían rogado a Woody que se quedara de comisario. Los mismos que ahora no le sostenían la mirada.'},
 {t:'d', s:'VANCE', bg:'almacen', x:'Porque resulta, señores, que el juzgado de Blackwater también tiene preguntas para el comisario. Sobre cierta tarde de hace seis años. Sobre una calle concurrida. Sobre una niña.'},
 {t:'n', bg:'almacen', x:'El silencio que siguió fue del tamaño de un ataúd. Woody no parpadeó. Se negó, por dentro, a darle a ese hombre el regalo de verlo respirar distinto.'},
 {t:'d', s:'WOODY', bg:'almacen', x:'Ese asunto lo revisó un juez.'},
 {t:'d', s:'VANCE', bg:'almacen', x:'Los jueces se revisan. Los pueblos también. Usted eligió, comisario: o el acta y el escándalo y la niña, o su renuncia y su caballo y su silencio. El pueblo ya eligió. Mire a su pueblo.'},
 {t:'n', bg:'almacen', x:'Woody los miró. Hombres a los que les había encontrado esposas perdidas, caballos robados, hijos en el río. Ninguno levantó la vista. Entendió entonces lo que Vance había comprado en seis meses: no a los hombres. La comodidad de los hombres, que es más barata y se rompe menos.'},
 {t:'d', s:'DOBBS', bg:'almacen', x:'La estrella.'},
 {t:'n', bg:'almacen', x:'Woody se la desprendió despacio. Era de latón, del lado del corazón, y tenía una abolladura vieja que no era de bala: era de la vez que su padre cayó del andamio del granero y la estrella, en el bolsillo, recibió el golpe por él. La sostuvo un segundo entre los dedos, como quien saluda. Y cerró el puño.'},
 {t:'d', s:'WOODY', bg:'almacen', x:'Esta no es del pueblo. Era de mi padre. El pueblo me dio el cargo. La estrella me la quedo yo, para acordarme de lo que el pueblo hace cuando llueve.'},
 {t:'n', bg:'establo', x:'Salió a la lluvia sin correr. Tiro al Blanco lo esperaba bajo el alero del establo con la paciencia de los que no firman actas. Woody montó mojado, sin maleta: todo lo suyo cabía en los bolsillos, en la funda vacía y en el lazo.'},
 {t:'n', bg:'camino', x:'Por la ventana, Vance volvía a sus cajas con la calma de un hombre que barre después de una fiesta.'},
 {t:'n', bg:'camino', x:'Y Woody, picando espuelas, ya sabía lo que ahora sabe: que la ley se va de un pueblo mucho antes que los ladrones.'},
 {t:'d', s:'DIARIO', bg:'camino', x:'Hoy aprendí que una estrella pesa lo mismo cuando brilla que cuando te la arrancan. Lo que cambia es el pecho.'}
];

const PERSONAJES = [
 {n:'James “Woody” Pride', tag:'AU · PROTAGONISTA', d:'El comisario de la funda vacía. Lazo, ingenio y un juramento de seis años. Lealtad feroz, humor seco, habla solo. En la banda de Dutch será, junto a Hosea, la voz de la razón — y el único que cuenta los días de Micah.'},
 {n:'Arthur Morgan', tag:'CANON', d:'El brazo derecho de Dutch y el mejor hombre de la banda, aunque ninguno de los dos lo diga en voz alta. La amistad que define a Woody: una lealtad absoluta entre adultos que se eligen. “Si quisiera matarte ya te lo habría dicho, que yo aviso.”'},
 {n:'Dutch van der Linde', tag:'CANON', d:'El profeta con planes y Tahití en los labios. Woody lo respeta sin idolatrarlo, y Dutch lo nota. Cada capítulo, un milímetro menos de fe.'},
 {n:'Micah Bell', tag:'CANON', d:'La serpiente en la bota. Llegó a la banda pocos meses antes de Blackwater; Woody es el único que anota fechas. En el Capítulo 1, Woody no oye su frase: oye la risa, y siente un frío chiquito subiendo por la espuela.'},
 {n:'Hosea Matthews', tag:'CANON', d:'La otra voz de la razón, paternal y astuto. El único que entiende el método de Woody sin necesidad de explicárselo. Su ausencia futura dejará al comisario solo con la verdad.'},
 {n:'Jessie Pride', tag:'AU', d:'La hermana pelirroja: tiradora fina, cartas explosivas, un rancho lejos del mapa donde ya pasó un hombre de traje gris preguntando por su hermano. Banca a la banda desde la distancia.'},
 {n:'Silas Vance', tag:'AU · ANTAGONISTA', d:'El Pinkerton del chaleco limpio: estafador y traficante de armas encubierto, autor del destierro de Woody… y del aviso que pudrió el ferry de Blackwater. Dos tragedias, una firma.'}
];

const MAPA = [
 {l:'Mercer’s Crossing', f:'22 ABR 1899', c:'CAP. 1 · ESC. I', d:'El destierro bajo la lluvia: la estrella sale del pecho y entra al bolsillo.'},
 {l:'Blackwater', f:'MAY 1899', c:'CANON', d:'El ferry fallido de Dutch; el dinero escondido; Vance tomando notas.'},
 {l:'Colter', f:'MAY 1899', c:'CANON', d:'El invierno que congeló la invencibilidad de la banda.'},
 {l:'Valentine', f:'JUN 1899', c:'CAP. 1 · ESC. II–IV', d:'Smithfield’s Saloon: Woody salva el momento de Arthur. Dutch recluta.'},
 {l:'Horseshoe Overlook', f:'JUN–JUL 1899', c:'CAPS. 2–4', d:'El campamento que todavía parecía familia; la primera chispa con Micah.'},
 {l:'Clemens Point', f:'AGO–SEP 1899', c:'CAP. 5', d:'El lodazal Gray–Braithwaite; el rescate de Jack; la mansión arde.'},
 {l:'Saint Denis', f:'SEP–OCT 1899', c:'CAPS. 6–8', d:'Tranvías y gas; Vance reaparece; el banco revienta mal; Hosea cae.'},
 {l:'Guarma', f:'OCT 1899', c:'CAP. 9', d:'La isla: el lazo se pierde en el naufragio y renace con crin.'},
 {l:'Lakay → Beaver Hollow', f:'OCT–NOV 1899', c:'CAPS. 10–15', d:'El campamento-cárcel; la serpiente nombrada; el último rodeo de Arthur.'},
 {l:'Beecher’s Hope', f:'1907', c:'CAP. 16', d:'El rancho de John; Jack lee el diario; la estrella vuelve al pecho.'}
];

const OBJETOS = [
 {n:'La estrella de latón', tag:'OBJETO · ARCO COMPLETO', d:'De su padre, con la abolladura del andamio. Desprendida el 22 de abril de 1899; bolsillo del chaleco durante toda la novela; pecho, por primera vez en ocho años, en 1907. Impacto, no posesión.'},
 {n:'El lazo', tag:'OBJETO · RENACE', d:'Su única arma. Entero hasta Guarma; perdido en el naufragio; retejado con crin de Tiro al Blanco, con cicatriz visible. Un lazo nuevo no es el mismo lazo: es el mismo hombre, remendado.'},
 {n:'El sombrero', tag:'OBJETO · IDENTIDAD', d:'Perdido en el lodo del Capítulo 7, cuando el campamento le da la espalda; devuelto limpio por Arthur en el 8. Un hombre sin sombrero es un hombre a medias.'},
 {n:'El diario de comisario', tag:'OBJETO · MEMORIA', d:'Mojado en Guarma (páginas perdidas), robado en el 10, quemado a medias en el 14. En 1907 lo lee Jack: es esta novela.'},
 {n:'La funda vacía', tag:'OBJETO · PENITENCIA', d:'Sellada desde el Juramento. Nunca carga fierros; jamás sostiene uno. En el epílogo la desabrocha y la cuelga en el poste: la penitencia terminada.'}
];

const CAPITULOS = [
 {n:'01', t:'El hombre de la funda vacía', e:'LEER EN /capitulos'},
 {n:'02', t:'Fuego de campamento', e:'EN ESCRITURA'},
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
