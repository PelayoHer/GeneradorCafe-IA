document.addEventListener('DOMContentLoaded', () => {
    // Traducciones
    const translations = {
        ast: {
            title: "☕ Xenerador de Café",
            subtitle: "Descubre cafés especiales de tol mundu",
            origin: "Orixe:",
            type: "Tipu:",
            intensity: "Intensidá:",
            generate: "Xenerar Café",
            counter: "Cafés xeneraos:",
            madeWith: "Fecho con",
            createdBy: "Creáu por",
            hot: "Caliente ☕",
            cold: "Fríu 🧊",
            alternativeBtn: "Alternativa pa granu normal",
            alternativeTitle: "Elaboración alternativa con café normal:"
        },
        es: {
            title: "☕ Generador de Café",
            subtitle: "Descubre cafés especiales de todo el mundo",
            origin: "Origen:",
            type: "Tipo:",
            intensity: "Intensidad:",
            generate: "Generar Café",
            counter: "Cafés generados:",
            madeWith: "Hecho con",
            createdBy: "Creado por",
            hot: "Caliente ☕",
            cold: "Frío 🧊",
            alternativeBtn: "Alternativa para grano normal",
            alternativeTitle: "Elaboración alternativa con café normal:"
        },
        en: {
            title: "☕ Coffee Generator",
            subtitle: "Discover special coffees from around the world",
            origin: "Origin:",
            type: "Type:",
            intensity: "Intensity:",
            generate: "Generate Coffee",
            counter: "Coffees generated:",
            madeWith: "Made with",
            createdBy: "Created by",
            hot: "Hot ☕",
            cold: "Cold 🧊",
            alternativeBtn: "Alternative for regular beans",
            alternativeTitle: "Alternative preparation with regular coffee:"
        }
    };

    // Base de datos de cafés (con traducciones y alternativas)
    const cafes = [
        {
            nombre: { ast: "Espresso Italianu", es: "Espresso Italiano", en: "Italian Espresso" },
            descripcion: { 
                ast: "Intensu y cremosu, con capa de crema dorada.", 
                es: "Intenso y cremoso, con capa de crema dorada.", 
                en: "Intense and creamy, with a golden crema layer." 
            },
            origen: { ast: "Italia", es: "Italia", en: "Italy" },
            tipo: { ast: "caliente", es: "caliente", en: "hot" },
            intensidad: 90,
            alternativa: {
                ast: "Pon café molío finu (como farina) y enche d'agua caliente pero non hirviente. Añái una pizca de azucar p'amenorgar l'amargor. Si quies más crema, bati un pocu'l café na taza con una cuchara enantes de bebelo.",
                es: "Para imitar un espresso auténtico, usa café molido extrafino en una olla moka. Llena el depósito con agua caliente (no hirviendo) y añade una pizca de azucar al café para suavizar el sabor. Si no tienes máquina, haz un café muy concentrado con poca agua y déjalo reposar 1 minuto antes de servir.",
                en: "Use finely ground coffee in a moka pot. Fill the bottom with hot (not boiling) water and add a pinch of sugar to the grounds to reduce bitterness. For extra crema, whisk the brewed coffee briefly with a spoon."
            }
        },
        {
            nombre: { ast: "Café d'Altura Colombianu", es: "Café de Altura Colombiano", en: "Colombian High-Grown Coffee" },
            descripcion: { 
                ast: "Equilibráu con notes a carambelu y nuez.", 
                es: "Balanceado con notas a caramelo y nuez.", 
                en: "Balanced with caramel and nutty notes." 
            },
            origen: { ast: "Colombia", es: "Colombia", en: "Colombia" },
            tipo: { ast: "caliente", es: "caliente", en: "hot" },
            intensidad: 75,
            alternativa: {
                ast: "Usa café molío medio y prepáralo en filtru de papel. Añái media cucharadina de canela y un cachu pequeñu de panela (o miel) al agua caliente enantes de echala sobre'l café. Esto da-y el toque duce típicu colombianu.",
                es: "Prepara café de filtro con molido medio. Disuelve media cucharadita de canela y un trozo de panela (o miel) en el agua caliente antes de verterla. Esto recrea el perfil dulce y suave de los cafés colombianos.",
                en: "Brew medium-ground coffee in a paper filter. Add ½ tsp cinnamon and a piece of unrefined cane sugar (or honey) to the hot water before pouring. This mimics Colombian coffee's natural sweetness."
            }
        },
        {
            nombre: { ast: "Café Turcu", es: "Café Turco", en: "Turkish Coffee" },
            descripcion: { 
                ast: "Tradicionalmente fervíu en cezve, bien arumosu.", 
                es: "Tradicionalmente hervido en cezve, muy aromático.", 
                en: "Traditionally boiled in cezve, very aromatic." 
            },
            origen: { ast: "Turquía", es: "Turquía", en: "Turkey" },
            tipo: { ast: "caliente", es: "caliente", en: "hot" },
            intensidad: 85,
            alternativa: {
                ast: "Fierve agua con un clavu de golor y una vaina de cardamomu abierta. Apaga'l fueu y añái 2 cucharones de café molío finu (como farina). Dexa reposar 3 minutos y sirvi ensin colar. Los posos queden nel fondu.",
                es: "Hierve agua con 1 clavo de olor y semillas de cardamomo. Retira del fuego, añade café molido extrafino y deja reposar 3 minutos. Sirve sin filtrar para la auténtica experiencia turca.",
                en: "Boil water with 1 clove and crushed cardamom pods. Off heat, add super-fine coffee grounds. Let sit for 3 mins. Serve unfiltered (sediment is normal)."
            }
        },
        {
            nombre: { ast: "Café Etiopía Yirgacheffe", es: "Café Etiopía Yirgacheffe", en: "Ethiopia Yirgacheffe Coffee" },
            descripcion: { 
                ast: "Notes florales y cítriques, cuerpu mediu.", 
                es: "Notas florales y cítricas, cuerpo medio.", 
                en: "Floral and citrus notes, medium body." 
            },
            origen: { ast: "Etiopía", es: "Etiopía", en: "Ethiopia" },
            tipo: { ast: "caliente", es: "caliente", en: "hot" },
            intensidad: 70,
            alternativa: {
                ast: "Prepara'l café en filtru y añái la pelleya seca de media naranxa al café molío. Si nun tienes, echa unes gotes de zus de llimón al café fechu pa resaltar les notes frutales.",
                es: "Haz café en filtro de papel y añade cáscara de naranja seca al café molido. Alternativamente, mezcla el café preparado con ½ cucharadita de jugo de limón para acentuar sabores frutales.",
                en: "Brew with paper filter and add dried orange peel to grounds. No peel? Mix brewed coffee with ½ tsp lemon juice to enhance fruity notes."
            }
        },
        {
            nombre: { ast: "Café Java", es: "Café Java", en: "Java Coffee" },
            descripcion: { 
                ast: "Afelpáu con notes terroses y especiadas.", 
                es: "Afelpado con notas terrosas y especiadas.", 
                en: "Velvety with earthy and spicy notes." 
            },
            origen: { ast: "Indonesia", es: "Indonesia", en: "Indonesia" },
            tipo: { ast: "caliente", es: "caliente", en: "hot" },
            intensidad: 80,
            alternativa: {
                ast: "Tuesta un pocu el café molío nun sartén (ensin aceite) hasta que tome color avellana. Prepáralo en prensa francesa con agua a 90°C. Esto da-y notes terroses como'l café d'Indonesia.",
                es: "Tuesta ligeramente el café molido en una sartén seca hasta que huela a nuez. Prepáralo en french press con agua a 90°C para obtener ese carácter terroso típico de Java.",
                en: "Lightly roast ground coffee in a dry pan until nutty. Brew in a french press at 90°C to mimic Java’s earthy profile."
            }
        },
        {
            nombre: { ast: "Cold Brew", es: "Cold Brew", en: "Cold Brew" },
            descripcion: { 
                ast: "Preparao n'infusión fría por 24 hores, nidiu y duce.", 
                es: "Preparado en infusión fría por 24 horas, suave y dulce.", 
                en: "Prepared by cold infusion for 24 hours, smooth and sweet." 
            },
            origen: { ast: "Xapón", es: "Japón", en: "Japan" },
            tipo: { ast: "fríu", es: "frío", en: "cold" },
            intensidad: 60,
            alternativa: {
                ast: "Mezcla 5 cucharones de café gruesu con 500ml d'agua frío nun tarru. Tapa y dexa na nevera 24 hores. Cuéyalo con un filtru de tela o colador finu. Sirvi con xelu y un chorrón de lleche d'almendres.",
                es: "Combina 5 cucharadas de café grueso con 500ml de agua fría. Refrigera 24 horas. Filtra con una estameña o colador fino. Sirve con hielo y leche de almendras.",
                en: "Mix 5 tbsp coarse coffee with 2 cups cold water. Refrigerate for 24 hours. Strain through a cheesecloth. Serve over ice with almond milk."
            }
        },
        {
            nombre: { ast: "Café Fríu Vietnamita", es: "Café Helado Vietnamita", en: "Vietnamese Iced Coffee" },
            descripcion: { 
                ast: "Mezcla robusta con lleche condensada y xelu.", 
                es: "Mezcla robusta con leche condensada y hielo.", 
                en: "Robusta blend with condensed milk and ice." 
            },
            origen: { ast: "Vietnam", es: "Vietnam", en: "Vietnam" },
            tipo: { ast: "fríu", es: "frío", en: "cold" },
            intensidad: 65,
            alternativa: {
                ast: "VFai un café bien prieto (como l'espresso) y mézclalu con 2 cucharones de lleche condensada. Añái xelu si prefierse fríu.",
                es: "Prepara café concentrado y mezcla con 2 cucharadas de leche condensada. Añade hielo para la versión fría.",
                en: "Brew strong coffee and mix with 2 tbsp condensed milk. Add ice for iced version."
            }
        },
        {
            nombre: { ast: "Iced Americanu", es: "Iced Americano", en: "Iced Americano" },
            descripcion: { 
                ast: "Espresso diluyíu n'agua frío con xelu.", 
                es: "Espresso diluido en agua fría con hielo.", 
                en: "Espresso diluted in cold water with ice." 
            },
            origen: { ast: "Estaos Xuníos", es: "Estados Unidos", en: "United States" },
            tipo: { ast: "fríu", es: "frío", en: "cold" },
            intensidad: 55,
            alternativa: {
                ast: "Fai un café normal pero doble de fuerte. Echa sobre xelu y completa con agua frío hasta enllenar la taza.",
                es: "Prepara café al doble de concentración. Vierte sobre hielo y completa con agua fría.",
                en: "Brew double-strength coffee. Pour over ice and top with cold water."
            }
        },
        {
            nombre: { ast: "Frappé Griegu", es: "Frappé Griego", en: "Greek Frappé" },
            descripcion: { 
                ast: "Espresso batíu con xelu y escuma cremosa.", 
                es: "Espresso batido con hielo y espuma cremosa.", 
                en: "Espresso shaken with ice and creamy foam." 
            },
            origen: { ast: "Grecia", es: "Grecia", en: "Greece" },
            tipo: { ast: "fríu", es: "frío", en: "cold" },
            intensidad: 50,
            alternativa: {
                ast: "Bati 2 cucharones de café instantáneu, 2 de zucre y un pocu d'agua nun tarru 2 minutos hasta facer espuma. Echa sobre xelu y añái lleche frío.",
                es: "Batir 2 cucharadas de café instantáneo, azúcar y un poco de agua hasta crear espuma. Servir sobre hielo con leche fría.",
                en: "Shake 2 tbsp instant coffee, sugar, and water until frothy. Pour over ice and add cold milk."
            }
        },
        {
            nombre: { ast: "Affogato", es: "Affogato", en: "Affogato" },
            descripcion: { 
                ast: "Xeláu de vainilla 'afogáu' n'espresso caliente.", 
                es: "Helado de vainilla 'ahogado' en espresso caliente.", 
                en: "Vanilla ice cream 'drowned' in hot espresso." 
            },
            origen: { ast: "Italia", es: "Italia", en: "Italy" },
            tipo: { ast: "fríu", es: "frío", en: "cold" },
            intensidad: 45,
            alternativa: {
                ast: "Pon una bola de xeláu de vainilla nun tazón pequeñu y echa un churru de café caliente per riba..",
                es: "Coloca una bola de helado de vainilla en una taza y vierte un shot de café caliente sobre él.",
                en: "Place a scoop of vanilla ice cream in a cup and pour a hot espresso shot over it."
            }
        }
    ];

    // Estado de la app
    let counter = localStorage.getItem('coffeeCounter') || 0;
    let currentLang = localStorage.getItem('language') || 'es';
    let currentTheme = localStorage.getItem('theme') || 'light';
    let currentCoffee = null;
    
    // Elementos del DOM
    const elementsToTranslate = {
        'main-title': 'title',
        'subtitle': 'subtitle',
        'intensity-label': 'intensity',
        'generate-btn': 'generate',
        'alternative-btn': 'alternativeBtn',
        'footer-text': 'madeWith',
        'disclaimer-text': 'createdBy'
    };

    // Inicializar
    function init() {
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeIcon();
        setActiveLanguageButton();
        translatePage();
        generarCafe();
    }

    // Traducir página
    function translatePage() {
        const lang = translations[currentLang];
        
        // Traducir elementos estáticos
        Object.entries(elementsToTranslate).forEach(([id, key]) => {
            const element = document.getElementById(id);
            if (element) element.textContent = lang[key];
        });
        
        // Actualizar contador
        updateCounter();
    }

    // Generar café
    function generarCafe() {
        currentCoffee = cafes[Math.floor(Math.random() * cafes.length)];
        const lang = currentLang;
        
        // Actualizar UI
        document.getElementById('coffee-title').textContent = currentCoffee.nombre[lang];
        document.getElementById('coffee-description').textContent = currentCoffee.descripcion[lang];
        document.getElementById('coffee-origin').innerHTML = `<strong>${translations[lang].origin}</strong> ${currentCoffee.origen[lang]}`;
        
        const typeText = currentCoffee.tipo[lang] === 'caliente' || currentCoffee.tipo[lang] === 'hot' ? 
            translations[lang].hot : 
            translations[lang].cold;
        document.getElementById('coffee-type').innerHTML = `<strong>${translations[lang].type}</strong> ${typeText}`;
        
        document.getElementById('coffee-intensity').innerHTML = `<strong>${translations[lang].intensity}</strong> ${currentCoffee.intensidad}/100`;
        document.getElementById('intensity-level').style.width = `${currentCoffee.intensidad}%`;
        
        // Ocultar alternativa
        document.getElementById('alternative-container').style.display = 'none';
        
        // Contador
        counter++;
        localStorage.setItem('coffeeCounter', counter);
        updateCounter();
    }

    // Mostrar alternativa
    function mostrarAlternativa() {
        const container = document.getElementById('alternative-container');
        const methodEl = document.getElementById('alternative-method');
        const lang = currentLang;
        
        if (currentCoffee && currentCoffee.alternativa) {
            methodEl.innerHTML = `<strong>${translations[lang].alternativeTitle}</strong> ${currentCoffee.alternativa[lang]}`;
            container.style.display = 'block';
        }
    }

    // Actualizar contador
    function updateCounter() {
        document.getElementById('coffee-counter').textContent = 
            `${translations[currentLang].counter} ${counter}`;
    }

    // Cambiar idioma
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        translatePage();
        generarCafe(); // Regenerar para traducir el café actual
    }

    // Botones de idioma
    function setActiveLanguageButton() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === currentLang);
        });
    }

    // Tema oscuro/claro
    function toggleTheme() {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon();
    }

    function updateThemeIcon() {
        const icon = document.querySelector('#theme-toggle i');
        if (currentTheme === 'dark') {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    }

    // Event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
            setActiveLanguageButton();
        });
    });

    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('generate-btn').addEventListener('click', generarCafe);
    document.getElementById('alternative-btn').addEventListener('click', mostrarAlternativa);

    // Inicializar
    init();
});