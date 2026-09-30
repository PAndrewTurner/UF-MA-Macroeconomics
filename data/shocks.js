/* Shocks in the neoclassical model (Ch 18, Lecture 5).
   `signs` is the theory answer (the table you memorize); the simulator's
   numbers are only an illustration of those signs.
   `param` / `delta` say which model parameter the shock moves at full size. */
window.SHOCKS = [
  {
    id: 'At', label: '↑ A_t', name: 'Productivity today', type: 'Supply shock', curve: 'Ys shifts right',
    param: 'A', delta: 0.15,
    signs: { Y: '+', C: '+', I: '+', N: '+', w: '+', r: '−', i: '−', P: '−' },
    steps: [
      'Supply shock: A_t appears in labor demand and the production function.',
      'N^d shifts right, so N and w rise; the production function shifts up.',
      'Y rises twice over (direct effect of A_t plus more labor): Ys shifts right. IS does not move.',
      'r falls, moving the economy down the IS curve, so C and I both rise.',
      'Lower i (= r + π^e) and higher Y raise money demand, so P falls.'
    ]
  },
  {
    id: 'theta', label: '↑ θ_t', name: 'Labor supply shifter', type: 'Supply shock', curve: 'Ys shifts left',
    param: 'theta', delta: 1.2,
    signs: { Y: '−', C: '−', I: '−', N: '−', w: '+', r: '+', i: '+', P: '+' },
    steps: [
      'Supply shock: θ_t appears only in labor supply.',
      'N^s shifts left, so N falls and w rises.',
      'Y falls along an unchanged production function: Ys shifts left. IS does not move.',
      'r rises, so C and I both fall.',
      'Higher i and lower Y reduce money demand, so P rises.'
    ]
  },
  {
    id: 'f', label: '↑ f_t', name: 'Credit spread', type: 'Demand shock', curve: 'IS shifts left',
    param: 'f', delta: 1,
    signs: { Y: '0', C: '+', I: '−', N: '0', w: '0', r: '−', i: '−', P: '−' },
    steps: [
      'Demand shock: f_t raises the firm’s borrowing cost, so investment demand falls at every r.',
      'IS shifts left; Ys is vertical, so Y, N and w do not change.',
      'r falls until expenditure again equals the unchanged output.',
      'C + I is fixed (Y and G unchanged): C rises, I falls on net.',
      'Lower i raises money demand, so P falls.'
    ]
  },
  {
    id: 'At1', label: '↑ A_{t+1}', name: 'Expected future productivity ("news")', type: 'Demand shock', curve: 'IS shifts right',
    param: 'At1', delta: 1,
    signs: { Y: '0', C: '?', I: '?', N: '0', w: '0', r: '+', i: '+', P: '+' },
    steps: [
      'Demand shock: I^d rises (future capital is more productive) and expected Y_{t+1} rises, so C^d rises too.',
      'IS shifts right; Ys is vertical, so Y, N and w do not change.',
      'r rises enough to bring expenditure back to the unchanged output.',
      'C + I is fixed, so their individual responses are ambiguous: if one rises, the other falls. (The graph shows one possible case.)',
      'Higher i lowers money demand, so P rises.'
    ]
  },
  {
    id: 'Gt', label: '↑ G_t', name: 'Government spending today', type: 'Demand shock', curve: 'IS shifts right',
    param: 'G', delta: 1,
    signs: { Y: '0', C: '−', I: '−', N: '0', w: '0', r: '+', i: '+', P: '+' },
    steps: [
      'Demand shock: autonomous expenditure rises by (1 − MPC)ΔG; IS shifts right by exactly ΔG.',
      'Ys is vertical, so Y, N and w do not change: the equilibrium multiplier is 0.',
      'r rises; C and I fall by exactly ΔG in total (complete crowding out).',
      'Fixed-r multiplier: 1 with Ricardian equivalence, 1/(1 − MPC) without it and with deficit finance.',
      'Higher i lowers money demand, so P rises.'
    ]
  },
  {
    id: 'Gt1', label: '↑ G_{t+1}', name: 'Expected future government spending', type: 'Demand shock', curve: 'IS shifts left',
    param: 'Gt1', delta: 1,
    signs: { Y: '0', C: '−', I: '+', N: '0', w: '0', r: '−', i: '−', P: '−' },
    steps: [
      'Demand shock: Y_{t+1} − G_{t+1} falls, so the household cuts C^d today (it expects higher future taxes).',
      'IS shifts left; Y, N and w do not change.',
      'r falls; I rises; C falls (C + I fixed).',
      'Lower i raises money demand, so P falls.'
    ]
  },
  {
    id: 'M', label: '↑ M_t', name: 'Money supply', type: 'Nominal shock', curve: 'Neither curve moves',
    param: 'M', delta: 0.2,
    signs: { Y: '0', C: '0', I: '0', N: '0', w: '0', r: '0', i: '0', P: '+' },
    steps: [
      'Nominal shock: M_t is not in the real block, so neither IS nor Ys moves (classical dichotomy).',
      'The vertical money supply curve shifts right; money demand does not move.',
      'P rises; every real variable and i are unchanged: money is neutral.',
      'Non-neutrality would need sticky prices or wages (Keynesian models).'
    ]
  },
  {
    id: 'pie', label: '↑ π^e_{t+1}', name: 'Expected inflation', type: 'Nominal shock', curve: 'Neither curve moves',
    param: 'pie', delta: 2,
    signs: { Y: '0', C: '0', I: '0', N: '0', w: '0', r: '0', i: '+', P: '+' },
    steps: [
      'Nominal shock: no real variable changes, so r is fixed.',
      'Fisher: i = r + π^e rises one-for-one.',
      'Higher i lowers money demand (the curve pivots), so P rises today.',
      'Expected future inflation is partly self-fulfilling.'
    ]
  }
];
window.SHOCK_VARS = ['Y', 'C', 'I', 'N', 'w', 'r', 'i', 'P'];
