// ============================================================
//  BATERÍA DE PREGUNTAS — CineTrivia
// 
//
//  Campos:
//    id        → número único (1, 2, 3...)
//    pregunta  → texto de la pregunta
//    opciones  → array de 4 respuestas
//    correcta  → índice (0-3) de la respuesta correcta
//    categoria → etiqueta visible 
//    dificultad → "facil" | "media" | "dificil"
// ============================================================

const PREGUNTAS = [
  {
    id: 1,
    pregunta: "¿En qué año se estrenó 'The Godfather' de Francis Ford Coppola?",
    opciones: ["1969", "1972", "1974", "1976"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 2,
    pregunta: "¿Quién dirigió 'Pulp Fiction' (1994)?",
    opciones: ["Martin Scorsese", "David Fincher", "Quentin Tarantino", "Joel Coen"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "facil"
  },
  {
    id: 3,
    pregunta: "¿Qué película ganó la Palma de Oro en el año 2026?",
    opciones: ["Hope", "Minotaur", "Fjord", "Fatherland"], /* [0] [1] [2] [3] */
    correcta: 2,
    categoria: "Premios",
    dificultad: "media"
  },
  {
    id: 4,
    pregunta: "¿En qué ciudad transcurre la mayor parte de 'Midnight in Paris' (2011)?",
    opciones: ["Londres", "Roma", "Berlín", "París"],
    correcta: 3,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 5,
    pregunta: "¿Quién interpreta a Hannibal Lecter en 'The Silence of the Lambs' (1991)?",
    opciones: ["Gary Oldman", "Anthony Hopkins", "Daniel Day-Lewis", "Jeremy Irons"],
    correcta: 1,
    categoria: "Actores",
    dificultad: "facil"
  },
  {
    id: 6,
    pregunta: "¿Qué director rodó 'Dune' (2021)?",
    opciones: ["Christopher Nolan", "Denis Villeneuve", "Ridley Scott", "James Cameron"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "facil"
  },
  {
    id: 7,
    pregunta: "¿Cuántas estatuillas ganó 'Ben-Hur' (1959) en los Óscar?",
    opciones: ["9", "10", "11", "12"],
    correcta: 2,
    categoria: "Premios",
    dificultad: "media"
  },
  {
    id: 8,
    pregunta: "¿Quién compuso la banda sonora de 'Star Wars'?",
    opciones: ["Hans Zimmer", "Ennio Morricone", "John Williams", "Bernard Herrmann"],
    correcta: 2,
    categoria: "Bandas Sonoras",
    dificultad: "facil"
  },
  {
    id: 9,
    pregunta: "¿Cuál de las siguientes películas está dirigida por Paul Verhoeven?",
    opciones: ["RoboCop", "Platoon", "Terminator 2: Judgement Day", "Predator"],
    correcta: 0,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 10,
    pregunta: "¿Qué actriz protagoniza 'Black Swan' (2010)?",
    opciones: ["Cate Blanchett", "Natalie Portman", "Kate Winslet", "Keira Knightley"],
    correcta: 1,
    categoria: "Actores",
    dificultad: "facil"
  },
  {
    id: 11,
    pregunta: "¿Cuál es la primera película de la saga 'The Lord of the Rings' dirigida por Peter Jackson?",
    opciones: ["The Two Towers", "The Return of the King", "The Fellowship of the Ring", "The Hobbit"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 12,
    pregunta: "¿En qué país se rodó 'Roma' (2018) de Alfonso Cuarón?",
    opciones: ["Italia", "España", "México", "Colombia"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 13,
    pregunta: "¿Qué película de Hayao Miyazaki ganó el Óscar a mejor película de animación en 2003?",
    opciones: ["My Neighbor Totoro", "Spirited Away", "Princess Mononoke", "Howl's Moving Castle"],
    correcta: 1,
    categoria: "Premios",
    dificultad: "facil"
  },
  {
    id: 14,
    pregunta: "¿Quién dirigió 'Fight Club' (1999)?",
    opciones: ["Darren Aronofsky", "David Fincher", "Bryan Singer", "Alex Proyas"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "facil"
  },
  {
    id: 15,
    pregunta: "¿Qué personaje dice 'Houston, tenemos un problema' en 'Apolo 13' (1995)?",
    opciones: ["Buzz Aldrin", "Neil Armstrong", "Jim Lovell", "Jack Swigert"],
    correcta: 2,
    categoria: "Frases",
    dificultad: "dificil"
  },
  {
    id: 16,
    pregunta: "¿Quién protagoniza 'Cruising' (1980)?",
    opciones: ["Jim Carrey", "Roy Scheider", "Al Pacino", "Kurt Russell"],
    correcta: 2,
    categoria: "Actores",
    dificultad: "media"
  },
  {
    id: 17,
    pregunta: "¿Cuántos largometrajes hizo Andrei Tarkovsky?",
    opciones: ["7", "8", "9", "10"],
    correcta: 0,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 18,
    pregunta: "¿Quién dirigió 'La Notte' (1961)?",
    opciones: ["Federico Fellini", "Lina Wertmüller", "Michelangelo Antonioni", "Roberto Rossellini"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 19,
    pregunta: "¿En cuántas películas trabajaron juntos Klaus Kinski y Werner Herzog?",
    opciones: ["3", "4", "5", "6"],
    correcta: 2,
    categoria: "Actores",
    dificultad: "media"
  },
  {
    id: 20,
    pregunta: "¿En qué película se le cae la fachada de una casa a Buster Keaton?",
    opciones: ["The General (1926)", "Steamboat Bill, Jr. (1928)", "The Cameraman (1928)", "Seven Chances (1925)"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 21,
    pregunta: "¿Quién dirigió 'El gabinete del doctor Caligari' (1920)?",
    opciones: ["Robert Wiene", "F.W. Murnau", "Henrik Galeen", "G.W. Pabst"],
    correcta: 0,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 22,
    pregunta: "¿Con qué película ganó Luis Buñuel su único Óscar?",
    opciones: ["Viridiana", "El discreto encanto de la burguesía", "Él", "Los olvidados"],
    correcta: 1,
    categoria: "Premios",
    dificultad: "media"
  },
  {
    id: 23,
    pregunta: "¿Quién de estos directores es de nacionalidad taiwanesa?",
    opciones: ["Ann Hui", "Edward Yang", "Johnnie To", "Timo Tjahjanto"],
    correcta: 1,
    categoria: "Países",
    dificultad: "media"
  },
  {
    id: 24,
    pregunta: "¿En qué año se estrenó la adaptación de Francis Ford Coppola de Drácula, 'Bam Stoker's Dracula'?",
    opciones: ["1990", "1994", "1992", "1989"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 25,
    pregunta: "¿En cuál de estas películas de Hong Sang-soo no actúa Isabelle Huppert?",
    opciones: ["In Another Country", "Claire's Camera", "The Day She Returns", "A Traveler's Needs"],
    correcta: 2,
    categoria: "Actores",
    dificultad: "media"
  },
  {
    id: 26,
    pregunta: "¿Qué película ganó la Palma de Oro en 1976?",
    opciones: ["Taxi Driver", "Cría cuervos", "The Fifth Seal", "The Killing of a Chinese Bookie"],
    correcta: 0,
    categoria: "Premios",
    dificultad: "media"
  },
  {
    id: 27,
    pregunta: "¿Cuál fue la pelícua debut de Carl Theodor Dreyer?",
    opciones: ["Master of the House", "The Parson's Widow", "Mikaël", "The President"],
    correcta: 3,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 28,
    pregunta: "¿Qué director firmó 'Pickpocket' (1959)?",
    opciones: ["Jacques Tati", "Alain Resnais", "Robert Bresson", "Louis Malle"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 29,
    pregunta: "¿Qué película protagoniza Harold Lloyd colgado del reloj de un rascacielos?",
    opciones: ["The Freshman (1925)", "Safety Last! (1923)", "Girl Shy (1924)", "Why Worry? (1923)"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 30,
    pregunta: "¿Quién escribió el guion original de 'Chinatown' (1974)?",
    opciones: ["Robert Towne", "Roman Polanski", "Robert Evans", "Rudy Wurlitzer"],
    correcta: 0,
    categoria: "Películas",
    dificultad: "dificil"
  },
  {
    id: 31,
    pregunta: "¿Cómo se llama el concepto estético de Ozu que describe planos fijos a ras de suelo?",
    opciones: ["Ma", "Wabi-sabi", "Tatami shot", "Mono no aware"],
    correcta: 2,
    categoria: "Teoría del Cine",
    dificultad: "dificil"
  },
  {
    id: 32,
    pregunta: "¿Qué película de Kurosawa está basada en 'El rey Lear' de Shakespeare?",
    opciones: ["Kagemusha (1980)", "Ran (1985)", "Throne of Blood (1957)", "The Hidden Fortress (1958)"],
    correcta: 1,
    categoria: "Akira Kurosawa",
    dificultad: "media"
  },
  {
    id: 33,
    pregunta: "¿En qué país nació Glauber Rocha?",
    opciones: ["Argentina", "Paraguay", "Brasil", "Cuba"],
    correcta: 2,
    categoria: "Países",
    dificultad: "media"
  },
  {
    id: 34,
    pregunta: "¿En qué provincia argentina transcurre 'La ciénaga' (2001) de Lucrecia Martel?",
    opciones: ["Córdoba", "Tucumán", "Salta", "Jujuy"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 35,
    pregunta: "¿Qué premio ganó 'Happy as Lazzaro' (2018) de Alice Rohrwacher en el Festival de Cannes?",
    opciones: ["Palma de Oro", "Gran Premio del Jurado", "Premio a mejor director", "Premio a mejor guion"],
    correcta: 3,
    categoria: "Premios",
    dificultad: "dificil"
  },
  {
    id: 36,
    pregunta: "¿En qué película interpreta Matt Damon a un genio matemático que trabaja como conserje?",
    opciones: ["The Talented Mr. Ripley (1999)", "Good Will Hunting (1997)", "Rounders (1998)", "Courage Under Fire (1996)"],
    correcta: 1,
    categoria: "Actores",
    dificultad: "facil"
  },
  {
    id: 37,
    pregunta: "¿Qué película de John Carpenter popularizó el slasher como género en el cine moderno?",
    opciones: ["The Fog (1980)", "The Thing (1982)", "Halloween (1978)", "Christine (1983)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 38,
    pregunta: "¿En qué película danesa interpreta Mads Mikkelsen a un maestro de pueblo acusado falsamente de abusos?",
    opciones: ["The Celebration (1998)", "The Hunt (2012)", "Riders of Justice (2020)", "Adam's Apples (2005)"],
    correcta: 1,
    categoria: "Actores",
    dificultad: "facil"
  },
  {
    id: 39,
    pregunta: "¿Qué película de Nicolas Winding Refn protagoniza Ryan Gosling como conductor silencioso?",
    opciones: ["Bronson (2008)", "Valhalla Rising (2009)", "Only God Forgives (2013)", "Drive (2011)"],
    correcta: 3,
    categoria: "Actores",
    dificultad: "facil"
  },
  {
    id: 40,
    pregunta: "¿Qué actriz ha trabajado más veces con Almodóvar a lo largo de su carrera?",
    opciones: ["Penélope Cruz", "Carmen Maura", "Chus Lampreave", "Rossy de Palma"],
    correcta: 2,
    categoria: "Actores",
    dificultad: "media"
  },
  {
    id: 41,
    pregunta: "¿Qué película de Almodóvar ganó el Óscar a mejor película de habla no inglesa?",
    opciones: ["Carne trémula (1997)", "La flor de mi secreto (1995)", "Todo sobre mi madre (1999)", "Hable con ella (2002)"],
    correcta: 2,
    categoria: "Premios",
    dificultad: "facil"
  },
  {
    id: 42,
    pregunta: "¿Cuántos Goyas ganó 'La sociedad de la nieve' (2023) de J.A. Bayona?",
    opciones: ["9", "10", "11", "12"],
    correcta: 3,
    categoria: "Premios",
    dificultad: "dificil"
  },
  {
    id: 43,
    pregunta: "¿Qué galardón otorga la Berlinale como máximo premio a la mejor película?",
    opciones: ["León de Oro", "Espiga de Oro", "Oso de Oro", "Leopardo de Oro"],
    correcta: 2,
    categoria: "Premios",
    dificultad: "media"
  },
  {
    id: 44,
    pregunta: "¿Qué película de Abbas Kiarostami no forma parte de su trilogía de Koker?",
    opciones: ["Life, and Nothing More...", "Where Is the Friend's House?", "Through the Olive Trees", "Taste of Cherry"],
    correcta: 3,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 45,
    pregunta: "¿Qué premio ganó 'Retrato de una mujer en llamas' (2019) de Céline Sciamma en el Festival de Cannes?",
    opciones: ["Palma de Oro", "Gran Premio del Jurado", "Premio al mejor guion", "Premio del Jurado"],
    correcta: 2,
    categoria: "Premios",
    dificultad: "dificil"
  },
  {
    id: 46,
    pregunta: "¿Qué fotógrafo y cineasta fue pareja sentimental y artística de Agnès Varda durante décadas?",
    opciones: ["Chris Marker", "Alain Resnais", "Jacques Demy", "Jean-Luc Godard"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 47,
    pregunta: "¿Qué película italiana de Vittorio De Sica es considerada obra cumbre del neorrealismo?",
    opciones: ["Rome, Open City (1945)", "La Terra Trema (1948)", "Bicycle Thieves (1948)", "Paisan (1946)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 48,
    pregunta: "¿En qué año firmaron Lars von Trier y Thomas Vinterberg el manifiesto Dogma 95?",
    opciones: ["1993", "1994", "1995", "1996"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "facil"
  },
  {
    id: 49,
    pregunta: "¿Qué revista fue el semillero teórico de los directores de la Nouvelle Vague antes de pasar a la realización?",
    opciones: ["Positif", "Cahiers du Cinéma", "Sight & Sound", "La Revue du Cinéma"],
    correcta: 1,
    categoria: "Nouvelle Vague",
    dificultad: "media"
  },
  {
    id: 50,
    pregunta: "¿Cuál es el primer filme de la trilogía de los colores de Kieslowski?",
    opciones: ["Blanco", "Rojo", "Azul", "Verde"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 51,
    pregunta: "¿En qué película de Hitchcock un hombre con la pierna rota espía a sus vecinos desde la ventana?",
    opciones: ["Vertigo (1958)", "Rear Window (1954)", "The Birds (1963)", "Psycho (1960)"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 52,
    pregunta: "¿Qué técnica narrativa innovadora emplea Orson Welles en 'Citizen Kane' para contar la historia de Kane?",
    opciones: ["Voz en off omnisciente", "Flashbacks desde múltiples narradores", "Narrador no fiable único", "Estructura circular cerrada"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "dificil"
  },
  {
    id: 53,
    pregunta: "¿Cuántos largometrajes de ficción ha dirigido Víctor Erice?",
    opciones: ["2", "3", "4", "5"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 54,
    pregunta: "¿En qué película de Takeshi Kitano un yakuza ciego viaja por Japón sembrando violencia?",
    opciones: ["Hana-bi (1997)", "Sonatine (1993)", "Zatoichi (2003)", "Brother (2000)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 55,
    pregunta: "¿Qué director filipino dirigió 'Kisapmata' (1981)?",
    opciones: ["Lav Diaz", "Khavn", "Lino Brocka", "Mike de Leon"],
    correcta: 3,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 56,
    pregunta: "¿Cuál fue la primera película de Terrence Malick como director?",
    opciones: ["Days of Heaven", "Badlands", "The Thin Red Line", "The Tree of Life"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "media"
  },
    {
    id: 57,
    pregunta: "¿Qué dos actrices protagonizan 'Persona' (1966) de Ingmar Bergman?",
    opciones: [
      "Ingrid Thulin y Harriet Andersson",
      "Bibi Andersson y Liv Ullmann",
      "Liv Ullmann y Ingrid Thulin",
      "Harriet Andersson y Bibi Andersson"
    ],
    correcta: 1,
    categoria: "Actores",
    dificultad: "dificil"
  },
  {
    id: 58,
    pregunta: "¿En qué consiste el efecto Kuleshov?",
    opciones: [
      "El espectador interpreta un plano neutro de un actor según la imagen que lo precede",
      "La cámara en movimiento genera más tensión que la cámara fija",
      "Un sonido fuera de campo modifica la percepción del plano",
      "El montaje paralelo crea la ilusión de simultaneidad"
    ],
    correcta: 0,
    categoria: "Teoría del Cine",
    dificultad: "dificil"
  },
  {
    id: 59,
    pregunta: "¿En qué consiste el 'efecto Rashomon' en narrativa cinematográfica?",
    opciones: [
      "Un final ambiguo que admite dos lecturas opuestas",
      "Un mismo hecho relatado por varios personajes con versiones contradictorias",
      "La repetición del mismo plano con distinto significado según el contexto",
      "Un narrador que miente deliberadamente al espectador"
    ],
    correcta: 1,
    categoria: "Teoría del Cine",
    dificultad: "dificil"
  },
  {
    id: 60,
    pregunta: "¿En qué película aparece la leyenda de la NBA Kareem Abdul-Jabbar en un cameo?",
    opciones: [
      "Rocky II (1979)",
      "Airplane! (1980)",
      "Trading Places (1983)",
      "Tootsie (1982)"
    ],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 61,
    pregunta: "¿Qué actor ponía la voz a Darth Vader en la versión original de la saga Star Wars?",
    opciones: ["Frank Oz", "James Earl Jones", "David Prowse", "Peter Mayhew"],
    correcta: 1,
    categoria: "Actores",
    dificultad: "facil"
  },
  {
    id: 62,
    pregunta: "¿Con qué director soviético mantuvo Andrei Tarkovsky una profunda amistad y admiración mutua?",
    opciones: ["Elem Klimov", "Sergei Parajanov", "Aleksandr Sokurov", "Sergei Bondarchuk"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 63,
    pregunta: "¿Qué actor interpreta al inspector Clouseau en 'The Pink Panther' (1963)?",
    opciones: ["Cary Grant", "Peter Sellers", "David Niven", "Robert Wagner"],
    correcta: 1,
    categoria: "Actores",
    dificultad: "media"
  },
  {
    id: 64,
    pregunta: "¿Con qué película debutó como director Jean-Luc Godard en el largometraje?",
    opciones: ["Vivre Sa Vie", "Breathless", "Pierrot le Fou", "Masculin Féminin"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 65,
    pregunta: "¿En qué película de Fellini un periodista sigue la vida frívola de la alta sociedad romana?",
    opciones: ["Amarcord (1973)", "8½ (1963)", "La Dolce Vita (1960)", "I Vitelloni (1953)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 66,
    pregunta: "¿En qué película de Kubrick un pianista adinerado descubre una sociedad secreta?",
    opciones: ["Barry Lyndon (1975)", "A Clockwork Orange (1971)", "Eyes Wide Shut (1999)", "The Shining (1980)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 67,
    pregunta: "¿Qué año ambienta Wong Kar-wai en 'In the Mood for Love' (2000)?",
    opciones: ["1960", "1962", "1966", "1968"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "dificil"
  },
  {
    id: 68,
    pregunta: "¿Qué película de animación japonesa de 1988 narra la historia de dos huérfanos durante la Segunda Guerra Mundial?",
    opciones: ["Akira (1988)", "Nausicaä of the Valley of the Wind (1984)", "Grave of the Fireflies (1988)", "Castle in the Sky (1986)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 69,
    pregunta: "¿Con qué película debutó Rainer Werner Fassbinder en el largometraje?",
    opciones: ["Love Is Colder Than Death", "Katzelmacher", "Gods of the Plague", "The Merchant of Four Seasons"],
    correcta: 0,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 70,
    pregunta: "¿Qué película de Francis Ford Coppola sobre la guerra de Vietnam ganó la Palma de Oro en Cannes?",
    opciones: ["The Godfather II (1974)", "The Conversation (1974)", "Apocalypse Now (1979)", "The Misfits (1961)"],
    correcta: 2,
    categoria: "Premios",
    dificultad: "facil"
  },
  {
    id: 71,
    pregunta: "¿Qué película ganó la primera Palma de Oro de la historia del Festival de Cannes?",
    opciones: ["Umberto D.", "Marty", "La Strada", "The Umbrellas of Cherbourg"],
    correcta: 1,
    categoria: "Premios",
    dificultad: "dificil"
  },
  {
    id: 72,
    pregunta: "¿En qué ciudad transcurre 'Chungking Express' (1994) de Wong Kar-wai?",
    opciones: ["Shanghái", "Macao", "Taipei", "Hong Kong"],
    correcta: 3,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 73,
    pregunta: "¿Qué película de Kubrick está narrada en su totalidad mediante voz en off sin apenas diálogos?",
    opciones: ["Paths of Glory (1957)", "Lolita (1962)", "Barry Lyndon (1975)", "2001: A Space Odyssey (1968)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 74,
    pregunta: "¿Quién dirigió 'Taxi Driver' (1976), uno de los títulos clave del Nuevo Hollywood?",
    opciones: ["Brian De Palma", "Martin Scorsese", "Sidney Lumet", "Alan J. Pakula"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "facil"
  },
  {
    id: 75,
    pregunta: "¿Qué película de animación de Satoshi Kon muestra la confusión entre sueño y realidad a través de una máquina que permite entrar en los sueños ajenos?",
    opciones: ["Paprika (2006)", "Millennium Actress (2001)", "Tokyo Godfathers (2003)", "Perfect Blue (1997)"],
    correcta: 0,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 76,
    pregunta: "¿En qué festival se entrega el León de Oro como máximo galardón?",
    opciones: ["Cannes", "Berlín", "San Sebastián", "Venecia"],
    correcta: 3,
    categoria: "Premios",
    dificultad: "facil"
  },
    {
    id: 77,
    pregunta: "¿Qué película ganó el León de Oro en Venecia en 2022?",
    opciones: ["Bones and All", "The Whale", "All the Beauty and the Bloodshed", "Tár"],
    correcta: 2,
    categoria: "Premios",
    dificultad: "dificil"
  },
  {
    id: 78,
    pregunta: "¿Cuántos Osos de Oro ha ganado Michael Haneke a lo largo de su carrera?",
    opciones: ["1", "2", "3", "4"],
    correcta: 1,
    categoria: "Premios",
    dificultad: "dificil"
  },
  {
    id: 79,
    pregunta: "¿Qué documental de Agnès Varda de 2017 la muestra a ella misma recorriendo el mundo con el fotógrafo JR?",
    opciones: ["The Beaches of Agnès (2008)", "Faces Places (2017)", "Daguerréotypes (1975)", "The Gleaners and I (2000)"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
    {
    id: 80,
    pregunta: "¿En qué país rodó Godard la mayor parte de su obra tardía, alejado de la industria francesa?",
    opciones: ["Bélgica", "Italia", "Suiza", "Canadá"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 81,
    pregunta: "¿Quién dirigió 'Strange Days' (1995)?",
    opciones: ["James Cameron", "Tony Scott", "David Fincher", "Kathryn Bigelow"],
    correcta: 3,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 82,
    pregunta: "¿Cómo se llama el personaje recurrente que Jacques Tati interpretó en la mayoría de sus películas?",
    opciones: ["Monsieur Hulot", "Monsieur Verdoux", "Monsieur Lecoq", "Monsieur Baptiste"],
    correcta: 0,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 83,
    pregunta: "¿Qué película de Roberto Rossellini inauguró el neorrealismo italiano?",
    opciones: ["Paisan", "Germany, Year Zero", "Rome, Open City", "The Flowers of St. Francis"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 84,
    pregunta: "¿Con qué trilogía documentó Jia Zhangke las transformaciones de China durante los años 90 y 2000?",
    opciones: ["Trilogía de Shanghái", "Trilogía de Fenyang", "Trilogía del Yangtsé", "Trilogía de Pekín"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 85,
    pregunta: "¿Qué película de Radu Jude recibió el Oso de Oro en la Berlinale 2021?",
    opciones: ["Aferim!", "Do Not Expect Too Much from the End of the World", "Bad Luck Banging or Loony Porn", "Scarred Hearts"],
    correcta: 2,
    categoria: "Premios",
    dificultad: "dificil"
  },
  {
    id: 86,
    pregunta: "¿Qué elemento formal es marca inconfundible del estilo de Ozu y rompe con la gramática clásica de Hollywood?",
    opciones: ["El jump cut", "La cámara en mano", "El plano de transición sin personajes", "El montaje paralelo"],
    correcta: 2,
    categoria: "Teoría del Cine",
    dificultad: "media"
  },
  {
    id: 87,
    pregunta: "¿Qué película de Kurosawa fue el remake que inspiró 'A Fistful of Dollars' de Sergio Leone?",
    opciones: ["Seven Samurai (1954)", "Yojimbo (1961)", "Sanjuro (1962)", "High and Low (1963)"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 88,
    pregunta: "¿Cómo se llama la película de Na Hong-jin en la que un detective investiga una serie de asesinatos en un pueblo de montaña?",
    opciones: ["The Chaser (2008)", "Possessed (2009)", "The Yellow Sea (2010)", "The Wailing (2016)"],
    correcta: 3,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 89,
    pregunta: "¿Cuál de estas películas no forma parte de la trilogía flamenca de Carlos Saura?",
    opciones: ["Deprisa, deprisa", "Carmen", "El amor brujo", "Bodas de sangre"],
    correcta: 0,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 90,
    pregunta: "¿Qué actriz interpreta a Ana, la niña protagonista de 'El espíritu de la colmena' (1973)?",
    opciones: ["Maribel Verdú", "Ángela Molina", "Ana Torrent", "Icíar Bollaín"],
    correcta: 2,
    categoria: "Actores",
    dificultad: "media"
  },
  {
    id: 91,
    pregunta: "¿En qué película de Carlos Reygadas una familia menonita enfrenta una crisis espiritual en las praderas mexicanas?",
    opciones: ["Japón (2002)", "Batalla en el cielo (2005)", "Stellet Licht (2007)", "Post Tenebras Lux (2012)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "dificil"
  },
  {
    id: 92,
    pregunta: "¿Qué película de Alfred Hitchcock es célebre por estar rodada simulando un único plano secuencia continuo?",
    opciones: ["Notorious (1946)", "The Rope (1948)", "Strangers on a Train (1951)", "Vertigo (1958)"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 93,
    pregunta: "¿En qué año rodó Alice Guy-Blaché 'La Fée aux Choux', considerada una de las primeras películas de ficción de la historia?",
    opciones: ["1896", "1898", "1900", "1902"],
    correcta: 0,
    categoria: "Historia del Cine",
    dificultad: "media"
  },
  {
    id: 94,
    pregunta: "¿Qué director surcoreano ganó la Palma de Oro en Cannes 2019?",
    opciones: ["Park Chan-wook", "Hong Sang-soo", "Lee Chang-dong", "Bong Joon-ho"],
    correcta: 3,
    categoria: "Premios",
    dificultad: "facil"
  },
  {
    id: 95,
    pregunta: "¿Qué película de Jia Zhangke retrata la vida en una ciudad china a punto de ser inundada por el embalse de las Tres Gargantas?",
    opciones: ["Platform (2000)", "The World (2004)", "Still Life (2006)", "A Touch of Sin (2013)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 96,
    pregunta: "¿Qué película de Godard mezcla ciencia ficción, filosofía y una pareja en fuga en un París futurista?",
    opciones: ["Vivre Sa Vie (1962)", "Alphaville (1965)", "Week End (1967)", "Pierrot le Fou (1965)"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 97,
    pregunta: "¿Qué monstruo ve Ana en 'El espíritu de la colmena' (1973) y con el que establece un vínculo imaginario?",
    opciones: ["Drácula", "Un fantasma", "Frankenstein", "Un hombre lobo"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 98,
    pregunta: "¿Qué plano secuencia de más de tres minutos abre 'Touch of Evil' (1958) de Orson Welles?",
    opciones: ["Un travelling por las calles de Viena", "Un plano aéreo sobre los tejados de México", "Un travelling siguiendo un coche bomba por la frontera entre México y EE.UU.", "Un plano fijo sobre una multitud en un mercado"],
    correcta: 2,
    categoria: "Teoría del Cine",
    dificultad: "media"
  },
    {
    id: 99,
    pregunta: "¿Qué película de Alex Garland explora la inteligencia artificial a través de un test de Turing en una mansión aislada?",
    opciones: ["Annihilation (2018)", "28 Days Later (2002)", "Ex Machina (2014)", "Men (2022)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 100,
    pregunta: "¿En qué año se fundó The Walt Disney Company?",
    opciones: ["1921", "1923", "1925", "1928"],
    correcta: 1,
    categoria: "Historia del Cine",
    dificultad: "dificil"
  },
  {
    id: 101,
    pregunta: "¿Cuántas veces fue nominado John Wayne al Óscar a mejor actor a lo largo de su carrera?",
    opciones: ["1", "2", "3", "4"],
    correcta: 1,
    categoria: "Premios",
    dificultad: "dificil"
  },
  {
    id: 102,
    pregunta: "¿En qué película de Werner Herzog Klaus Kinski interpreta a un conquistador español que busca El Dorado adentrándose en el Amazonas?",
    opciones: ["Woyzeck (1979)", "Fitzcarraldo (1982)", "Aguirre, the Wrath of God (1972)", "Cobra Verde (1987)"],
    correcta: 2,
    categoria: "Actores",
    dificultad: "facil"
  },
  {
    id: 103,
    pregunta: "¿En qué motel ocurre el célebre asesinato en la ducha de 'Psycho' (1960)?",
    opciones: ["Motel Bates", "Motel Fairvale", "Motel Phoenix", "Motel Crane"],
    correcta: 0,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 104,
    pregunta: "¿Qué actriz protagoniza la escena de la ducha en 'Psycho' (1960) de Hitchcock?",
    opciones: ["Kim Novak", "Grace Kelly", "Janet Leigh", "Tippi Hedren"],
    correcta: 2,
    categoria: "Actores",
    dificultad: "media"
  },
  {
    id: 105,
    pregunta: "¿Qué significa la pastilla roja que Neo toma en 'Matrix' (1999)?",
    opciones: ["Entrar en el sueño eterno", "Conocer la verdad sobre la realidad", "Ganar poderes sobrehumanos", "Conectarse a la red de máquinas"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 106,
    pregunta: "¿Con qué película ganó Steven Spielberg su primer Óscar a mejor director?",
    opciones: ["E.T. (1982)", "Schindler's List (1993)", "Jaws (1975)", "Empire of the Sun (1987)"],
    correcta: 1,
    categoria: "Premios",
    dificultad: "media"
  },
  {
    id: 107,
    pregunta: "¿Qué canción suena en el célebre travelling final de la barra de 'Goodfellas' (1990)?",
    opciones: ["Layla, de Derek and the Dominos", "Gimme Shelter, de The Rolling Stones", "Then He Kissed Me, de The Crystals", "Sunshine of Your Love, de Cream"],
    correcta: 0,
    categoria: "Bandas Sonoras",
    dificultad: "dificil"
  },
  {
    id: 108,
    pregunta: "¿Qué película de Michelangelo Antonioni cierra su trilogía de la incomunicación?",
    opciones: ["Blow-Up (1966)", "L'Eclisse (1962)", "The Red Desert (1964)", "Zabriskie Point (1970)"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "dificil"
  },
  {
    id: 109,
    pregunta: "¿En qué película de Tarkovsky un escritor, un científico y un guía atraviesan una zona prohibida en busca de una habitación que concede deseos?",
    opciones: ["Mirror (1975)", "Solaris (1972)", "Stalker (1979)", "Nostalgia (1983)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 110,
    pregunta: "¿Cómo se llama la famosa trilogía de Satyajit Ray?",
    opciones: ["Trilogía de Calcuta", "Trilogía de Apu", "Trilogía de Bengala", "Trilogía de Pather"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 111,
    pregunta: "¿En qué película muda de Chaplin un vagabundo cuida a una niña ciega que cree que él es un millonario?",
    opciones: ["The Kid (1921)", "The Gold Rush (1925)", "City Lights (1931)", "Modern Times (1936)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 112,
    pregunta: "¿Qué película es la primera adaptación cinematográfica no oficial de Drácula?",
    opciones: ["The Golem (1920)", "Nosferatu (1922)", "The Gabinet of Dr. Caligari (1920)", "Faust (1926)"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 113,
    pregunta: "¿Cuál es el rasgo visual más característico del expresionismo alemán en el cine?",
    opciones: ["El uso de luz natural y localizaciones reales", "Las sombras distorsionadas y decorados angulares que expresan estados mentales", "La cámara en mano y el montaje veloz", "Los planos largos y la ausencia de música"],
    correcta: 1,
    categoria: "Historia del Cine",
    dificultad: "media"
  },
  {
    id: 114,
    pregunta: "¿Qué cineasta francés no pertenece al movimiento impresionista francés de los años 20?",
    opciones: ["Jean Renoir", "Louis Delluc", "Marcel L'Herbier", "Abel Gance"],
    correcta: 0,
    categoria: "Historia del Cine",
    dificultad: "dificil"
  },
  {
    id: 115,
    pregunta: "¿Qué película de Eisenstein recrea el motín de marineros rusos en 1905 y contiene la célebre escena de la escalinata de Odesa?",
    opciones: ["Octubre (1928)", "Strike (1925)", "Battleship Potemkin (1925)", "Alexander Nevsky (1938)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 116,
    pregunta: "¿En qué consiste el montaje de atracciones teorizado por Eisenstein?",
    opciones: ["Unir planos por similitud visual para crear fluidez", "Chocar planos con contenido opuesto para generar una idea nueva en el espectador", "Alternar planos de acción simultánea en distintos espacios", "Ralentizar el montaje para potenciar el lirismo de la imagen"],
    correcta: 1,
    categoria: "Teoría del Cine",
    dificultad: "dificil"
  },
  {
    id: 117,
    pregunta: "¿Con qué película Billy Wilder ganó el Óscar a mejor director y mejor película?",
    opciones: ["Some Like It Hot (1959)", "The Apartament (1960)", "Sunset Boulevard (1950)", "Witness for the Prosecution (1957)"],
    correcta: 1,
    categoria: "Premios",
    dificultad: "media"
  },
  {
    id: 118,
    pregunta: "¿Qué película monumental de Abel Gance utilizó por primera vez una pantalla triple para proyectar imágenes simultáneas?",
    opciones: ["J'accuse (1919)", "La Roue (1923)", "Napoleon (1927)", "Beethoven (1936)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 119,
    pregunta: "¿Qué película de D.W. Griffith, técnicamente innovadora pero racialmente repudiable, marcó un hito en la historia del cine?",
    opciones: ["Intolerance (1916)", "The Birth of a Nation (1915)", "Broken Blossoms (1919)", "A Corner in a Wheat (1909)"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 120,
    pregunta: "¿Con qué película de Kenji Mizoguchi dos mujeres fantasma se vengan de los hombres que las abandonaron?",
    opciones: ["Sansho the Bailiff (1954)", "Ugetsu (1953)", "The Life of Oharu (1952)", "The Crucified Lovers (1954)"],
    correcta: 1,
    categoria: "Kenji Mizoguchi",
    dificultad: "media"
  },
   {
    id: 121,
    pregunta: "¿En cuántas películas de Ingmar Bergman trabajó el director de fotografía Sven Nykvist?",
    opciones: ["12", "16", "20", "24"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 122,
    pregunta: "¿A qué juego desafía la Muerte al caballero Antonius Block en 'El séptimo sello' (1957)?",
    opciones: ["Dominó", "Cartas", "Backgammon", "Ajedrez"],
    correcta: 3,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 123,
    pregunta: "¿Qué película de John Carpenter está ambientada en una prisión de máxima seguridad en Manhattan?",
    opciones: ["Christine (1983)", "In the Mouth of Madness (1994)", "Escape from New York (1981)", "Vampires (1998)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 124,
    pregunta: "¿Con qué película debutó William Friedkin en el Óscar ganando el premio a mejor director?",
    opciones: ["The French Connection (1971)", "The Exorcist (1973)", "Sorcerer (1977)", "ToLive and Die in L.A. (1985)"],
    correcta: 0,
    categoria: "Premios",
    dificultad: "media"
  },
  {
    id: 125,
    pregunta: "¿En qué país transcurre 'The Wages of Fear' (1953) de Henri-Georges Clouzot?",
    opciones: ["México", "Venezuela", "Colombia", "Guatemala"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "dificil"
  },
  {
    id: 126,
    pregunta: "¿A qué movimiento cinematográfico pertenece Éric Rohmer?",
    opciones: ["Dogma 95", "Free Cinema", "Nouvelle Vague", "Cinema Novo"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "facil"
  },
  {
    id: 127,
    pregunta: "¿Qué película de Mario Monicelli inauguró el género de la commedia all'italiana con una banda de ladrones incompetentes?",
    opciones: ["Compañeros (1970)", "The Great War (1959)", "Big Deal on Madonna Street (1958)", "My Friends (1975)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "dificil"
  },
  {
    id: 128,
    pregunta: "¿Qué director francés rodó 'The 400 Blows' (1959), película iniciática de la Nouvelle Vague?",
    opciones: ["Jean-Luc Godard", "Claude Chabrol", "Jacques Rivette", "François Truffaut"],
    correcta: 3,
    categoria: "Directores",
    dificultad: "facil"
  },
  {
    id: 129,
    pregunta: "¿Cuántos años tarda Werner Herzog en rodar 'Fitzcarraldo' (1982) desde el inicio del proyecto?",
    opciones: ["2", "3", "4", "5"],
    correcta: 3,
    categoria: "Películas",
    dificultad: "dificil"
  },
  {
    id: 130,
    pregunta: "¿En qué película de Anders Thomas Jensen no aparece el actor danés Ulrich Thomsen?",
    opciones: ["Election Night (1998)", "Riders of Justice (2020)", "Adam's Apples (2005)", "Flickering Lights (2000)"],
    correcta: 1,
    categoria: "Actores",
    dificultad: "dificil"
  },
  {
    id: 131,
    pregunta: "¿En qué ciudad danesa transcurre la trilogía Pusher de Nicolas Winding Refn?",
    opciones: ["Aarhus", "Odense", "Copenhague", "Aalborg"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 132,
    pregunta: "¿Con qué película se convirtió Ousmane Sembène en el primer largometrajista del África subsahariana?",
    opciones: ["Xala", "Mandabi", "Black Girl", "Ceddo"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 133,
    pregunta: "¿Qué premio ganó 'All We Imagine as Light' (2024) de Payal Kapadia en el Festival de Cannes?",
    opciones: ["Palma de Oro", "Gran Premio del Jurado", "Premio del Jurado", "Premio a mejor directora"],
    correcta: 1,
    categoria: "Premios",
    dificultad: "dificil"
  },
  {
    id: 134,
    pregunta: "¿En qué país es directora de cine Kamila Andini?",
    opciones: ["Malasia", "Filipinas", "Indonesia", "Tailandia"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 135,
    pregunta: "¿Qué película de Alejandro Jodorowsky mezcla el western con el surrealismo y la filosofía oriental?",
    opciones: ["Santa Sangre (1989)", "The Holy Mountain (1973)", "El Topo (1970)", "Fando y Lis (1968)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 136,
    pregunta: "¿Qué director es considerado el cineasta más longevo en haber dirigido una película?",
    opciones: ["Alejandro Jodorowsky", "Claude Chabrol", "Manoel de Oliveira", "King Hu"],
    correcta: 2,
    categoria: "Historia del Cine",
    dificultad: "dificil"
  },
  {
    id: 137,
    pregunta: "¿Quién dirigió 'Fallen Angels' (1995), película rodada en los mismos ambientes nocturnos que 'Chungking Express'?",
    opciones: ["Johnnie To", "Stanley Kwan", "Wong Kar-wai", "Fruit Chan"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "facil"
  },
  {
    id: 138,
    pregunta: "¿Qué actores protagonizan 'Nueve reinas' (2000) de Fabián Bielinsky?",
    opciones: ["Ricardo Darín y Guillermo Francella", "Ricardo Darín y Gastón Pauls", "Leonardo Sbaraglia y Darío Grandinetti", "Héctor Alterio y Federico Luppi"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 139,
    pregunta: "¿En qué ciudad transcurre 'The Stranger' (1967) de Luchino Visconti?",
    opciones: ["Argel", "París", "Marsella", "Tánger"],
    correcta: 0,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 140,
    pregunta: "¿Qué actor interpreta a Rick Blaine en 'Casablanca' (1942)?",
    opciones: ["Gary Cooper", "Cary Grant", "Humphrey Bogart", "James Stewart"],
    correcta: 2,
    categoria: "Actores",
    dificultad: "facil"
  },
  {
    id: 141,
    pregunta: "¿Qué misterio sobre Kane no resuelve la película, 'Citizen Kane', pese a la investigación del periodista?",
    opciones: ["El origen de su fortuna", "El significado de su última palabra, Rosebud", "El nombre de su primer amor", "El paradero de su testamento"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 142,
    pregunta: "¿De qué nacionalidad era el pionero del cine Segundo de Chomón, conocido por sus trucos visuales?",
    opciones: ["Portuguesa", "Italiana", "Francesa", "Española"],
    correcta: 3,
    categoria: "Historia del Cine",
    dificultad: "media"
  },
  {
    id: 143,
    pregunta: "¿Qué western de John Ford narra la historia de un hombre que busca a su sobrina raptada por los comanches durante años?",
    opciones: ["Stagecoach (1939)", "Fort Apache (1948)", "The Searchers (1956)", "The Man Who Shot Liberty Valance (1962)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 144,
    pregunta: "¿En cuántas películas de Alfred Hitchcock actuó James Stewart?",
    opciones: ["2", "3", "4", "5"],
    correcta: 2,
    categoria: "Actores",
    dificultad: "media"
  },
  {
    id: 145,
    pregunta: "¿Qué actriz protagoniza 'Vertigo' (1958) junto a James Stewart?",
    opciones: ["Grace Kelly", "Janet Leigh", "Kim Novak", "Tippi Hedren"],
    correcta: 2,
    categoria: "Actores",
    dificultad: "media"
  },
  {
    id: 146,
    pregunta: "¿En qué se divide la ciudad de Hong Kong en 'Election' (2005) de Johnnie To?",
    opciones: ["Dos bandas rivales de policías corruptos", "Dos facciones de la triada que compiten por el liderazgo", "Dos clanes familiares enfrentados por una herencia", "Dos grupos políticos en vísperas de las elecciones"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 147,
    pregunta: "¿Cuánto dinero costó producir 'Jaws' (1975) de Spielberg?",
    opciones: ["3 millones de dólares", "7 millones de dólares", "12 millones de dólares", "20 millones de dólares"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "dificil"
  },
  {
    id: 148,
    pregunta: "¿Qué giro argumental es marca de la casa de M. Night Shyamalan?",
    opciones: ["El protagonista siempre muere al final", "Un final que recontextualiza todo lo visto anteriormente", "La historia se revela como un sueño", "El villano resulta ser el narrador"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "facil"
  },
  {
    id: 149,
    pregunta: "¿En qué película de Shyamalan un niño ve y habla con personas muertas sin saberlo?",
    opciones: ["Signs (2002)", "Unbreakable (2000)", "The Sixth Sense (1999)", "The Village (2004)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 150,
    pregunta: "¿En qué orden temporal está contada 'Memento' (2000) de Christopher Nolan?",
    opciones: ["Cronológico pero con saltos al futuro", "Lineal con flashbacks puntuales", "Inverso: la historia avanza hacia atrás", "Circular: el final y el principio son el mismo momento"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 151,
    pregunta: "¿Cuántos actores hablan en 'The Draughtsman's Contract' (1982) de Peter Greenaway?",
    opciones: ["El film tiene más de una hora sin diálogo", "Todos los personajes hablan en verso", "Los diálogos son exclusivamente en latín", "Un dibujante realiza doce dibujos de una mansión a cambio de favores sexuales"],
    correcta: 3,
    categoria: "Películas",
    dificultad: "dificil"
  },
  {
    id: 152,
    pregunta: "¿Qué actriz protagonizó la mayoría de las últimas películas de R.W. Fassbinder?",
    opciones: ["Hanna Schygulla", "Ingrid Caven", "Barbara Sukowa", "Margit Carstensen"],
    correcta: 0,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 153,
    pregunta: "¿Con qué actriz francesa rodó Andrzej Żuławski 'Possession' (1981)?",
    opciones: ["Catherine Deneuve", "Isabelle Adjani", "Jeanne Moreau", "Fanny Ardant"],
    correcta: 1,
    categoria: "Actores",
    dificultad: "facil"
  },
  {
    id: 154,
    pregunta: "¿Cuál es la velocidad estándar de proyección del cine en 35mm moderno?",
    opciones: ["18 fotogramas por segundo", "24 fotogramas por segundo", "30 fotogramas por segundo", "48 fotogramas por segundo"],
    correcta: 1,
    categoria: "Teoría del Cine",
    dificultad: "dificil"
  },
  {
    id: 155,
    pregunta: "¿Quién dirigió 'Night of the Living Dead' (1968), película fundadora del cine de zombis moderno?",
    opciones: ["Wes Craven", "Tobe Hooper", "George A. Romero", "John Carpenter"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "facil"
  },
  {
    id: 156,
    pregunta: "¿Qué película de Terrence Malick ganó la Palma de Oro en Cannes en 2011?",
    opciones: ["The New World (2005)", "The Thin Red Line (1998)", "The Tree of Life (2011)", "To the Wonder (2012)"],
    correcta: 2,
    categoria: "Premios",
    dificultad: "media"
  },
  {
    id: 157,
    pregunta: "¿En qué país transcurre 'Uncle Boonmee Who Can Recall His Past Lives' (2010) de Apichatpong Weerasethakul?",
    opciones: ["Camboya", "Vietnam", "Laos", "Tailandia"],
    correcta: 3,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 158,
    pregunta: "¿Qué premio ganó 'Uncle Boonmee Who Can Recall His Past Lives' (2010) en Cannes?",
    opciones: ["Gran Premio del Jurado", "Palma de Oro", "Premio del Jurado", "Premio a mejor director"],
    correcta: 1,
    categoria: "Premios",
    dificultad: "media"
  },
  {
    id: 159,
    pregunta: "¿Qué película de Bi Gan está rodada en su segunda mitad en un único plano secuencia de más de una hora?",
    opciones: ["South (2011)", "Kaili Blues (2015)", "Long Day's Journey Into Night (2018)", "Resurrection (2025)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 160,
    pregunta: "¿Con qué película francesa debutó Alain Delon en el cine?",
    opciones: ["Purple Noon", "Rocco and His Brothers", "When a Woman Meddles", "The Big Risk"],
    correcta: 2,
    categoria: "Actores",
    dificultad: "dificil"
  },
  {
    id: 161,
    pregunta: "¿En qué película de Gaspar Noé la historia transcurre en orden cronológico inverso?",
    opciones: ["Enter the Void (2009)", "Love (2015)", "Irréversible (2002)", "Climax (2018)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 162,
    pregunta: "¿Con qué película ganó Maurice Pialat la Palma de Oro en Cannes en 1987?",
    opciones: ["À nos amours", "Police", "Under the Sun of Satan", "Van Gogh"],
    correcta: 2,
    categoria: "Premios",
    dificultad: "dificil"
  },
  {
    id: 163,
    pregunta: "¿Con qué director estuvo Anna Karina casada y rodó la mayoría de sus mejores películas?",
    opciones: ["François Truffaut", "Jean-Luc Godard", "Jacques Rivette", "Éric Rohmer"],
    correcta: 1,
    categoria: "Actores",
    dificultad: "media"
  },
  {
    id: 164,
    pregunta: "¿Qué actor italiano protagonizó 'Django' (1966) de Sergio Corbucci?",
    opciones: ["Giuliano Gemma", "Franco Nero", "Gian Maria Volonté", "Lee Van Cleef"],
    correcta: 1,
    categoria: "Actores",
    dificultad: "media"
  },
  {
    id: 165,
    pregunta: "¿Qué película de Cristi Puiu ganó el premio 'Un Certain Regard' en el Festival de Cannes?",
    opciones: ["Aurora (2010)", "Sieranevada (2016)", "The Death of Mr. Lazarescu (2005)", "Malmkrog (2020)"],
    correcta: 2,
    categoria: "Premios",
    dificultad: "media"
  },
  {
    id: 166,
    pregunta: "¿Qué película de Nuri Bilge Ceylan ganó la Palma de Oro en Cannes?",
    opciones: ["Once Upon a Time in Anatolia (2011)", "Winter Sleep (2014)", "Three Monkeys (2008)", "The Wild Pear Tree (2018)"],
    correcta: 1,
    categoria: "Premios",
    dificultad: "media"
  },
  {
    id: 167,
    pregunta: "¿Cómo se llama el método de montaje que Dziga Vertov denominó 'intervalo' y que buscaba el impacto visual entre planos?",
    opciones: ["Montaje de atracciones", "Cine-ojo", "Montaje de intervalos", "Montaje intelectual"],
    correcta: 2,
    categoria: "Teoría del Cine",
    dificultad: "dificil"
  },
  {
    id: 168,
    pregunta: "¿Qué película de David Lynch ganó la Palma de Oro en Cannes?",
    opciones: ["The Elephant Man (1980)", "Blue Velvet (1986)", "Wild at Heart (1990)", "Lost Highway (1997)"],
    correcta: 2,
    categoria: "Premios",
    dificultad: "media"
  },
  {
    id: 169,
    pregunta: "¿Qué actriz protagoniza 'Mulholland Drive' (2001) de David Lynch en su papel de actriz aspirante llegada a Hollywood?",
    opciones: ["Laura Dern", "Patricia Arquette", "Naomi Watts", "Isabella Rossellini"],
    correcta: 2,
    categoria: "Actores",
    dificultad: "facil"
  },
  {
    id: 170,
    pregunta: "¿Qué canción suena en la icónica escena del Club Silencio en 'Mulholland Drive' (2001)?",
    opciones: ["In Dreams, de Roy Orbison", "Crying, de Roy Orbison", "Llorando, de Rebekah Del Rio", "Blue Velvet, de Bobby Vinton"],
    correcta: 2,
    categoria: "Bandas Sonoras",
    dificultad: "dificil"
  },
  {
    id: 171,
    pregunta: "¿En cuántas películas de Akira Kurosawa trabajó Toshiro Mifune?",
    opciones: ["10", "14", "16", "18"],
    correcta: 3,
    categoria: "Actores",
    dificultad: "dificil"
  },
  {
    id: 172,
    pregunta: "¿Con qué director japonés trabajó Wakao Ayako en la mayoría de sus películas más celebradas?",
    opciones: ["Yasujiro Ozu", "Mikio Naruse", "Kenji Mizoguchi", "Kon Ichikawa"],
    correcta: 3,
    categoria: "Actores",
    dificultad: "dificil"
  },
  {
    id: 173,
    pregunta: "¿En qué película de Federico Fellini interpreta Marcello Mastroianni a un escritor en crisis creativa que fantasea con sus musas?",
    opciones: ["La Dolce Vita (1960)", "City of Women (1980)", "8½ (1963)", "Amarcord (1973)"],
    correcta: 2,
    categoria: "Actores",
    dificultad: "media"
  },
  {
    id: 174,
    pregunta: "¿Con qué película ganó Clint Eastwood el Óscar a mejor director por primera vez?",
    opciones: ["Bird (1988)", "Unforgiven (1992)", "Million Dollar Baby (2004)", "Mystic River (2003)"],
    correcta: 1,
    categoria: "Premios",
    dificultad: "facil"
  },
  {
    id: 175,
    pregunta: "¿Qué canción interpretan casi todos los personajes de 'Magnolia' (1999) simultáneamente en una escena memorable?",
    opciones: ["Wise Up, de Aimee Mann", "One, de U2", "Over the Hill, de Roy Orbison", "Both Sides Now, de Joni Mitchell"],
    correcta: 0,
    categoria: "Bandas Sonoras",
    dificultad: "dificil"
  },
  {
    id: 176,
    pregunta: "¿A qué movimiento japonés de vanguardia pertenece 'Funeral Parade of Roses' (1969) de Toshio Matsumoto?",
    opciones: ["J-Horror", "Pinku eiga", "Nūberu bāgu", "Shōchiku"],
    correcta: 2,
    categoria: "Historia del Cine",
    dificultad: "dificil"
  },
  {
    id: 177,
    pregunta: "¿Cuál de estas películas no fue un fracaso en taquilla en el momento de su estreno?",
    opciones: ["Alien (1979)", "It's a Wonderful Life (1946)", "The Shining (1980)", "Vertigo (1958)"],
    correcta: 0,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 178,
    pregunta: "¿Cómo se llamaban los hermanos inventores del cinematógrafo?",
    opciones: ["Charles y Émile Lumière", "Auguste y Louis Lumière", "Henri y Georges Lumière", "Paul y Jean Lumière"],
    correcta: 1,
    categoria: "Historia del Cine",
    dificultad: "facil"
  },
  {
    id: 179,
    pregunta: "¿En qué año se realizó la primera adaptación cinematográfica de 'Alicia en el país de las maravillas'?",
    opciones: ["1899", "1903", "1910", "1915"],
    correcta: 1,
    categoria: "Historia del Cine",
    dificultad: "dificil"
  },
  {
    id: 180,
    pregunta: "¿Cuántos Óscar ganó Katharine Hepburn a lo largo de su carrera?",
    opciones: ["2", "3", "4", "5"],
    correcta: 2,
    categoria: "Premios",
    dificultad: "media"
  },
  {
    id: 181,
    pregunta: "¿Cuál de estos guiones no pertenece a Paul Schrader?",
    opciones: ["Taxi Driver (1976)", "Raging Bull (1980)", "The Conversation (1974)", "Obsession (1976)"],
    correcta: 2,
    categoria: "Guionistas",
    dificultad: "dificil"
  },
  {
    id: 182,
    pregunta: "¿Cuál de estos directores no ha adaptado la historia de Juana de Arco?",
    opciones: ["Jacques Rivette", "Robert Bresson", "Otto Preminger", "Aleksandr Sokurov"],
    correcta: 3,
    categoria: "Historia del Cine",
    dificultad: "dificil"
  },
  {
    id: 183,
    pregunta: "¿De qué nacionalidad es el cineasta Šarūnas Bartas?",
    opciones: ["Letona", "Estonia", "Polaca", "Lituana"],
    correcta: 3,
    categoria: "Países",
    dificultad: "dificil"
  },
  {
    id: 184,
    pregunta: "¿Qué actor japonés protagoniza 'Perfect Days' (2023) de Wim Wenders?",
    opciones: ["Tadanobu Asano", "Kōji Yakusho", "Hidetoshi Nishijima", "Masahiro Motoki"],
    correcta: 1,
    categoria: "Actores",
    dificultad: "media"
  },
  {
    id: 185,
    pregunta: "¿Qué concepto teórico desarrolló Vsevolod Pudovkin sobre el poder del montaje para construir el significado de un plano?",
    opciones: ["Montaje de atracciones", "Montaje relacional", "Cine-ojo", "Montaje intelectual"],
    correcta: 1,
    categoria: "Teoría del Cine",
    dificultad: "dificil"
  },
  {
    id: 186,
    pregunta: "¿En qué país rodó Juraj Herz su obra más célebre, 'The Cremator' (1969)?",
    opciones: ["Polonia", "Hungría", "Checoslovaquia", "Yugoslavia"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 187,
    pregunta: "¿Qué actriz protagoniza 'Rosemary's Baby' (1968) de Roman Polanski?",
    opciones: ["Faye Dunaway", "Julie Christie", "Mia Farrow", "Diane Keaton"],
    correcta: 2,
    categoria: "Actores",
    dificultad: "facil"
  },
  {
    id: 188,
    pregunta: "¿Con qué director brasileño mantuvo Udo Kier una colaboración cercana y una amistad duradera?",
    opciones: ["Walter Salles", "Héctor Babenco", "Kleber Mendonça", "Júlio Bressane"],
    correcta: 2,
    categoria: "Actores",
    dificultad: "dificil"
  },
  {
    id: 189,
    pregunta: "¿Cuál es el argumento central de 'Tesis' (1996) de Alejandro Amenábar?",
    opciones: ["Una estudiante descubre una red de snuff movies dentro de su propia universidad", "Un periodista investiga una secta que filma sus rituales", "Una actriz recibe cintas con grabaciones de su propia vida", "Un detective rastrea a un asesino en serie que filma sus crímenes"],
    correcta: 0,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 190,
    pregunta: "¿Qué actor de Hollywood aparece como extra sin acreditar en 'The Thin Red Line' (1998) de Terrence Malick?",
    opciones: ["John Travolta", "Woody Harrelson", "John Cusack", "Billy Bob Thornton"],
    correcta: 3,
    categoria: "Actores",
    dificultad: "dificil"
  },
  {
    id: 191,
    pregunta: "¿Quién dirigió 'Kwaidan' (1964), antología de cuentos de terror japoneses?",
    opciones: ["Kaneto Shindo", "Masaki Kobayashi", "Kenji Mizoguchi", "Hiroshi Teshigahara"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 192,
    pregunta: "¿En qué consiste el género wuxia en el cine chino?",
    opciones: ["Comedias románticas ambientadas en la China contemporánea", "Dramas históricos sobre guerreros con artes marciales y códigos de honor", "Películas de terror sobrenatural de la tradición taoísta", "Thrillers policiales ambientados en Hong Kong"],
    correcta: 1,
    categoria: "Historia del Cine",
    dificultad: "media"
  },
  {
    id: 193,
    pregunta: "¿Qué película de Jafar Panahi tiene a Abbas Kiarostami como guionista?",
    opciones: ["The White Balloon (1995)", "The Mirror (1997)", "The Circle (2000)", "Offside (2006)"],
    correcta: 0,
    categoria: "Películas",
    dificultad: "dificil"
  },
  {
    id: 194,
    pregunta: "¿Quién escribió el guion de 'Hiroshima mon amour' (1959) de Alain Resnais?",
    opciones: ["Alain Robbe-Grillet", "Marguerite Duras", "Simone de Beauvoir", "Nathalie Sarraute"],
    correcta: 1,
    categoria: "Guionistas",
    dificultad: "media"
  },
  {
    id: 195,
    pregunta: "¿Con cuál de estos directores colaboró Luis Buñuel en sus inicios antes de rodar 'Un chien andalou' (1929)?",
    opciones: ["Fritz Lang", "Jean Renoir", "Jean Epstein", "René Clair"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 196,
    pregunta: "¿Para qué película de Hitchcock diseñó Salvador Dalí la famosa secuencia onírica?",
    opciones: ["Rebecca (1940)", "Spellbound (1945)", "Notorious (1946)", "Rope (1948)"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 197,
    pregunta: "¿Quién fue la actriz fetiche de Federico Fellini?",
    opciones: ["Giulietta Masina", "Monica Vitti", "Claudia Cardinale", "Sandra Milo"],
    correcta: 0,
    categoria: "Actores",
    dificultad: "facil"
  },
  {
    id: 198,
    pregunta: "¿Cuál de estas reglas no forma parte del manifiesto Dogma 95?",
    opciones: ["El rodaje debe realizarse en localizaciones reales", "No se permite música que no esté presente en la escena", "El director debe aparecer acreditado en los títulos de crédito", "La cámara debe sostenerse en mano en todo momento"],
    correcta: 2,
    categoria: "Historia del Cine",
    dificultad: "media"
  },
  {
    id: 199,
    pregunta: "¿En qué año se estrenó 'The Man Who Shot Liberty Valance' de John Ford?",
    opciones: ["1960", "1962", "1964", "1966"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 200,
    pregunta: "¿Con qué escritor de ciencia ficción coescribió Stanley Kubrick el guion de '2001: A Space Odyssey' (1968)?",
    opciones: ["Isaac Asimov", "Ray Bradbury", "Arthur C. Clarke", "Philip K. Dick"],
    correcta: 2,
    categoria: "Guionistas",
    dificultad: "media"
  },
  {
    id: 201,
    pregunta: "¿En qué novela está basado 'Stalker' (1979) de Tarkovsky?",
    opciones: ["Solaris, de Stanislaw Lem", "Picnic extraterrestre, de los hermanos Strugatski", "El maestro, de Bulgákov", "Nosotros, de Yevgeny Zamyatin"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 202,
    pregunta: "¿Por qué es conocido el cine de Louis Feuillade dentro de la historia del cine mudo?",
    opciones: ["Por sus dramas psicológicos de interiores con iluminación expresionista", "Por sus largas series de folletín con villanos enmascarados y persecuciones urbanas", "Por sus comedias físicas influenciadas por el music hall británico", "Por sus documentales etnográficos rodados fuera de Europa"],
    correcta: 1,
    categoria: "Historia del Cine",
    dificultad: "media"
  },
  {
    id: 203,
    pregunta: "¿Cuál de estas películas no es un remake?",
    opciones: ["A Beautiful Mind (2001)", "The Departed (2006)", "Scarface (1983)", "The Ring (2002)"],
    correcta: 0,
    categoria: "Películas",
    dificultad: "media"
  },
    {
    id: 204,
    pregunta: "¿Qué película de Clint Eastwood está basada en el rodaje de John Huston durante 'The African Queen'?",
    opciones: ["White Hunter Black Heart (1990)", "Unforgiven (1992)", "A Perfect World (1993)", "Blood Work (2002)"],
    correcta: 0,
    categoria: "Películas",
    dificultad: "dificil"
  },
  {
    id: 205,
    pregunta: "¿Cuál fue el debut de Takeshi Kitano como director?",
    opciones: ["A Scene at the Sea", "Boiling Point", "Violent Cop", "Sonatine"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 206,
    pregunta: "¿En qué año se estrenó la película 'Fanny and Alexander' de Ingmar Bergman?",
    opciones: ["1976", "1979", "1982", "1986"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 207,
    pregunta: "¿En qué año se estrenó 'Red Beard' de Akira Kurosawa?",
    opciones: ["1955", "1958", "1962", "1965"],
    correcta: 3,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 208,
    pregunta: "¿Cuál de estas películas es argentina?",
    opciones: ["La llorona (2019)", "El club (2015)", "Whisky (2004)", "La antena (2007)"],
    correcta: 3,
    categoria: "Países",
    dificultad: "media"
  },
  {
    id: 209,
    pregunta: "¿Cuál de estas películas de Disney se estrenó antes?",
    opciones: ["Bambi", "Dumbo", "Pinocho", "Cenicienta"],
    correcta: 2,
    categoria: "Historia del Cine",
    dificultad: "media"
  },
  {
    id: 210,
    pregunta: "¿Cuántas películas tiene la saga de Indiana Jones (hasta 2026)?",
    opciones: ["3", "4", "5", "6"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 211,
    pregunta: "¿Qué compositor contrató Universal para realizar la banda sonora de 'The Thing' (1982) de John Carpenter?",
    opciones: ["Bernard Herrmann", "Jerry Goldsmith", "Ennio Morricone", "John Williams"],
    correcta: 2,
    categoria: "Bandas Sonoras",
    dificultad: "media"
  },
  {
    id: 212,
    pregunta: "¿Qué director polaco dirigió 'Ashes and Diamonds' (1958)?",
    opciones: ["Wojciech Jerzy Has", "Andrzej Wajda", "Krzysztof Kieślowski", "Jerzy Kawalerowicz"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 213,
    pregunta: "¿Qué director húngaro dirigió 'The Tragedy of Man' (2011)?",
    opciones: ["Béla Tarr", "Miklós Jancsó", "Marcell Jankovics", "István Szabó"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 214,
    pregunta: "¿En cuántas películas trabajaron juntos Matti Pellonpää y Aki Kaurismäki?",
    opciones: ["5", "7", "9", "11"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 215,
    pregunta: "¿Cuántos eran los Hermanos Marx en total?",
    opciones: ["3", "4", "5", "6"],
    correcta: 2,
    categoria: "Historia del Cine",
    dificultad: "media"
  },
  {
    id: 216,
    pregunta: "¿Por qué es conocida la cineasta alemana Lotte Reiniger?",
    opciones: ["Por dirigir el primer largometraje de animación con siluetas recortadas", "Por ser la primera mujer en ganar la Palma de Oro en Cannes", "Por inventar el sistema de doblaje sincronizado", "Por crear el primer sistema de color en cine europeo"],
    correcta: 0,
    categoria: "Historia del Cine",
    dificultad: "media"
  },
  {
    id: 217,
    pregunta: "¿Qué peculiaridad técnica tiene 'Russian Ark' (2002) de Aleksandr Sokurov?",
    opciones: ["Está rodada sin actores profesionales", "Fue filmada en un único día", "Está rodada en un único plano secuencia ininterrumpido", "Está filmada simultáneamente desde 360 grados"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 218,
    pregunta: "¿En cuál de estas películas no actúa Song Kang-ho?",
    opciones: ["Sympathy for Mr. Vengeance (2002)", "The Foul King (2000)", "I Saw the Devil (2010)", "Cobweb (2023)"],
    correcta: 2,
    categoria: "Actores",
    dificultad: "media"
  },
  {
    id: 219,
    pregunta: "¿Cómo se tituló en España 'She Wore a Yellow Ribbon' (1949) de John Ford?",
    opciones: ["La legión invencible", "Pasión de los fuertes", "El último refugio", "El lazo amarillo"],
    correcta: 0,
    categoria: "Películas",
    dificultad: "dificil"
  },
  {
    id: 220,
    pregunta: "¿Cuál fue la última película de Ingmar Bergman como director?",
    opciones: ["Fanny and Alexander", "Saraband", "In the Presence of a Clown", "After the Rehearsal"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 221,
    pregunta: "¿Qué actor británico protagoniza 'La quimera' (2023) de Alice Rohrwacher como arqueólogo reconvertido en ladrón de tumbas etruscas?",
    opciones: ["Tom Burke", "Josh O'Connor", "Andrew Garfield", "Paul Mescal"],
    correcta: 1,
    categoria: "Actores",
    dificultad: "facil"
  },
  {
    id: 222,
    pregunta: "¿Qué defendía André Bazin frente al montaje excesivo?",
    opciones: [
      "La cámara subjetiva",
      "La profundidad de campo y el plano largo",
      "El montaje intelectual",
      "La iluminación expresionista"
    ],
    correcta: 1,
    categoria: "Teoría del Cine",
    dificultad: "media"
  },
  {
    id: 223,
    pregunta: "¿Cómo se denomina la continuidad espacial y temporal clásica de Hollywood destinada a ocultar el montaje?",
    opciones: [
      "Montaje invisible",
      "Montaje intelectual",
      "Montaje de atracciones",
      "Montaje discontinuo"
    ],
    correcta: 0,
    categoria: "Teoría del Cine",
    dificultad: "facil"
  },
  {
    id: 224,
    pregunta: "¿Qué término describe el sonido cuya fuente no aparece en pantalla pero pertenece al espacio narrativo?",
    opciones: [
      "Sonido extradiegético",
      "Sonido diegético off",
      "Voice-over",
      "Contrapunto sonoro"
    ],
    correcta: 1,
    categoria: "Teoría del Cine",
    dificultad: "dificil"
  },
  {
    id: 225,
    pregunta: "¿Qué cineasta y teórico desarrolló el concepto de 'fotogenia' como cualidad específica del cine en su libro 'Bonjour Cinéma' (1921)?",
    opciones: ["Jean Epstein", "René Clair", "Abel Gance", "Marcel Carné"],
    correcta: 0,
    categoria: "Teoría del Cine",
    dificultad: "dificil"
  },
  {
    id: 226,
    pregunta: "¿En qué año tuvo lugar la célebre primera proyección pública de los hermanos Lumière en París?",
    opciones: ["1893", "1895", "1897", "1900"],
    correcta: 1,
    categoria: "Historia del Cine",
    dificultad: "facil"
  },
  {
    id: 227,
    pregunta: "¿Qué movimiento brasileño estuvo liderado por Glauber Rocha en los años 60?",
    opciones: [
      "Cinema Novo",
      "Tropicalismo",
      "Cinema Marginal",
      "Chanchada"
    ],
    correcta: 0,
    categoria: "Historia del Cine",
    dificultad: "media"
  },
  {
    id: 228,
    pregunta: "¿Qué movimiento documental británico de los 50-60, liderado por Lindsay Anderson y Karel Reisz, defendía la libertad creativa y el rodaje en localizaciones reales?",
    opciones: ["Kitchen Sink Realism", "Free Cinema", "Dogma 95", "British New Wave"],
    correcta: 1,
    categoria: "Historia del Cine",
    dificultad: "media"
  },
  {
    id: 229,
    pregunta: "¿Quién dirigió 'Nanook of the North' (1922), considerada una de las primeras películas documentales de la historia?",
    opciones: ["John Grierson", "Robert J. Flaherty", "Dziga Vertov", "Pare Lorentz"],
    correcta: 1,
    categoria: "Historia del Cine",
    dificultad: "facil"
  },
  {
    id: 230,
    pregunta: "¿Qué cineasta soviético dirigió 'Man with a Movie Camera' (1929)?",
    opciones: ["Lev Kuleshov", "Sergei Eisenstein", "Dziga Vertov", "Vsevolod Pudovkin"],
    correcta: 2,
    categoria: "Historia del Cine",
    dificultad: "facil"
  },
  {
    id: 231,
    pregunta: "¿Qué término describe una toma larga sin cortes perceptibles?",
    opciones: ["Plano americano", "Plano secuencia", "Plano recurso", "Plano máster"],
    correcta: 1,
    categoria: "Teoría del Cine",
    dificultad: "facil"
  },
  {
    id: 232,
    pregunta: "¿Qué película sonora de Fritz Lang está considerada una obra maestra temprana del cine de asesinos en serie?",
    opciones: ["Metropolis", "Dr. Mabuse, the Gambler", "M", "Spies"],
    correcta: 2,
    categoria: "Historia del Cine",
    dificultad: "media"
  },
  {
    id: 233,
    pregunta: "¿Qué cineasta escribió el ensayo 'Una cierta tendencia del cine francés', texto fundamental para la teoría del autor?",
    opciones: ["André Bazin", "Jean-Luc Godard", "François Truffaut", "Jacques Rivette"],
    correcta: 2,
    categoria: "Teoría del Cine",
    dificultad: "media"
  },
  {
    id: 234,
    pregunta: "¿Qué película de Luis Buñuel y Salvador Dalí comienza con la célebre imagen de un ojo cortado por una navaja?",
    opciones: ["La edad de oro", "Viridiana", "Un perro andaluz", "Los olvidados"],
    correcta: 2,
    categoria: "Historia del Cine",
    dificultad: "facil"
  },
  {
    id: 235,
    pregunta: "¿Qué movimiento cinematográfico alemán tuvo como figuras destacadas a Rainer Werner Fassbinder, Werner Herzog y Wim Wenders?",
    opciones: ["Expresionismo alemán", "Nuevo Cine Alemán", "Escuela de Berlín", "Kammerspielfilm"],
    correcta: 1,
    categoria: "Historia del Cine",
    dificultad: "media"
  },
  {
    id: 236,
    pregunta: "¿Qué tipo de montaje alterna acciones simultáneas que ocurren en lugares distintos?",
    opciones: ["Montaje paralelo", "Montaje métrico", "Montaje tonal", "Montaje de continuidad"],
    correcta: 0,
    categoria: "Teoría del Cine",
    dificultad: "facil"
  },
  {
    id: 237,
    pregunta: "¿Qué movimiento latinoamericano defendía un cine político y anticolonial en los años 60 y 70?",
    opciones: ["Cinema Tropical", "Tercer Cine", "Cine Imperfecto", "Cine de la Base"],
    correcta: 1,
    categoria: "Historia del Cine",
    dificultad: "media"
  },
  {
    id: 238,
    pregunta: "¿Qué término describe los elementos visuales que aparecen dentro del encuadre y forman parte de la puesta en escena?",
    opciones: ["Mise-en-scène", "Découpage", "Raccord", "Blocking"],
    correcta: 0,
    categoria: "Teoría del Cine",
    dificultad: "media"
  },
  {
    id: 239,
    pregunta: "¿Qué director realizó 'There Will Be Blood' (2007)?",
    opciones: ["David Fincher", "Paul Thomas Anderson", "Martin Scorsese", "Todd Haynes"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "facil"
  },
  {
    id: 240,
    pregunta: "¿Qué actor interpreta a Travis Bickle en 'Taxi Driver' (1976)?",
    opciones: ["Al Pacino", "Harvey Keitel", "Robert De Niro", "Dustin Hoffman"],
    correcta: 2,
    categoria: "Actores",
    dificultad: "facil"
  },
  {
    id: 241,
    pregunta: "¿Qué película de Stanley Kubrick está ambientada durante la Guerra de Vietnam?",
    opciones: ["Paths of Glory", "Barry Lyndon", "Full Metal Jacket", "Dr. Strangelove"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 242,
    pregunta: "¿Quién dirigió 'The Piano Teacher' (2001)?",
    opciones: ["Michael Haneke", "Ulrich Seidl", "Lars von Trier", "Cristian Mungiu"],
    correcta: 0,
    categoria: "Directores",
    dificultad: "facil"
  },
  {
    id: 243,
    pregunta: "¿En qué película aparece el personaje Anton Chigurh?",
    opciones: ["Sicario", "No Country for Old Men", "Hell or High Water", "The Assassination of Jesse James"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 244,
    pregunta: "¿Qué actor interpreta al protagonista de 'Oldboy' (2003)?",
    opciones: ["Song Kang-ho", "Choi Min-sik", "Lee Byung-hun", "Ha Jung-woo"],
    correcta: 1,
    categoria: "Actores",
    dificultad: "media"
  },
  {
    id: 245,
    pregunta: "¿Qué película de los hermanos Coen transcurre principalmente en Minnesota y gira en torno a un secuestro fallido?",
    opciones: ["Blood Simple", "Miller's Crossing", "Fargo", "A Serious Man"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 246,
    pregunta: "¿Quién dirigió 'A Separation' (2011)?",
    opciones: ["Jafar Panahi", "Asghar Farhadi", "Majid Majidi", "Abbas Kiarostami"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 247,
    pregunta: "¿Qué actriz protagoniza 'Jeanne Dielman, 23 quai du Commerce, 1080 Bruxelles' (1975)?",
    opciones: ["Delphine Seyrig", "Jeanne Moreau", "Bulle Ogier", "Anna Karina"],
    correcta: 0,
    categoria: "Actores",
    dificultad: "dificil"
  },
  {
    id: 248,
    pregunta: "¿Qué película de Michael Mann narra el enfrentamiento entre un detective y un ladrón profesional en Los Ángeles?",
    opciones: ["Collateral", "Miami Vice", "Thief", "Heat"],
    correcta: 3,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 249,
    pregunta: "¿Qué actor interpreta a Harry Lime en 'The Third Man' (1949)?",
    opciones: ["Trevor Howard", "Joseph Cotten", "Orson Welles", "James Mason"],
    correcta: 2,
    categoria: "Actores",
    dificultad: "media"
  },
  {
    id: 250,
    pregunta: "¿Qué director realizó 'The Travelling Players' (1975), una de las obras fundamentales del cine político griego?",
    opciones: ["Theo Angelopoulos", "Constantin Costa-Gavras", "Michael Cacoyannis", "Yorgos Lanthimos"],
    correcta: 0,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 251,
    pregunta: "¿Qué actriz interpreta a la cantante de cabaret Lola Lola en 'The Blue Angel' (1930)?",
    opciones: ["Brigitte Helm", "Marlene Dietrich", "Lotte Lenya", "Hildegard Knef"],
    correcta: 1,
    categoria: "Actores",
    dificultad: "dificil"
  },
  {
    id: 252,
    pregunta: "¿Qué película de Miklós Jancsó transcurre en un campo de prisioneros tras una insurrección húngara del siglo XIX?",
    opciones: ["The Round-Up", "Red Psalm", "The Red and the White", "Silence and Cry"],
    correcta: 0,
    categoria: "Películas",
    dificultad: "dificil"
  },
  {
    id: 253,
    pregunta: "¿Quién dirigió 'Daisies' (1966), obra emblemática de la Nueva Ola Checoslovaca?",
    opciones: ["Věra Chytilová", "Agnieszka Holland", "Márta Mészáros", "Juraj Herz"],
    correcta: 0,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 254,
    pregunta: "¿Qué actor protagoniza 'Taste of Cherry' (1997) de Abbas Kiarostami?",
    opciones: ["Homayoun Ershadi", "Behrouz Vossoughi", "Babak Karimi", "Ali Nassirian"],
    correcta: 0,
    categoria: "Actores",
    dificultad: "dificil"
  },
  {
    id: 255,
    pregunta: "¿Qué director senegalés realizó 'Ceddo' (1977)?",
    opciones: ["Djibril Diop Mambéty", "Mahamat-Saleh Haroun", "Ousmane Sembène", "Souleymane Cissé"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 256,
    pregunta: "¿En qué película de Béla Tarr los habitantes de un pueblo esperan la llegada de un misterioso personaje llamado Irimiás?",
    opciones: ["Damnation", "Werckmeister Harmonies", "Satantango", "The Turin Horse"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 257,
    pregunta: "¿Qué director realizó 'The House Is Black' (1963), obra fundamental del cine iraní?",
    opciones: ["Sohrab Shahid Saless", "Forugh Farrokhzad", "Amir Naderi", "Dariush Mehrjui"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 258,
    pregunta: "¿Qué actor interpreta al protagonista de 'The Ascent' (1977) de Larisa Shepitko?",
    opciones: ["Boris Plotnikov", "Anatoli Solonitsyn", "Oleg Yankovsky", "Nikolai Grinko"],
    correcta: 0,
    categoria: "Actores",
    dificultad: "dificil"
  },
  {
    id: 259,
    pregunta: "¿Qué película de Edward Yang se desarrolla durante las décadas de 1950 y 1960 en Taiwán?",
    opciones: ["Yi Yi", "Taipei Story", "A Brighter Summer Day", "The Terrorizers"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 260,
    pregunta: "¿Quién dirigió 'The Color of Pomegranates' (1969)?",
    opciones: ["Sergei Parajanov", "Andrei Tarkovsky", "Mikhail Kalatozov", "Tengiz Abuladze"],
    correcta: 0,
    categoria: "Directores",
    dificultad: "facil"
  },
  {
    id: 261,
    pregunta: "¿Qué actriz protagoniza 'Cléo from 5 to 7' (1962) de Agnès Varda?",
    opciones: ["Anna Karina", "Corinne Marchand", "Jeanne Moreau", "Bernadette Lafont"],
    correcta: 1,
    categoria: "Actores",
    dificultad: "media"
  },
  {
    id: 262,
    pregunta: "¿Qué película de Emir Kusturica ganó la Palma de Oro en Cannes en 1995?",
    opciones: ["Time of the Gypsies", "Black Cat, White Cat", "Underground", "When Father Was Away on Business"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "dificil"
  },
  {
    id: 263,
    pregunta: "¿Qué director realizó 'Sambizanga' (1972), una de las películas clave del cine africano anticolonial?",
    opciones: ["Sarah Maldoror", "Ousmane Sembène", "Med Hondo", "Flora Gomes"],
    correcta: 0,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 264,
    pregunta: "¿Qué película de Apichatpong Weerasethakul transcurre entre una selva y una cueva donde conviven humanos, fantasmas y animales?",
    opciones: ["Tropical Malady", "Blissfully Yours", "Uncle Boonmee Who Can Recall His Past Lives", "Syndromes and a Century"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 265,
    pregunta: "¿Quién dirigió 'Touki Bouki' (1973)?",
    opciones: ["Souleymane Cissé", "Djibril Diop Mambéty", "Ousmane Sembène", "Abderrahmane Sissako"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 266,
    pregunta: "¿Quién dirigió 'The Bitter Tears of Petra von Kant' (1972)?",
    opciones: ["Werner Schroeter", "Rainer Werner Fassbinder", "Volker Schlöndorff", "Ulrike Ottinger"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 267,
    pregunta: "¿Qué compositor creó la banda sonora de '1900' (1976) de Bernardo Bertolucci?",
    opciones: ["Nino Rota", "Ennio Morricone", "Piero Piccioni", "Luis Bacalov"],
    correcta: 1,
    categoria: "Bandas Sonoras",
    dificultad: "media"
  },
  {
    id: 268,
    pregunta: "¿Qué director ganó el Oso de Oro en Berlín con 'Alcarràs' (2022)?",
    opciones: ["Isabel Coixet", "Carla Simón", "Icíar Bollaín", "Pilar Palomero"],
    correcta: 1,
    categoria: "Premios",
    dificultad: "facil"
  },
  {
    id: 269,
    pregunta: "¿Quién dirigió 'The Mirror' (1975)?",
    opciones: ["Andrei Tarkovsky", "Sergei Parajanov", "Aleksandr Sokurov", "Elem Klimov"],
    correcta: 0,
    categoria: "Directores",
    dificultad: "facil"
  },
  {
    id: 270,
    pregunta: "¿Quién dirigió 'The Decameron' (1971)?",
    opciones: ["Pier Paolo Pasolini", "Luchino Visconti", "Michelangelo Antonioni", "Bernardo Bertolucci"],
    correcta: 0,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 271,
    pregunta: "¿Qué banda sonora es obra de Angelo Badalamenti?",
    opciones: ["Blue Velvet (1986)", "The Last Emperor (1987)", "Mississippi Burning (1988)", "Cinema Paradiso (1988)"],
    correcta: 0,
    categoria: "Bandas Sonoras",
    dificultad: "media"
  },
  {
    id: 272,
    pregunta: "¿Quién dirigió 'Stromboli' (1950)?",
    opciones: ["Roberto Rossellini", "Vittorio De Sica", "Luchino Visconti", "Michelangelo Antonioni"],
    correcta: 0,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 273,
    pregunta: "¿Qué banda sonora compuso Wojciech Kilar?",
    opciones: ["Heat (1995)", "Bram Stoker's Dracula (1992)", "Amadeus (1984)", "Barry Lyndon (1975)"],
    correcta: 1,
    categoria: "Bandas Sonoras",
    dificultad: "media"
  },
  {
    id: 274,
    pregunta: "¿En qué provincia española se rodó la escena del duelo final del cementerio en 'The Good, the Bad and the Ugly' (1966)?",
    opciones: ["Palencia", "Burgos", "Soria", "Teruel"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 275,
    pregunta: "¿Qué técnica de animación caracteriza la obra del checo Jan Švankmajer?",
    opciones: ["Animación por ordenador", "Stop-motion con objetos cotidianos y arcilla", "Animación de siluetas recortadas", "Cel animation tradicional"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 276,
    pregunta: "¿En qué año se estrenó 'Metropolis' de Fritz Lang?",
    opciones: ["1925", "1927", "1929", "1931"],
    correcta: 1,
    categoria: "Historia del Cine",
    dificultad: "media"
  },
  {
    id: 277,
    pregunta: "¿Qué actriz protagoniza 'A Woman Under the Influence' (1974) de John Cassavetes?",
    opciones: ["Gena Rowlands", "Seymour Cassel", "Lynn Carlin", "Joanna Moore"],
    correcta: 0,
    categoria: "Actores",
    dificultad: "media"
  },
  {
    id: 278,
    pregunta: "¿En qué año se estrenó 'Jeanne Dielman' de Chantal Akerman?",
    opciones: ["1973", "1975", "1977", "1979"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 279,
    pregunta: "¿Por qué elemento formal es especialmente conocido el estilo de Max Ophüls?",
    opciones: ["Los planos fijos de larga duración", "Los travelling y grúas de gran fluidez", "El montaje muy rápido", "La cámara en mano nerviosa"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 280,
    pregunta: "¿Cómo se denomina el tono sofisticado e irónico característico de las comedias de Ernst Lubitsch?",
    opciones: ["Screwball", "The Lubitsch Touch", "Wit Comedy", "Romantic Irony"],
    correcta: 1,
    categoria: "Historia del Cine",
    dificultad: "media"
  },
  {
    id: 281,
    pregunta: "¿Qué director es considerado el padre del Parallel Cinema?",
    opciones: ["Mrinal Sen", "Ritwik Ghatak", "Satyajit Ray", "Guru Dutt"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "facil"
  },
  {
    id: 282,
    pregunta: "¿Qué película de Ritwik Ghatak narra la partición de Bengala a través de una familia de refugiados?",
    opciones: ["The Cloud-Capped Star (1960)", "The Golden Thread (1965)", "A Soft Note on a Sharp Scale (1961)", "A River Called Titas (1973)"],
    correcta: 0,
    categoria: "Películas",
    dificultad: "dificil"
  },
  {
    id: 283,
    pregunta: "¿Qué película de Claire Denis retrata la vida de soldados de la Legión Extranjera francesa en África?",
    opciones: ["Beau Travail (1999)", "Trouble Every Day (2001)", "35 Shots of Rum (2008)", "White Material (2009)"],
    correcta: 0,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 284,
    pregunta: "¿Qué película de Bruno Dumont ganó el Grand Prix del Jurado en Cannes en 1999?",
    opciones: ["La Vie de Jésus (1997)", "L'Humanité (1999)", "Flandres (2006)", "Hors Satan (2011)"],
    correcta: 1,
    categoria: "Premios",
    dificultad: "dificil"
  },
  {
    id: 285,
    pregunta: "¿Qué película de Quentin Dupieux trata sobre un neumático que cobra vida y mata a personas con poderes telequinéticos?",
    opciones: ["Deerskin (2019)", "Mandibles (2020)", "Rubber (2010)", "Wrong (2012)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 286,
    pregunta: "¿Qué película de Dario Argento es considerada la obra cumbre del giallo italiano?",
    opciones: ["Opera (1987)", "Tenebrae (1982)", "Deep Red (1975)", "Suspiria (1977)"],
    correcta: 3,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 287,
    pregunta: "¿Qué elemento visual es marca inconfundible de 'Suspiria' (1977) de Dario Argento?",
    opciones: ["El blanco y negro expresionista", "La iluminación saturada en rojos y azules intensos", "La cámara en mano permanente", "Los planos fijos de larguísima duración"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 288,
    pregunta: "¿Quién compuso la banda sonora de gran parte de la filmografía de Dario Argento?",
    opciones: ["Ennio Morricone", "Goblin", "Bruno Nicolai", "Pino Donaggio"],
    correcta: 1,
    categoria: "Bandas Sonoras",
    dificultad: "media"
  },
  {
    id: 289,
    pregunta: "¿Qué película de Mario Bava es considerada la fundadora del giallo italiano como género?",
    opciones: ["Blood and Black Lace", "Bay of Blood", "The Girl Who Knew Too Much", "Kill Baby Kill"],
    correcta: 2,
    categoria: "Historia del Cine",
    dificultad: "dificil"
  },
  {
    id: 290,
    pregunta: "¿En qué año se estrenó 'Le Bonheur' de Agnès Varda?",
    opciones: ["1958", "1960", "1962", "1965"],
    correcta: 3,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 291,
    pregunta: "¿En qué año se estrenó 'Tokyo Story' de Yasujiro Ozu?",
    opciones: ["1945", "1948", "1953", "1957"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 292,
    pregunta: "¿En qué año se estrenó 'L'Avventura' de Michelangelo Antonioni?",
    opciones: ["1958", "1960", "1962", "1964"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 293,
    pregunta: "¿En qué año se estrenó 'Aguirre, the Wrath of God' de Werner Herzog?",
    opciones: ["1972", "1974", "1976", "1978"],
    correcta: 0,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 294,
    pregunta: "¿De qué país es el director Djibril Diop Mambéty?",
    opciones: ["Mali", "Senegal", "Costa de Marfil", "Guinea"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 295,
    pregunta: "¿Qué película de Abderrahmane Sissako retrata la ocupación yihadista de una ciudad del norte de Mali?",
    opciones: ["Waiting for Happiness (2002)", "Bamako (2006)", "Timbuktu (2014)", "Life on Earth (1998)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "dificil"
  },
  {
    id: 296,
    pregunta: "¿Qué director es considerado uno de los grandes del cine africano con 'Yeelen' (1987)?",
    opciones: ["Med Hondo", "Souleymane Cissé", "Jean-Marie Teno", "Idrissa Ouedraogo"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 297,
    pregunta: "¿Qué premio ganó 'Timbuktu' (2014) de Abderrahmane Sissako en los César franceses?",
    opciones: ["César a mejor película extranjera", "César a mejor película", "César a mejor director", "César a mejor guion"],
    correcta: 1,
    categoria: "Premios",
    dificultad: "dificil"
  },
  {
    id: 298,
    pregunta: "¿Qué director realizó la película 'This Is Not a Burial, It's a Resurrection' (2019)?",
    opciones: ["Lemohang Jeremiah Mosese", "Kaouther Ben Hania", "Reem Saleh", "Wanuri Kahiu"],
    correcta: 3,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 299,
    pregunta: "¿Qué cineasta egipcio es considerado el padre del cine árabe con más de 80 películas en su filmografía?",
    opciones: ["Shadi Abdel Salam", "Youssef Chahine", "Daoud Abdel Sayed", "Mohamed Khan"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 300,
    pregunta: "¿Qué película de Youssef Chahine ganó el Premio del Jurado en el Festival de Berlín en 1979?",
    opciones: ["Cairo Station", "The Sparrow", "Alexandria... Why?", "An Egyptian Story"],
    correcta: 2,
    categoria: "Premios",
    dificultad: "dificil"
  },
  {
    id: 301,
    pregunta: "¿Qué película del burkinés Idrissa Ouedraogo ganó el Premio del Jurado en Cannes en 1990?",
    opciones: ["Yaaba", "Tilai", "Samba Traoré", "Kini and Adams"],
    correcta: 1,
    categoria: "Premios",
    dificultad: "dificil"
  },
  {
    id: 302,
    pregunta: "¿En qué país se celebra el FESPACO, el festival de cine africano más importante del continente?",
    opciones: ["Senegal", "Nigeria", "Marruecos", "Burkina Faso"],
    correcta: 3,
    categoria: "Premios",
    dificultad: "dificil"
  },
  {
    id: 303,
    pregunta: "¿Qué película de Mahamat-Saleh Haroun ganó el Premio del Jurado en Cannes en 2010?",
    opciones: ["Abouna", "Daratt", "A Screaming Man", "Grigris"],
    correcta: 2,
    categoria: "Premios",
    dificultad: "dificil"
  },
  {
    id: 304,
    pregunta: "¿De qué país es el director Mahamat-Saleh Haroun?",
    opciones: ["Camerún", "Niger", "Chad", "Mali"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 305,
    pregunta: "¿Qué película de Med Hondo denuncia las condiciones de vida de los inmigrantes africanos en Francia?",
    opciones: ["Soleil Ô (1970)", "West Indies (1979)", "Sarraounia (1986)", "Lumière Noire (1994)"],
    correcta: 0,
    categoria: "Películas",
    dificultad: "dificil"
  },
  {
    id: 306,
    pregunta: "¿De dónde es el director Lemohang Jeremiah Mosese?",
    opciones: ["Burkina Faso", "Lesotho", "Rwanda", "Somalia"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 307,
    pregunta: "¿Qué película de Lucrecia Martel está ambientada en el siglo XVIII y adapta la novela de Antonio di Benedetto?",
    opciones: ["La ciénaga (2001)", "La niña santa (2004)", "La mujer sin cabeza (2008)", "Zama (2017)"],
    correcta: 3,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 308,
    pregunta: "¿Qué película brasileña de Fernando Meirelles retrató la vida en las favelas de Río de Janeiro?",
    opciones: ["Tropa de Elite (2007)", "Central Station (1998)", "City of God (2002)", "The Second Mother (2015)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 309,
    pregunta: "¿Qué película cubana de Tomás Gutiérrez Alea es considerada la obra cumbre del cine latinoamericano de los 60?",
    opciones: ["La muerte de un burócrata", "Memorias del subdesarrollo", "Fresa y chocolate", "La última cena"],
    correcta: 1,
    categoria: "Películas",
    dificultad: "media"
  },
  {
    id: 310,
    pregunta: "¿Qué director mexicano realizó 'El topo' (1970) y 'La montaña sagrada' (1973)?",
    opciones: ["Carlos Reygadas", "Arturo Ripstein", "Alejandro Jodorowsky", "Felipe Cazals"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "facil"
  },
  {
    id: 311,
    pregunta: "¿Qué película de Walter Salles ganó el Oso de Oro en el Festival de Berlín en 1998?",
    opciones: ["Behind the Sun", "Central Station", "The Motorcycle Diaries", "Foreign Land"],
    correcta: 1,
    categoria: "Premios",
    dificultad: "media"
  },
  {
    id: 312,
    pregunta: "¿En qué país nació el director Alejandro González Iñárritu?",
    opciones: ["Argentina", "Colombia", "México", "Chile"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "facil"
  },
  {
    id: 313,
    pregunta: "¿Qué película chilena de Pablo Larraín retrata la campaña del No en el plebiscito de 1988 contra Pinochet?",
    opciones: ["Tony Manero (2008)", "Post Mortem (2010)", "No (2012)", "Spencer (2021)"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 314,
    pregunta: "¿Qué película argentina ganó el Óscar a mejor película de habla no inglesa en 2010?",
    opciones: ["El secreto de sus ojos", "Nueve reinas", "La historia oficial", "Camila"],
    correcta: 0,
    categoria: "Premios",
    dificultad: "facil"
  },
  {
    id: 315,
    pregunta: "¿Qué director brasileño realizó 'Pixote' (1981), retrato descarnado de la infancia marginal en Brasil?",
    opciones: ["Glauber Rocha", "Hector Babenco", "Nelson Pereira dos Santos", "Ruy Guerra"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 316,
    pregunta: "¿Qué película venezolana de Lorenzo Vigas ganó el León de Oro en Venecia en 2015?",
    opciones: ["Desde allá", "Pelo malo", "La hora cero", "Azul y no tan rosa"],
    correcta: 0,
    categoria: "Premios",
    dificultad: "dificil"
  },
    {
    id: 317,
    pregunta: "¿Qué película argentina se convirtió en la primera de América Latina en ganar el Óscar a la mejor película de habla no inglesa en 1986?",
    opciones: ["La historia oficial", "El secreto de sus ojos", "Camila", "Tango, no me dejes nunca"],
    correcta: 0,
    categoria: "Premios",
    dificultad: "media"
  },
  {
    id: 318,
    pregunta: "¿Qué director mexicano debutó con el largometraje 'Cronos' (1993)?",
    opciones: ["Alejandro González Iñárritu", "Alfonso Cuarón", "Guillermo del Toro", "Carlos Reygadas"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 319,
    pregunta: "¿Qué director de fotografía trabajó con Terrence Malick en 'The Tree of Life' y con Alejandro González Iñárritu en 'The Revenant'?",
    opciones: ["Roger Deakins", "Emmanuel Lubezki", "Rodrigo Prieto", "Janusz Kamiński"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 320,
    pregunta: "¿Qué montador colaboró con Martin Scorsese en la mayoría de sus películas desde 'Goodfellas' (1990)?",
    opciones: ["Walter Murch", "Thelma Schoonmaker", "Sally Menke", "Pietro Scalia"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "facil"
  },
  {
    id: 321,
    pregunta: "¿Qué guionista escribió 'Eternal Sunshine of the Spotless Mind' (2004) y 'Being John Malkovich' (1999)?",
    opciones: ["Charlie Kaufman", "Paul Haggis", "Tony Kushner", "David Webb Peoples"],
    correcta: 0,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 322,
    pregunta: "¿Qué director de fotografía es conocido por su trabajo con los Coen Brothers y por 'Blade Runner 2049'?",
    opciones: ["Wally Pfister", "Robert Richardson", "Roger Deakins", "Gordon Willis"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "facil"
  },
  {
    id: 323,
    pregunta: "¿Qué compositor creó las bandas sonoras de 'Schindler's List' y 'E.T.' de Spielberg?",
    opciones: ["Bernard Herrmann", "Jerry Goldsmith", "John Williams", "Max Steiner"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "facil"
  },
  {
    id: 324,
    pregunta: "¿Qué montadora colaboró con Quentin Tarantino en todas sus películas hasta su muerte en 2010?",
    opciones: ["Anne V. Coates", "Dede Allen", "Sally Menke", "Carol Littleton"],
    correcta: 2,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 325,
    pregunta: "¿Qué director de fotografía trabajó con Miloš Forman en 'Amadeus'?",
    opciones: ["Sven Nykvist", "Vilmos Zsigmond", "Gordon Willis", "Miroslav Ondříček"],
    correcta: 3,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 326,
    pregunta: "¿Qué productor fue el responsable de la saga de James Bond desde 'Dr. No' (1962) hasta 'Licence to Kill' (1989)?",
    opciones: ["David O. Selznick", "Albert R. Broccoli", "Samuel Goldwyn", "Dino De Laurentiis"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "dificil"
  },
  {
    id: 327,
    pregunta: "¿Qué compositor creó la banda sonora de 'Blade Runner' (1982) de Ridley Scott?",
    opciones: ["Giorgio Moroder", "Vangelis", "Klaus Schulze", "Jean-Michel Jarre"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "media"
  },
  {
    id: 328,
    pregunta: "¿Qué guionista escribió 'Casablanca' (1942) junto a su hermano Julius?",
    opciones: ["Billy Wilder", "Philip Epstein", "Preston Sturges", "Ben Hecht"],
    correcta: 1,
    categoria: "Directores",
    dificultad: "dificil"
  },
];
