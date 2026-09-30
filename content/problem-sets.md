# Problem sets worked

Steps only, in the order you would write them on the exam.

## Lecture 1 problem set (essay)

Thesis: each crisis supplies the variable the previous model lacked, and the revised model carries that crisis's architecture into the next one.

| Episode | What standard DSGE lacked | Repair | Source you cited |
| --- | --- | --- | --- |
| Pre-2008 | Financial intermediaries (balance sheets netted out) | Financial accelerator | Blanchard (2008); Bernanke, Gertler & Gilchrist (1999) |
| 2008–2015 | Zero lower bound; fiscal multipliers | ZLB models; multipliers underestimated in austerity | Krugman (1998); Eggertsson & Woodford (2003); Blanchard & Leigh (2013); Christiano et al. (2018) |
| COVID-19 | Supply and demand shocks at once; epidemic externality | Keynesian supply shock; SIR in general equilibrium | Guerrieri et al. (2022); Eichenbaum et al. (2021) |
| 2021–2023 inflation | Post-2008 consensus (weak demand, ZLB) misread overheating | Product-market shocks start it, tight labor markets sustain it | Bernanke & Blanchard (2025) |

Exam use: pair with the Lucas critique (Unit 2) and Box's "all models are wrong" (Ch 2).

## Problem Set 2 (Ch 9)

Symbols: C, Y = consumption, income; S\_t = savings into t+1; r = real rate; β = discount factor; τ = consumption tax rate; u' = marginal utility.

**Q1. Why S\_{t+1} = 0.** S\_{t+1} > 0 dominated (u' > 0, unspent resources wasted); S\_{t+1} < 0 desired but refused by lender. ∴ S\_{t+1} = 0.

**Q2. Lifetime budget constraint.**

```latex
\begin{aligned}
&C_t + S_t = Y_t, \qquad C_{t+1} = Y_{t+1} + (1+r_t)S_t\\
&S_t = \frac{C_{t+1} - Y_{t+1}}{1+r_t} \quad\text{-->}\quad C_t + \frac{C_{t+1}}{1+r_t} - \frac{Y_{t+1}}{1+r_t} = Y_t\\
&\therefore\; C_t + \frac{C_{t+1}}{1+r_t} = Y_t + \frac{Y_{t+1}}{1+r_t}
\end{aligned}
```

**Q4. Euler equation.** u'(C\_t) = β(1+r\_t)u'(C\_{t+1}), equivalently u'(C\_t)/\[βu'(C\_{t+1})\] = 1 + r\_t. MB of one more unit today u'(C\_t); MC: (1+r\_t) units tomorrow each worth βu'(C\_{t+1}). MRS = intertemporal price.

**Q5. Graph.** Budget line intercepts (1+r\_t)Y\_t + Y\_{t+1} (vertical) and Y\_t + Y\_{t+1}/(1+r\_t) (horizontal), slope −(1+r\_t), through (Y\_t, Y\_{t+1}). Tangency: feasible, exhausts resources, higher curves infeasible, convexity puts every other point on a lower curve. Equal slopes ∴ Euler.

### Exercise 1 (U = u(C\_t) + βu(C\_{t+1}))

(a) Optimal S\_{t+1} = 0 ∴ C\_t + C\_{t+1}/(1+r) = Y\_t + Y\_{t+1}/(1+r).

(b)

```latex
\begin{aligned}
&C_{t+1} = (1+r)(Y_t - C_t) + Y_{t+1}\\
&\max_{C_t}\; u(C_t) + \beta u\big((1+r)(Y_t - C_t) + Y_{t+1}\big)\\
&\frac{\partial U}{\partial C_t} = u'(C_t) - \beta(1+r)u'(C_{t+1}) = 0 \quad\text{-->}\quad u'(C_t) = \beta(1+r)u'(C_{t+1})
\end{aligned}
```

(c) Intercepts (1+r)Y\_t + Y\_{t+1} and Y\_t + Y\_{t+1}/(1+r); slope −(1+r). IC slope at optimum = −(1+r).

(d) ↑ Y\_{t+1} to a new level Y1\_{t+1}: parallel outward shift; intercepts (1+r)Y\_t + Y1\_{t+1} and Y\_t + Y1\_{t+1}/(1+r); slope unchanged. C\_t ↑, C\_{t+1} ↑, S\_t ↓. IC slope at optimum still −(1+r).

(e) Tax τ on C\_t:

```latex
\begin{aligned}
&(1+\tau)C_t + S_t = Y_t, \quad C_{t+1} = Y_{t+1} + (1+r)S_t\\
&(a')\;\; (1+\tau)C_t + \frac{C_{t+1}}{1+r} = Y_t + \frac{Y_{t+1}}{1+r}\\
&(b')\;\; C_{t+1} = (1+r)[Y_t - (1+\tau)C_t] + Y_{t+1} \quad\text{-->}\quad u'(C_t) = \beta(1+r)(1+\tau)\,u'(C_{t+1})\\
&(c')\;\; \text{vertical } (1+r)Y_t + Y_{t+1};\; \text{horizontal } \frac{1}{1+\tau}\Big[Y_t + \frac{Y_{t+1}}{1+r}\Big];\; \text{slope } -(1+r)(1+\tau)
\end{aligned}
```

Line pivots inward about the vertical intercept; endowment point no longer on it; IC slope at optimum −(1+r)(1+τ).

(f) τ --> τ': vertical intercept unchanged; horizontal \[Y\_t + Y\_{t+1}/(1+r)\]/(1+τ'); slope −(1+r)(1+τ'), steeper.

|  | Substitution | Income | Total |
| --- | --- | --- | --- |
| C\*\_t | − | − | − |
| C\*\_{t+1} | + | − | ? |

∴ the optimal C\_t falls with τ (∂C\_t/∂τ < 0); the effect on the optimal C\_{t+1} is ambiguous.

### Exercise 2 (log utility, S\_t ≥ 0)

(a) Kink at endowment point; vertical below it (no borrowing).

(b) 1/C\_t = β(1+r\_t)(1/C\_{t+1}) --> C\_{t+1} = β(1+r\_t)C\_t.

(c)

```latex
\begin{aligned}
&(1+\beta)C_t = Y_t + \frac{Y_{t+1}}{1+r_t} \quad\text{-->}\quad C_t^{unc} = \frac{1}{1+\beta}\Big[Y_t + \frac{Y_{t+1}}{1+r_t}\Big]\\
&C_t^{unc} > Y_t \iff \frac{Y_{t+1}}{1+r_t} > \beta Y_t \iff Y_{t+1} > \beta(1+r_t)Y_t\\
&\therefore\; C_t = \min\Big\{\frac{1}{1+\beta}\Big[Y_t + \frac{Y_{t+1}}{1+r_t}\Big],\; Y_t\Big\}
\end{aligned}
```

Binds when the household wants to borrow; at the kink the Euler equation does not hold.

(d) Y\_t = 3, Y\_{t+1} = 10, β = 0.95, r = 0.1: C^unc = (1/1.95)(3 + 10/1.1) = 12.0909/1.95 = 6.2005 > 3. Check: β(1+r)Y\_t = 3.135 < 10. ∴ C\_t = 3.

(e) Y\_t = 4: β(1+r)Y\_t = 4.18 < 10, still binding; C\_t: 3 --> 4. ∴ MPC = ΔC\_t/ΔY\_t = 1.

### Exercise 4 (U = min(C\_t, C\_{t+1}))

(a) C\_t = C\_{t+1} (L-shaped ICs, kinks on the 45° line; excess in either period buys no utility; no tangency, no Euler equation).

(b)

```latex
\begin{aligned}
&C_t\Big[\frac{2+r_t}{1+r_t}\Big] = \frac{(1+r_t)Y_t + Y_{t+1}}{1+r_t} \quad\text{-->}\quad C_t = C_{t+1} = \frac{(1+r_t)Y_t + Y_{t+1}}{2+r_t}\\
&S_t = Y_t - C_t = \frac{Y_t - Y_{t+1}}{2+r_t}
\end{aligned}
```

(c)

```latex
\frac{\partial C_t}{\partial Y_t} = \frac{1+r_t}{2+r_t} \in (0,1), \qquad \frac{\partial C_t}{\partial r_t} = \frac{Y_t(2+r_t) - [(1+r_t)Y_t + Y_{t+1}]}{(2+r_t)^2} = \frac{Y_t - Y_{t+1}}{(2+r_t)^2}
```

Sign follows Y\_t − Y\_{t+1}: rises for a saver, falls for a borrower. Perfect complements: substitution effect = 0, only income effect.

## Problem Set 3 and Lecture 3 review (Ch 11 Ex 1, 3; Ch 13 Ex 1)

Symbols: C, Y, G, T = consumption, endowment/output, government spending, lump-sum taxes; r = real rate; β = discount factor; S = household saving; S^G = government saving; r\_{2,t} = two-period rate; MPC = ∂C/∂Y\_t.

### Ch 11 Exercise 1 — endowment equilibrium

(a) C\_t = C(Y\_t, Y\_{t+1}, r\_t) with signs \[+, +, −\]; 0 < ∂C/∂Y\_t = MPC < 1. Forward-looking (Y\_{t+1} matters); r\_t raises the price of current consumption; substitution effect assumed to dominate.

(b) ↑ Y\_t: C\_t ↑ by MPC × ΔY\_t, C\_{t+1} ↑, S\_t ↑.

(c) ↑ Y\_{t+1}: C\_t ↑, S\_t ↓.

(d) Competitive equilibrium: prices and allocations such that all agents optimize taking prices as given and all markets clear.

(e) IS: (r\_t, Y\_t) pairs with Y\_t = C(Y\_t, Y\_{t+1}, r\_t). Expenditure line: intercept > 0, slope MPC < 1, one crossing with 45° line; ↓ r shifts it up, crossing moves right --> IS slopes down.

(f) Ys vertical at the endowment Y\_{0,t}; r\_{0,t} at IS ∩ Ys.

(g) ↑ Y\_t: Ys right, IS fixed, r\_t ↓ until desired saving = 0. Log check: 1 + r\_t = Y\_{t+1}/(βY\_t) falls.

(h) Hurricane forecast: ↓ Y\_{t+1} --> IS left --> r\_t ↓ (households want to save; no counterparty).

(i) ↑ r\_t signals future resources rising relative to current resources.

### Ch 11 Exercise 3 — the yield curve

(a)

```latex
\begin{aligned}
&C_{t+2} = Y_t(1+r_t)(1+r_{t+1}) + Y_{t+1}(1+r_{t+1}) + Y_{t+2} - C_t(1+r_t)(1+r_{t+1}) - C_{t+1}(1+r_{t+1})\\
&\max_{C_t, C_{t+1}}\; \ln C_t + \beta\ln C_{t+1} + \beta^2\ln C_{t+2}\\
&\frac{1}{C_t} = \frac{\beta^2(1+r_t)(1+r_{t+1})}{C_{t+2}}, \qquad \frac{1}{C_{t+1}} = \frac{\beta(1+r_{t+1})}{C_{t+2}}\\
&\therefore\; \frac{C_{t+2}}{C_{t+1}} = \beta(1+r_{t+1}), \qquad \frac{C_{t+1}}{C_t} = \beta(1+r_t)
\end{aligned}
```

(b) Impose C = Y each period:

```latex
1 + r_{t+1} = \frac{Y_{t+2}}{\beta Y_{t+1}}, \qquad 1 + r_t = \frac{Y_{t+1}}{\beta Y_t}
```

(c)

```latex
(1+r_{2,t})^2 = (1+r_t)(1+r_{t+1}) = \frac{Y_{t+1}}{\beta Y_t}\cdot\frac{Y_{t+2}}{\beta Y_{t+1}} = \frac{Y_{t+2}}{\beta^2 Y_t} \quad \therefore \quad 1 + r_{2,t} = \frac{1}{\beta}\sqrt{\frac{Y_{t+2}}{Y_t}}
```

(d) Y\_t = Y\_{t+1} = Y\_{t+2}: 1 + r\_{1,t} = 1 + r\_{2,t} = 1/β ∴ flat.

(e) Y\_{t+1} = Y\_t --> 1 + r\_{1,t} = 1/β; Y\_{t+2} < Y\_t --> 1 + r\_{2,t} = (1/β)√(Y\_{t+2}/Y\_t) < 1/β ∴ inverted; expected output below current output inverts the curve (recession signal).

### Ch 13 Exercise 1 — fiscal policy

(a)

```latex
S_t = \frac{C_{t+1} - Y_{t+1} + T_{t+1}}{1+r_t} \quad\text{-->}\quad C_t + \frac{C_{t+1}}{1+r_t} = Y_t - T_t + \frac{Y_{t+1} - T_{t+1}}{1+r_t}
```

(b) C\_{t+1}/(βC\_t) = 1 + r\_t. No taxes: lump sum shifts the budget line, slope −(1+r\_t) unchanged.

(c)

```latex
C_t(1+\beta) = Y_t - T_t + \frac{Y_{t+1} - T_{t+1}}{1+r_t} \quad\therefore\quad C_t = \frac{1}{1+\beta}\Big[Y_t - T_t + \frac{Y_{t+1} - T_{t+1}}{1+r_t}\Big]
```

(d) S\_t = −S^G\_t.

(e)

```latex
G_t + S^G_t = T_t,\; G_{t+1} = T_{t+1} + (1+r_t)S^G_t \quad\text{-->}\quad G_t + \frac{G_{t+1}}{1+r_t} = T_t + \frac{T_{t+1}}{1+r_t}
```

(f)

```latex
C_t = \frac{1}{1+\beta}\Big[Y_t - G_t + \frac{Y_{t+1} - G_{t+1}}{1+r_t}\Big]
```

Taxes drop out: a deferred tax has equal present value later; debt is not net wealth.

(g)

```latex
Y_t = \frac{1}{1+\beta}\Big[Y_t - G_t + \frac{Y_{t+1} - G_{t+1}}{1+r_t}\Big] + G_t \quad\text{-->}\quad \frac{\beta}{1+\beta}Y_t = \frac{\beta}{1+\beta}G_t + \frac{1}{1+\beta}\cdot\frac{Y_{t+1} - G_{t+1}}{1+r_t} \quad\therefore\quad Y_t = \frac{Y_{t+1} - G_{t+1}}{\beta(1+r_t)} + G_t
```

(h) dY\_t/dG\_t at dr\_t = 0 is 1. Check: dY\_t = MPC(dY\_t − dG\_t) + dG\_t --> (1 − MPC)dY\_t = (1 − MPC)dG\_t.

(i) Y\_t fixed: 1 + r\_t = (Y\_{t+1} − G\_{t+1})/\[β(Y\_t − G\_t)\] ∴ ↑ G\_t --> r\_t ↑; C\_t = Y\_t − G\_t falls one-for-one; equilibrium multiplier 0.

(j) Household ignores the government IBC:

```latex
Y_t = \frac{1}{1+\beta}\Big[Y_t - T_t + \frac{Y_{t+1} - T_{t+1}}{1+r_t}\Big] + G_t \quad\therefore\quad Y_t = \frac{(1+\beta)G_t - T_t}{\beta} + \frac{Y_{t+1} - T_{t+1}}{\beta(1+r_t)}, \qquad \left.\frac{dY_t}{dG_t}\right|_{dr_t=0} = \frac{1+\beta}{\beta} > 1
```

Bigger than (h). Note (1+β)/β = 1/(1 − MPC) with MPC = 1/(1+β).

(k) r\_t ↑, by more than in (i): desired expenditure at fixed r rises more.

(l) dY\_t/dT\_t at dr\_t = 0 is −1/β (= −MPC/(1−MPC)), smaller in absolute value than the spending multiplier (1+β)/β. If the household anticipates the government IBC, T\_t matters only through the spending it implies: matched by ↑ G\_t, expenditure rises (multiplier +1); matched by ↑ G\_{t+1}, expenditure falls. The instructor's key bounds it between −1/\[β(1+r\_t)\] and 1. (If the offsetting G\_{t+1} rise is (1+r\_t)dT\_t, equal in present value, the lower end works out to −1/β.)

## Problem Set 4 (Ch 12 Ex 1, 2)

Symbols: N = labor, 1 − N = leisure, θ = leisure weight, w = real wage, A = productivity, K = capital, α = capital exponent, δ = depreciation, r = real rate, B^I = firm borrowing, D = dividend, V = firm value, I = investment.

### Exercise 1 — one-period household

(a)

```latex
\begin{aligned}
&\max_{N_t}\; \ln C_t + \theta_t\ln(1-N_t) \quad\text{s.t. } C_t = w_tN_t \quad\text{-->}\quad U = \ln(w_tN_t) + \theta_t\ln(1-N_t)\\
&\frac{dU}{dN_t} = \frac{1}{N_t} - \frac{\theta_t}{1-N_t} = 0 \quad\text{-->}\quad 1 - N_t = \theta_tN_t\\
&\therefore\; N_t = \frac{1}{1+\theta_t}, \qquad C_t = \frac{w_t}{1+\theta_t}
\end{aligned}
```

(b) ∂N\_t/∂w\_t = 0: with log utility and no non-wage income, income and substitution effects of w\_t exactly offset.

### Exercise 2 — firm, Y\_{t+1} = A\_{t+1}K\_{t+1}^α (no labor in t+1)

(a)

```latex
\begin{aligned}
&D_t = A_tK_t^{\alpha}N_t^{1-\alpha} - w_tN_t, \qquad D_{t+1} = A_{t+1}K_{t+1}^{\alpha} + (1-\delta)K_{t+1} - (1+r_t)B^I_t\\
&\max_{N_t, I_t}\; V_t = D_t + \frac{D_{t+1}}{1+r_t} \quad\text{s.t. } K_{t+1} = I_t + (1-\delta)K_t,\; I_t = B^I_t \quad\text{-->}\quad B^I_t = K_{t+1} - (1-\delta)K_t\\
&\max_{N_t, K_{t+1}}\; A_tK_t^{\alpha}N_t^{1-\alpha} - w_tN_t + \frac{A_{t+1}K_{t+1}^{\alpha} + (1-\delta)K_{t+1} - (1+r_t)[K_{t+1} - (1-\delta)K_t]}{1+r_t}
\end{aligned}
```

(b)

```latex
\begin{aligned}
&\frac{\partial V_t}{\partial N_t} = (1-\alpha)A_tK_t^{\alpha}N_t^{-\alpha} - w_t = 0, \qquad \frac{\partial V_t}{\partial K_{t+1}} = \frac{1}{1+r_t}\big[\alpha A_{t+1}K_{t+1}^{\alpha-1} + (1-\delta) - (1+r_t)\big] = 0\\
&\therefore\; (1-\alpha)A_tK_t^{\alpha}N_t^{-\alpha} = w_t, \qquad \alpha A_{t+1}K_{t+1}^{\alpha-1} = r_t + \delta
\end{aligned}
```

(c)

```latex
N_t^{\alpha} = \frac{(1-\alpha)A_tK_t^{\alpha}}{w_t} \;\therefore\; N_t = \Big[\frac{(1-\alpha)A_tK_t^{\alpha}}{w_t}\Big]^{1/\alpha}; \qquad K_{t+1}^{1-\alpha} = \frac{\alpha A_{t+1}}{r_t+\delta} \;\therefore\; K_{t+1} = \Big[\frac{\alpha A_{t+1}}{r_t+\delta}\Big]^{\frac{1}{1-\alpha}}
```

(d)

```latex
I_t = K_{t+1} - (1-\delta)K_t \;\therefore\; I_t = \Big[\frac{\alpha A_{t+1}}{r_t+\delta}\Big]^{\frac{1}{1-\alpha}} - (1-\delta)K_t
```

(e) α = 1/3, A\_t = 1, K\_t = 2:

```latex
N_t = \Big[\frac{(2/3)(1)(2)^{1/3}}{w_t}\Big]^{3} = \frac{(2/3)^3(2)}{w_t^3} = \frac{16/27}{w_t^3}
```

| w\_t | 1.00 | 1.10 | 1.20 | 1.30 | 1.40 | 1.50 |
| --- | --- | --- | --- | --- | --- | --- |
| N\_t (A\_t = 1) | 0.5926 | 0.4452 | 0.3429 | 0.2697 | 0.2160 | 0.1756 |
| N\_t (A\_t = 1.1) | 0.7887 | 0.5926 | 0.4564 | 0.3590 | 0.2874 | 0.2337 |

Downward sloping. (f) A\_t = 1.1: N\_t = 1.331 × (16/27)/w\_t³; labor demand shifts right.

(g) α = 1/3, δ = 0.1, A\_{t+1} = 1, K\_t = 2:

```latex
I_t = \Big[\frac{1/3}{r_t + 0.1}\Big]^{3/2} - (0.9)(2) = \Big[\frac{1/3}{r_t + 0.1}\Big]^{3/2} - 1.8
```

| r\_t | 0.02 | 0.04 | 0.06 | 0.08 | 0.10 |
| --- | --- | --- | --- | --- | --- |
| I\_t (A\_{t+1} = 1) | 2.8296 | 1.8739 | 1.2070 | 0.7201 | 0.3517 |
| I\_t (A\_{t+1} = 1.1) | 3.5412 | 2.4385 | 1.6692 | 1.1074 | 0.6823 |

Downward sloping. (h) A\_{t+1} = 1.1: I\_t = \[(1.1/3)/(r\_t + 0.1)\]^{3/2} − 1.8; investment demand shifts right.

## Problem Set 5 (Ch 17 Ex 1, 2; Ch 18 Ex 1, 2)

Symbols: Y^d = desired expenditure; E\_0 = autonomous expenditure; C\_r, I\_r = ∂C^d/∂r, ∂I^d/∂r (both < 0); N^s, N^d = labor supply, demand; θ = labor supply shifter; i = nominal rate; π^e = expected inflation; M^d, M^s = money demand, supply; P = price level.

### Ch 17 Exercise 1 — IS curve

(a) Y^d\_t = C^d(Y\_t − G\_t, Y\_{t+1} − G\_{t+1}, r\_t) + I^d(r\_t, A\_{t+1}, K\_t) + G\_t; intercept E\_0 > 0, slope MPC < 1; equilibrium on 45° line.

- r\_2 > r\_0 --> C^d ↓, I^d ↓ --> E\_0 ↓ --> line down --> Y\_2 < Y\_0
- r\_1 < r\_0 --> C^d ↑, I^d ↑ --> E\_0 ↑ --> line up --> Y\_1 > Y\_0
- Plot (r\_2, Y\_2), (r\_0, Y\_0), (r\_1, Y\_1) ∴ IS slopes down

(b) Investment more sensitive to r\_t:

- Extreme 1: C\_r + I\_r ≈ 0 --> lines nearly coincide --> Y\_2 ≈ Y\_0 ≈ Y\_1 --> IS ≈ vertical
- Extreme 2: |C\_r + I\_r| large --> lines far apart --> Y\_2 << Y\_0 << Y\_1 --> IS flat
- |I\_r| ↑ ∴ IS flatter

```latex
dY_t = MPC\,dY_t + (C_r + I_r)\,dr_t \quad\text{-->}\quad \frac{dr_t}{dY_t} = \frac{1-MPC}{C_r + I_r}, \qquad |I_r| \uparrow \;\text{-->}\; \Big|\frac{dr_t}{dY_t}\Big| \downarrow
```

(c) Larger MPC:

- MPC = 0 --> Y\_t = E\_0 --> ΔY\_t = ΔE\_0
- 0 < MPC < 1 --> Y\_t = E\_0/(1 − MPC) --> ΔY\_t = ΔE\_0/(1 − MPC) > ΔE\_0
- MPC ↑ --> 1/(1 − MPC) ↑ --> larger ΔY\_t per Δr\_t ∴ IS flatter (MPC --> 1: horizontal)

### Ch 17 Exercise 2 — N^s = N^s(w\_t, θ\_t, r\_t), ∂N^s/∂r\_t > 0

(a) Intertemporal substitution: ↑ r\_t raises the return to saving today's wages --> work more now. Income effect: ↑ r\_t lowers PV of lifetime income --> C\_t ↓ --> u\_C ↑; from u\_L = u\_C w\_t, working pays more --> N\_t ↑ at every w\_t.

(b)

- r\_1 > r\_0 --> N^s right --> N\_t ↑, w\_t ↓ (along N^d)
- N\_t ↑ --> Y\_t = A\_tF(K\_t, N\_t) ↑
- Reflect through 45°, plot against r\_t ∴ Ys slopes up

### Ch 18 Exercise 1 — ↑ A\_t, elastic vs inelastic N^s

Common: A\_t ↑ --> N^d right, production function up --> Ys right; IS fixed --> r\_t ↓ --> C\_t ↑, I\_t ↑.

| Variable | Elastic N^s (flat) | Inelastic N^s (steep) |
| --- | --- | --- |
| N\_t | large ↑ | small ↑ |
| w\_t | small ↑ | large ↑ |
| Y\_t | large ↑ | smaller ↑ |
| r\_t | large ↓ | smaller ↓ |

∴ More elastic N^s --> larger N, Y, r responses, smaller w response. Perfectly inelastic N^s: Y still ↑ (direct A\_t effect).

### Ch 18 Exercise 2 — ↑ θ\_t

(a)

- θ\_t ↑ --> N^s left --> N\_t ↓, w\_t ↑
- Production function unchanged --> Y\_t ↓ --> Ys left
- IS fixed --> r\_t ↑ --> C\_t ↓, I\_t ↓
- i\_t = r\_t + π^e\_{t+1}, π^e fixed --> i\_t ↑
- i\_t ↑, Y\_t ↓ --> M^d ↓; M^s fixed --> P\_t ↑

| Y\_t | C\_t | I\_t | N\_t | w\_t | r\_t | i\_t | P\_t |
| --- | --- | --- | --- | --- | --- | --- | --- |
| − | − | − | − | + | + | + | + |

(b) Elasticity of N^d (the curve that does not shift):

| Variable | Elastic N^d (flat) | Inelastic N^d (steep) |
| --- | --- | --- |
| N\_t | large ↓ | small ↓ |
| w\_t | small ↑ | large ↑ |
| Y\_t | large ↓ | small ↓ |
| r\_t | large ↑ | small ↑ |

∴ More elastic N^d --> larger N, Y, r responses, smaller w response.
