/*
// 1. Prevent spawning multiple calculator zombies at once
if (document.getElementById('zombie-calc-ui')) return;

// 2. Create the floating UI container
const calcUI = document.createElement('div');
calcUI.id = 'zombie-calc-ui';
Object.assign(calcUI.style, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#ffffff',
    border: '2px solid #333',
    borderRadius: '12px',
    padding: '20px',
    width: '260px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
    zIndex: '1000000',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
});

// 3. Inject the HTML for the inputs and buttons
calcUI.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; font-weight: bold; font-size: 18px;">
        <span>🧮 Zombie Calc</span>
        <span id="zombie-calc-close" style="cursor: pointer; color: #ff4444; font-size: 20px;">✖</span>
    </div>
    <input type="text" id="zombie-calc-input" placeholder="e.g. 10 * 5 + 2" style="padding: 12px; font-size: 16px; border: 1px solid #ccc; border-radius: 6px;">
    <button id="zombie-calc-btn" style="padding: 12px; font-size: 16px; background-color: #28a745; color: white; border: none; border-radius: 6px; cursor: pointer;">Calculate</button>
    <div id="zombie-calc-result" style="font-size: 20px; font-weight: bold; text-align: center; color: #222; min-height: 24px;"></div>
`;

document.body.appendChild(calcUI);

// 4. Wire up the logic
document.getElementById('zombie-calc-close').onclick = () => calcUI.remove();

document.getElementById('zombie-calc-btn').onclick = () => {
    const expression = document.getElementById('zombie-calc-input').value;
    const resultDiv = document.getElementById('zombie-calc-result');
    try {
        // Evaluate safely
        const result = new Function('return ' + expression)();
        resultDiv.innerText = '= ' + result;
    } catch (e) {
        resultDiv.innerText = 'Mutated! (Error) 🧟';
    }
};
*/
