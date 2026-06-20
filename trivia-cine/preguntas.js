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
    opciones: ["Aferim!", "No me esperes demasiado al fin del mundo", "Mala suerte en el sexo o porno loco", "Scarred Hearts"],
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
    dificultad: "medio"
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
    pregunta: "¿En qué año se estrenó 'Persona' de Ingmar Bergman?",
    opciones: ["1960", "1963", "1966", "1969"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 207,
    pregunta: "¿En qué año se estrenó 'Seven Samurai' de Akira Kurosawa?",
    opciones: ["1949", "1952", "1954", "1958"],
    correcta: 2,
    categoria: "Películas",
    dificultad: "facil"
  },
  {
    id: 208,
    pregunta: "¿Cuál de estas películas es argentina?",
    opciones: ["La llorona (2019)", "El club (2015)", "Whisky (2004)", "La antena (2007)"],
    correcta: 3,
    categoria: "Países",
    dificultad: "media"
  },

];
