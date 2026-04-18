import React, { useState, useRef, useEffect } from 'react';

export default function Terminal() {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', text: 'MBS-OS v1.0.0 (Node.js/React Fiber Kernel)' },
        { type: 'system', text: 'Encrypted access to Muhammad Bayu Satrio mainframe.' },
        { type: 'system', text: 'Type "help" to see the list of secret commands.' }
    ]);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    const handleCommand = (cmd) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let response = '';

        switch (cleanCmd) {
            case 'help':
                response = 'Available commands: whoami, skills, education, sudo, clear';
                break;
            case 'whoami':
                response = 'Muhammad Bayu Satrio - Fullstack Web Developer | AI Engineer | IoT Specialist';
                break;
            case 'skills':
                response = 'Laravel, Flutter, React, Node.js, Express.js, Tailwind CSS, Three.js, JavaScript, PHP, Go, Python, Dart, C++, Java, MySQL, Firebase, Supabase, Docker, Hardware IoT (ESP32, Arduino)';
                break;
            case 'education':
                response = 'Currently pursuing a Bachelor of Information Technology degree at Telkom University (2023 - 2027)';
                break;
            case 'sudo':
                response = 'Access denied. This intrusion incident has been logged and reported to the system Administrator.';
                break;
            case 'clear':
                setHistory([]);
                return;
            case '':
                break;
            default:
                response = `Bash command not found: ${cleanCmd}. Type "help".`;
        }

        if (cleanCmd !== 'clear') {
            setHistory(prev => [
                ...prev,
                { type: 'user', text: `guest@bayusatrio:~$ ${cleanCmd}` },
                ...(response ? [{ type: 'response', text: response }] : [])
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
                    fontFamily: 'monospace', fontSize: '0.95rem'
                }}
                onClick={() => inputRef.current?.focus()}
            >
                {/* Header Ala macOS */}
                <div style={{ background: '#1e293b', padding: '0.7rem 1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <div style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#ef4444' }}></div>
                    <div style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#eab308' }}></div>
                    <div style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#22c55e' }}></div>
                    <span style={{ color: '#94a3b8', margin: '0 auto', fontSize: '0.85rem', fontWeight: 600 }}>guest@bayusatrio:~ (bash)</span>
                </div>

                {/* Tubuh Terminal (Teks) */}
                <div style={{ padding: '1.5rem', height: '280px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.6rem', scrollBehavior: 'smooth' }}>
                    {history.map((line, idx) => (
                        <div key={idx} style={{
                            color: line.type === 'user' ? '#38bdf8' : line.type === 'response' ? '#a3e635' : '#94a3b8',
                            lineHeight: 1.5
                        }}>
                            {line.text}
                        </div>
                    ))}

                    {/* Baris Input Interaktif */}
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
                                outline: 'none', fontFamily: 'monospace', fontSize: '0.95rem', fontWeight: 500
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
