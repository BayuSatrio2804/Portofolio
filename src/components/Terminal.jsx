import { useState, useRef, useEffect } from 'react';

const terminalCopy = {
    en: {
        intro: [
            'MBS-OS v1.0.0 (Node.js/React Fiber Kernel)',
            'Encrypted access to Muhammad Bayu Satrio AI engineering workspace.',
            'Type "help" to see available commands.',
        ],
        help: 'Available commands: whoami, skills, education, sudo, clear',
        whoami: 'Muhammad Bayu Satrio - AI Engineer focused on Indonesian NLP, analytics workflows, and production-aware applied systems.',
        skills: 'Python, NLP, analytics, ONNX Runtime, React, Laravel, SQL, Firebase, ESP32',
        education: 'Currently pursuing a Bachelor of Information Technology degree at Telkom University (2023 - 2027)',
        sudo: 'Access denied. This incident has been logged by the system administrator.',
        notFound: (command) => `Bash command not found: ${command}. Type "help".`,
    },
    id: {
        intro: [
            'MBS-OS v1.0.0 (Node.js/React Fiber Kernel)',
            'Akses terenkripsi ke workspace AI engineering Muhammad Bayu Satrio.',
            'Ketik "help" untuk melihat command yang tersedia.',
        ],
        help: 'Command tersedia: whoami, skills, education, sudo, clear',
        whoami: 'Muhammad Bayu Satrio - AI Engineer yang berfokus pada NLP bahasa Indonesia, workflow analytics, dan applied systems yang siap produksi.',
        skills: 'Python, NLP, analytics, ONNX Runtime, React, Laravel, SQL, Firebase, ESP32',
        education: 'Sedang menempuh Bachelor of Information Technology di Telkom University (2023 - 2027)',
        sudo: 'Akses ditolak. Insiden ini sudah dicatat oleh administrator sistem.',
        notFound: (command) => `Command bash tidak ditemukan: ${command}. Ketik "help".`,
    },
};

function getTerminalCopy(language) {
    return terminalCopy[language] ?? terminalCopy.en;
}

function getIntroHistory(copy) {
    return copy.intro.map((text) => ({ type: 'system', text }));
}

function TerminalSession({ copy }) {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState(() => getIntroHistory(copy));
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    const handleCommand = (cmd) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let response = '';

        switch (cleanCmd) {
            case 'help':
                response = copy.help;
                break;
            case 'whoami':
                response = copy.whoami;
                break;
            case 'skills':
                response = copy.skills;
                break;
            case 'education':
                response = copy.education;
                break;
            case 'sudo':
                response = copy.sudo;
                break;
            case 'clear':
                setHistory([]);
                return;
            case '':
                break;
            default:
                response = copy.notFound(cleanCmd);
        }

        if (cleanCmd !== 'clear') {
            setHistory(prev => [
                ...prev,
                { type: 'user', text: `guest@bayusatrio:~$ ${cleanCmd}` },
                ...(response ? [{ type: 'response', text: response }] : []),
            ]);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    return (
        <section id="terminal-section" style={{ padding: '0 5% 4rem', display: 'flex', justifyContent: 'center' }}>
            <div
                style={{
                    width: '100%', maxWidth: '850px', background: '#050505', borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.15)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                    fontFamily: 'monospace', fontSize: '0.95rem',
                }}
                onClick={() => inputRef.current?.focus()}
            >
                <div style={{ background: '#1e293b', padding: '0.7rem 1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <div style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#ef4444' }}></div>
                    <div style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#eab308' }}></div>
                    <div style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#22c55e' }}></div>
                    <span style={{ color: '#94a3b8', margin: '0 auto', fontSize: '0.85rem', fontWeight: 600 }}>guest@bayusatrio:~ (bash)</span>
                </div>

                <div style={{ padding: '1.5rem', height: '280px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.6rem', scrollBehavior: 'smooth' }}>
                    {history.map((line, idx) => (
                        <div key={idx} style={{
                            color: line.type === 'user' ? '#38bdf8' : line.type === 'response' ? '#a3e635' : '#94a3b8',
                            lineHeight: 1.5,
                        }}>
                            {line.text}
                        </div>
                    ))}

                    <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginTop: '0.5rem' }}>
                        <span style={{ color: '#38bdf8', fontWeight: 600 }}>guest@bayusatrio:~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            style={{
                                background: 'transparent', border: 'none', color: '#f8fafc', flex: 1,
                                outline: 'none', fontFamily: 'monospace', fontSize: '0.95rem', fontWeight: 500,
                            }}
                            spellCheck="false"
                            autoComplete="off"
                        />
                    </div>
                    <div ref={bottomRef} />
                </div>
            </div>
        </section>
    );
}

export default function Terminal({ language = 'en' }) {
    const copy = getTerminalCopy(language);

    return <TerminalSession key={language} copy={copy} />;
}
