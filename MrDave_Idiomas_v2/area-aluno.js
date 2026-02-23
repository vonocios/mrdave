// ========================================
// Mr. Dave Idiomas — area-aluno.js
// WP: Registrar via wp_enqueue_scripts()
// ========================================

// ========================================
// DADOS PLACEHOLDER
// WP: Substituir por dados vindos do PHP/REST API via wp_localize_script()
// ========================================
const DADOS_ALUNO = {
    nome: 'João Silva',
    email: 'joao@email.com',
    curso: 'uspeaK',        // 'uspeaK' ou 'aquiTuHablas'
    temDebito: false,       // true = mostra alerta financeiro
    valorDebito: 159.99,
};

const AULAS = {
    uspeaK: [
        { id: 1, titulo: 'Greetings and Introductions', descricao: 'Cumprimentos e apresentações básicas', duracao: '45min' },
        { id: 2, titulo: 'Daily Routines', descricao: 'Vocabulário de rotinas diárias', duracao: '50min' },
        { id: 3, titulo: 'Numbers and Time', descricao: 'Números, horas e datas', duracao: '40min' },
        { id: 4, titulo: 'Food and Restaurants', descricao: 'Vocabulário de alimentação', duracao: '55min' },
        { id: 5, titulo: 'Travel and Transportation', descricao: 'Situações de viagem', duracao: '45min' },
        { id: 6, titulo: 'Shopping and Money', descricao: 'Compras e transações', duracao: '50min' },
        { id: 7, titulo: 'Work and Professions', descricao: 'Vocabulário profissional', duracao: '45min' },
        { id: 8, titulo: 'Health and Body', descricao: 'Saúde, corpo e emoções', duracao: '50min' },
    ],
    aquiTuHablas: [
        { id: 1, titulo: 'Saludos y Presentaciones', descricao: 'Cumprimentos e apresentações', duracao: '45min' },
        { id: 2, titulo: 'La Familia', descricao: 'Vocabulário de família', duracao: '50min' },
        { id: 3, titulo: 'Comida y Bebida', descricao: 'Alimentação e restaurantes', duracao: '45min' },
        { id: 4, titulo: 'Los Números', descricao: 'Números, horas e datas', duracao: '40min' },
        { id: 5, titulo: 'El Trabajo', descricao: 'Ambiente de trabalho', duracao: '50min' },
        { id: 6, titulo: 'Los Viajes', descricao: 'Viagens e turismo', duracao: '55min' },
        { id: 7, titulo: 'La Ciudad', descricao: 'Orientação e lugares', duracao: '45min' },
        { id: 8, titulo: 'La Salud', descricao: 'Saúde e bem-estar', duracao: '50min' },
    ]
};

const MATERIAL_AULAS = {
    uspeaK: [
        `Unit 1 — Greetings and Introductions\n\nKey vocabulary: Hello, Hi, Good morning, Good afternoon, Good evening, Goodbye, See you later, Nice to meet you, What's your name? My name is... Where are you from? I'm from Brazil.\n\nGrammar focus: verb "to be" in simple present — I am, you are, he/she/it is, we are, they are.\n\nPronunciation tip: In American English, "Hi" is more informal than "Hello." Use "Good morning" until noon, "Good afternoon" from noon to 6 PM, and "Good evening" after 6 PM.`,
        `Unit 2 — Daily Routines\n\nKey vocabulary: wake up, brush my teeth, have breakfast, go to work, have lunch, come home, have dinner, watch TV, go to bed.\n\nGrammar focus: Simple Present Tense — I wake up at 7 AM. She has breakfast at 8 AM. We go to work by bus.\n\nExercise: Describe your own daily routine using at least 8 verbs from today's lesson.`,
        `Unit 3 — Numbers and Time\n\nCardinal numbers: one, two, three... ten, eleven, twelve, thirteen... twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety, one hundred.\n\nTelling time: It's one o'clock. It's half past two. It's quarter to five. It's ten minutes past three.\n\nDates: January, February, March, April, May, June, July, August, September, October, November, December.`,
        `Unit 4 — Food and Restaurants\n\nKey vocabulary: appetizer, main course, dessert, beverage, menu, waiter, bill, reservation, delicious, spicy, sweet, salty, bitter.\n\nUseful phrases: Can I have the menu please? I'd like to order... What do you recommend? The bill please. Is service included?\n\nDialogue practice: At the restaurant — ordering a meal and asking for the check.`,
        `Unit 5 — Travel and Transportation\n\nVocabulary: airport, train station, bus stop, taxi, subway, platform, departure, arrival, boarding pass, passport, luggage, hotel, reservation.\n\nPhrases: Where is...? How do I get to...? How much is a ticket to...? Is this seat taken? What time does it depart?`,
        `Unit 6 — Shopping and Money\n\nVocabulary: price, discount, sale, receipt, cash, credit card, change, expensive, cheap, affordable, fitting room, size, color.\n\nPhrases: How much does this cost? Do you have this in a different size? Can I try it on? Do you accept credit cards? I'd like a refund.`,
        `Unit 7 — Work and Professions\n\nProfessions: doctor, teacher, engineer, lawyer, accountant, programmer, nurse, chef, manager, salesperson, architect.\n\nWorkplace vocabulary: meeting, deadline, colleague, boss, salary, promotion, interview, resume, office, remote work.\n\nGrammar: What do you do? I work as a... I am a...`,
        `Unit 8 — Health and Body\n\nBody parts: head, neck, shoulder, arm, hand, finger, chest, back, leg, knee, foot, stomach.\n\nAilments: headache, stomachache, cold, fever, sore throat, allergy, fatigue, stress.\n\nPhrases at the doctor: I have a headache. I don't feel well. I have a temperature. I'm allergic to... Can you prescribe something?`,
    ],
    aquiTuHablas: [
        `Unidad 1 — Saludos y Presentaciones\n\nVocabulario clave: Hola, Buenos días, Buenas tardes, Buenas noches, Adiós, Hasta luego, Mucho gusto, ¿Cómo te llamas? Me llamo... ¿De dónde eres? Soy de Brasil.\n\nGramática: Verbo "ser" en presente — yo soy, tú eres, él/ella es, nosotros somos, ellos son.\n\nPronunciación: en español, cada vocal tiene un solo sonido, a diferencia del inglés. Practica: a-e-i-o-u.`,
        `Unidad 2 — La Familia\n\nVocabulario: madre, padre, hijo, hija, hermano, hermana, abuelo, abuela, tío, tía, primo, prima, esposo, esposa.\n\nAdjetivos: mayor, menor, mayor que yo, casado, soltero, divorciado.\n\nEjercicio: Describe tu familia. Usa frases como: Tengo dos hermanos. Mi madre se llama...`,
        `Unidad 3 — Comida y Bebida\n\nVocabulario: desayuno, almuerzo, cena, restaurante, menú, camarero, cuenta, agua, jugo, café, arroz, frijoles, pollo, carne.\n\nFrases útiles: ¿Me puede traer la carta? Quisiera pedir... ¿Qué recomienda? La cuenta, por favor. ¿Está incluido el servicio?`,
        `Unidad 4 — Los Números\n\nNúmeros cardinales: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez... veinte, treinta, cien, mil.\n\nLa hora: ¿Qué hora es? Es la una. Son las dos y media. Son las tres y cuarto. Son las cinco menos diez.\n\nLos meses: enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre.`,
        `Unidad 5 — El Trabajo\n\nProfesiones: médico, maestro, ingeniero, abogado, contador, programador, enfermero, cocinero, gerente, arquitecto.\n\nVocabulario laboral: reunión, plazo, colega, jefe, salario, ascenso, entrevista, currículum, oficina.\n\nGramática: ¿A qué te dedicas? Soy... Trabajo como... Trabajo en...`,
        `Unidad 6 — Los Viajes\n\nVocabulario: aeropuerto, estación de tren, parada de autobús, taxi, metro, andén, salida, llegada, maleta, hotel, reservación.\n\nFrases: ¿Dónde está...? ¿Cómo llego a...? ¿Cuánto cuesta el boleto para...? ¿Está ocupado este asiento? ¿A qué hora sale?`,
        `Unidad 7 — La Ciudad\n\nVocabulario: calle, avenida, plaza, parque, banco, correo, hospital, farmacia, supermercado, librería, semáforo, cruce.\n\nDirecciones: gira a la derecha, gira a la izquierda, sigue recto, cruza la calle, al lado de, frente a, detrás de, entre.`,
        `Unidad 8 — La Salud\n\nPartes del cuerpo: cabeza, cuello, hombro, brazo, mano, dedo, pecho, espalda, pierna, rodilla, pie, estómago.\n\nEnfermedades: dolor de cabeza, dolor de estómago, resfriado, fiebre, dolor de garganta, alergia, fatiga.\n\nEn el médico: Me duele la cabeza. No me siento bien. Tengo fiebre. Soy alérgico/a a... ¿Puede recetarme algo?`,
    ]
};

// ---- Utilitários ----
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

// Estado salvo em localStorage (para progresso de aulas assistidas)
// WP: substituir por chamadas à API REST do WordPress (wp-json/wp/v2/...)
function getProgressoStorage() {
    try {
        return JSON.parse(localStorage.getItem('mrdave_progresso') || '{}');
    } catch(e) { return {}; }
}
function salvarProgresso(data) {
    try { localStorage.setItem('mrdave_progresso', JSON.stringify(data)); } catch(e) {}
}

let progresso = getProgressoStorage();
let currentAulaId = null;
let ttsUtterance = null;

// ========================================
// LOGIN
// ========================================
const loginScreen = $('loginScreen');
const dashboardWrapper = $('dashboardWrapper');

// Simula login com qualquer email/senha
// WP: substituir pela chamada à API de autenticação do WordPress
$('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const email = $('loginEmail').value;
    const senha = $('loginSenha').value;
    if (!email || !senha) return;

    // WP: fetch('/wp-json/jwt-auth/v1/token', { method:'POST', body:JSON.stringify({username:email,password:senha}) })
    sessionStorage.setItem('mrdave_logado', '1');
    iniciarDashboard();
});

function iniciarDashboard() {
    loginScreen.style.display = 'none';
    dashboardWrapper.style.display = 'block';
    configurarDashboard();
}

// Auto-login se já logado na sessão
if (sessionStorage.getItem('mrdave_logado')) {
    iniciarDashboard();
}

// Logout
$('logoutBtn').addEventListener('click', () => {
    sessionStorage.removeItem('mrdave_logado');
    location.reload();
});

// ========================================
// CONFIGURAR DASHBOARD
// ========================================
function configurarDashboard() {
    const cursoBadgeLabel = DADOS_ALUNO.curso === 'uspeaK' ? 'USpeaK — Inglês' : 'Aquí Tú Hablas — Espanhol';
    $('userName').textContent = DADOS_ALUNO.nome;
    $('cursoHeader').textContent = DADOS_ALUNO.curso === 'uspeaK' ? 'USpeaK' : 'Aquí Tú Hablas';
    $('sidebarCursoBadge').textContent = cursoBadgeLabel;

    // Alerta financeiro
    if (DADOS_ALUNO.temDebito) {
        $('alertaFinanceiro').style.display = 'flex';
        $('badgeFinanceiro').style.display = 'flex';
    }

    // Renderizar aulas
    renderizarAulas();

    // Configurar financeiro
    renderizarFinanceiro();

    // Configurar navegação
    configurarNavegacao();

    // TTS
    configurarTTS();

    // Sidebar mobile
    configurarSidebarMobile();
}

// ========================================
// AULAS LIST
// ========================================
function renderizarAulas() {
    const aulasList = $('aulasList');
    const aulas = AULAS[DADOS_ALUNO.curso];
    if (!aulas) return;

    aulasList.innerHTML = aulas.map(aula => {
        const chave = `${DADOS_ALUNO.curso}_aula_${aula.id}`;
        const assistida = !!progresso[chave];
        return `
        <div class="aula-item" data-id="${aula.id}">
            <div class="aula-check ${assistida ? 'checked' : ''}" 
                 title="${assistida ? 'Marcar como não assistida' : 'Marcar como assistida'}"
                 data-chave="${chave}"></div>
            <div class="aula-num">Aula ${String(aula.id).padStart(2,'0')}</div>
            <div class="aula-info">
                <h4>${aula.titulo}</h4>
                <span>${aula.descricao}</span>
            </div>
            <span class="aula-duracao">${aula.duracao}</span>
            <button class="btn-assistir" data-id="${aula.id}" data-titulo="${aula.titulo}">
                ▶ Assistir
            </button>
        </div>`;
    }).join('');

    // Checkbox de assistido/não assistido
    aulasList.querySelectorAll('.aula-check').forEach(check => {
        check.addEventListener('click', e => {
            e.stopPropagation();
            const chave = check.dataset.chave;
            progresso[chave] = !progresso[chave];
            salvarProgresso(progresso);
            check.classList.toggle('checked', !!progresso[chave]);
            check.title = progresso[chave] ? 'Marcar como não assistida' : 'Marcar como assistida';
        });
    });

    // Botão assistir
    aulasList.querySelectorAll('.btn-assistir').forEach(btn => {
        btn.addEventListener('click', () => {
            abrirVideoPage(parseInt(btn.dataset.id), btn.dataset.titulo);
        });
    });
}

function abrirVideoPage(id, titulo) {
    currentAulaId = id;
    $('videoTitle').textContent = `Aula ${id} — ${titulo}`;

    // Carregar material
    const materiais = MATERIAL_AULAS[DADOS_ALUNO.curso];
    const texto = materiais && materiais[id - 1] ? materiais[id - 1] : 'Material desta aula em breve.';
    $('materialAulaTexto').innerHTML = texto.split('\n\n').map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');

    // Parar TTS se estiver tocando
    pararTTS();

    // Marcar como assistida automaticamente
    const chave = `${DADOS_ALUNO.curso}_aula_${id}`;
    if (!progresso[chave]) {
        progresso[chave] = true;
        salvarProgresso(progresso);
        const checkEl = document.querySelector(`.aula-check[data-chave="${chave}"]`);
        if (checkEl) checkEl.classList.add('checked');
    }

    mostrarSecao('videopage');
}

// ========================================
// NAVEGAÇÃO
// ========================================
function configurarNavegacao() {
    // Links do sidebar
    $$('.sidebar-link[data-section]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const section = link.dataset.section;
            pararTTS();
            mostrarSecao(section);
            $$('.sidebar-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Grupos colapsáveis
    $$('.sidebar-group-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const groupId = btn.dataset.group;
            const submenu = $('group-' + groupId);
            if (!submenu) return;
            const isOpen = submenu.classList.contains('open');
            submenu.classList.toggle('open', !isOpen);
            btn.classList.toggle('open', !isOpen);
        });
    });

    // Botão voltar das aulas
    $('btnVoltarAulas').addEventListener('click', () => {
        pararTTS();
        mostrarSecao('cursos');
        const cursosLink = document.querySelector('[data-section="cursos"]');
        if (cursosLink) {
            $$('.sidebar-link').forEach(l => l.classList.remove('active'));
            cursosLink.classList.add('active');
        }
    });

    // Alerta financeiro → seção financeiro
    $('alertaBtn') && $('alertaBtn').addEventListener('click', e => {
        e.preventDefault();
        mostrarSecao('financeiro');
    });
}

function mostrarSecao(nome) {
    $$('.content-section').forEach(s => s.classList.remove('active'));
    const target = $('section-' + nome);
    if (target) target.classList.add('active');
}

// ========================================
// FINANCEIRO
// ========================================
function renderizarFinanceiro() {
    const container = $('financeiroStatus');
    if (!container) return;

    if (!DADOS_ALUNO.temDebito) {
        container.innerHTML = `
        <div class="financeiro-ok">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <div class="fin-text">
                <h3>Conta em dia ✓</h3>
                <p>Não há pendências financeiras na sua conta.</p>
            </div>
        </div>`;
    } else {
        container.innerHTML = `
        <div class="financeiro-debito">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            <div class="fin-text">
                <h3>Pendência em aberto</h3>
                <p>Há um valor de <strong>R$ ${DADOS_ALUNO.valorDebito.toFixed(2).replace('.', ',')}</strong> pendente na sua conta.</p>
                <a class="btn-pagar" 
                   href="https://wa.me/5512988336873?text=Olá!%20Preciso%20regularizar%20minha%20situação%20financeira%20no%20Mr.%20Dave%20Idiomas"
                   target="_blank">
                    Regularizar pelo WhatsApp
                </a>
            </div>
        </div>`;
    }
}

// ========================================
// TEXT-TO-SPEECH (Web Speech API)
// WP: compatível — roda direto no browser
// ========================================
function configurarTTS() {
    // TTS da página de aula
    $('btnTtsAula').addEventListener('click', () => {
        const texto = $('materialAulaTexto').innerText;
        const voz = $('ttsVoz').value;
        tocarTTS(texto, voz, $('btnTtsAula'), $('btnTtsStop'));
    });
    $('btnTtsStop').addEventListener('click', () => {
        pararTTS();
        $('btnTtsStop').style.display = 'none';
        $('btnTtsAula').style.display = 'flex';
    });

    // TTS da página de material do curso
    $('btnTtsCurso').addEventListener('click', () => {
        const texto = $('materialCursoTexto').innerText;
        const voz = $('ttsVozCurso').value;
        tocarTTS(texto, voz, $('btnTtsCurso'), $('btnTtsStopCurso'));
    });
    $('btnTtsStopCurso').addEventListener('click', () => {
        pararTTS();
        $('btnTtsStopCurso').style.display = 'none';
        $('btnTtsCurso').style.display = 'flex';
    });
}

function tocarTTS(texto, lang, btnPlay, btnStop) {
    if (!window.speechSynthesis) {
        alert('Seu navegador não suporta Text-to-Speech. Tente no Chrome ou Edge.');
        return;
    }
    pararTTS();

    ttsUtterance = new SpeechSynthesisUtterance(texto);
    ttsUtterance.lang = lang;
    ttsUtterance.rate = 0.9;

    // Tentar selecionar voz correspondente ao idioma
    const vozes = window.speechSynthesis.getVoices();
    const vozEncontrada = vozes.find(v => v.lang.startsWith(lang.substring(0, 2)) && v.lang === lang)
                       || vozes.find(v => v.lang.startsWith(lang.substring(0, 2)));
    if (vozEncontrada) ttsUtterance.voice = vozEncontrada;

    ttsUtterance.onend = () => {
        btnStop.style.display = 'none';
        btnPlay.style.display = 'flex';
    };
    ttsUtterance.onerror = () => {
        btnStop.style.display = 'none';
        btnPlay.style.display = 'flex';
    };

    btnPlay.style.display = 'none';
    btnStop.style.display = 'flex';
    window.speechSynthesis.speak(ttsUtterance);
}

function pararTTS() {
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
    // Resetar botões
    [$('btnTtsStop'), $('btnTtsStopCurso')].forEach(btn => {
        if (btn) btn.style.display = 'none';
    });
    [$('btnTtsAula'), $('btnTtsCurso')].forEach(btn => {
        if (btn) btn.style.display = 'flex';
    });
}

// Carregar vozes (pode demorar em alguns browsers)
if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

// ========================================
// SIDEBAR MOBILE
// ========================================
function configurarSidebarMobile() {
    // Criar botão toggle para mobile se não existir
    const sidebar = document.querySelector('.sidebar');
    if (!document.querySelector('.sidebar-toggle')) {
        const toggle = document.createElement('button');
        toggle.className = 'sidebar-toggle';
        toggle.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
        toggle.style.display = 'none'; // controlado por CSS
        document.body.appendChild(toggle);
        toggle.addEventListener('click', () => sidebar.classList.toggle('open'));
    }

    // Fechar sidebar ao clicar em link (mobile)
    $$('.sidebar-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });
}

console.log('%cMr. Dave Idiomas 🌍 — Área do Aluno', 'color:#818cf8;font-size:16px;font-weight:bold;');
console.log('%cWP: dados dinâmicos via wp_localize_script() e REST API', 'color:#64748b;font-size:11px;');
