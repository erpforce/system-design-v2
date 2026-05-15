// Sidebar navigation — hierarchical tree with expand/collapse
const NAV_TREE = [
  { id: 'dashboard', label: 'Dashboard', icon: 'grid' },
  {
    id: 'org', label: 'Org. Structure', icon: 'org',
    children: [
      { id: 'hierarchy',    label: 'Hierarchy' },
      { id: 'department',   label: 'Department Master' },
      { id: 'designation',  label: 'Designation Master' },
      {
        id: 'company-policy', label: 'Company Policy',
        children: [
          { id: 'document',       label: 'Document Master' },
          { id: 'accruals',       label: 'Accruals & Benefit' },
          { id: 'doc2',           label: 'Document Master' },
          { id: 'salary',         label: 'Salary Structure' },
          { id: 'leave-policy',   label: 'Leave Policy' },
          { id: 'company-cal',    label: 'Company Calendar' },
          { id: 'loan',           label: 'Loan Configuration' },
        ]
      },
    ]
  },
  {
    id: 'emp', label: 'Emp. Management', icon: 'users',
    children: [
      { id: 'employees',    label: 'All Employees' },
      { id: 'emp-profile',  label: 'Employee Profile' },
      { id: 'transfers',    label: 'Transfers' },
    ]
  },
  { id: 'approval', label: 'Approval Dashboard', icon: 'check-circle' },
  { id: 'recruitment', label: 'Recruitment', icon: 'briefcase' },
  { id: 'onboarding', label: 'Onboarding', icon: 'user-plus' },
  { id: 'offboarding', label: 'Offboarding', icon: 'user-minus' },
  { id: 'timetracking', label: 'Time Tracking', icon: 'clock' },
  {
    id: 'leave', label: 'Leave Management', icon: 'calendar',
    children: [
      { id: 'leave-req',    label: 'Leave Requests' },
      { id: 'leave-types',  label: 'Leave Types' },
      { id: 'leave-bal',    label: 'Leave Balances' },
    ]
  },
];

// ── Icons ────────────────────────────────────────────────────────
const SI = {
  grid:        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>,
  org:         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="4" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="9" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 6v4M5 17v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"/><line x1="12" y1="10" x2="12" y2="12"/></svg>,
  users:       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  'check-circle': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  briefcase:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  'user-plus': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>,
  'user-minus':<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/></svg>,
  clock:       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  calendar:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  search:      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  chevron:     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>,
};

// Collect all IDs that are ancestors of a given active ID
function getAncestorIds(tree, targetId, path = []) {
  for (const node of tree) {
    const newPath = [...path, node.id];
    if (node.id === targetId) return path.map(n => n);
    if (node.children) {
      const found = getAncestorIds(node.children, targetId, newPath);
      if (found !== null) return found;
    }
  }
  return null;
}

// ── Tree Node ────────────────────────────────────────────────────
function TreeNode({ node, depth = 0, activeId, onNavigate, openIds, toggleOpen }) {
  const hasChildren = node.children && node.children.length > 0;
  const isOpen      = openIds.has(node.id);
  const isActive    = node.id === activeId;
  const isParentOfActive = hasChildren && openIds.has(node.id) &&
    (function check(children) {
      return children.some(c => c.id === activeId || (c.children && check(c.children)));
    })(node.children);

  const INDENT = 16;
  const paddingLeft = depth === 0 ? 10 : INDENT * depth + 10;

  // color logic
  const textColor    = isActive ? '#2EB273' : '#1F2125';
  const iconColor    = isActive ? '#2EB273' : depth === 0 ? '#5C5F63' : '#9EA0A3';
  const bgColor      = isActive ? '#EBF9F2' : 'transparent';
  const fontWeight   = (depth === 0 || isActive) ? 500 : 400;
  const fontSize     = depth === 0 ? 13 : 12.5;

  const handleClick = () => {
    if (hasChildren) toggleOpen(node.id);
    else onNavigate(node.id);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        style={{
          height: depth === 0 ? 36 : 32,
          borderRadius: 5,
          display: 'flex',
          alignItems: 'center',
          paddingLeft,
          paddingRight: 8,
          gap: 8,
          cursor: 'pointer',
          background: bgColor,
          transition: 'background 0.12s',
          userSelect: 'none',
          position: 'relative',
        }}
        onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = '#F5F6F5'; }}
        onMouseLeave={e => { e.currentTarget.style.background = bgColor; }}
      >
        {/* Left accent bar for active */}
        {isActive && (
          <div style={{
            position: 'absolute', left: 0, top: 4, bottom: 4,
            width: 3, borderRadius: '0 3px 3px 0', background: '#2EB273'
          }} />
        )}

        {/* Icon (top-level only) */}
        {depth === 0 && node.icon && (
          <span style={{ width: 16, height: 16, display: 'flex', flexShrink: 0, color: iconColor, opacity: isActive ? 1 : 0.75 }}>
            {SI[node.icon]}
          </span>
        )}

        {/* Indent guide dot for deep leaves */}
        {depth >= 2 && (
          <span style={{ width: 5, height: 5, borderRadius: '50%', flexShrink: 0, background: isActive ? '#2EB273' : '#D1D2D3', marginLeft: 2 }} />
        )}

        {/* Label */}
        <span style={{
          flex: 1,
          fontSize,
          fontWeight,
          color: textColor,
          letterSpacing: '-0.01em',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          lineHeight: 1,
        }}>
          {node.label}
        </span>

        {/* Chevron */}
        {hasChildren && (
          <span style={{
            width: 14, height: 14, display: 'flex', flexShrink: 0,
            color: '#B0B2B4',
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.18s ease',
          }}>
            {SI.chevron}
          </span>
        )}
      </div>

      {/* Children */}
      {hasChildren && isOpen && (
        <div style={{
          borderLeft: depth === 0 ? '1px solid #ECEDEF' : 'none',
          marginLeft: depth === 0 ? paddingLeft + 18 : 0,
          marginTop: 1,
          marginBottom: 2,
          paddingLeft: depth === 0 ? 0 : 0,
        }}>
          {node.children.map(child => (
            <TreeNode
              key={child.id}
              node={child}
              depth={depth + 1}
              activeId={activeId}
              onNavigate={onNavigate}
              openIds={openIds}
              toggleOpen={toggleOpen}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Sidebar ──────────────────────────────────────────────────────
function Sidebar({ activeId, onNavigate }) {
  // Auto-expand ancestors of active item on mount
  const initOpen = React.useMemo(() => {
    const ancestors = getAncestorIds(NAV_TREE, activeId) || [];
    return new Set(ancestors);
  }, []);

  const [openIds, setOpenIds] = React.useState(initOpen);

  const toggleOpen = id => {
    setOpenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // When navigating to a leaf, ensure ancestors open
  const handleNavigate = id => {
    const ancestors = getAncestorIds(NAV_TREE, id) || [];
    setOpenIds(prev => {
      const next = new Set(prev);
      ancestors.forEach(a => next.add(a));
      return next;
    });
    onNavigate(id);
  };

  return (
    <div style={{
      width: 232, minWidth: 232,
      background: '#FAFAFA',
      borderRight: '1px solid #ECEDEF',
      display: 'flex', flexDirection: 'column',
      height: '100%', overflow: 'hidden',
    }}>
      {/* Logo */}
      <div style={{
        height: 52, borderBottom: '1px solid #ECEDEF',
        display: 'flex', alignItems: 'center',
        padding: '0 16px', flexShrink: 0,
      }}>
        <img src="../../assets/ERPForce_Primary-Logo-TM.png" alt="ERPForce"
          style={{ height: 26, width: 'auto' }} />
      </div>

      {/* Search bar */}
      <div style={{ padding: '10px 8px 4px' }}>
        <div style={{
          height: 30, background: '#fff',
          border: '1px solid #E8E9EA', borderRadius: 5,
          boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
          display: 'flex', alignItems: 'center',
          padding: '0 10px', gap: 7,
        }}>
          <span style={{ color: '#B0B2B4', display: 'flex', width: 13, height: 13 }}>{SI.search}</span>
          <span style={{ fontSize: 12.5, color: '#B0B2B4', flex: 1 }}>Search</span>
          <span style={{ fontSize: 10, color: '#C8CACC', fontFamily: 'monospace', letterSpacing: 0 }}>Ctrl+K</span>
        </div>
      </div>

      {/* Nav tree */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '6px 8px 12px', display: 'flex', flexDirection: 'column', gap: 1 }}>
        {NAV_TREE.map(item => (
          <TreeNode
            key={item.id}
            node={item}
            depth={0}
            activeId={activeId}
            onNavigate={handleNavigate}
            openIds={openIds}
            toggleOpen={toggleOpen}
          />
        ))}
      </div>

      {/* Footer */}
      <div style={{
        padding: '10px 16px',
        borderTop: '1px solid #ECEDEF',
        fontSize: 11, color: '#C0C2C4',
        letterSpacing: '-0.01em',
      }}>
        ERPForce HRM v2.4
      </div>
    </div>
  );
}

Object.assign(window, { Sidebar, SI, NAV_TREE });
