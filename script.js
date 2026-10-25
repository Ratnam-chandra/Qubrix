// ================= COMPREHENSIVE QUESTION BANK (10 PER CATEGORY) =================
const questionBank = {
    quantum: [
        { id: 'q1', question: "What is the fundamental unit of quantum information called?", options: ["Qubit", "Bit", "Photon", "Quantum Byte"], answer: 0, explanation: "A qubit is the basic unit of quantum information, capable of representing 0, 1, or both simultaneously." },
        { id: 'q2', question: "Which quantum mechanics principle allows qubits to exist in multiple states simultaneously?", options: ["Superposition", "Entanglement", "Decoherence", "Quantum Tunneling"], answer: 0, explanation: "Superposition allows a quantum system to be in a linear combination of states until measured." },
        { id: 'q3', question: "What phenomenon describes two qubits remaining interconnected regardless of distance?", options: ["Quantum Entanglement", "Quantum Teleportation", "Superluminal Interference", "Phase Damping"], answer: 0, explanation: "Quantum Entanglement causes the quantum states of two or more particles to be inextricably linked." },
        { id: 'q4', question: "What is the no-cloning theorem in quantum computing?", options: ["It is impossible to create an identical copy of an arbitrary unknown quantum state", "Qubits cannot be cloned into classical bits", "Quantum code cannot be duplicated across processors", "Entangled pairs cannot be duplicated"], answer: 0, explanation: "The no-cloning theorem states that an arbitrary unknown quantum state cannot be copied perfectly." },
        { id: 'q5', question: "Which algorithm provides an exponential speedup for integer factorization on quantum computers?", options: ["Shor's Algorithm", "Grover's Algorithm", "Deutsch-Jozsa Algorithm", "Bernstein-Vazirani Algorithm"], answer: 0, explanation: "Shor's algorithm factorizes integers in polynomial time on a quantum computer." },
        { id: 'q6', question: "What quadratic quantum speedup algorithm is used for unstructured database search?", options: ["Grover's Algorithm", "Shor's Algorithm", "Variational Quantum Eigensolver", "QAOA"], answer: 0, explanation: "Grover's algorithm searches an unsorted database of N items in O(√N) time." },
        { id: 'q7', question: "What causes a quantum computer to lose its quantum state and revert to classical behavior?", options: ["Quantum Decoherence", "Superposition Collapse", "Thermal Excitation", "Bit-Flip Error"], answer: 0, explanation: "Decoherence happens when environmental noise destroys the delicate quantum coherence." },
        { id: 'q8', question: "What type of quantum logic gate creates an equal superposition from a basis state |0⟩?", options: ["Hadamard Gate (H)", "Pauli-X Gate", "CNOT Gate", "Phase Gate (S)"], answer: 0, explanation: "The Hadamard gate maps basis states |0⟩ and |1⟩ into equal superpositions (|0⟩+|1⟩)/√2." },
        { id: 'q9', question: "What is a CNOT (Controlled-NOT) gate primarily used for in quantum circuits?", options: ["Creating quantum entanglement between two qubits", "Flipping a single qubit unconditionally", "Measuring a qubit state", "Cooling qubits to absolute zero"], answer: 0, explanation: "CNOT acts on two qubits and is the primary building block for generating entangled states like Bell states." },
        { id: 'q10', question: "What temperature environment do superconducting quantum processors operate in?", options: ["Near Absolute Zero (~15 millikelvin)", "Room Temperature (295 Kelvin)", "Sub-zero Celsius (-20°C)", "Boiling Point of Nitrogen"], answer: 0, explanation: "Superconducting qubits require dilution refrigerators operating at ~15 mK to prevent thermal decoherence." }
    ],

    math: [
        { id: 'm1', question: "What is the derivative of f(x) = e^(3x) with respect to x?", options: ["3e^(3x)", "e^(3x)", "3x e^(3x-1)", "(1/3)e^(3x)"], answer: 0, explanation: "Using the chain rule, d/dx[e^(3x)] = e^(3x) * d/dx[3x] = 3e^(3x)." },
        { id: 'm2', question: "What is the determinant of a 2x2 matrix [[a, b], [c, d]]?", options: ["ad - bc", "ac - bd", "ab + cd", "ad + bc"], answer: 0, explanation: "The determinant of matrix [[a,b],[c,d]] is computed as ad - bc." },
        { id: 'm3', question: "In probability theory, what is the sum of probabilities of all possible mutually exclusive outcomes?", options: ["1", "0", "100", "Infinity"], answer: 0, explanation: "The total probability space across all mutually exclusive outcomes always sums to 1." },
        { id: 'm4', question: "What is Euler's Identity, often called the most beautiful equation in mathematics?", options: ["e^(iπ) + 1 = 0", "E = mc²", "a² + b² = c²", "F = ma"], answer: 0, explanation: "Euler's Identity links e, i, π, 1, and 0 in a single compact equation." },
        { id: 'm5', question: "What is the value of ∫ (1/x) dx for x > 0?", options: ["ln(x) + C", "x^(-2) + C", "1 + C", "e^x + C"], answer: 0, explanation: "The antiderivative of 1/x is natural log ln|x| plus constant C." },
        { id: 'm6', question: "Which mathematical sequence has each number as the sum of the preceding two?", options: ["Fibonacci Sequence", "Geometric Progression", "Prime Sequence", "Arithmetic Series"], answer: 0, explanation: "The Fibonacci sequence starts 0, 1, 1, 2, 3, 5, 8... where F(n) = F(n-1) + F(n-2)." },
        { id: 'm7', question: "What is the value of log₂ (32)?", options: ["5", "4", "6", "16"], answer: 0, explanation: "Since 2⁵ = 32, log₂ (32) equals 5." },
        { id: 'm8', question: "In a right triangle, what ratio represents the Sine of an angle θ?", options: ["Opposite / Hypotenuse", "Adjacent / Hypotenuse", "Opposite / Adjacent", "Hypotenuse / Opposite"], answer: 0, explanation: "Sine is defined as the length of the Opposite side divided by the Hypotenuse." },
        { id: 'm9', question: "What is the order of matrix multiplication dimensions for A (m×n) and B (n×p)?", options: ["Product matrix has dimensions m × p", "Product matrix has dimensions n × n", "Dimensions m × n", "Cannot be multiplied"], answer: 0, explanation: "Multiplying (m×n) by (n×p) yields an (m×p) matrix." },
        { id: 'm10', question: "What is the value of 0! (zero factorial)?", options: ["1", "0", "Undefined", "Infinity"], answer: 0, explanation: "By mathematical convention and gamma function definition, 0! is defined as 1." }
    ],

    webdev: [
        { id: 'w1', question: "Which HTML5 element is used for dynamic script-based bitmap drawing?", options: ["<canvas>", "<svg>", "<graphic>", "<picture>"], answer: 0, explanation: "The <canvas> element provides a resolution-dependent bitmap surface." },
        { id: 'w2', question: "What is the effect of 'box-sizing: border-box' in CSS?", options: ["Includes padding & border in total element dimensions", "Adds outer glow border", "Forces absolute positioning", "Excludes padding"], answer: 0, explanation: "border-box prevents padding and borders from inflating outer layout width." },
        { id: 'w3', question: "What handles asynchronous non-blocking task queues in JavaScript?", options: ["Event Loop", "V8 Engine", "DOM Parser", "JIT Compiler"], answer: 0, explanation: "The Event Loop monitors the call stack and moves callback tasks execution queue." },
        { id: 'w4', question: "Which HTTP status code represents resource creation?", options: ["201 Created", "200 OK", "204 No Content", "301 Moved"], answer: 0, explanation: "HTTP 201 Created signals successful resource creation." },
        { id: 'w5', question: "What is the typeof NaN in JavaScript?", options: ["'number'", "'nan'", "'undefined'", "'object'"], answer: 0, explanation: "NaN belongs to the primitive number data type in JavaScript." },
        { id: 'w6', question: "Which CSS property specifies element vertical layer stacking?", options: ["z-index", "layer-order", "depth", "position-z"], answer: 0, explanation: "z-index controls stacking order along the z-axis." },
        { id: 'w7', question: "What JavaScript method converts a JSON string into an object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"], answer: 0, explanation: "JSON.parse() deserializes JSON strings into JS objects." },
        { id: 'w8', question: "Which HTTP header protects against Cross-Site Scripting (XSS)?", options: ["Content-Security-Policy", "Access-Control-Allow-Origin", "X-Frame-Options", "Strict-Transport-Security"], answer: 0, explanation: "CSP restricts sources of scripts and executable resources." },
        { id: 'w9', question: "What is the purpose of the JavaScript 'use strict' directive?", options: ["Enforces stricter parsing and error handling", "Speeds up CSS animations", "Enables TypeScript syntax", "Prevents network requests"], answer: 0, explanation: "Strict mode catches silent errors and prevents unsafe code patterns." },
        { id: 'w10', question: "Which modern Web API handles client-side offline data storage with queries?", options: ["IndexedDB", "localStorage", "sessionStorage", "Cookies"], answer: 0, explanation: "IndexedDB provides a full client-side database for structured record storage." }
    ],

    cs: [
        { id: 'c1', question: "What is the average search time complexity in a balanced BST?", options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"], answer: 0, explanation: "Balanced BSTs halve remaining elements each comparison, giving O(log n)." },
        { id: 'c2', question: "Which data structure operates on a Last-In-First-Out (LIFO) model?", options: ["Stack", "Queue", "Heap", "Tree"], answer: 0, explanation: "Stacks process items in LIFO order." },
        { id: 'c3', question: "What primary issue does CPU memory paging solve?", options: ["External Memory Fragmentation", "Cache Misses", "Disk Latency", "Deadlocks"], answer: 0, explanation: "Paging allows physical memory to be allocated non-contiguously." },
        { id: 'c4', question: "Which OSI model layer does TCP operate at?", options: ["Transport Layer (Layer 4)", "Network Layer (Layer 3)", "Application Layer (Layer 7)", "Data Link Layer"], answer: 0, explanation: "TCP is a core Layer 4 Transport protocol." },
        { id: 'c5', question: "Which sorting algorithm guarantees O(n log n) worst-case performance?", options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Insertion Sort"], answer: 0, explanation: "Merge sort divides and merges consistently in O(n log n) time." },
        { id: 'c6', question: "What condition is required for a deadlock to occur in concurrency?", options: ["Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait", "Single thread access", "High CPU load", "Infinite recursion"], answer: 0, explanation: "The Coffman conditions must hold simultaneously for a deadlock." },
        { id: 'c7', question: "What is the worst-case space complexity of Depth-First Search (DFS) on a tree of height h?", options: ["O(h)", "O(V)", "O(1)", "O(V + E)"], answer: 0, explanation: "DFS call stack depth is bounded by maximum tree height h." },
        { id: 'c8', question: "Which graph algorithm finds the shortest path from a single source with non-negative edge weights?", options: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Kruskal's Algorithm", "Floyd-Warshall"], answer: 0, explanation: "Dijkstra's algorithm efficiently computes single-source shortest paths." },
        { id: 'c9', question: "What type of grammar can be parsed using a Pushdown Automaton (PDA)?", options: ["Context-Free Grammar", "Regular Grammar", "Context-Sensitive Grammar", "Unrestricted Grammar"], answer: 0, explanation: "Pushdown Automata correspond to Context-Free Languages." },
        { id: 'c10', question: "What is the main advantage of a Hash Table?", options: ["O(1) average time complexity for lookup and insertion", "Sorted key storage", "No memory overhead", "Sequential access guarantee"], answer: 0, explanation: "Hash tables offer near instant O(1) average lookup and insertion." }
    ],

    gk: [
        { id: 'g1', question: "Which planet in our solar system has the most confirmed moons?", options: ["Saturn", "Jupiter", "Neptune", "Uranus"], answer: 0, explanation: "Saturn leads with over 140 confirmed moons." },
        { id: 'g2', question: "Who discovered Penicillin in 1928?", options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Robert Koch"], answer: 0, explanation: "Alexander Fleming discovered penicillin in mold." },
        { id: 'g3', question: "What is the chemical formula for Ozone?", options: ["O3", "O2", "CO2", "H2O2"], answer: 0, explanation: "Ozone consists of three oxygen atoms." },
        { id: 'g4', question: "What speed does light travel in a vacuum?", options: ["~300,000 km/s", "150,000 km/s", "1,000,000 km/s", "30,000 km/s"], answer: 0, explanation: "Speed of light is approximately 299,792 km/s." },
        { id: 'g5', question: "What element has the chemical symbol 'Au'?", options: ["Gold", "Silver", "Copper", "Aluminum"], answer: 0, explanation: "Au comes from the Latin word for gold, 'Aurum'." },
        { id: 'g6', question: "What subatomic particle carries a negative electric charge?", options: ["Electron", "Proton", "Neutron", "Positron"], answer: 0, explanation: "Electrons carry negative charge." },
        { id: 'g7', question: "What is the powerhouse organelle of eukaryotic cells?", options: ["Mitochondria", "Ribosome", "Nucleus", "Golgi Apparatus"], answer: 0, explanation: "Mitochondria generate cellular ATP energy." },
        { id: 'g8', question: "What process do green plants use to convert light into chemical energy?", options: ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"], answer: 0, explanation: "Photosynthesis converts solar light into glucose." },
        { id: 'g9', question: "What scale measures earthquake magnitude?", options: ["Moment Magnitude / Richter Scale", "Kelvin Scale", "Beaufort Scale", "Mohs Scale"], answer: 0, explanation: "Seismic wave magnitudes are measured on logarithmic scales." },
        { id: 'g10', question: "What is the most abundant gas in Earth's atmosphere?", options: ["Nitrogen (~78%)", "Oxygen (~21%)", "Carbon Dioxide", "Argon"], answer: 0, explanation: "Nitrogen makes up roughly 78% of Earth's atmosphere." }
    ],

    tech: [
        { id: 't1', question: "What neural architecture powers modern Large Language Models?", options: ["Transformer", "CNN", "RNN", "Decision Tree"], answer: 0, explanation: "Transformers use self-attention mechanism to process sequences." },
        { id: 't2', question: "Why are GPUs favored for Machine Learning model training?", options: ["High parallel matrix math throughput", "Sequential processing speed", "Lower power consumption", "Large cache capacity"], answer: 0, explanation: "GPUs contain thousands of cores built for parallel matrix math." },
        { id: 't3', question: "What is the role of an Activation Function in neural networks?", options: ["Introduces non-linearity into the model", "Normalizes input weights", "Prevents overfitting", "Reduces dataset size"], answer: 0, explanation: "Activation functions allow neural networks to learn complex non-linear patterns." },
        { id: 't4', question: "What technique prevents neural networks from memorizing training data (overfitting)?", options: ["Dropout", "Forward Propagation", "Batch Normalization", "Gradient Ascent"], answer: 0, explanation: "Dropout randomly deactivates neurons during training to improve generalization." },
        { id: 't5', question: "What optimizer is widely used for training deep learning models?", options: ["Adam Optimizer", "Linear Regression", "K-Means", "Random Forest"], answer: 0, explanation: "Adam combines adaptive gradient algorithms and momentum." },
        { id: 't6', question: "What is 'Zero-Shot Learning' in AI models?", options: ["Ability to perform tasks without explicit task-specific training data", "Training a model with zero GPU usage", "Model with 0% error rate", "Learning from corrupted images"], answer: 0, explanation: "Zero-shot learning handles unobserved classes using general representations." },
        { id: 't7', question: "What does RLHF stand for in fine-tuning generative AI models?", options: ["Reinforcement Learning from Human Feedback", "Recursive Learning for High Frequency", "Restricted Logic with Human Focus", "Random Linear Heuristic Filtering"], answer: 0, explanation: "RLHF aligns model outputs with human intent and safety standards." },
        { id: 't8', question: "What metric evaluates precision vs recall balance in classification?", options: ["F1-Score", "Mean Squared Error", "Accuracy", "R-Squared"], answer: 0, explanation: "F1-Score is the harmonic mean of precision and recall." },
        { id: 't9', question: "What type of learning uses unlabelled data to find hidden patterns?", options: ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning", "Semi-supervised Learning"], answer: 0, explanation: "Unsupervised learning discovers structure without ground truth labels." },
        { id: 't10', question: "What is a 'Hallucination' in Large Language Models?", options: ["Generating confident but factually incorrect statements", "Model shutting down due to memory overflow", "Slowing down inference speed", "Encoding text into binary"], answer: 0, explanation: "Hallucinations occur when an LLM outputs plausible-sounding false information." }
    ]
};

// ================= DYNAMIC CUSTOM AI GENERATOR =================
function generateAiQuestions(topic, count) {
    const templates = [
        { id: 'ai1', q: `What is a fundamental core concept in ${topic}?`, opts: [`Core foundational principles of ${topic}`, `Outdated legacy driver`, `Hardware memory buffer`, `Static CSS layout`], ans: 0, exp: `${topic} relies directly on its fundamental architectural rules.` },
        { id: 'ai2', q: `Which framework or standard methodology is used in ${topic}?`, opts: [`Standard ${topic} Architecture`, `Basic Text File`, `Manual binary patch`, `Plain HTML Tag`], ans: 0, exp: `Industry standard workflows utilize specialized tools tailored for ${topic}.` },
        { id: 'ai3', q: `Why do researchers and engineers adopt ${topic}?`, opts: [`To optimize efficiency and solve complex domain challenges`, `To increase manual overhead`, `To slow down calculations`, `For visual design only`], ans: 0, exp: `${topic} provides high efficiency and targeted problem solving capabilities.` },
        { id: 'ai4', q: `What is considered a best practice when working with ${topic}?`, opts: [`Maintaining structured and modular design`, `Hardcoding all variables`, `Ignoring edge case errors`, `Skipping documentation`], ans: 0, exp: `Modularity and documentation ensure long-term stability in ${topic}.` },
        { id: 'ai5', q: `What is a major optimization goal in ${topic}?`, opts: [`Reducing latency & resource consumption`, `Increasing memory footprint`, `Forcing infinite loops`, `Deleting system logs`], ans: 0, exp: `Optimization in ${topic} focuses on minimizing latency and resource usage.` }
    ];

    const generated = [];
    for (let i = 0; i < count; i++) {
        const t = templates[i % templates.length];
        const options = [...t.opts];
        const correctText = options[t.ans];
        
        for (let j = options.length - 1; j > 0; j--) {
            const r = Math.floor(Math.random() * (j + 1));
            [options[j], options[r]] = [options[r], options[j]];
        }

        generated.push({
            id: `ai-gen-${i}`,
            question: t.q,
            options: options,
            answer: options.indexOf(correctText),
            explanation: t.exp
        });
    }
    return generated;
}

// ================= QUBRIX STATE =================
let currentMode = "standard";
let selectedTopic = "quantum";
let questionCountParam = 10;
let timerSpeedParam = 15;

let activeQuestions = [];
let currentIndex = 0;
let selectedAnswers = []; 
let liveScore = 0;
let currentStreak = 0;
let maxStreak = 0;

let timerInterval = null;
let timeLeft = 15;
let lifelines = { fiftyFifty: true, timeExtend: true, skip: true };

// Multiplayer Simulation State
let isMultiplayer = false;
let rivalProgress = 0;
let rivalTimer = null;

// ================= DOM ELEMENTS =================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const paletteSelect = document.getElementById('paletteSelect');

const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');

const modeStandardBtn = document.getElementById('modeStandardBtn');
const modeAiBtn = document.getElementById('modeAiBtn');
const modeMultiplayerBtn = document.getElementById('modeMultiplayerBtn');
const standardModeContainer = document.getElementById('standardModeContainer');
const aiModeContainer = document.getElementById('aiModeContainer');
const multiplayerModeContainer = document.getElementById('multiplayerModeContainer');
const aiTopicInput = document.getElementById('aiTopicInput');
const roomCodeInput = document.getElementById('roomCodeInput');
const createRoomBtn = document.getElementById('createRoomBtn');

const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');

const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const questionCounter = document.getElementById('questionCounter');
const questionCategoryBadge = document.getElementById('questionCategoryBadge');
const progressBar = document.getElementById('progressBar');
const timerCircle = document.getElementById('timerCircle');
const timerText = document.getElementById('timerText');

const streakCount = document.getElementById('streakCount');
const liveScoreEl = document.getElementById('liveScore');
const bookmarkCurrentBtn = document.getElementById('bookmarkCurrentBtn');

const lifeline5050 = document.getElementById('lifeline5050');
const lifelineTime = document.getElementById('lifelineTime');
const lifelineSkip = document.getElementById('lifelineSkip');

const multiplayerLiveBar = document.getElementById('multiplayerLiveBar');
const rivalProgressBar = document.getElementById('rivalProgressBar');
const rivalProgressText = document.getElementById('rivalProgressText');

const historyModal = document.getElementById('historyModal');
const historyModalBtn = document.getElementById('historyModalBtn');
const closeHistoryBtn = document.getElementById('closeHistoryBtn');
const closeHistoryFooterBtn = document.getElementById('closeHistoryFooterBtn');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const historyList = document.getElementById('historyList');
const heatmapGrid = document.getElementById('heatmapGrid');

const flashcardsModal = document.getElementById('flashcardsModal');
const flashcardsBtn = document.getElementById('flashcardsBtn');
const closeFlashcardsBtn = document.getElementById('closeFlashcardsBtn');
const closeFlashcardsFooterBtn = document.getElementById('closeFlashcardsFooterBtn');
const flashcardsList = document.getElementById('flashcardsList');

// ================= THEME & PALETTE TOGGLES =================
function initTheme() {
    if (localStorage.theme === 'light') {
        document.documentElement.classList.add('light-mode');
        themeIcon.className = 'fa-solid fa-sun';
    } else {
        document.documentElement.classList.remove('light-mode');
        themeIcon.className = 'fa-solid fa-moon';
    }
    if (localStorage.palette) {
        document.body.setAttribute('data-palette', localStorage.palette);
        paletteSelect.value = localStorage.palette;
    }
}

themeToggle.addEventListener('click', () => {
    if (document.documentElement.classList.contains('light-mode')) {
        document.documentElement.classList.remove('light-mode');
        localStorage.theme = 'dark';
        themeIcon.className = 'fa-solid fa-moon';
    } else {
        document.documentElement.classList.add('light-mode');
        localStorage.theme = 'light';
        themeIcon.className = 'fa-solid fa-sun';
    }
});

paletteSelect.addEventListener('change', (e) => {
    const palette = e.target.value;
    document.body.setAttribute('data-palette', palette);
    localStorage.palette = palette;
});

// ================= MODE & PARAMETER HANDLERS =================
modeStandardBtn.addEventListener('click', () => {
    currentMode = "standard";
    isMultiplayer = false;
    modeStandardBtn.classList.add('active');
    modeAiBtn.classList.remove('active');
    modeMultiplayerBtn.classList.remove('active');
    standardModeContainer.classList.remove('hidden');
    aiModeContainer.classList.add('hidden');
    multiplayerModeContainer.classList.add('hidden');
});

modeAiBtn.addEventListener('click', () => {
    currentMode = "ai";
    isMultiplayer = false;
    modeAiBtn.classList.add('active');
    modeStandardBtn.classList.remove('active');
    modeMultiplayerBtn.classList.remove('active');
    aiModeContainer.classList.remove('hidden');
    standardModeContainer.classList.add('hidden');
    multiplayerModeContainer.classList.add('hidden');
});

modeMultiplayerBtn.addEventListener('click', () => {
    currentMode = "multiplayer";
    isMultiplayer = true;
    modeMultiplayerBtn.classList.add('active');
    modeStandardBtn.classList.remove('active');
    modeAiBtn.classList.remove('active');
    multiplayerModeContainer.classList.remove('hidden');
    standardModeContainer.classList.add('hidden');
    aiModeContainer.classList.add('hidden');
});

createRoomBtn.addEventListener('click', () => {
    const code = roomCodeInput.value.trim() || `QUBRIX-${Math.floor(1000 + Math.random() * 9000)}`;
    roomCodeInput.value = code;
    alert(`Room "${code}" created successfully! Launching session against simulated rival.`);
    startQuiz();
});

document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.topic-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selectedTopic = card.getAttribute('data-topic');
    });
});

document.querySelectorAll('.btn-toggle-group').forEach(group => {
    group.querySelectorAll('.param-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            group.querySelectorAll('.param-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');

            if (btn.hasAttribute('data-count')) {
                questionCountParam = parseInt(btn.getAttribute('data-count'));
            }
            if (btn.hasAttribute('data-timer')) {
                timerSpeedParam = parseInt(btn.getAttribute('data-timer'));
            }
        });
    });
});

// ================= QUBRIX GAME ENGINE =================
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', handleNext);
restartBtn.addEventListener('click', resetQuiz);

function startQuiz() {
    if (currentMode === "ai") {
        const topic = aiTopicInput.value.trim() || "Technology";
        activeQuestions = generateAiQuestions(topic, questionCountParam);
        questionCategoryBadge.textContent = `AI: ${topic}`;
    } else {
        let pool = [...(questionBank[selectedTopic] || questionBank.quantum)];
        
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]];
        }

        pool = pool.map(q => {
            const options = [...q.options];
            const correctText = options[q.answer];
            for (let j = options.length - 1; j > 0; j--) {
                const r = Math.floor(Math.random() * (j + 1));
                [options[j], options[r]] = [options[r], options[j]];
            }
            return {
                id: q.id,
                question: q.question,
                options: options,
                answer: options.indexOf(correctText),
                explanation: q.explanation
            };
        });

        activeQuestions = pool.slice(0, Math.min(questionCountParam, pool.length));
        const categoryNames = { 
            quantum: 'Quantum Computing', 
            math: 'Mathematics', 
            webdev: 'Web Development', 
            cs: 'Computer Science', 
            gk: 'General Science', 
            tech: 'AI & Machine Learning' 
        };
        questionCategoryBadge.textContent = categoryNames[selectedTopic] || 'General';
    }

    currentIndex = 0;
    selectedAnswers = new Array(activeQuestions.length).fill(null);
    liveScore = 0;
    currentStreak = 0;
    maxStreak = 0;
    lifelines = { fiftyFifty: true, timeExtend: true, skip: true };

    updateLifelines();
    liveScoreEl.textContent = '0';
    streakCount.textContent = '0 Streak';

    if (isMultiplayer) {
        multiplayerLiveBar.classList.remove('hidden');
        rivalProgress = 0;
        startRivalSimulation();
    } else {
        multiplayerLiveBar.classList.add('hidden');
    }

    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    renderQuestion();
}

function startRivalSimulation() {
    clearInterval(rivalTimer);
    rivalTimer = setInterval(() => {
        if (rivalProgress < activeQuestions.length) {
            if (Math.random() > 0.35) {
                rivalProgress++;
                const pct = (rivalProgress / activeQuestions.length) * 100;
                rivalProgressBar.style.width = `${pct}%`;
                rivalProgressText.textContent = `Rival Progress: Q${rivalProgress}/${activeQuestions.length}`;
            }
        }
    }, 2800);
}

function renderQuestion() {
    clearInterval(timerInterval);
    const q = activeQuestions[currentIndex];

    questionCounter.textContent = `Question ${currentIndex + 1} of ${activeQuestions.length}`;
    const pct = (currentIndex / activeQuestions.length) * 100;
    progressBar.style.width = `${pct}%`;

    questionText.textContent = q.question;
    optionsContainer.innerHTML = '';

    // Check Bookmark Status
    updateBookmarkButtonState(q);

    q.options.forEach((opt, idx) => {
        const isSelected = selectedAnswers[currentIndex] === idx;
        const optionEl = document.createElement('div');
        optionEl.id = `opt-${idx}`;
        optionEl.className = `option-item ${isSelected ? 'user-selected' : ''}`;
        
        optionEl.innerHTML = `
            <div class="flex items-center">
                <span class="option-badge">${String.fromCharCode(65 + idx)}</span>
                <span style="font-size: 0.95rem;">${opt}</span>
            </div>
        `;

        optionEl.addEventListener('click', () => selectOption(idx));
        optionsContainer.appendChild(optionEl);
    });

    nextBtn.disabled = selectedAnswers[currentIndex] === null;
    document.getElementById('nextBtnText').textContent = currentIndex === activeQuestions.length - 1 ? 'Finish Quiz' : 'Next Question';

    startTimer();
}

function selectOption(index) {
    selectedAnswers[currentIndex] = index;

    document.querySelectorAll('.option-item').forEach((el, idx) => {
        if (idx === index) {
            el.classList.add('user-selected');
        } else {
            el.classList.remove('user-selected');
        }
    });

    nextBtn.disabled = false;
}

function startTimer() {
    timeLeft = timerSpeedParam;
    timerText.textContent = timeLeft;
    const circumference = 138.2;
    timerCircle.style.strokeDashoffset = '0';
    timerCircle.style.stroke = 'var(--accent-cyan)';

    timerInterval = setInterval(() => {
        timeLeft--;
        timerText.textContent = timeLeft;

        const offset = circumference - (timeLeft / timerSpeedParam) * circumference;
        timerCircle.style.strokeDashoffset = offset;

        if (timeLeft <= 4) {
            timerCircle.style.stroke = 'var(--accent-rose)';
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleNext();
        }
    }, 1000);
}

function handleNext() {
    clearInterval(timerInterval);

    const userChoice = selectedAnswers[currentIndex];
    const q = activeQuestions[currentIndex];

    if (userChoice !== null && userChoice === q.answer) {
        currentStreak++;
        if (currentStreak > maxStreak) maxStreak = currentStreak;
        const speedBonus = timeLeft * 10;
        liveScore += (100 + speedBonus);
    } else {
        currentStreak = 0;
    }

    liveScoreEl.textContent = liveScore;
    streakCount.textContent = `${currentStreak} Streak`;

    if (currentIndex < activeQuestions.length - 1) {
        currentIndex++;
        renderQuestion();
    } else {
        finishQuiz();
    }
}

// ================= BOOKMARK / FLASHCARD FEATURE =================
bookmarkCurrentBtn.addEventListener('click', () => {
    const q = activeQuestions[currentIndex];
    let bookmarks = JSON.parse(localStorage.getItem('qubrixBookmarks') || '[]');
    
    const existsIndex = bookmarks.findIndex(b => b.question === q.question);
    if (existsIndex > -1) {
        bookmarks.splice(existsIndex, 1);
        bookmarkCurrentBtn.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
    } else {
        bookmarks.push(q);
        bookmarkCurrentBtn.innerHTML = '<i class="fa-solid fa-bookmark" style="color: var(--accent-cyan);"></i>';
    }
    localStorage.setItem('qubrixBookmarks', JSON.stringify(bookmarks));
});

function updateBookmarkButtonState(q) {
    let bookmarks = JSON.parse(localStorage.getItem('qubrixBookmarks') || '[]');
    const isBookmarked = bookmarks.some(b => b.question === q.question);
    if (isBookmarked) {
        bookmarkCurrentBtn.innerHTML = '<i class="fa-solid fa-bookmark" style="color: var(--accent-cyan);"></i>';
    } else {
        bookmarkCurrentBtn.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
    }
}

flashcardsBtn.addEventListener('click', () => {
    loadFlashcards();
    flashcardsModal.classList.remove('hidden');
});
closeFlashcardsBtn.addEventListener('click', () => flashcardsModal.classList.add('hidden'));
closeFlashcardsFooterBtn.addEventListener('click', () => flashcardsModal.classList.add('hidden'));

function loadFlashcards() {
    let bookmarks = JSON.parse(localStorage.getItem('qubrixBookmarks') || '[]');
    flashcardsList.innerHTML = '';

    if (bookmarks.length === 0) {
        flashcardsList.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 24px 0; font-size: 0.85rem;">No bookmarked flashcards saved yet. Click the bookmark icon during quiz questions!</p>`;
        return;
    }

    bookmarks.forEach((item, idx) => {
        const el = document.createElement('div');
        el.className = 'history-item';
        el.style.flexDirection = 'column';
        el.style.alignItems = 'flex-start';
        el.innerHTML = `
            <div style="font-weight: 700; margin-bottom: 6px; font-size: 0.9rem;">${idx + 1}. ${item.question}</div>
            <div style="font-size: 0.8rem; color: var(--accent-emerald); margin-bottom: 4px;"><strong>Answer:</strong> ${item.options[item.answer]}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">${item.explanation}</div>
        `;
        flashcardsList.appendChild(el);
    });
}

// ================= LIFELINES =================
lifeline5050.addEventListener('click', () => {
    if (!lifelines.fiftyFifty) return;
    lifelines.fiftyFifty = false;
    updateLifelines();

    const q = activeQuestions[currentIndex];
    const incorrectIndices = [];
    q.options.forEach((_, idx) => {
        if (idx !== q.answer) incorrectIndices.push(idx);
    });

    incorrectIndices.sort(() => Math.random() - 0.5);
    const toRemove = incorrectIndices.slice(0, 2);

    toRemove.forEach(idx => {
        const optEl = document.getElementById(`opt-${idx}`);
        if (optEl) {
            optEl.style.opacity = '0.2';
            optEl.style.pointerEvents = 'none';
        }
    });
});

lifelineTime.addEventListener('click', () => {
    if (!lifelines.timeExtend) return;
    lifelines.timeExtend = false;
    updateLifelines();

    timeLeft += 10;
    timerText.textContent = timeLeft;
});

lifelineSkip.addEventListener('click', () => {
    if (!lifelines.skip) return;
    lifelines.skip = false;
    updateLifelines();

    selectedAnswers[currentIndex] = null;
    handleNext();
});

function updateLifelines() {
    lifeline5050.disabled = !lifelines.fiftyFifty;
    lifelineTime.disabled = !lifelines.timeExtend;
    lifelineSkip.disabled = !lifelines.skip;
}

// ================= SCORE & AI DIAGNOSTIC INSIGHTS =================
function finishQuiz() {
    clearInterval(rivalTimer);
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    let correctCount = 0;
    let incorrectCount = 0;

    activeQuestions.forEach((q, idx) => {
        if (selectedAnswers[idx] === q.answer) {
            correctCount++;
        } else {
            incorrectCount++;
        }
    });

    const total = activeQuestions.length;
    const percentage = Math.round((correctCount / total) * 100);

    if (percentage >= 80 && typeof confetti === 'function') {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }

    document.getElementById('statScore').textContent = `${liveScore} pts`;
    document.getElementById('statCorrect').textContent = correctCount;
    document.getElementById('statIncorrect').textContent = incorrectCount;
    document.getElementById('statMaxStreak').textContent = `${maxStreak}🔥`;
    document.getElementById('scorePercentage').textContent = `${percentage}%`;

    // AI Diagnostic Insight Generator
    const aiInsightText = document.getElementById('aiInsightText');
    if (percentage >= 90) {
        aiInsightText.textContent = `🌟 Exceptional Mastery! You demonstrated stellar analytical accuracy. Zero critical knowledge gaps detected across this session.`;
    } else if (percentage >= 70) {
        aiInsightText.textContent = `💡 Solid proficiency! You successfully handled core principles. Review your incorrect answers below to master edge cases.`;
    } else {
        aiInsightText.textContent = `⚠️ Growth Opportunity: You missed several core concepts. We recommend revisiting flashcards and drilling down into foundational principles.`;
    }

    const scoreGauge = document.getElementById('scoreGauge');
    const circumference = 364.4;
    const offset = circumference - (percentage / 100) * circumference;
    setTimeout(() => { scoreGauge.style.strokeDashoffset = offset; }, 100);

    const passStatusBadge = document.getElementById('passStatusBadge');
    if (percentage >= 60) {
        passStatusBadge.textContent = isMultiplayer && rivalProgress <= correctCount ? "VICTORY 🏆" : "PASSED";
        passStatusBadge.className = "status-badge passed";
    } else {
        passStatusBadge.textContent = isMultiplayer ? "DEFEATED ❌" : "NEEDS WORK";
        passStatusBadge.className = "status-badge failed";
    }

    renderBreakdown();
    saveHistory(percentage, liveScore);
}

function renderBreakdown() {
    const container = document.getElementById('breakdownContainer');
    container.innerHTML = '';

    activeQuestions.forEach((q, idx) => {
        const userAns = selectedAnswers[idx];
        const isCorrect = userAns === q.answer;
        const isUnanswered = userAns === null || userAns === undefined;

        const card = document.createElement('div');
        card.className = `review-card ${isCorrect ? 'correct-card' : 'incorrect-card'}`;

        card.innerHTML = `
            <div class="flex justify-between items-center mb-2">
                <h4 class="review-q-title">${idx + 1}. ${q.question}</h4>
                <span class="status-badge ${isCorrect ? 'passed' : 'failed'}">
                    ${isCorrect ? 'Correct' : 'Incorrect'}
                </span>
            </div>
            <p class="review-ans">
                <strong>Your Answer:</strong> ${isUnanswered ? 'Skipped / Timed Out' : q.options[userAns]}
            </p>
            ${!isCorrect ? `<p class="review-ans" style="color: var(--accent-emerald);"><strong>Correct Answer:</strong> ${q.options[q.answer]}</p>` : ''}
            <p class="review-exp"><strong>Explanation:</strong> ${q.explanation}</p>
        `;
        container.appendChild(card);
    });
}

// ================= HISTORY & 7-DAY HEATMAP =================
function saveHistory(percentage, score) {
    const history = JSON.parse(localStorage.getItem('qubrixHistory') || '[]');
    history.unshift({
        date: new Date().toLocaleDateString(),
        category: questionCategoryBadge.textContent,
        score: score,
        percentage: percentage,
        timestamp: Date.now()
    });
    localStorage.setItem('qubrixHistory', JSON.stringify(history.slice(0, 20)));
}

function loadHistoryAndHeatmap() {
    const history = JSON.parse(localStorage.getItem('qubrixHistory') || '[]');
    historyList.innerHTML = '';

    // Generate 7-Day Heatmap
    heatmapGrid.innerHTML = '';
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(today.getDate() - i);
        const dateStr = d.toLocaleDateString();
        
        const activeCount = history.filter(item => item.date === dateStr).length;
        const cell = document.createElement('div');
        cell.style.flex = '1';
        cell.style.height = '32px';
        cell.style.borderRadius = '6px';
        cell.style.display = 'flex';
        cell.style.flexDirection = 'column';
        cell.style.alignItems = 'center';
        cell.style.justifyContent = 'center';
        cell.style.fontSize = '0.65rem';
        cell.style.fontWeight = '700';
        cell.title = `${dateStr}: ${activeCount} sessions`;

        if (activeCount > 0) {
            cell.style.background = 'var(--accent-emerald)';
            cell.style.color = '#000';
        } else {
            cell.style.background = 'var(--bg-card)';
            cell.style.color = 'var(--text-muted)';
            cell.style.border = '1px solid var(--border-color)';
        }
        cell.textContent = d.toLocaleDateString('en', { weekday: 'narrow' });
        heatmapGrid.appendChild(cell);
    }

    if (history.length === 0) {
        historyList.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 24px 0; font-size: 0.85rem;">No past Qubrix session records found.</p>`;
        return;
    }

    history.forEach(item => {
        const el = document.createElement('div');
        el.className = 'history-item';
        el.innerHTML = `
            <div>
                <strong style="display: block; font-size: 0.9rem;">${item.category}</strong>
                <span style="color: var(--text-muted); font-size: 0.72rem;">${item.date}</span>
            </div>
            <div style="text-align: right;">
                <strong style="color: var(--accent-cyan); display: block; font-size: 0.95rem;">${item.score} pts</strong>
                <span style="font-size: 0.72rem; font-weight: 700;">${item.percentage}% Accuracy</span>
            </div>
        `;
        historyList.appendChild(el);
    });
}

historyModalBtn.addEventListener('click', () => {
    loadHistoryAndHeatmap();
    historyModal.classList.remove('hidden');
});
closeHistoryBtn.addEventListener('click', () => historyModal.classList.add('hidden'));
closeHistoryFooterBtn.addEventListener('click', () => historyModal.classList.add('hidden'));
clearHistoryBtn.addEventListener('click', () => {
    localStorage.removeItem('qubrixHistory');
    loadHistoryAndHeatmap();
});

function resetQuiz() {
    clearInterval(timerInterval);
    clearInterval(rivalTimer);
    resultScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

// Initialize App
initTheme();