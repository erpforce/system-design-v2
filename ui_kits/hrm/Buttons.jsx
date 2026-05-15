// Shared UI components: Buttons, Badges, Inputs

function Btn({ children, variant = 'primary', size = 'md', onClick, icon, disabled }) {
  const base = { height: size === 'sm' ? 28 : 32, borderRadius: 4, border: 'none', fontFamily: 'inherit', fontWeight: 500, letterSpacing: '-0.02em', cursor: disabled ? 'not-allowed' : 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, padding: size === 'sm' ? '0 10px' : '0 14px', fontSize: size === 'sm' ? 12 : 13, transition: 'opacity 0.15s', opacity: disabled ? 0.5 : 1 };
  const variants = {
    primary:   { background: '#2EB273', color: '#fff', boxShadow: '0px 4px 10px -2px rgba(20,78,50,0.05),0px 2px 2px -1px rgba(20,78,50,0.10),0px -1px 4px 0px rgba(0,0,0,0.05)' },
    secondary: { background: '#fff', color: '#292D32', boxShadow: '0px 0px 2px 0px #E0E0E0,0px 1px 4px -2px rgba(24,39,75,0.02),0px 4px 4px -2px rgba(24,39,75,0.06)' },
    ghost:     { background: 'transparent', color: '#656669', border: '1px solid #EEF0F1' },
    danger:    { background: '#FDECEA', color: '#CC3333' },
  };
  return <button style={{ ...base, ...variants[variant] }} onClick={onClick} disabled={disabled}>{icon && <span style={{ width: 14, height: 14, display: 'flex' }}>{icon}</span>}{children}</button>;
}

function Badge({ children, type = 'active' }) {
  const types = {
    active:   { background: '#D6F3E5', color: '#2EB273' },
    inactive: { background: '#F3F2F2', color: '#656669' },
    draft:    { background: '#FFF3CC', color: '#CC9900' },
    pending:  { background: '#CDE3F4', color: '#006699' },
    error:    { background: '#FDECEA', color: '#CC3333' },
  };
  return <span style={{ display: 'inline-block', padding: '2px 10px', borderRadius: 15, fontSize: 11, fontWeight: 500, letterSpacing: '-0.01em', ...types[type] }}>{children}</span>;
}

function Field({ label, children, disabled }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <label style={{ fontSize: 12, fontWeight: 500, color: '#656669', letterSpacing: '-0.02em' }}>{label}</label>
      {children}
    </div>
  );
}

function Input({ value, onChange, placeholder, disabled, type = 'text' }) {
  return (
    <input type={type} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}
      style={{ height: 36, borderRadius: 4, border: '1px solid #F3F2F2', background: disabled ? '#F5F6F5' : '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', padding: '0 12px', fontFamily: 'inherit', fontSize: 14, color: disabled ? '#A7A8A9' : '#1F2125', letterSpacing: '-0.02em', outline: 'none', width: '100%' }}
    />
  );
}

function Select({ value, onChange, options }) {
  return (
    <select value={value} onChange={onChange}
      style={{ height: 36, borderRadius: 4, border: '1px solid #F3F2F2', background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', padding: '0 32px 0 12px', fontFamily: 'inherit', fontSize: 14, color: '#1F2125', letterSpacing: '-0.02em', outline: 'none', width: '100%', appearance: 'none', backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23656669' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}>
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  );
}

function Toggle({ on, onChange }) {
  return (
    <button onClick={() => onChange(!on)}
      style={{ width: 36, height: 20, borderRadius: 999, border: 'none', cursor: 'pointer', background: on ? '#2EB273' : '#D3D3D4', position: 'relative', transition: 'background 0.2s', flexShrink: 0 }}>
      <span style={{ position: 'absolute', top: 3, left: on ? 19 : 3, width: 14, height: 14, borderRadius: '50%', background: '#fff', transition: 'left 0.2s', display: 'block' }}/>
    </button>
  );
}

function IconBtn({ icon, onClick, title }) {
  return (
    <button title={title} onClick={onClick}
      style={{ width: 32, height: 32, borderRadius: 4, border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8E8E93' }}>
      <span style={{ width: 16, height: 16, display: 'flex' }}>{icon}</span>
    </button>
  );
}

// SVG icons inline
const IC = {
  plus:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  edit:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
  trash:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>,
  eye:     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  filter:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
  search:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  dots:    <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>,
  chevron: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>,
  close:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  check:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
};

Object.assign(window, { Btn, Badge, Field, Input, Select, Toggle, IconBtn, IC });
