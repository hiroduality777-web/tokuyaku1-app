"use client";
import { useState } from 'react';

export default function Page() {
  const [selected, setSelected] = useState<string[]>([]);

  const data = [
    { id: "1", title: "オーナーチェンジ", text: "本物件建物は、別添建物賃貸借契約にもとづき本契約に係る重要事項説明書記載の賃借人へ賃貸されています。本取引は賃借権の負担付で売買するものであり、買主には売主の賃貸人としての地位を所有権移転と同時に承継していただきます。" },
    { id: "2", title: "現状有姿", text: "本物件は現状有姿にて引き渡すものとし、付帯設備表の作成は行わないことを確認しました。" },
    { id: "3", title: "境界明示なし", text: "売主は境界の明示および新たな境界標の設置は行わず、京都地方法務局備付の地積測量図（または現地立会での目視確認）をもってこれに代えるものとします。" }
  ];

  const toggle = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const copy = () => {
    const txt = data.filter(d => selected.includes(d.id)).map(d => d.text).join("\n\n");
    navigator.clipboard.writeText(txt);
    alert("コピーしました！");
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '22px', color: '#2563eb', borderBottom: '2px solid #2563eb', paddingBottom: '10px' }}>和家 特約マスター</h1>
      <div style={{ marginTop: '20px' }}>
        {data.map(item => (
          <div key={item.id} onClick={() => toggle(item.id)} style={{ padding: '15px', border: '1px solid #ddd', marginBottom: '10px', borderRadius: '8px', cursor: 'pointer', background: selected.includes(item.id) ? '#eff6ff' : '#fff' }}>
            <input type="checkbox" checked={selected.includes(item.id)} readOnly style={{ marginRight: '10px' }} />
            <strong>{item.title}</strong>
          </div>
        ))}
      </div>
      <button onClick={copy} style={{ marginTop: '20px', width: '100%', padding: '15px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>選択した特約をコピー</button>
    </div>
  );
}
