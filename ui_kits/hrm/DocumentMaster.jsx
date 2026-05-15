// Document Master screens: Table Listing, Add New, View Details

const SAMPLE_DOCS = [
  { id: 'DOC-00141', name: 'Identity Document',            count: 50,  status: 'active' },
  { id: 'DOC-00142', name: 'Travelling Documents',          count: 800, status: 'active' },
  { id: 'DOC-00143', name: 'Background Check & Documents',  count: 15,  status: 'active' },
  { id: 'DOC-00144', name: 'Family Documents',              count: 10,  status: 'active' },
  { id: 'DOC-00145', name: 'Job Experience Audit Evidence', count: 76,  status: 'active' },
];

const SAMPLE_DOC_ITEMS = [
  { name: 'Identity Proof',   remarks: 'Replaces verify benefits',         helpsCheck: true },
  { name: 'Address Proof',    remarks: 'Required for on-boarding',          helpsCheck: false },
  { name: 'Income Statement', remarks: 'Verifies through Benefits ability', helpsCheck: true },
];

// ── Table listing ──────────────────────────────────────────────
function DocumentTable({ docs, onView, onEdit, onDelete }) {
  const thStyle = { height: 40, padding: '0 14px', textAlign: 'left', fontSize: 12, fontWeight: 500, color: '#656669', letterSpacing: '-0.02em', borderBottom: '1px solid #F5F6F5', whiteSpace: 'nowrap', background: '#fff' };
  const tdStyle = { height: 44, padding: '0 14px', fontSize: 13, color: '#1F2125', letterSpacing: '-0.02em', borderBottom: '1px solid #F5F6F5', whiteSpace: 'nowrap' };
  const monoStyle = { fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#656669' };
  return (
    <div style={{ flex: 1, overflow: 'auto', padding: '0 32px 24px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
        <colgroup>
          <col style={{ width: 160 }}/><col/><col style={{ width: 160 }}/><col style={{ width: 120 }}/><col style={{ width: 100 }}/>
        </colgroup>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Document Type</th>
            <th style={thStyle}>Number of Documents</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {docs.map(doc => (
            <tr key={doc.id} style={{ cursor: 'pointer' }} onClick={() => onView(doc)}>
              <td style={{ ...tdStyle, ...monoStyle }}>{doc.id}</td>
              <td style={tdStyle}>{doc.name}</td>
              <td style={{ ...tdStyle, ...monoStyle }}>{doc.count}</td>
              <td style={tdStyle}><Badge type={doc.status}>{doc.status === 'active' ? 'Active' : 'Inactive'}</Badge></td>
              <td style={tdStyle} onClick={e => e.stopPropagation()}>
                <div style={{ display: 'flex', gap: 4 }}>
                  <IconBtn icon={IC.eye}   title="View"   onClick={() => onView(doc)} />
                  <IconBtn icon={IC.edit}  title="Edit"   onClick={() => onEdit(doc)} />
                  <IconBtn icon={IC.trash} title="Delete" onClick={() => onDelete(doc)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Add / Edit form ────────────────────────────────────────────
function DocumentForm({ doc, onSave, onCancel }) {
  const [name, setName] = React.useState(doc ? doc.name : '');
  const [status, setStatus] = React.useState(doc ? doc.status === 'active' : true);
  const [items, setItems] = React.useState(doc ? SAMPLE_DOC_ITEMS : []);

  const addItem = () => setItems(prev => [...prev, { name: '', remarks: '', helpsCheck: false }]);
  const removeItem = i => setItems(prev => prev.filter((_, idx) => idx !== i));

  const thStyle = { padding: '10px 14px', textAlign: 'left', fontSize: 11, fontWeight: 500, color: '#8E8E93', letterSpacing: '-0.01em', borderBottom: '1px solid #F5F6F5', background: '#FBFBFB' };
  const tdStyle = { padding: '8px 14px', fontSize: 13, color: '#1F2125', letterSpacing: '-0.02em', borderBottom: '1px solid #F5F6F5' };

  return (
    <div style={{ flex: 1, overflow: 'auto', padding: '24px 32px' }}>
      <div style={{ maxWidth: 840, display: 'flex', flexDirection: 'column', gap: 32 }}>
        {/* Basic Detail */}
        <section>
          <div style={{ fontSize: 14, fontWeight: 500, color: '#1F2125', letterSpacing: '-0.02em', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid #F5F6F5' }}>Basic Detail</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <Field label="ID">
              <Input value={doc ? doc.id : 'Auto-generated'} disabled />
            </Field>
            <Field label="Document Type Name">
              <Input value={name} onChange={e => setName(e.target.value)} placeholder="Enter Document Type Name" />
            </Field>
          </div>
          <div style={{ marginTop: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 500, color: '#656669', letterSpacing: '-0.02em', marginBottom: 8 }}>Status</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Toggle on={status} onChange={setStatus} />
              <span style={{ fontSize: 14, fontWeight: 500, color: '#1F2125', letterSpacing: '-0.02em' }}>{status ? 'Active' : 'Inactive'}</span>
            </div>
          </div>
        </section>

        {/* Documents section */}
        <section>
          <div style={{ fontSize: 14, fontWeight: 500, color: '#1F2125', letterSpacing: '-0.02em', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid #F5F6F5' }}>Documents</div>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #F5F6F5', borderRadius: 4, overflow: 'hidden' }}>
            <thead>
              <tr>
                <th style={thStyle}>Document Name</th>
                <th style={thStyle}>Remarks</th>
                <th style={thStyle}>Helps Check</th>
                <th style={{ ...thStyle, width: 60 }}></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i}>
                  <td style={tdStyle}>
                    <input value={item.name} onChange={e => setItems(prev => prev.map((it, idx) => idx === i ? { ...it, name: e.target.value } : it))}
                      placeholder="Document name"
                      style={{ border: 'none', outline: 'none', fontSize: 13, color: '#1F2125', letterSpacing: '-0.02em', background: 'transparent', width: '100%' }} />
                  </td>
                  <td style={tdStyle}>
                    <input value={item.remarks} onChange={e => setItems(prev => prev.map((it, idx) => idx === i ? { ...it, remarks: e.target.value } : it))}
                      placeholder="Remarks"
                      style={{ border: 'none', outline: 'none', fontSize: 13, color: '#656669', letterSpacing: '-0.02em', background: 'transparent', width: '100%' }} />
                  </td>
                  <td style={tdStyle}>
                    <Toggle on={item.helpsCheck} onChange={v => setItems(prev => prev.map((it, idx) => idx === i ? { ...it, helpsCheck: v } : it))} />
                  </td>
                  <td style={tdStyle}>
                    <button onClick={() => removeItem(i)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#CC3333', display: 'flex', padding: 4 }}>
                      <span style={{ width: 14, height: 14, display: 'flex' }}>{IC.trash}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 12 }}>
            <Btn variant="secondary" size="sm" icon={IC.plus} onClick={addItem}>Add</Btn>
          </div>
        </section>
      </div>
    </div>
  );
}

// ── Detail view ────────────────────────────────────────────────
function DocumentDetail({ doc }) {
  const rowStyle = { display: 'grid', gridTemplateColumns: '160px 1fr', gap: 8, paddingBottom: 12, borderBottom: '1px solid #F5F6F5', marginBottom: 12 };
  const keyStyle = { fontSize: 12, fontWeight: 500, color: '#8E8E93', letterSpacing: '-0.01em' };
  const valStyle = { fontSize: 13, color: '#1F2125', letterSpacing: '-0.02em' };
  const monoStyle = { fontFamily: "'JetBrains Mono', monospace", fontSize: 12 };

  return (
    <div style={{ flex: 1, overflow: 'auto', padding: '24px 32px' }}>
      <div style={{ maxWidth: 840 }}>
        {/* Header */}
        <div style={{ marginBottom: 24, padding: '16px 20px', border: '1px solid #F5F6F5', borderRadius: 4 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#1F2125', letterSpacing: '-0.02em', marginBottom: 16 }}>Basic Details</div>
          <div style={rowStyle}><span style={keyStyle}>ID</span><span style={{ ...valStyle, ...monoStyle }}>{doc.id}</span></div>
          <div style={rowStyle}><span style={keyStyle}>Document Type</span><span style={valStyle}>{doc.name}</span></div>
          <div style={{ ...rowStyle, borderBottom: 'none', marginBottom: 0, paddingBottom: 0 }}>
            <span style={keyStyle}>Status</span>
            <span><Badge type={doc.status}>{doc.status === 'active' ? 'Active' : 'Inactive'}</Badge></span>
          </div>
        </div>
        {/* Documents */}
        <div style={{ padding: '16px 20px', border: '1px solid #F5F6F5', borderRadius: 4 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#1F2125', letterSpacing: '-0.02em', marginBottom: 16 }}>Documents</div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['Document Name','Remarks','Helps Check'].map(h => (
                  <th key={h} style={{ padding: '8px 14px', textAlign: 'left', fontSize: 11, fontWeight: 500, color: '#8E8E93', borderBottom: '1px solid #F5F6F5', background: '#FBFBFB' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SAMPLE_DOC_ITEMS.map((item, i) => (
                <tr key={i}>
                  <td style={{ padding: '10px 14px', fontSize: 13, color: '#1F2125', borderBottom: '1px solid #F5F6F5' }}>{item.name}</td>
                  <td style={{ padding: '10px 14px', fontSize: 13, color: '#656669', borderBottom: '1px solid #F5F6F5' }}>{item.remarks}</td>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid #F5F6F5' }}><Badge type={item.helpsCheck ? 'active' : 'inactive'}>{item.helpsCheck ? 'Yes' : 'No'}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { DocumentTable, DocumentForm, DocumentDetail, SAMPLE_DOCS });
