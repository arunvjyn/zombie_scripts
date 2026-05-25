/*
const OS_ID = appId; 

// 1. Build UI
const calcUI = document.createElement('div');
calcUI.id = `app-window-${OS_ID}`;
Object.assign(calcUI.style, {
    position: 'fixed', top: '15%', left: '50%', transform: 'translateX(-50%)',
    width: '280px', zIndex: 2147483647, background: '#2c3e50', color: 'white',
    padding: '20px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
    fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', gap: '10px'
});

calcUI.innerHTML = `
    <h3 style="margin:0;">🧮 Calculator</h3>
    <input type="text" id="calcInput_${OS_ID}" placeholder="e.g. 10 * 5 + 2" style="padding:12px; border-radius:5px; border:none; font-size:16px; outline:none;">
    <button id="calcBtn_${OS_ID}" style="padding:12px; background:#27ae60; color:white; border:none; border-radius:5px; font-weight:bold; font-size:16px;">Calculate</button>
    <div id="calcResult_${OS_ID}" style="padding:15px; background:#34495e; border-radius:5px; font-size:18px; text-align:center;">Result: 0</div>
    <div style="display:flex; gap:10px; margin-top:5px;">
        <button id="hideCalc_${OS_ID}" style="flex:1; padding:10px; background:#7f8c8d; border:none; border-radius:5px; color:white;">Minimize</button>
        <button id="closeCalc_${OS_ID}" style="flex:1; padding:10px; background:#c0392b; border:none; border-radius:5px; color:white;">Kill App</button>
    </div>
`;
document.body.appendChild(calcUI);

// 2. Logic
document.getElementById(`calcBtn_${OS_ID}`).onclick = () => {
    const exp = document.getElementById(`calcInput_${OS_ID}`).value;
    const resDiv = document.getElementById(`calcResult_${OS_ID}`);
    try {
        resDiv.innerText = "Result: " + new Function('return ' + exp)();
    } catch(e) { 
        resDiv.innerText = "Error 🧟"; 
    }
};

// 3. Lifecycle Management via OS API
document.getElementById(`hideCalc_${OS_ID}`).onclick = () => {
    calcUI.style.display = 'none'; 
};

document.getElementById(`closeCalc_${OS_ID}`).onclick = () => { 
    calcUI.remove(); // Erase DOM
    os.reportDeath(OS_ID); // Direct syscall: Tell the Hub we are dead
};

// 4. Register focus command with the OS API
os.registerFocus(OS_ID, () => {
    calcUI.style.display = 'flex';
});
*/
