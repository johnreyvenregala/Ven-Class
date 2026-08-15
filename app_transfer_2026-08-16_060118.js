function render(list=VEN_SCENARIOS){
const box=document.getElementById('cards');
box.innerHTML=list.map(s=>`<div class='card'><span class='badge'>${s.category}</span><h3>${s.title}</h3><p><b>Customer:</b> ${s.customer}</p><p><b>Acknowledge:</b> ${s.acknowledge}</p><p><b>Empathize:</b> ${s.empathize}</p><p><b>Presentation:</b> ${s.presentation}</p><p><b>If they decline:</b> ${s.decline}</p></div>`).join('');
}
function search(){const q=document.getElementById('q').value.toLowerCase();render(VEN_SCENARIOS.filter(s=>JSON.stringify(s).toLowerCase().includes(q)));}
render();