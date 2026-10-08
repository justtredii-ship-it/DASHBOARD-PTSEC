const jobs=[
['19 Nov 2026','Assignment Closure & Debriefing','Office','Final ESG discussion and assignment closing',''],
['18 Nov 2026','Final ESG Assignment Report','Office','Final reporting and submission',''],
['16 Nov 2026','Compliance Review Meeting','Office','Internal ESG review',''],
['15 Nov 2026','Corrective Action Recommendation Draft','Office','Improvement recommendation preparation',''],
['13 Nov 2026','ESG Field Evidence Organization','Office','Documentation consolidation',''],
['12 Nov 2026','Post-Fieldwork Data Consolidation','Office','Data processing and validation',''],
['10-11 Nov 2026','Demobilization (Demob)','Sambas to Office','Field return process','Survey travel cost: IDR 420,000/day x 2 days = IDR 840,000 (excluding monthly salary)'],
['9 Nov 2026','Field Survey Closing Report','Sambas','Field completion documentation',''],
['6 Nov 2026','Field Finding Validation','Sambas','Ground verification',''],
['2 Nov 2026','ESG Compliance Evidence Collection','Sambas','Evidence gathering',''],
['28 Oct 2026','Land Use Verification','Sambas','Spatial ground check',''],
['25 Oct 2026','Biodiversity Observation','Sambas','Environmental survey',''],
['22 Oct 2026','Community Interview & Social Mapping','Sambas','Stakeholder engagement',''],
['20 Oct 2026','Forest Condition Observation','Sambas','Field assessment',''],
['19 Oct-9 Nov 2026','HCV/HCS Ground-Truthing','Sambas','Field Survey','Survey cost: IDR 420,000/day x 22 days = IDR 9,240,000 (excluding monthly salary)'],
['17 Oct 2026','Review Field Survey Instruments','Office','Preparation','Pending Review'],
['15 Oct 2026','Community Stakeholder Contact Verification','Pontianak/Kubu Raya','Local coordination','Survey travel cost: IDR 350,000/trip (excluding monthly salary)'],
['12 Oct 2026','Environmental Risk Data Compilation','Office','ESG analysis','On Progress'],
['9 Oct 2026','HCV/HCS Desktop Verification Update','Office','Preparation','On Progress']
];

let area=document.getElementById('jobs');
jobs.forEach(j=>{
area.innerHTML+=`<div class="job card">
<h3>${j[0]} - ${j[1]}</h3>
<p>Location: ${j[2]} | Task: ${j[3]}</p>
<p>${j[4]}</p>
<p>Status: <b>${j[1].includes('Ground')?'Approved - Travel Assignment':'On Progress / Pending Approval'}</b></p>
<button>${j[1].includes('Ground')?'Download Assignment Letter':'View Task Detail'}</button>
</div>`
})
