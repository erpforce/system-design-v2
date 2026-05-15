// Top bar component

function TopBar({ title, breadcrumb, onBack, actions, activeView, onViewChange }) {
  const views = ['List', 'Grid', 'Calendar', 'Kanban'];
  return (
    <div style={{ height: 56, background: '#fff', borderBottom: '1px solid #F5F6F5', display: 'flex', alignItems: 'center', padding: '0 32px', justifyContent: 'space-between', flexShrink: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        {onBack && (
          <button onClick={onBack} style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer', color: '#656669', borderRadius: 4 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          </button>
        )}
        <div>
          <div style={{ fontSize: 18, fontWeight: 500, color: '#1F2125', letterSpacing: '-0.02em', lineHeight: 1.3 }}>{title}</div>
          {breadcrumb && <div style={{ fontSize: 11, color: '#A7A8A9', letterSpacing: '-0.01em', marginTop: 1 }}>{breadcrumb}</div>}
        </div>
        {activeView !== undefined && (
          <div style={{ display: 'flex', gap: 2, marginLeft: 8 }}>
            {views.map(v => (
              <button key={v} onClick={() => onViewChange && onViewChange(v)}
                style={{ height: 28, padding: '0 10px', borderRadius: 4, border: 'none', fontFamily: 'inherit', fontSize: 12, letterSpacing: '-0.02em', cursor: 'pointer', background: activeView === v ? '#EBF9F2' : 'transparent', color: activeView === v ? '#2EB273' : '#656669', fontWeight: activeView === v ? 500 : 400 }}>
                {v}
              </button>
            ))}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {actions}
        <div style={{ width: 1, height: 24, background: '#D3D3D4', margin: '0 4px' }}/>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: '#F6DEE8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 500, color: '#6F065D' }}>AS</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, color: '#232529', letterSpacing: '-0.02em' }}>Amrit Sunari</div>
          <div style={{ fontSize: 11, color: '#A7A8A9', letterSpacing: '-0.02em' }}>Admin</div>
        </div>
      </div>
    </div>
  );
}

function SubBar({ children }) {
  return (
    <div style={{ height: 56, background: '#fff', borderBottom: '1px solid #F5F6F5', display: 'flex', alignItems: 'center', padding: '0 32px', gap: 12, flexShrink: 0 }}>
      {children}
    </div>
  );
}

Object.assign(window, { TopBar, SubBar });
