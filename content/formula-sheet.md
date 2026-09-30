# Formula sheet

Every formula you are likely to need, grouped by unit, each with its symbols defined. Timing convention: t = today, t+1 = tomorrow; all quantities are real unless marked nominal.

### Common symbols

| Symbol | Meaning |
| --- | --- |
| Y\_t, C\_t, I\_t, G\_t | output (= income), consumption, investment, government spending in period t |
| S\_t | household stock of savings carried from t into t+1 (negative = debt) |
| T\_t | lump-sum taxes |
| B^G\_t | government debt issued in t |
| r\_t | real interest rate between t and t+1 |
| i\_t, π^e\_{t+1} | nominal interest rate; expected inflation |
| β | utility discount factor, 0 < β < 1 |
| u(·), u', u'' | flow utility, marginal utility, its slope |
| MPC | ∂C^d/∂Y\_t, marginal propensity to consume, 0 < MPC < 1 |
| A\_t | total factor productivity |
| K\_t, N\_t | capital stock, labor hours |
| α, δ, s | capital share (Cobb-Douglas), depreciation rate, saving rate |
| w\_t, R\_t | real wage, rental rate (return) on capital |
| θ\_t | labor supply shifter (higher = values leisure more) |
| f\_t | credit spread on firm borrowing |
| M\_t, P\_t | money supply, price level |

### Data (Ch 1)

| Formula | Notes |
| --- | --- |
| GDP\_t = Σ p\_{i,t} y\_{i,t} = C\_t + I\_t + G\_t + X\_t − IM\_t | p = price, y = quantity of final good i; X exports, IM imports |
| Real GDP\_{t+h} = Σ p\_{i,t} y\_{i,t+h}; deflator P = nominal/real | base-year t prices |
| CPI\_t = Σ p\_{i,t} x\_i / Σ p\_{i,b} x\_i | x\_i fixed basket quantity; b base year |
| Chain growth = √(g\_{base t} × g\_{base t+1}) | geometric mean of gross growth rates |
| N = h × E; u = U/LF; lfp = LF/L; LF = E + U | h hours per worker, E employed, U unemployed, L population |
| Nominal growth ≈ inflation + real growth | growth of a product ≈ sum of growth rates |

### Solow (Ch 5)

| Formula | Notes |
| --- | --- |
| Y\_t = AK\_t^α N\_t^{1−α} | CRS, diminishing MPs, F\_KN > 0, both inputs needed |
| k\_{t+1} = sAk\_t^α + (1−δ)k\_t | k = K/N capital per worker |
| k\* = (sA/δ)^{1/(1−α)}; y\* = A(k\*)^α; c\* = (1−s)y\* | steady state |
| R\* = αA(k\*)^{α−1} = αδ/s; w\* = (1−α)A(k\*)^α | R\* independent of A |
| Golden Rule: Af'(k\*) = δ, so s\_gr = α | MPK = depreciation; s > s\_gr is dynamically inefficient |

### Consumption (Ch 9–10)

| Formula | Notes |
| --- | --- |
| C\_t + C\_{t+1}/(1+r\_t) = Y\_t + Y\_{t+1}/(1+r\_t) | IBC; from S\_{t+1} = 0 |
| u'(C\_t) = β(1+r\_t)u'(C\_{t+1}) | Euler; MRS = 1 + r\_t |
| Log: C\_{t+1} = β(1+r\_t)C\_t | consumption growth |
| Log: C\_t = \[1/(1+β)\]\[Y\_t + Y\_{t+1}/(1+r\_t)\] | MPC = 1/(1+β) |
| Budget line intercepts: (1+r)Y\_t + Y\_{t+1} vertical; Y\_t + Y\_{t+1}/(1+r) horizontal | slope −(1+r\_t) |
| IC slope = −u'(C\_t)/\[βu'(C\_{t+1})\] | tangency = Euler |
| Lagrangian: u'(C\_t) = λ, βu'(C\_{t+1}) = λ/(1+r\_t) | λ = shadow value of wealth |
| Uncertainty: u'(C\_t) = β(1+r\_t)E\[u'(C\_{t+1})\] | u''' > 0 means precautionary saving |
| Random walk: E\[C\_{t+1}\] = C\_t | needs u''' = 0 and β(1+r) = 1 |
| Binding S\_t ≥ 0: C\_t = Y\_t | MPC = 1, Euler fails |
| Tax on C\_t at rate τ: u'(C\_t) = β(1+r)(1+τ)u'(C\_{t+1}) | PS 2 |
| Perfect complements: C\_t = C\_{t+1} = \[(1+r)Y\_t + Y\_{t+1}\]/(2+r) | U = min(C\_t, C\_{t+1}) |
| 3-period log: C\_t = \[1/(1+β+β²)\]\[Y\_t + Y\_{t+1}/(1+r) + Y\_{t+2}/(1+r)²\] | smaller MPC |
| β(1+r) = 1: C̄ = \[(1−β)/(1−β^{T+1})\] Σ β^j Y\_{t+j} | MPC = (1−β)/(1−β^{T+1}); permanent change: dC̄/dY = 1 |
| Geometric sum: 1 + β + … + β^T = (1−β^{T+1})/(1−β) | infinite: 1/(1−β) |

### Endowment equilibrium and fiscal policy (Ch 11, 13)

| Formula | Notes |
| --- | --- |
| Σ\_j S\_t(j) = 0, so Y\_t = C\_t | market clearing, no capital |
| Log: 1 + r\_t = (1/β)(Y\_{t+1}/Y\_t) | r tracks expected growth |
| Two types: 1 + r\_t = (1/β)(L\_2/L\_1) | only aggregates matter |
| Yield curve: 1 + r\_{2,t} = (1/β)(Y\_{t+2}/Y\_t)^{1/2} | long rate = geometric mean of short rates |
| G\_t + G\_{t+1}/(1+r) = T\_t + T\_{t+1}/(1+r) | government IBC |
| B^G\_t = (T\_{t+1} − G\_{t+1})/(1+r\_t) | debt = PV of future primary surplus |
| C\_t = C^d(Y\_t − G\_t, Y\_{t+1} − G\_{t+1}, r\_t); Y\_t = C\_t + G\_t | Ricardian equivalence |
| Log IS: Y\_t = (Y\_{t+1} − G\_{t+1})/\[β(1+r\_t)\] + G\_t |  |
| Log: 1 + r\_t = (Y\_{t+1} − G\_{t+1})/\[β(Y\_t − G\_t)\] | ↑ G\_t raises r |
| E\_0 = C^d(−G\_t, ·) + G\_t; ∂E\_0/∂G\_t = 1 − MPC | autonomous expenditure |
| Fixed-r multiplier: 1 (Ricardian) | equilibrium multiplier 0 with vertical Ys |
| Fixed-r multiplier, non-Ricardian deficit: 1/(1−MPC); tax: −MPC/(1−MPC) | log: (1+β)/β and −1/β |

### Production economy and neoclassical model (Ch 12, 17–18)

| Formula | Notes |
| --- | --- |
| w\_t = A\_tF\_N(K\_t, N\_t) | labor demand N^d(w, A, K) \[−,+,+\] |
| A\_{t+1}F\_K(K\_{t+1}, N\_{t+1}) = r\_t + f\_t + δ | investment demand I^d(r, A\_{t+1}, f, K) \[−,+,−,−\] |
| CD: N\_t = \[(1−α)A\_tK\_t^α/w\_t\]^{1/α} | PS 4 |
| CD: I\_t = \[αA\_{t+1}/(r\_t + δ)\]^{1/(1−α)} − (1−δ)K\_t | PS 4 (add f\_t if present) |
| u\_L(C\_t, 1−N\_t) = w\_t u\_C(C\_t, 1−N\_t) | labor supply N^s(w, θ) \[+,−\] |
| Log separable: θ\_t/(1−N\_t) = w\_t/C\_t; GHH: θ\_t/(1−N\_t) = w\_t | GHH has no income effect |
| V\_t = D\_t + D\_{t+1}/(1+r\_t) | firm value |
| Y\_t = C\_t + I\_t + G\_t | resource constraint |
| IS: Y\_t = C^d(Y\_t−G\_t, Y\_{t+1}−G\_{t+1}, r\_t) + I^d(r\_t, A\_{t+1}, f\_t, K\_t) + G\_t |  |
| IS slope: dr/dY = (1 − MPC)/(C\_r + I\_r) | flatter with bigger MPC or |
| M\_t = P\_t M^d(r\_t + π^e\_{t+1}, Y\_t); r\_t = i\_t − π^e\_{t+1} | money market, Fisher |

### Unemployment (Ch 16)

| Formula | Notes |
| --- | --- |
| u\_{t+1} = u\_t − fu\_t + s(1 − u\_t); u\* = s/(s+f) | f job-finding rate, s separation rate |
