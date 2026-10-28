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
    ],
    python: [
        {"id": "python1", "question": "Which keyword defines a function in Python?", "options": ["def", "func", "function", "define"], "answer": 0, "explanation": "The def keyword begins a function definition."},
        {"id": "python2", "question": "Which collection stores ordered, changeable items?", "options": ["list", "tuple", "set", "frozenset"], "answer": 0, "explanation": "A list preserves order and can be modified."},
        {"id": "python3", "question": "What does len([2, 4, 6]) return?", "options": ["3", "2", "6", "12"], "answer": 0, "explanation": "The list contains three elements."},
        {"id": "python4", "question": "Which symbol starts a single-line comment in Python?", "options": ["#", "//", "<!--", "**"], "answer": 0, "explanation": "Python uses # for comments."},
        {"id": "python5", "question": "What is the result of 7 // 2?", "options": ["3", "3.5", "4", "1"], "answer": 0, "explanation": "Floor division returns the quotient rounded down."},
        {"id": "python6", "question": "Which data type represents True or False?", "options": ["bool", "str", "float", "list"], "answer": 0, "explanation": "bool is Python’s Boolean type."},
        {"id": "python7", "question": "Which structure handles exceptions?", "options": ["try/except", "if/else only", "for/in", "def/return"], "answer": 0, "explanation": "try/except catches and handles exceptions."},
        {"id": "python8", "question": "Which method adds one item to a list?", "options": ["append()", "addAll()", "pushBack()", "insertEnd()"], "answer": 0, "explanation": "append() adds one item to the end of a list."},
        {"id": "python9", "question": "What does a dictionary store?", "options": ["Key-value pairs", "Only indexed values", "Only unique values", "A sequence of characters"], "answer": 0, "explanation": "Dictionaries map keys to values."},
        {"id": "python10", "question": "Which statement imports a module?", "options": ["import", "include", "using", "require"], "answer": 0, "explanation": "import loads a module into the current namespace."},
    ],
    dbms: [
        {"id": "dbms1", "question": "What does SQL stand for?", "options": ["Structured Query Language", "Sequential Question Logic", "Simple Query Link", "System Quality Language"], "answer": 0, "explanation": "SQL is the standard language for relational databases."},
        {"id": "dbms2", "question": "Which key uniquely identifies a row?", "options": ["Primary key", "Foreign key", "Duplicate key", "Nullable key"], "answer": 0, "explanation": "A primary key uniquely identifies each table row."},
        {"id": "dbms3", "question": "Which command retrieves rows from a table?", "options": ["SELECT", "FETCHTABLE", "GETROW", "READ"], "answer": 0, "explanation": "SELECT queries data from database tables."},
        {"id": "dbms4", "question": "What does a foreign key do?", "options": ["References a key in another or the same table", "Encrypts every column", "Sorts rows automatically", "Creates a backup"], "answer": 0, "explanation": "Foreign keys enforce referential relationships."},
        {"id": "dbms5", "question": "Which property means a transaction is all-or-nothing?", "options": ["Atomicity", "Isolation", "Durability", "Consistency"], "answer": 0, "explanation": "Atomicity prevents partial transaction completion."},
        {"id": "dbms6", "question": "Which command removes a table definition?", "options": ["DROP TABLE", "DELETE ROW", "REMOVE DATABASE ROW", "CLEAR COLUMN"], "answer": 0, "explanation": "DROP TABLE removes the table itself."},
        {"id": "dbms7", "question": "What is database normalization mainly used for?", "options": ["Reducing redundancy and update anomalies", "Increasing duplicate records", "Encrypting passwords", "Compressing images"], "answer": 0, "explanation": "Normalization organizes data to reduce redundancy and anomalies."},
        {"id": "dbms8", "question": "Which SQL clause filters grouped results?", "options": ["HAVING", "WHERE only", "ORDER BY", "VALUES"], "answer": 0, "explanation": "HAVING filters groups after aggregation."},
        {"id": "dbms9", "question": "What is an index used for?", "options": ["Speeding up data retrieval", "Replacing all constraints", "Guaranteeing no duplicates in every column", "Storing application screenshots"], "answer": 0, "explanation": "Indexes can accelerate lookups at the cost of storage and writes."},
        {"id": "dbms10", "question": "What does COMMIT do?", "options": ["Makes transaction changes permanent", "Undo all changes", "Deletes the database", "Starts a new table"], "answer": 0, "explanation": "COMMIT saves the current transaction changes."},
    ],
    cyber: [
        {"id": "cyber1", "question": "What is phishing?", "options": ["A deceptive attempt to steal sensitive information", "A method of cooling servers", "A database sorting method", "A file compression format"], "answer": 0, "explanation": "Phishing uses deceptive messages or sites to capture information."},
        {"id": "cyber2", "question": "Which is the strongest password practice?", "options": ["Use a long, unique password for each account", "Reuse one short password", "Include only your name", "Share it with teammates"], "answer": 0, "explanation": "Unique long passwords limit the impact of account compromise."},
        {"id": "cyber3", "question": "What does MFA add to account security?", "options": ["More than one verification factor", "A larger screen", "Automatic public sharing", "Fewer authentication checks"], "answer": 0, "explanation": "Multi-factor authentication requires multiple factor types."},
        {"id": "cyber4", "question": "What is ransomware designed to do?", "options": ["Lock or encrypt data and demand payment", "Improve file backups", "Remove all software bugs", "Increase Wi-Fi range"], "answer": 0, "explanation": "Ransomware commonly blocks access to data for extortion."},
        {"id": "cyber5", "question": "Why install security updates?", "options": ["To patch known vulnerabilities", "To disable authentication", "To make passwords public", "To remove encryption"], "answer": 0, "explanation": "Updates often fix security weaknesses."},
        {"id": "cyber6", "question": "What does HTTPS help protect in transit?", "options": ["Data exchanged between browser and website", "The physical keyboard", "All files on a lost laptop automatically", "A device from every possible attack"], "answer": 0, "explanation": "HTTPS encrypts and authenticates the connection to a site."},
        {"id": "cyber7", "question": "What is the principle of least privilege?", "options": ["Give users only access they need", "Give everyone administrator access", "Disable all user accounts", "Share one account with all users"], "answer": 0, "explanation": "Least privilege limits permissions to what is necessary."},
        {"id": "cyber8", "question": "What is a firewall commonly used for?", "options": ["Filtering network traffic by rules", "Writing source code", "Creating strong passwords automatically", "Repairing broken screens"], "answer": 0, "explanation": "Firewalls allow or block traffic based on configured rules."},
        {"id": "cyber9", "question": "What should you do with an unexpected attachment?", "options": ["Verify the sender and context before opening", "Open it immediately", "Forward it to everyone", "Disable antivirus first"], "answer": 0, "explanation": "Unexpected attachments may contain malicious content."},
        {"id": "cyber10", "question": "What is a software vulnerability?", "options": ["A weakness that could be exploited", "A confirmed backup", "A strong encryption key", "A normal screen resolution"], "answer": 0, "explanation": "Vulnerabilities are flaws that attackers may exploit."},
    ],
    networking: [
        {"id": "networking1", "question": "What does IP stand for in networking?", "options": ["Internet Protocol", "Internal Program", "Interface Process", "Integrated Port"], "answer": 0, "explanation": "IP addresses and routes packets across networks."},
        {"id": "networking2", "question": "Which device forwards packets between networks?", "options": ["Router", "Keyboard", "Repeater only", "Printer"], "answer": 0, "explanation": "Routers forward packets between IP networks."},
        {"id": "networking3", "question": "Which protocol commonly maps a domain name to an IP address?", "options": ["DNS", "FTP", "SMTP", "SSH"], "answer": 0, "explanation": "DNS resolves domain names to records such as IP addresses."},
        {"id": "networking4", "question": "What is the usual default port for HTTPS?", "options": ["443", "80", "21", "25"], "answer": 0, "explanation": "HTTPS commonly uses TCP port 443."},
        {"id": "networking5", "question": "Which protocol reliably delivers an ordered byte stream?", "options": ["TCP", "UDP", "ARP", "ICMP"], "answer": 0, "explanation": "TCP provides reliable, ordered byte-stream delivery."},
        {"id": "networking6", "question": "What is a LAN?", "options": ["Local Area Network", "Long Access Number", "Linked Application Node", "Logical Address Name"], "answer": 0, "explanation": "A LAN connects devices in a limited local area."},
        {"id": "networking7", "question": "Which address is associated with a network interface at the link layer?", "options": ["MAC address", "URL path", "Domain suffix", "Process ID"], "answer": 0, "explanation": "A MAC address identifies a network interface on a local link."},
        {"id": "networking8", "question": "What does DHCP commonly provide automatically?", "options": ["IP configuration to clients", "Website HTML content", "Email encryption keys", "CPU scheduling"], "answer": 0, "explanation": "DHCP leases IP addresses and related network settings."},
        {"id": "networking9", "question": "What is bandwidth?", "options": ["A measure of data-carrying capacity", "The physical length of a cable only", "A device password", "The number of files in a folder"], "answer": 0, "explanation": "Bandwidth describes a link’s data capacity."},
        {"id": "networking10", "question": "Which topology connects devices to a central switch?", "options": ["Star", "Ring", "Bus", "Full mesh only"], "answer": 0, "explanation": "In a star topology, devices connect through a central point."},
    ],
    os: [
        {"id": "os1", "question": "What is the main role of an operating system?", "options": ["Managing hardware and software resources", "Designing web page colors", "Translating every website automatically", "Replacing application data"], "answer": 0, "explanation": "An OS manages resources and provides services to applications."},
        {"id": "os2", "question": "What is a process?", "options": ["A program in execution", "A stored image file", "A network cable", "A type of database key"], "answer": 0, "explanation": "A process is a running instance of a program."},
        {"id": "os3", "question": "Which scheduling algorithm serves processes in arrival order?", "options": ["FCFS", "Round Robin", "Shortest Remaining Time", "Priority only"], "answer": 0, "explanation": "First-Come, First-Served schedules in arrival order."},
        {"id": "os4", "question": "What is a thread?", "options": ["A unit of execution within a process", "A physical hard drive", "A database relationship", "A network address"], "answer": 0, "explanation": "Threads are execution flows within a process."},
        {"id": "os5", "question": "What is virtual memory?", "options": ["A memory-management technique using secondary storage as backing", "A second physical CPU", "A cache-only database", "A type of monitor"], "answer": 0, "explanation": "Virtual memory provides an address space beyond available RAM."},
        {"id": "os6", "question": "Which condition describes deadlock?", "options": ["Processes wait indefinitely for resources held by one another", "A program finishes normally", "A CPU is idle for one millisecond", "A file is compressed"], "answer": 0, "explanation": "Deadlock can occur when processes form a circular wait."},
        {"id": "os7", "question": "What does a context switch do?", "options": ["Switches CPU execution from one task to another", "Deletes every process", "Formats RAM", "Changes the monitor resolution"], "answer": 0, "explanation": "The OS saves and restores execution state during a context switch."},
        {"id": "os8", "question": "Which memory is typically fastest among these?", "options": ["CPU registers", "SSD storage", "Hard disk", "Optical disc"], "answer": 0, "explanation": "CPU registers are directly inside the processor and extremely fast."},
        {"id": "os9", "question": "What is a system call?", "options": ["A request for a service from the OS kernel", "A call to a friend", "A CSS selector", "A database index"], "answer": 0, "explanation": "System calls let programs request kernel-managed services."},
        {"id": "os10", "question": "What is paging?", "options": ["Dividing memory into fixed-size pages and frames", "Scheduling only by priority", "Encrypting process names", "Connecting computers in a ring"], "answer": 0, "explanation": "Paging maps fixed-size virtual pages to physical frames."},
    ],
    datasci: [
        {"id": "datasci1", "question": "What is the mean of 2, 4, and 6?", "options": ["4", "3", "6", "12"], "answer": 0, "explanation": "The mean is (2 + 4 + 6) / 3 = 4."},
        {"id": "datasci2", "question": "What does a median represent?", "options": ["The middle value after sorting", "The largest value always", "The sum of all values", "The most frequent file type"], "answer": 0, "explanation": "The median is the middle sorted value, or the average of two middle values."},
        {"id": "datasci3", "question": "What is a dataset used to train a model called?", "options": ["Training set", "Production log only", "CSS bundle", "Encryption key"], "answer": 0, "explanation": "The training set is used to fit model parameters."},
        {"id": "datasci4", "question": "What is overfitting?", "options": ["A model fits training data too closely and generalizes poorly", "A model has no parameters", "A dataset contains no rows", "A chart has too many colors"], "answer": 0, "explanation": "Overfit models perform well on training examples but poorly on unseen data."},
        {"id": "datasci5", "question": "Which chart is useful for showing a distribution of numeric values?", "options": ["Histogram", "Logo", "Flowchart only", "Network cable diagram"], "answer": 0, "explanation": "Histograms show frequencies across numeric bins."},
        {"id": "datasci6", "question": "What does correlation measure?", "options": ["The strength and direction of association between variables", "Proof that one variable causes another", "The total number of records only", "The file size of a dataset"], "answer": 0, "explanation": "Correlation describes association, not necessarily causation."},
        {"id": "datasci7", "question": "Why split data into training and test sets?", "options": ["To evaluate performance on unseen data", "To guarantee perfect accuracy", "To remove all missing values automatically", "To increase the number of labels"], "answer": 0, "explanation": "A test set estimates generalization on data not used for fitting."},
        {"id": "datasci8", "question": "Which task predicts a continuous numeric value?", "options": ["Regression", "Classification", "Clustering only", "Tokenization"], "answer": 0, "explanation": "Regression models continuous outputs."},
        {"id": "datasci9", "question": "What is a feature in machine learning?", "options": ["An input variable used by a model", "The final report title", "A database password", "A chart background"], "answer": 0, "explanation": "Features are input attributes used to make predictions."},
        {"id": "datasci10", "question": "What does data cleaning often involve?", "options": ["Handling missing, duplicated, or inconsistent records", "Adding random errors", "Deleting all valid rows", "Changing every number to text"], "answer": 0, "explanation": "Cleaning improves data quality and consistency."},
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


// ================= DOM ELEMENTS =================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const paletteSelect = document.getElementById('paletteSelect');

const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');

const modeStandardBtn = document.getElementById('modeStandardBtn');
const modeAiBtn = document.getElementById('modeAiBtn');
const standardModeContainer = document.getElementById('standardModeContainer');
const aiModeContainer = document.getElementById('aiModeContainer');
const aiTopicInput = document.getElementById('aiTopicInput');

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


const historyModal = document.getElementById('historyModal');
const historyModalBtn = document.getElementById('historyModalBtn');
const closeHistoryBtn = document.getElementById('closeHistoryBtn');
const closeHistoryFooterBtn = document.getElementById('closeHistoryFooterBtn');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const historyList = document.getElementById('historyList');
const heatmapGrid = document.getElementById('heatmapGrid');
const dashQuizzes = document.getElementById('dashQuizzes');
const dashAccuracy = document.getElementById('dashAccuracy');
const dashBestScore = document.getElementById('dashBestScore');
const dashTotalXp = document.getElementById('dashTotalXp');
const playerNameInput = document.getElementById('playerNameInput');
const savePlayerNameBtn = document.getElementById('savePlayerNameBtn');
const leaderboardList = document.getElementById('leaderboardList');
const xpEarnedEl = document.getElementById('xpEarned');
const totalXpEl = document.getElementById('totalXp');
const xpMessageEl = document.getElementById('xpMessage');
const achievementList = document.getElementById('achievementList');

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
    modeStandardBtn.classList.add('active');
    modeAiBtn.classList.remove('active');
    standardModeContainer.classList.remove('hidden');
    aiModeContainer.classList.add('hidden');
});

modeAiBtn.addEventListener('click', () => {
    currentMode = "ai";
    modeAiBtn.classList.add('active');
    modeStandardBtn.classList.remove('active');
    aiModeContainer.classList.remove('hidden');
    standardModeContainer.classList.add('hidden');
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
            tech: 'AI & Machine Learning',
            python: 'Python Programming',
            dbms: 'Database Management Systems',
            cyber: 'Cybersecurity',
            networking: 'Computer Networking',
            os: 'Operating Systems',
            datasci: 'Data Science'
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


    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    renderQuestion();
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

// ================= XP, ACHIEVEMENTS & PLAYER PROFILE =================
const ACHIEVEMENTS = [
    { id: 'first_quiz', title: 'First Steps', description: 'Complete your first quiz', icon: 'fa-flag-checkered', test: stats => stats.quizzes >= 1 },
    { id: 'perfect_score', title: 'Perfect Run', description: 'Get 100% accuracy in a quiz', icon: 'fa-bullseye', test: stats => stats.perfect >= 1 },
    { id: 'streak_3', title: 'On a Roll', description: 'Get a streak of 3 correct answers', icon: 'fa-fire', test: stats => stats.bestStreak >= 3 },
    { id: 'quiz_5', title: 'Quiz Explorer', description: 'Complete 5 quizzes', icon: 'fa-compass', test: stats => stats.quizzes >= 5 },
    { id: 'xp_500', title: 'XP Collector', description: 'Earn 500 total XP', icon: 'fa-star', test: stats => stats.totalXP >= 500 }
];

function getPlayerName() {
    return (localStorage.getItem('qubrixPlayerName') || 'Player').trim() || 'Player';
}

function getHistory() {
    try { return JSON.parse(localStorage.getItem('qubrixHistory') || '[]'); }
    catch { return []; }
}

function getLeaderboard() {
    try { return JSON.parse(localStorage.getItem('qubrixLeaderboard') || '[]'); }
    catch { return []; }
}

function getUnlockedAchievements() {
    try { return JSON.parse(localStorage.getItem('qubrixAchievements') || '[]'); }
    catch { return []; }
}

function awardProgression(percentage, correctCount) {
    const history = getHistory();
    const previousTotal = Number(localStorage.getItem('qubrixTotalXP') || 0);
    const xpEarned = (correctCount * 20) + (maxStreak * 5);
    const totalXP = previousTotal + xpEarned;
    localStorage.setItem('qubrixTotalXP', String(totalXP));

    const record = {
        name: getPlayerName(),
        date: new Date().toLocaleDateString(),
        category: questionCategoryBadge.textContent,
        score: liveScore,
        percentage,
        xp: xpEarned,
        maxStreak,
        timestamp: Date.now()
    };
    history.unshift(record);
    localStorage.setItem('qubrixHistory', JSON.stringify(history.slice(0, 100)));

    const leaderboard = getLeaderboard();
    leaderboard.push(record);
    leaderboard.sort((a, b) => (Number(b.score) || 0) - (Number(a.score) || 0));
    localStorage.setItem('qubrixLeaderboard', JSON.stringify(leaderboard.slice(0, 10)));

    const stats = {
        quizzes: history.length,
        perfect: history.filter(item => Number(item.percentage) === 100).length,
        bestStreak: Math.max(maxStreak, ...history.map(item => Number(item.maxStreak) || 0)),
        totalXP
    };
    const unlocked = getUnlockedAchievements();
    const newlyUnlocked = [];
    ACHIEVEMENTS.forEach(achievement => {
        if (achievement.test(stats) && !unlocked.includes(achievement.id)) {
            unlocked.push(achievement.id);
            newlyUnlocked.push(achievement.title);
        }
    });
    localStorage.setItem('qubrixAchievements', JSON.stringify(unlocked));
    xpEarnedEl.textContent = `+${xpEarned} XP`;
    totalXpEl.textContent = totalXP.toLocaleString();
    xpMessageEl.textContent = newlyUnlocked.length
        ? `Achievement unlocked: ${newlyUnlocked.join(', ')}! Keep going!`
        : 'Correct answers earn 20 XP each, plus 5 XP for every answer in your best streak.';
    renderAchievements();
}

function renderAchievements() {
    const unlocked = getUnlockedAchievements();
    achievementList.innerHTML = '';
    ACHIEVEMENTS.forEach(achievement => {
        const isUnlocked = unlocked.includes(achievement.id);
        const item = document.createElement('div');
        item.className = `achievement-chip ${isUnlocked ? 'unlocked' : 'locked'}`;
        item.innerHTML = `<i class="fa-solid ${achievement.icon}"></i><span><strong>${achievement.title}</strong><small>${achievement.description}</small></span>${isUnlocked ? '<i class="fa-solid fa-check achievement-check"></i>' : '<i class="fa-solid fa-lock achievement-lock"></i>'}`;
        achievementList.appendChild(item);
    });
}

savePlayerNameBtn.addEventListener('click', () => {
    const name = playerNameInput.value.trim().slice(0, 24);
    if (!name) {
        playerNameInput.focus();
        playerNameInput.placeholder = 'Please enter a name';
        return;
    }
    localStorage.setItem('qubrixPlayerName', name);
    loadHistoryAndHeatmap();
});

// ================= SCORE & AI DIAGNOSTIC INSIGHTS =================
function finishQuiz() {
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
        passStatusBadge.textContent = "PASSED";
        passStatusBadge.className = "status-badge passed";
    } else {
        passStatusBadge.textContent = "NEEDS WORK";
        passStatusBadge.className = "status-badge failed";
    }

    renderBreakdown();
    awardProgression(percentage, correctCount);
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

// ================= PERFORMANCE DASHBOARD, LEADERBOARD & 7-DAY HEATMAP =================
function loadHistoryAndHeatmap() {
    const history = getHistory();
    historyList.innerHTML = '';
    heatmapGrid.innerHTML = '';

    const totalSessions = history.length;
    const averageAccuracy = totalSessions
        ? Math.round(history.reduce((sum, item) => sum + (Number(item.percentage) || 0), 0) / totalSessions)
        : 0;
    const bestScore = history.reduce((best, item) => Math.max(best, Number(item.score) || 0), 0);
    const totalXP = Number(localStorage.getItem('qubrixTotalXP') || 0);
    dashQuizzes.textContent = totalSessions;
    dashAccuracy.textContent = `${averageAccuracy}%`;
    dashBestScore.textContent = bestScore.toLocaleString();
    dashTotalXp.textContent = totalXP.toLocaleString();
    playerNameInput.value = getPlayerName() === 'Player' && !localStorage.getItem('qubrixPlayerName') ? '' : getPlayerName();

    // 7-day activity heatmap
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

    const leaderboard = getLeaderboard().sort((a, b) => (Number(b.score) || 0) - (Number(a.score) || 0));
    leaderboardList.innerHTML = '';
    if (!leaderboard.length) {
        leaderboardList.innerHTML = '<p class="empty-dashboard-note">Complete a quiz to appear on the leaderboard.</p>';
    } else {
        leaderboard.slice(0, 10).forEach((item, index) => {
            const row = document.createElement('div');
            row.className = 'leaderboard-row';
            const medal = index === 0 ? 'fa-medal' : index === 1 ? 'fa-medal' : index === 2 ? 'fa-medal' : 'fa-hashtag';
            row.innerHTML = `<span class="leaderboard-rank rank-${index + 1}"><i class="fa-solid ${medal}"></i> ${index + 1}</span><span class="leaderboard-player"><strong></strong><small></small></span><strong class="leaderboard-score">${Number(item.score) || 0} pts</strong>`;
            row.querySelector('.leaderboard-player strong').textContent = item.name || 'Player';
            row.querySelector('.leaderboard-player small').textContent = `${item.category || 'Quiz'} · ${item.date || ''}`;
            leaderboardList.appendChild(row);
        });
    }

    if (!history.length) {
        historyList.innerHTML = '<p class="empty-dashboard-note">No past Qubrix sessions yet. Complete a quiz to see your progress here.</p>';
    } else {
        history.forEach(item => {
            const el = document.createElement('div');
            el.className = 'history-item';
            el.innerHTML = `<div><strong class="history-category"></strong><span class="history-date"></span></div><div style="text-align: right;"><strong class="history-score"></strong><span class="history-accuracy"></span></div>`;
            el.querySelector('.history-category').textContent = item.category || 'Quiz';
            el.querySelector('.history-date').textContent = `${item.name || 'Player'} · ${item.date || ''}`;
            el.querySelector('.history-score').textContent = `${Number(item.score) || 0} pts`;
            el.querySelector('.history-accuracy').textContent = `${Number(item.percentage) || 0}% Accuracy · ${Number(item.xp) || 0} XP`;
            historyList.appendChild(el);
        });
    }
}

historyModalBtn.addEventListener('click', () => {
    loadHistoryAndHeatmap();
    historyModal.classList.remove('hidden');
});
closeHistoryBtn.addEventListener('click', () => historyModal.classList.add('hidden'));
closeHistoryFooterBtn.addEventListener('click', () => historyModal.classList.add('hidden'));
clearHistoryBtn.addEventListener('click', () => {
    localStorage.removeItem('qubrixHistory');
    localStorage.removeItem('qubrixLeaderboard');
    loadHistoryAndHeatmap();
});

function resetQuiz() {
    clearInterval(timerInterval);
    resultScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

// Initialize App
initTheme();