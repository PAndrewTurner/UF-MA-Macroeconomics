# ECO5207 Macro Exam Study Guide

This guide walks every lecture deck (L01–L05), textbook chapter (Garín, Lester & Sims Ch 1–3, 5, 9–13, 17–18) and problem set (PS 2–5 plus the Lecture 3 review exercises) in the order the models build. Every formula lists what each symbol means. The other tabs hold a one-page formula sheet, fully worked problem sets, and practice questions with answers.

## Course map

The course builds one model in layers: a household that smooths consumption (Ch 9–10), then an equilibrium where r adjusts (Ch 11), then government (Ch 13), then firms, labor and capital (Ch 12), and finally the full neoclassical model with money (Ch 17–18). Solow (Ch 5) is the long-run benchmark that supplies the production function and capital accumulation equation reused later.

| Lecture deck | Topic | Textbook | Problem set |
| --- | --- | --- | --- |
| L01 | Brief history of economic thought | Ch 1–3 | — |
| L02 | Consumption and saving (4 parts, incl. Euler derivation and Lagrangian) | Ch 9, Ch 10 | PS 2 (Ch 9 Q1–5, Ex 1, 2, 4) |
| L03\_01 | Endowment economy equilibrium and fiscal policy | Ch 11, Ch 13 | PS 3 (Ch 11 Ex 1, 3; Ch 13 Ex 1) |
| L03\_02 | Homework review exercises | Ch 11 Ex 1, 3; Ch 13 Ex 1 | Answer key for PS 3 |
| L04 | Solow model; firm production, labor demand, investment, labor supply | Ch 5, Ch 12 | PS 4 (Ch 12 Ex 1, 2) |
| L05 | Graphing the neoclassical model; effects of shocks | Ch 17, Ch 18 | PS 5 (Ch 17 Ex 1, 2; Ch 18 Ex 1, 2) |

How each layer changes the key equilibrium condition:

1. Ch 9–10: r is given; the household picks C. Output: the consumption function C^d(Y\_t, Y\_{t+1}, r\_t).
2. Ch 11: Y is fixed (endowment); r adjusts so that C\_t = Y\_t. First IS and Ys curves; Ys is vertical.
3. Ch 13: add G and T; market clearing becomes Y\_t = C\_t + G\_t. Taxes drop out (Ricardian equivalence).
4. Ch 12: add a firm (labor demand, investment demand) and endogenous labor supply; Y\_t = C\_t + I\_t (+ G\_t).
5. Ch 17–18: all of it together plus money. Ys is still vertical, so only supply shocks move output; demand shocks move r and the split between C and I.

Three habits that earn most exam points: (a) always name whether a variable is exogenous or endogenous; (b) for any shock, ask "which curve moves: IS, Ys, or neither?" before anything else; (c) when the interest rate moves, explain it as undoing the smoothing the household wanted to do.

## Unit 1 — Macro data and models (Ch 1–2)

GDP is one number measured three equivalent ways (production, income, expenditure); real GDP strips out price changes; and a model is a deliberately simplified map judged by whether it explains things it was not built to explain.

### 1.1 Calculating GDP

GDP = the current-dollar value of all final goods and services produced within a country in a period. "Final" excludes intermediate goods (tires on a new car) to avoid double counting; replacement tires sold to a car owner are final.

```latex
GDP_t = \sum_{i=1}^{n} p_{i,t}\, y_{i,t}
```

where n = number of distinct final goods; p\_{i,t} = price of good i in year t; y\_{i,t} = quantity of good i produced in year t.

Production = income: every dollar of sales goes to some factor. Book example: 1,000 logs at $1 each; wages 50 hrs × $10 = 500; interest 100; profit 400; 500 + 100 + 400 = 1,000.

Expenditure identity:

```latex
GDP_t = C_t + I_t + G_t + (X_t - IM_t)
```

where C\_t = household consumption; I\_t = investment (business capital, new residential construction, inventory change); G\_t = government purchases of goods and services (excludes transfers such as Social Security and interest on debt); X\_t = exports; IM\_t = imports.

- Imports are subtracted because C, I and G do not distinguish where goods were made. An imported $50,000 Mercedes raises C and IM equally, leaving GDP unchanged.
- New houses count as investment even though households buy them; durable goods (cars, TVs) count as consumption.
- An unsold car produced in 1999 is 1999 inventory investment; when sold in 2000, C rises and inventory investment falls by the same amount.
- Shares: C ≈ 60–70%, I ≈ 15% (the most volatile), G ≈ 20%, NX small and negative lately.
- Log levels: a vertical difference of 0.5 in ln GDP ≈ 50% growth.

### 1.2 Real versus nominal

Nominal values are in money; real values are in goods. Real GDP ("constant-dollar GDP") values each year's quantities at base-year prices.

```latex
Y_{t+h} = \sum_{i=1}^{n} p_{i,t}\, y_{i,t+h}, \qquad P_{t+h} = \frac{\sum_i p_{i,t+h}\, y_{i,t+h}}{\sum_i p_{i,t}\, y_{i,t+h}}
```

where Y\_{t+h} = real GDP h years after base year t; p\_{i,t} = base-year price of good i; y\_{i,t+h} = quantity in year t+h; P\_{t+h} = implicit price deflator (nominal ÷ real), equal to 1 in the base year.

Base-year problem (book example): haircuts $5 × 100 and computers $500 × 10 in year t; haircuts $10 × 100 and computers $300 × 20 in t+1. Base t gives 5,500 --> 10,500 (+91%); base t+1 gives 4,000 --> 7,000 (+75%). Chain weighting takes the geometric average of the two gross growth rates: √(1.909 × 1.75) ≈ 1.828, i.e. about +83%.

Growth of a product ≈ sum of growth rates: nominal GDP growth (1.6%/qtr) ≈ inflation (0.8%) + real growth (0.8%); split further, ≈ inflation 0.8% + population 0.3% + real per-capita 0.45%. Per-capita output has grown about 2%/yr since 1947. Recessions are NBER-dated (no formal rule; typically GDP falls \~5% below trend; 2007–09 more than 10%).

### 1.3 The Consumer Price Index

```latex
P^{cpi}_t = \frac{\sum_{i=1}^{N} p_{i,t}\, x_i}{\sum_{i=1}^{N} p_{i,b}\, x_i}
```

where N = number of goods in the basket; x\_i = fixed basket quantity of good i (no time subscript); p\_{i,t} = price in year t; p\_{i,b} = price in base year b.

CPI fixes quantities and updates prices; the deflator fixes prices and updates quantities. Because the CPI ignores substitution toward relatively cheaper goods, it overstates cost-of-living inflation (substitution bias): CPI 0.9%/qtr vs deflator 0.8%/qtr, and CPI is more volatile. The CPI also includes imports and excludes investment goods. Use the deflator for US-produced prices, CPI for household cost of living. Indexing transfers to an upward-biased index raises their real value over time.

### 1.4 Measuring the labor market

```latex
N = h \times E, \quad n = \frac{N}{L}, \quad LF = E + U, \quad lfp = \frac{LF}{L}, \quad u = \frac{U}{LF}
```

where N = total hours worked; h = average hours per worker (intensive margin); E = number employed (extensive margin); L = working-age population; n = hours per capita; LF = labor force; U = unemployed (not working, actively looking); lfp = participation rate; u = unemployment rate.

- Hours per capita are roughly trendless because rising participation (women entering) offset falling hours per worker (about 40 --> 36/week).
- The unemployment rate is imperfect: discouraged workers who quit searching lower u with no change in hours; a shift from full-time to part-time leaves u unchanged. Hours per capita is the preferred labor-input measure.

### 1.5 What is a model? (Ch 2)

- A model is a simplified representation made of mathematical relationships; it is a laboratory for experiments that would be unethical or impossible in reality (randomizing who gets job training or who loses income).
- Borges' 1:1 map is useless; abstraction is the point. What to include depends on the question (children matter for China's one-child policy, not for most monetary questions).
- Test of a good model: it matches facts it was not built to match. A model built for worker–firm matching earns trust if it also gets wages right.
- George Box: "All models are wrong, but some are useful".
- Review-question logic: a model of r and spending that misses a mild temperature correlation is fine; one that predicts consumption and income move oppositely fails on a relevant margin. Low rates in recessions do not mean low rates cause low GDP (reverse causality from central bank reaction).

## Unit 2 — History of macroeconomic thought (Ch 3, Lecture 1)

Macro moved from assumed aggregate relationships (Keynesian) to models built from optimizing households and firms with rational expectations (DSGE), because the Lucas critique showed estimated relationships shift when policy changes. Lecture 1 frames macro as "aggregate economics" whose key questions are growth, rich vs poor countries, recessions, and the role of government (plus 2007–09 and 2020–22).

| Era | Dates | Core idea | Key people | What broke it |
| --- | --- | --- | --- | --- |
| Classical / neoclassical | 1776–1936 | Markets self-correct; invisible hand; "supply creates its own demand" (Say's Law, no aggregate demand curve; mathematically Walras' Law) | Smith, Say, Marshall (math, supply and demand), Malthus, Ricardo, Mill | Frictionless-market, full-employment predictions contradicted by panics and the Great Depression |
| Keynesian | 1936–1968 | Aggregates follow their own laws; macro splits from micro; large macroeconometric models; exploitable Phillips curve | Keynes (General Theory 1936), Hicks (1937 graph), Klein–Goldberger (1955), Phillips (1958) | Correlation vs causation, overfitting, no microfoundations, partial equilibrium |
| Disagreement and transition | 1968–1982 | Phillips curve not exploitable; parameters not policy-invariant; rational expectations | Friedman (1968 AEA address), Phelps, Lucas (1976 critique), Sargent–Wallace (1975), Barro (1974) | 1970s stagflation (oil shock + Fed stimulus = high inflation and unemployment) |
| Modern macro | 1982– | Microfoundations, rational expectations, general equilibrium, dynamics: DSGE with the Ramsey–Cass–Koopmans growth model at its core | Kydland–Prescott (1982 RBC), New Keynesians, Diamond–Mortensen–Pissarides | Open questions: size of the spending multiplier, which frictions matter |

### Key arguments to be able to explain

- **Friedman (1968):** keeping unemployment below its natural rate requires ever-rising inflation, because higher inflation raises expected inflation and nominal rates; the trade-off is not permanent.
- **Lucas critique (1976):** relationships in the data come from optimizing behavior that depends on policy. Example from the book: people consume 90% of income, so a naive model predicts $900 spent out of a $1,000 tax cut; a forward-looking household that expects the deficit to be repaid saves more. Econometrically it is a missing-variables problem (policy rules and expectations are omitted).
- **Rational expectations:** agents' expectations are consistent with the model itself (not perfect knowledge). If the model says wages rise after a fiscal expansion, agents expect that. Contrast with adaptive expectations (Friedman) or "estimate a process, then assume agents use it" (not policy-invariant).
- **Implications:** predictable money has no real effects (Sargent–Wallace); deficit-financed tax cuts have little effect (Ricardian equivalence, Barro); government cannot consistently trick people; most optimal policies are time-inconsistent (promise low capital taxes, then renege once capital is built; rational investors anticipate this).
- **Freshwater vs saltwater:** Chicago/Minnesota (market-clearing, RBC) vs coastal schools (Keynesian frictions); Krugman (2009) charged the field with mistaking mathematical beauty for truth.

### Real business cycle (RBC) theory

- Neoclassical growth model + random TFP shocks + a labor–leisure choice.
- Matches comovement of TFP, output, labor, investment and consumption, and relative volatility investment > output > consumption.
- Theory: cycles are efficient; no unemployment or market failure; no role for monetary policy; homogeneous agents; TFP drives everything. The lecture's verdict: no longer believed as the whole story, but still the core.
- TFP = output not explained by measured inputs, so it depends on which inputs are in the production function.

### Modern additions (Lecture 1)

- Market failures: price rigidity (New Keynesian, gives monetary policy a role); search frictions (DMP, 2010 Nobel) produce unemployment; incomplete asset markets.
- Heterogeneity: households with incomplete markets (Aiyagari–Bewley–Huggett), heterogeneous firms (Melitz).
- Other ingredients: imperfect information, financial frictions, regional markets, behavioral features (habits, loss aversion, rational inattention), networks.
- DSGE = Dynamic (decisions over time), Stochastic (random shocks drive cycles), General Equilibrium (markets clear; one person's saving is another's borrowing).
- Bottom line in both sources: "all economics is microeconomics"; macro is micro at an aggregate level with the same tools (preferences, constraints, equilibrium).

## Unit 3 — The Solow growth model (Ch 5, Lecture 4 part 1)

From any positive starting point, capital per worker converges to a unique steady state k\*; a higher saving rate or productivity raises the level of k\* but gives only a temporary burst of growth, so sustained growth must come from continual productivity gains. Solow uses rules of thumb (constant saving rate, inelastic labor) rather than optimization.

### 5.1 Production, consumption, investment

Capital (i) must be produced, (ii) helps produce output, (iii) is not used up in production. It is a stock that can be accumulated; labor is a flow and an endowment.

```latex
Y_t = A\,F(K_t, N_t), \qquad F(K_t,N_t) = K_t^{\alpha} N_t^{1-\alpha}
```

where Y\_t = output; A = productivity (exogenous; changes are permanent in this chapter); K\_t = capital stock; N\_t = labor; α = capital's exponent, 0 < α < 1.

Production-function assumptions (asked often): F\_K > 0, F\_N > 0 (positive marginal products); F\_KK < 0, F\_NN < 0 (diminishing marginal products); F\_KN > 0 (more capital raises the marginal product of labor); constant returns to scale F(λK, λN) = λF(K, N); both inputs necessary F(0, N) = F(K, 0) = 0. Constant returns and diminishing marginal products do not contradict each other: CRS scales both inputs; diminishing returns vary one.

Firm FOCs (competitive factor prices):

```latex
w_t = A F_N(K_t, N_t), \qquad R_t = A F_K(K_t, N_t)
```

where w\_t = real wage (units of fruit per hour); R\_t = real rental rate on capital; F\_N, F\_K = marginal products of labor and capital. With CRS, profit is zero and w\_t N\_t + R\_t K\_t = Y\_t (Euler's theorem for homogeneous functions).

Model equations: six endogenous (Y\_t, C\_t, I\_t, K\_{t+1}, w\_t, R\_t), three exogenous (A, K\_t, N\_t), two parameters (s, δ).

```latex
Y_t = C_t + I_t, \quad I_t = sY_t, \quad C_t = (1-s)Y_t, \quad K_{t+1} = I_t + (1-\delta)K_t
```

where s = saving (investment) rate, 0 < s < 1; δ = depreciation rate, 0 < δ < 1. Lawn-mower example: K = 10, δ = 0.1, Y = 3; C = 3 gives K' = 9; C = 2 gives K' = 10; C = 1 gives K' = 11.

### The central equation (per worker)

Divide by N\_t (constant labor) and define k\_t = K\_t/N\_t, f(k\_t) = F(k\_t, 1):

```latex
k_{t+1} = sA f(k_t) + (1-\delta)k_t \qquad\text{equivalently}\qquad \Delta k_{t+1} = sAf(k_t) - \delta k_t
```

where k\_t = capital per worker; f(k\_t) = output per worker per unit of A; sAf(k\_t) = investment per worker; δk\_t = depreciation ("break-even investment"); Δk\_{t+1} = k\_{t+1} − k\_t.

Other variables: y\_t = Af(k\_t); c\_t = (1−s)Af(k\_t); i\_t = sAf(k\_t); R\_t = Af'(k\_t); w\_t = A\[f(k\_t) − k\_t f'(k\_t)\].

### 5.2 Graphical analysis

- Plot k\_{t+1} against k\_t with a 45° line. Slope dk\_{t+1}/dk\_t = sAf'(k\_t) + (1−δ): positive, falling in k.
- Inada conditions: f'(k) --> ∞ as k --> 0 and f'(k) --> 0 as k --> ∞. So the curve starts steeper than 45° and ends with slope 1−δ < 1, crossing the 45° line exactly once at k\*.
- Below k\*: curve above the 45° line, capital grows. Above k\*: capital shrinks. Movement is fast far from k\*, slow near it.
- Alternative picture: investment curve sAf(k) vs depreciation line δk; they cross at k\*.

### 5.3 Steady state with Cobb-Douglas

```latex
k^* = \left(\frac{sA}{\delta}\right)^{\frac{1}{1-\alpha}}, \quad y^* = A(k^*)^{\alpha}, \quad c^* = (1-s)A(k^*)^{\alpha}, \quad R^* = \frac{\alpha\delta}{s}, \quad w^* = (1-\alpha)A(k^*)^{\alpha}
```

where k\*, y\*, c\*, R\*, w\* = steady-state capital, output, consumption per worker, rental rate and wage. k\* rises with s and A, falls with δ. R\* does not depend on A (A cancels).

### 5.4 Experiments: permanent increases in s and A

| Variable | ↑ s: period t | ↑ s: afterward | ↑ A: period t | ↑ A: afterward |
| --- | --- | --- | --- | --- |
| k\_t | 0 | rises to higher k\* | 0 | rises to higher k\* |
| y\_t | 0 | rises | jumps up (direct effect) | keeps rising |
| c\_t | falls (bigger slice saved) | rises; new level above or below old (ambiguous) | jumps up | rises |
| i\_t | jumps up | rises | jumps up | rises |
| w\_t | 0 | rises (F\_KN > 0) | jumps up | rises |
| R\_t | 0 | falls (F\_KK < 0), ends lower | jumps up | falls back to original R\* |
| Output growth | 0 in t | jumps positive in t+1, decays to 0 | jumps positive in t | decays to 0 |

Punchline: capital accumulation cannot sustain growth (s is capped at 1); only repeated increases in A can.

### 5.5 The Golden Rule

The Golden Rule saving rate maximizes steady-state consumption c\* = (1−s)Af(k\*). Derivation: totally differentiate sAf(k\*) = δk\* and dc\* = (1−s)Af'(k\*)dk\* − Af(k\*)ds to get dc\*/ds = Af'(k\*) − δ.

```latex
Af'(k^*_{gr}) = \delta \qquad \text{Cobb-Douglas: } s_{gr} = \alpha
```

where k\*\_gr = the Golden Rule steady-state capital; s\_gr = Golden Rule saving rate.

- Intuition: raising k\* adds Af'(k\*) to output but δ to required investment; consumption rises while MPK > δ.
- s < s\_gr: raising s lowers consumption now, raises it in the long run. Whether that is desirable depends on impatience and on how later generations are weighed, so no normative conclusion.
- s > s\_gr: the economy is **dynamically inefficient**. Cutting s raises consumption immediately and at every date after, so it is unambiguously better.
- Saving rate that maximizes steady-state output: s = 1, but then c\* = 0, so no household wants it.

### Lecture 4 framing

Solow is the model of long-run growth and cross-country income differences; its main implication is that productivity (not capital) explains sustained growth and income gaps; its weakness is that A is exogenous (what is it, and how do you raise it?). Ch 12 reuses Solow's production function and accumulation equation but lets the firm choose investment.

## Unit 4 — Two-period consumption-saving (Ch 9, Lecture 2)

A forward-looking household that faces a present-value budget constraint chooses consumption so that the Euler equation holds; the result is a consumption function C\_t = C^d(Y\_t, Y\_{t+1}, r\_t) that rises with both incomes (MPC between 0 and 1) and, by assumption, falls with r\_t. Everything is real (one good, "fruit"); consumption is 60–70% of GDP.

### 9.1 Setup and budget constraints

```latex
C_t + S_t \le Y_t, \qquad C_{t+1} + S_{t+1} - S_t \le Y_{t+1} + r_t S_t
```

where C\_t, C\_{t+1} = consumption today and tomorrow; Y\_t, Y\_{t+1} = exogenous income (known with certainty); S\_t = stock of savings carried into t+1 (negative = borrowing); S\_{t+1} = stock carried into t+2; r\_t = real interest rate, taken as given (price-taker); r\_t S\_t = interest income.

- Saving (flow) vs savings (stock): S\_{t+1} − S\_t is flow saving in t+1; in period t the two coincide because initial wealth is zero.
- Terminal (no-Ponzi) condition S\_{t+1} = 0: the household does not want to die with S\_{t+1} > 0 (unspent resources give no utility since u' > 0); it would like S\_{t+1} < 0, but no lender allows dying in debt.
- Budget constraints bind (no income left on the table). Solve the second for S\_t and substitute:

```latex
C_t + \frac{C_{t+1}}{1+r_t} = Y_t + \frac{Y_{t+1}}{1+r_t}
```

The intertemporal budget constraint (IBC): the present value of consumption equals the present value of income. Present value of F goods next period = F/(1+r\_t).

### Preferences

```latex
U = u(C_t) + \beta\, u(C_{t+1}), \qquad u'(\cdot) > 0, \; u''(\cdot) < 0
```

where U = lifetime utility (ordinal; can be negative); u(·) = flow utility; β = discount factor, 0 < β < 1 (bigger β = more patient); u' = marginal utility; u'' < 0 = diminishing marginal utility ("more is better at a decreasing rate"). Utility discount rate ρ is defined by β = 1/(1+ρ); 1/(1+r\_t) is the goods discount factor.

Example utility functions: linear θC (no diminishing MU); quadratic C − (θ/2)C² (satiation above 1/θ; u''' = 0); log ln C (u' = 1/C, u'' = −C^{−2}); isoelastic (C^{1−σ} − 1)/(1−σ), which becomes ln C as σ --> 1 by L'Hôpital.

### 9.2 Optimization and the Euler equation

Solve the IBC for C\_{t+1} = (1+r\_t)(Y\_t − C\_t) + Y\_{t+1}, substitute into U, differentiate with respect to C\_t (the chain rule gives the −(1+r\_t) term), set to zero:

```latex
u'(C_t) = \beta(1+r_t)\,u'(C_{t+1}) \qquad \text{or} \qquad \frac{u'(C_t)}{\beta u'(C_{t+1})} = 1 + r_t
```

where the left side of the second form is the marginal rate of substitution (MRS) between C\_t and C\_{t+1}; 1 + r\_t is the relative price of current consumption (the intertemporal price).

- Intuition (MB = MC): consume one more unit today, gain u'(C\_t); save one fewer, lose (1+r\_t) units tomorrow worth βu'(C\_{t+1}) each.
- Necessary but not sufficient; pins down the growth of consumption, not the level. Combine with the IBC to get levels.
- Log utility: C\_{t+1}/C\_t = β(1+r\_t). Higher β or r\_t means faster consumption growth; β(1+r\_t) = 1 means flat consumption.
- Isoelastic: ln C\_{t+1} − ln C\_t ≈ (1/σ)\[ln β + r\_t\]; 1/σ is the elasticity of intertemporal substitution.
- Lagrangian route (Lecture 2 part 4): L = u(C\_t) + βu(C\_{t+1}) + λ\[Y\_t + Y\_{t+1}/(1+r\_t) − C\_t − C\_{t+1}/(1+r\_t)\]. FOCs: u'(C\_t) = λ and βu'(C\_{t+1}) = λ/(1+r\_t); dividing gives the Euler equation. λ = the shadow value of an extra unit of resources (marginal utility of wealth). The Lagrangian scales more easily to many periods.

### 9.3 Indifference curve / budget line and the consumption function

- Budget line: slope −(1+r\_t); vertical intercept (1+r\_t)Y\_t + Y\_{t+1} (save everything); horizontal intercept Y\_t + Y\_{t+1}/(1+r\_t) (borrow the maximum); passes through the endowment point (Y\_t, Y\_{t+1}).
- Indifference curve slope: −u'(C\_t)/\[βu'(C\_{t+1})\]; bowed in (convex) because u'' < 0; northeast = higher utility; curves never cross.
- Optimum: tangency (indifference-curve slope = budget-line slope) is exactly the Euler equation.

```latex
C_t = C^d(Y_t, Y_{t+1}, r_t), \qquad \frac{\partial C^d}{\partial Y_t} > 0,\; \frac{\partial C^d}{\partial Y_{t+1}} > 0,\; \frac{\partial C^d}{\partial r_t} < 0
```

where C^d(·) = the consumption function (an optimal decision rule); ∂C^d/∂Y\_t = the marginal propensity to consume (MPC), 0 < MPC < 1.

| Change | Budget line | C\_t | C\_{t+1} | S\_t | Why |
| --- | --- | --- | --- | --- | --- |
| ↑ Y\_t | shifts out parallel | ↑ (by less than ΔY\_t) | ↑ | ↑ | smoothing: save part of the gain |
| ↑ Y\_{t+1} | shifts out parallel | ↑ | ↑ | ↓ | borrow against future income |
| ↑ r\_t, borrower (C\_t > Y\_t) | pivots steeper through endowment | ↓ (sub ↓, income ↓) | ? | ↑ | higher rate makes borrowing costlier |
| ↑ r\_t, saver (C\_t < Y\_t) | pivots steeper through endowment | ? (sub ↓, income ↑) | ↑ (both ↑) | ? | saving earns more |

Substitution effect of ↑ r\_t always lowers C\_t (today is dearer); the income effect depends on borrower vs saver. The course assumes the substitution effect dominates, so ∂C^d/∂r\_t < 0. Smoothing example: u = √C, β = 1, r = 0, Y = 1 each period gives C = 0.5 each, U = 1.414; with Y\_t = 2, spending the extra unit all today or all tomorrow gives U = 1.932, splitting it gives U = 2.

Log-utility consumption function (memorize):

```latex
C_t = \frac{1}{1+\beta}\left[Y_t + \frac{Y_{t+1}}{1+r_t}\right], \qquad MPC = \frac{1}{1+\beta}, \qquad \frac{\partial C_t}{\partial r_t} = -\frac{1}{1+\beta}\frac{Y_{t+1}}{(1+r_t)^2}
```

where the bracket = present value of lifetime income. ∂C\_t/∂Y\_{t+1} = \[1/(1+β)\]\[1/(1+r\_t)\]. More impatient (β --> 0) means MPC --> 1. If Y\_{t+1} = 0, ∂C\_t/∂r\_t = 0 (income and substitution effects cancel for log utility). r\_t can be negative but never below −1.

### Permanent income hypothesis (Lecture 2 part 3)

Friedman (1957): consumption depends on permanent income (present value of lifetime income); with r = 0 and β = 1, consumption = average lifetime income. Implications: consumption is forward-looking and should not react to predictable income changes; MPC < 1; the longer you live, the lower the MPC; regressing C\_t on Y\_t does not identify the MPC when income changes are persistent.

### 9.4 Extensions (you are responsible for these per Lecture 2)

**9.4.1 Wealth.** Household starts with H\_{t−1} units of an asset priced Q\_t. With H\_t = 0:

```latex
C_t + \frac{C_{t+1}}{1+r_t} = Y_t + Q_t H_{t-1} + \frac{Y_{t+1}}{1+r_t}
```

where H\_{t−1} = asset stock owned entering t; Q\_t = asset price in goods. ↑ Q\_t acts like ↑ Y\_t (1990s stock boom): C up in both periods, saving up. If the household must buy H\_t and sell it at Q\_{t+1} (housing), an expected rise in Q\_{t+1} acts like ↑ Y\_{t+1}: C\_t up, saving down — the mid-2000s housing boom and its collapse.

**9.4.2 Permanent vs transitory income.** dC\_t = (∂C/∂Y\_t)dY\_t + (∂C/∂Y\_{t+1})dY\_{t+1} + (∂C/∂r\_t)dr\_t. Transitory (dY\_{t+1} = 0): dC\_t/dY\_t = MPC. Permanent (dY\_{t+1} = dY\_t): dC\_t/dY\_t = ∂C/∂Y\_t + ∂C/∂Y\_{t+1} > MPC. Log, β = 1, r = 0: MPC = 1/2 for transitory, 1 for permanent.

**9.4.3 Taxes.** With lump-sum T\_t, T\_{t+1}: C\_t = C^d(Y\_t − T\_t, Y\_{t+1} − T\_{t+1}, r\_t); Euler equation unchanged. Transitory tax change: dC\_t/dT\_t = −MPC; permanent: −(∂C/∂Y\_t + ∂C/∂Y\_{t+1}). Evidence: Shapiro–Slemrod (2003) found only 22% planned to spend the near-permanent 2001 rebate (a puzzle); for the temporary 2008 rebate about one-fifth planned to spend (consistent with theory).

**9.4.4 Uncertainty.** Y\_{t+1} = Y^h with probability p, Y^l with 1−p; E(Y\_{t+1}) = pY^h + (1−p)Y^l. Budget must hold in both states.

```latex
E[U] = u(C_t) + \beta\left[p\,u(C^h_{t+1}) + (1-p)\,u(C^l_{t+1})\right], \qquad u'(C_t) = \beta(1+r_t)\,E[u'(C_{t+1})]
```

where C^h, C^l = next-period consumption in the high and low states; E\[·\] = expectation. Key insight: E\[u'(C)\] ≠ u'(E\[C\]) unless u' is linear (log example: C^h = 2, C^l = 1, p = 0.5 gives E\[u'\] = 0.75 > u'(1.5) = 0.667). If u''' > 0 (marginal utility convex), a mean-preserving spread raises E\[u'(C\_{t+1})\], so the household cuts C\_t: **precautionary saving** (self-insurance).

**9.4.5 Random walk (Hall 1978).** With u''' = 0 (quadratic utility, no precautionary saving) and β(1+r\_t) = 1, the Euler equation gives E\[C\_{t+1}\] = C\_t: consumption should not respond when a predictable income change arrives. Evidence against: Parker (1999) found consumption rises when Social Security withholding stops mid-year; Evans–Moore (2012) tie the monthly mortality spike to paycheck-driven activity. Retirement is another predictable change.

**9.4.6 Borrowing constraints.** Strict constraint S\_t ≥ 0 puts a vertical kink at the endowment point; a costlier borrowing rate (r^b > r^s) gives a milder kink. If binding (the household wants to borrow): C\_t = Y\_t, C\_{t+1} = Y\_{t+1}, Euler equation fails, MPC = 1, and an expected rise in Y\_{t+1} does not move C\_t. Implications: "targeted and temporary" tax cuts work for constrained households; constraints help explain random-walk failures; they make markets incomplete.

## Unit 5 — Multi-period consumption and the life cycle (Ch 10)

With T+1 periods the two-period logic repeats pair by pair: one Euler equation per adjacent pair of periods, one IBC, and a sharper gap between transitory changes (tiny MPC) and permanent changes (spent in full).

### 10.1 Multi-period generalization

```latex
\sum_{j=0}^{T} \frac{C_{t+j}}{(1+r)^j} = \sum_{j=0}^{T} \frac{Y_{t+j}}{(1+r)^j}, \qquad U = \sum_{j=0}^{T} \beta^j u(C_{t+j})
```

where T = number of periods after t (the household lives T+1 periods); r = constant real interest rate; C\_{t+j}, Y\_{t+j} = consumption and income j periods ahead; β^j = geometric discounting of utility j periods ahead. Terminal condition S\_{t+T} = 0; collapse the flow constraints backward from the last period.

```latex
u'(C_{t+j}) = \beta(1+r)\,u'(C_{t+j+1}), \quad j = 0,\dots,T-1; \qquad u'(C_t) = \beta^2(1+r)^2 u'(C_{t+2})
```

There are T Euler equations (one per adjacent pair); they can be chained.

Three-period log example (and your Ch 11 Ex 3 building block):

```latex
C_t = \frac{1}{1+\beta+\beta^2}\left[Y_t + \frac{Y_{t+1}}{1+r} + \frac{Y_{t+2}}{(1+r)^2}\right]
```

where the MPC 1/(1+β+β²) is smaller than the two-period 1/(1+β): more future periods to spread a windfall over.

### Constant consumption when β(1+r) = 1

If β(1+r) = 1 the Euler equations imply C\_t = C\_{t+1} = … = C̄ (impatience β < 1 exactly offsets the return r > 0). If β(1+r) > 1 consumption rises over time; if < 1 it falls. Using 1/(1+r) = β and the geometric sum 1 + β + … + β^T = (1−β^{T+1})/(1−β):

```latex
\bar{C} = \frac{1-\beta}{1-\beta^{T+1}} \sum_{j=0}^{T} \beta^j Y_{t+j}, \qquad \frac{\partial \bar{C}}{\partial Y_t} = \frac{1-\beta}{1-\beta^{T+1}}, \qquad \frac{\partial \bar{C}}{\partial Y_{t+j}} = \beta^j\frac{1-\beta}{1-\beta^{T+1}}
```

where C̄ = the constant consumption level; the fraction in front is the MPC.

### 10.2 MPC and permanent vs transitory income

- MPC falls as T rises (young people with long horizons should have smaller MPCs than old people; overlapping-generations implication). For large T, MPC ≈ 1 − β (β = 0.95 gives 0.05).
- Income further in the future moves C̄ less (factor β^j).
- Transitory change: dC̄/dY\_t = MPC (small). Permanent change (all Y\_{t+j} rise equally): dC̄/dY\_t = 1 — spent in full, saving unchanged.
- With β = 1 and r = 0: C̄ = average lifetime income = \[1/(T+1)\]ΣY. Book example: 100 periods of income 1. A one-period rise to 2 lifts average income to 1.01, so C rises 0.01 and saving rises 0.99. A permanent rise to 2 lifts C by 1 with no change in saving.

### 10.3 The life cycle

Income starts at Y\_t, grows at gross rate G\_Y = 1 + g\_Y until retirement date R, then a flat benefit Y^R until death at T. With β(1+r) = 1 consumption is flat.

- C̄ rises with initial income, the growth rate g\_Y, and the benefit Y^R; it rises with R (working longer) as long as Y^R is not too large.
- Pattern: borrow early (income below average), save in prime working years (first repaying debt, then building savings), dissave in retirement. The stock of savings peaks at retirement and hits zero at death (the terminal condition).
- Only robust prediction: consumption is flat (or follows its β(1+r) trend) and does not drop at the predictable retirement date.
- Retirement consumption puzzle: measured expenditure falls at retirement. Aguiar–Hurst (2005): time spent shopping and cooking rises, so expenditure falls while caloric intake does not — consistent with the life-cycle model once consumption ≠ expenditure.

Review-question answers: an old and a young lottery winner — the old person raises current consumption more (fewer periods, larger MPC). A permanent tax cut moves consumption more than a one-time cut. More generous Social Security raises prime-age consumption (higher lifetime PV of income).

## Unit 6 — Equilibrium in an endowment economy (Ch 11, Lecture 3 parts 1–3)

When output is fixed and agents are identical, nobody can save in aggregate, so r\_t must adjust until the household is content to consume exactly its income; r\_t therefore measures how plentiful the future is expected to be relative to the present.

### Three modes of analysis (Lecture 3)

1. Decision theory: optimal rules taking prices as given (Ch 9).
2. Partial equilibrium: one market's price, others given.
3. General equilibrium: all prices at once — the focus of macro.

**Competitive equilibrium** = a set of prices and allocations such that (i) all agents behave optimally taking prices as given and (ii) all markets clear simultaneously. Here the price is r\_t (the intertemporal price of goods), the allocations are C\_t and C\_{t+1}, and the market is the bond (saving) market.

### 11.1–11.2 Setup and market clearing

L households indexed by j, identical preferences, possibly different incomes Y\_t(j), Y\_{t+1}(j); each solves the Ch 9 problem, so C\_t(j) = C^d(Y\_t(j), Y\_{t+1}(j), r\_t). All face the same r\_t, so all have the same consumption growth rate, not the same level.

```latex
S_t = \sum_{j=1}^{L} S_t(j) = 0 \quad \text{--> } \quad \sum_{j=1}^{L} Y_t(j) = \sum_{j=1}^{L} C_t(j) \quad \therefore \quad Y_t = C_t
```

where S\_t(j) = saving of household j; L = number of households; Y\_t, C\_t = aggregate income and consumption. One agent's saving is another's borrowing; with no capital there is no other way to move resources through time (I\_t = 0).

### 11.3 Identical agents and the graphs

Normalize L = 1 (representative agent). Two equations, two unknowns (C\_t and r\_t): C\_t = C^d(Y\_t, Y\_{t+1}, r\_t) and C\_t = Y\_t, so Y\_t = C^d(Y\_t, Y\_{t+1}, r\_t).

- **Expenditure line:** Y^d\_t = C^d(Y\_t, Y\_{t+1}, r\_t) against Y\_t. Positive intercept (autonomous expenditure C^d(0, Y\_{t+1}, r\_t) > 0), slope = MPC < 1, so it crosses the 45° line exactly once.
- **IS curve:** the set of (r\_t, Y\_t) pairs where income = expenditure and the household optimizes. Lower r\_t raises autonomous expenditure, shifts the line up, and raises the crossing Y, so IS slopes down. IS = "investment = saving"; here both are zero. Drawn holding Y\_{t+1} fixed; ↑ Y\_{t+1} shifts IS right.
- **Ys curve:** (r\_t, Y\_t) pairs consistent with optimization and the production technology. With an endowment it is vertical at the given Y\_t.
- Equilibrium r\_t: where IS crosses Ys.

| Shock | Curve that moves | r\_t | C\_t | Intuition |
| --- | --- | --- | --- | --- |
| ↑ Y\_t (supply shock) | Ys right | ↓ | ↑ (= Y\_t) | Household wants to save part of it; nobody can borrow; r falls until it is content to consume it all |
| ↑ Y\_{t+1} (demand shock) | IS right | ↑ | 0 | Household wants to borrow against the future; r rises until it is content not to |
| ↓ Y\_{t+1} (hurricane forecast) | IS left | ↓ | 0 | Wants to save for the lean future; r falls until desired saving is zero |

General lesson: r\_t rises when the future is expected to be relatively plentiful and falls when it looks lean; r\_t moves to undo the smoothing the household would like to do. Data: 10-year real rate vs expected 10-year growth (SPF) have correlation about 0.3. Lecture 3's gloss: very low world interest rates may reflect pessimism about the future.

### 11.3.3 Algebraic example (log utility)

Euler: C\_{t+1} = β(1+r\_t)C\_t. Impose C\_t = Y\_t, C\_{t+1} = Y\_{t+1}:

```latex
Y_t = \frac{Y_{t+1}}{\beta(1+r_t)} \;(\text{IS}) \qquad \therefore \qquad 1 + r_t = \frac{1}{\beta}\frac{Y_{t+1}}{Y_t}
```

where Y\_{t+1}/Y\_t = expected gross output growth; r\_t can be negative if the future is poor enough and β is near 1.

### 11.4 Agents with different endowments

Type 1 (L\_1 of them): Y\_t(1) = 1, Y\_{t+1}(1) = 0. Type 2 (L\_2): Y\_t(2) = 0, Y\_{t+1}(2) = 1. Log utility:

```latex
C_t(1) = \frac{1}{1+\beta}, \quad C_t(2) = \frac{1}{1+\beta}\frac{1}{1+r_t}, \quad L_1C_t(1) + L_2C_t(2) = L_1 \quad \therefore \quad 1 + r_t = \frac{1}{\beta}\frac{L_2}{L_1}
```

where L\_1, L\_2 = numbers of each type; aggregate Y\_t = L\_1 and Y\_{t+1} = L\_2, so the rate is identical to the representative-agent formula.

- Type 1 saves S\_t(1) = β/(1+β) > 0; type 2 borrows; aggregate saving is zero. Intertemporal trade is mutually beneficial.
- Any split of the same aggregate endowments (e.g. 0.75 / 0.25(L\_2/L\_1)) gives the same r\_t.
- **Complete markets:** if everyone can freely borrow and lend, the income distribution is irrelevant for aggregate prices and quantities — the justification for representative-agent models. Borrowing constraints break this.

### Yield curve (Ch 11 Ex 3, worked in the Problem sets tab)

1 + r\_t = Y\_{t+1}/(βY\_t), 1 + r\_{t+1} = Y\_{t+2}/(βY\_{t+1}), long rate 1 + r\_{2,t} = (1/β)(Y\_{t+2}/Y\_t)^{1/2}. Flat output --> flat curve; Y\_{t+2} low enough --> inverted curve, a recession signal.

## Unit 7 — Fiscal policy and Ricardian equivalence (Ch 13, Lecture 3 parts 4–6)

With lump-sum taxes and forward-looking households, only the path of government spending matters: taxes and debt drop out of every equilibrium condition. Holding r\_t fixed the spending multiplier is 1, but with output fixed the equilibrium multiplier is 0 because r\_t rises and crowds out consumption one-for-one.

### 13.1 The government

```latex
G_t \le T_t + B^G_t, \qquad G_{t+1} + r_tB^G_t \le T_{t+1} + B^G_{t+1} - B^G_t
```

where G\_t, G\_{t+1} = exogenous government spending (usefulness not modeled; public goods such as defense and roads motivate it); T\_t, T\_{t+1} = lump-sum tax revenue; B^G\_t = debt issued in t (B^G > 0 is debt, < 0 is government saving; B^G\_{t−1} = 0); r\_t B^G\_t = interest expense. Terminal condition B^G\_{t+1} = 0 gives:

```latex
G_t + \frac{G_{t+1}}{1+r_t} = T_t + \frac{T_{t+1}}{1+r_t}, \qquad B^G_t = \frac{T_{t+1} - G_{t+1}}{1+r_t}
```

The budget balances in present value, not period by period; today's debt equals the present value of tomorrow's primary surplus (taxes minus spending, excluding interest). Transfers enter the model as negative taxes, not spending.

### 13.2 Fiscal policy in an endowment economy

Household IBC with taxes, then impose the government IBC:

```latex
C_t + \frac{C_{t+1}}{1+r_t} = Y_t + \frac{Y_{t+1}}{1+r_t} - \left[T_t + \frac{T_{t+1}}{1+r_t}\right] = Y_t - G_t + \frac{Y_{t+1} - G_{t+1}}{1+r_t}
```

```latex
C_t = C^d(Y_t - G_t,\; Y_{t+1} - G_{t+1},\; r_t), \qquad Y_t = C_t + G_t
```

where Y\_t − G\_t = income net of government spending (taxes have dropped out). Market clearing B^G\_t = S\_t (government borrowing = household saving) implies aggregate saving S\_t − B^G\_t = 0, i.e. Y\_t = C\_t + G\_t. Lecture 3 adds that utility from G via an additively separable h(G) term does not change equilibrium, so it is ignored.

**Ricardian equivalence** (Barro 1974, 1979; named for David Ricardo): how spending is financed is irrelevant. A tax cut of 1 today with G fixed requires T\_{t+1} to rise by (1+r\_t), whose present value is (1+r\_t)/(1+r\_t) = 1: a wash. Government debt is not net wealth — the household will pay itself the principal and interest through future taxes. It fails if (1) taxes are not lump sum, (2) there are borrowing constraints, (3) households are not forward-looking or do not believe the government's IBC, (4) the government outlives households (overlapping generations).

### Graphical effects (endowment economy)

Autonomous expenditure: E\_0 = C^d(−G\_t, Y\_{t+1} − G\_{t+1}, r\_t) + G\_t. So ∂E\_0/∂G\_t = 1 − MPC > 0.

| Shock | IS | r\_t | C\_t | Y\_t |
| --- | --- | --- | --- | --- |
| ↑ G\_t | right (by exactly ΔG\_t at fixed r) | ↑ | ↓ one-for-one: dC\_t = −dG\_t | 0 |
| ↑ G\_{t+1} | left | ↓ | 0 | 0 |

↑ G\_t: the household feels poorer and cuts C by MPC × ΔG, less than ΔG; market clearing needs C down by the full ΔG, so r\_t rises to discourage consumption further. ↑ G\_{t+1}: the household wants to save for higher future taxes; r\_t falls until it no longer wants to. Complete crowding out comes from fixed output, not from Ricardian equivalence.

Log-utility version:

```latex
Y_t = \frac{Y_{t+1} - G_{t+1}}{\beta(1+r_t)} + G_t \;(\text{IS}) \qquad \therefore \qquad 1 + r_t = \frac{Y_{t+1} - G_{t+1}}{\beta(Y_t - G_t)}
```

### The multiplier (Lecture 3 part 6 and Ch 18)

Totally differentiate Y\_t = C^d(Y\_t − G\_t, Y\_{t+1} − G\_{t+1}, r\_t) + G\_t with r\_t, Y\_{t+1}, G\_{t+1} fixed:

```latex
dY_t = MPC\,(dY_t - dG_t) + dG_t \quad \text{--> } \quad (1-MPC)\,dY_t = (1-MPC)\,dG_t \quad \therefore \quad \left.\frac{dY_t}{dG_t}\right|_{dr_t = 0} = 1
```

Without Ricardian equivalence (consumption depends only on current disposable income, C = C^d(Y\_t − T\_t, r\_t)) and deficit finance (dT\_t = 0):

```latex
dY_t = MPC\,dY_t + dG_t \quad \therefore \quad \left.\frac{dY_t}{dG_t}\right|_{dr_t = 0} = \frac{1}{1-MPC} > 1, \qquad \left.\frac{dY_t}{dT_t}\right|_{dr_t = 0} = -\frac{MPC}{1-MPC}
```

"Rounds of spending": without RE, 1 + MPC + MPC² + … = 1/(1−MPC). With RE the first-round injection is only 1 − MPC (the household acts as if taxed), so (1−MPC)(1 + MPC + …) = 1. Tax-financed spending without RE also gives 1.

| Setting | Fixed-r spending multiplier | Equilibrium multiplier (vertical Ys) |
| --- | --- | --- |
| Ricardian (any financing) | 1 | 0 (r rises) |
| Non-Ricardian, deficit-financed | 1/(1 − MPC) | 0 (r rises by more) |
| Log utility, non-Ricardian (MPC = 1/(1+β)) | (1+β)/β | 0 |

### 13.3 Fiscal policy in a production economy

Same logic: the household's Euler equation and labor FOC contain no fiscal terms; C\_t = C^d(Y\_t − G\_t, Y\_{t+1} − G\_{t+1}, r\_t); N\_t = N^s(w\_t, θ\_t) (GHH preferences, no wealth effect of G on labor supply); firm side unchanged; market clearing S\_t − B^G\_t = I\_t gives Y\_t = C\_t + I\_t + G\_t. Six equations, six endogenous (Y, N, C, I, w, r), exogenous G\_t, G\_{t+1}, A\_t, A\_{t+1}, θ\_t, K\_t. Taxes and debt still absent: Ricardian equivalence holds.

Review-question logic: "Ricardian equivalence shows deficits don't matter" — only for financing a given spending path under its four assumptions; spending itself matters. "Bond-financed spending won't cut consumption because we owe it to ourselves" — wrong: households anticipate the future taxes. "Tax cuts stimulate consumption" — incomplete unless spending changes, households are constrained, or taxes are distortionary.

## Unit 8 — Production, labor demand, investment, labor supply (Ch 12, Lecture 4 parts 2–3)

The firm hires labor until the marginal product equals the wage (static) and invests until the future marginal product of capital covers interest plus depreciation (forward-looking); the household adds a labor-leisure choice whose FOC sets MRS = w\_t. These rules become the labor demand, investment demand and labor supply curves of the neoclassical model.

### 12.1 The firm

Same production function and accumulation equation as Solow, but A\_t keeps its time subscript so we can separate a transitory change (A\_t) from an anticipated one (A\_{t+1}). The firm must borrow to finance investment: B^I\_t = I\_t. The household owns the firm; management is separate.

```latex
D_t = A_tF(K_t,N_t) - w_tN_t, \qquad D_{t+1} = A_{t+1}F(K_{t+1},N_{t+1}) + (1-\delta)K_{t+1} - w_{t+1}N_{t+1} - (1+r_t)B^I_t
```

where D\_t, D\_{t+1} = dividends paid to the household; w\_t = real wage; B^I\_t = firm borrowing = I\_t; (1−δ)K\_{t+1} = capital liquidated at the end of t+1 (terminal condition K\_{t+2} = 0, so I\_{t+1} = −(1−δ)K\_{t+1}).

```latex
\max_{N_t,\,K_{t+1}} V_t = D_t + \frac{D_{t+1}}{1+r_t} \quad \text{s.t. } K_{t+1} = I_t + (1-\delta)K_t,\; I_t = B^I_t
```

where V\_t = value of the firm = present value of dividends, discounted at the household's rate.

First-order conditions (MB = MC):

```latex
w_t = A_tF_N(K_t,N_t), \qquad A_{t+1}F_K(K_{t+1},N_{t+1}) + (1-\delta) = 1 + r_t \;\;\text{i.e.}\;\; A_{t+1}F_K(K_{t+1},N_{t+1}) = r_t + \delta
```

where F\_N, F\_K = marginal products of labor and capital. Investment: one extra unit today yields A\_{t+1}F\_K + (1−δ) tomorrow and costs 1 + r\_t tomorrow, so no discounting is needed. The return on capital R\_{t+1} = A\_{t+1}F\_K(K\_{t+1}, N\_{t+1}) is tied to r\_t.

**Credit spread (Lecture 4 and 5).** The lectures keep an exogenous financial friction: the firm borrows at r^I\_t = r\_t + f\_t, where f\_t = credit spread (it spikes in financial crises; the intermediary's profit is returned to the household as a dividend). The investment FOC becomes A\_{t+1}F\_K(K\_{t+1}, N\_{t+1}) = r\_t + f\_t + δ. The current textbook edition drops f\_t here and brings it back for financial crises; on the exam, include f\_t wherever the lecture does.

```latex
N_t = N^d(w_t, A_t, K_t)\;[-,+,+], \qquad K_{t+1} = K^d(r_t, A_{t+1}, f_t)\;[-,+,-], \qquad I_t = I^d(r_t, A_{t+1}, f_t, K_t)\;[-,+,-,-]
```

where signs in brackets are the partial derivatives in argument order. Labor demand slopes down because F\_NN < 0; it shifts right with A\_t or K\_t (F\_KN > 0). Investment demand slopes down in r\_t; it depends on future, not current, productivity; higher K\_t lowers investment because the target K\_{t+1} is independent of K\_t (a hurricane that destroys capital raises investment).

Cobb-Douglas closed forms (used in PS 4):

```latex
N_t = \left[\frac{(1-\alpha)A_tK_t^{\alpha}}{w_t}\right]^{1/\alpha}, \qquad K_{t+1} = \left[\frac{\alpha A_{t+1}}{r_t + \delta}\right]^{\frac{1}{1-\alpha}}, \qquad I_t = \left[\frac{\alpha A_{t+1}}{r_t + \delta}\right]^{\frac{1}{1-\alpha}} - (1-\delta)K_t
```

(With a spread, replace r\_t + δ by r\_t + f\_t + δ.)

**12.1.1 Debt vs equity (Modigliani–Miller).** Finance a fraction q of investment by cutting today's dividend and 1−q by borrowing. The FOC for K\_{t+1} is identical for every q, so financing does not matter — as long as there are no taxes, bankruptcy costs, or asymmetric information. The course uses debt finance to set up credit spreads.

### 12.2 The household with a labor choice

```latex
U = u(C_t, 1-N_t) + \beta\,u(C_{t+1}, 1-N_{t+1}), \qquad C_t + S_t = w_tN_t + D_t, \quad C_{t+1} = w_{t+1}N_{t+1} + D_{t+1} + D^I_{t+1} + (1+r_t)S_t
```

where L\_t = 1 − N\_t = leisure (time endowment normalized to 1); u\_C, u\_L = marginal utilities of consumption and leisure (u\_C > 0, u\_CC < 0, u\_L > 0, u\_LL < 0); D^I\_{t+1} = dividend from the financial intermediary.

First-order conditions:

```latex
u_C(C_t,1-N_t) = \beta(1+r_t)\,u_C(C_{t+1},1-N_{t+1}), \qquad u_L(C_t,1-N_t) = w_t\,u_C(C_t,1-N_t)
```

The first is the usual Euler equation. The second: one more hour of leisure gives u\_L and costs w\_t units of consumption worth u\_C each (MRS between leisure and consumption = the real wage).

- Separable example u = ln C\_t + θ\_t ln(1−N\_t): FOC θ\_t/(1−N\_t) = w\_t/C\_t. θ\_t = labor supply (preference) shock; ↑ θ\_t = values leisure more.
- Non-separable (GHH) example u = ln(C\_t + θ\_t ln(1−N\_t)): FOC θ\_t/(1−N\_t) = w\_t; C drops out, so no income effect — the motivation for N^s depending only on w\_t and θ\_t.
- Wage increase in the consumption–leisure diagram (budget line: intercept w\_t + D\_t, slope −w\_t, kink at L = 1 where C = D\_t): substitution effect raises N (leisure dearer); income effect lowers N; C rises for sure. Assume substitution dominates.

```latex
C_t = C^d(Y_t, Y_{t+1}, r_t)\;[+,+,-], \qquad N_t = N^s(w_t, \theta_t)\;[+,-]
```

(The income in the IBC is really w\_tN\_t + D\_t = Y\_t − I\_t; writing Y\_t is the standard shortcut.) PS 4 Ex 1 result: one-period log household with C = wN has N = 1/(1+θ), independent of w — income and substitution effects cancel exactly.

### 12.3–12.4 Intermediary and equilibrium

The intermediary takes deposits S\_t and lends B^I\_t, earning D^I\_{t+1} = r\_tB^I\_t − r\_tS\_t = 0 in equilibrium (positive only with a spread). Loan market clearing S\_t = B^I\_t = I\_t plus the budget constraints gives Y\_t = C\_t + I\_t, and the same in t+1.

Equilibrium: C\_t = C^d(Y\_t, Y\_{t+1}, r\_t); N\_t = N^s(w\_t, θ\_t); N\_t = N^d(w\_t, A\_t, K\_t); I\_t = I^d(r\_t, A\_{t+1}, K\_t); Y\_t = A\_tF(K\_t, N\_t); Y\_t = C\_t + I\_t. Six equations; endogenous C\_t, N\_t, Y\_t, I\_t, w\_t, r\_t; exogenous A\_t, A\_{t+1}, K\_t, θ\_t (+ f\_t). Two prices: w\_t clears the labor market; r\_t clears the goods (equivalently loanable-funds) market. The endowment economy is the special case with N\_t and I\_t fixed. Unlike the endowment economy, households can now smooth in aggregate: more desired saving lowers r\_t, which raises investment.

## Unit 9 — The neoclassical model: IS, Ys and money (Ch 17, Lecture 5 part 1)

The neoclassical (real business cycle) model has optimizing agents, frictionless markets and a vertical Ys curve, so output is supply-determined; the classical dichotomy lets you solve the real block (IS and Ys) first, then read the price level off the money market. Lecture 5 calls it the right description of the medium run (a couple of years to a decade).

### 17.1–17.4 Decision rules and equilibrium

```latex
\begin{aligned}
&C_t = C^d(Y_t - G_t,\, Y_{t+1} - G_{t+1},\, r_t) && N_t = N^s(w_t, \theta_t) && N_t = N^d(w_t, A_t, K_t)\\
&I_t = I^d(r_t, A_{t+1}, f_t, K_t) && Y_t = A_tF(K_t, N_t) && Y_t = C_t + I_t + G_t\\
&M_t = P_t\,M^d(r_t + \pi^e_{t+1},\, Y_t) && r_t = i_t - \pi^e_{t+1} &&
\end{aligned}
```

where M\_t = money supply (exogenous, set by government); P\_t = price level (dollars per good); M^d(·) = real money demand, decreasing in the nominal rate i\_t (opportunity cost of holding money instead of bonds) and increasing in Y\_t (more transactions); i\_t = nominal interest rate; π^e\_{t+1} = expected inflation (exogenous); w\_t = W\_t/P\_t = real wage; θ\_t = labor supply shifter (unemployment benefits, taxes, demographics, preferences); f\_t = credit spread.

- Eight equations, eight endogenous variables: Y\_t, C\_t, I\_t, N\_t, w\_t, r\_t (real block) and P\_t, i\_t (nominal block).
- Exogenous: A\_t, A\_{t+1}, G\_t, G\_{t+1}, K\_t, θ\_t, f\_t, M\_t, π^e\_{t+1}. Y\_{t+1} is "pseudo-exogenous": moved only by A\_{t+1} or G\_{t+1}, not by period-t shocks, because investment is small relative to the capital stock in the medium run.
- Ricardian equivalence lets us act as if T\_t = G\_t.
- Classical dichotomy: the six real equations contain no nominal variables, so real variables are determined without them.

### 17.5.1 The demand side: IS curve

IS = "investment = saving": Y\_t − C\_t − G\_t = (Y\_t − T\_t − C\_t) + (T\_t − G\_t) = S^pr\_t + S^g\_t = I\_t.

```latex
Y^d_t = C^d(Y_t - G_t, Y_{t+1} - G_{t+1}, r_t) + I^d(r_t, A_{t+1}, f_t, K_t) + G_t, \qquad E_0 = C^d(-G_t, Y_{t+1} - G_{t+1}, r_t) + I^d(r_t, A_{t+1}, f_t, K_t) + G_t
```

where Y^d\_t = desired aggregate expenditure; E\_0 = autonomous expenditure (desired spending at Y\_t = 0).

Derivation: expenditure line has intercept E\_0 > 0 and slope MPC < 1, so it crosses the 45° line once at Y = E\_0/(1 − MPC) (linear case). Lower r\_t raises C and I, shifts the line up, raises Y; plot the (r, Y) pairs: IS slopes down.

IS slope and shape (PS 5):

```latex
dY_t = MPC\,dY_t + (C_r + I_r)\,dr_t \quad \therefore \quad \frac{dr_t}{dY_t} = \frac{1 - MPC}{C_r + I_r} < 0
```

where C\_r = ∂C^d/∂r\_t < 0; I\_r = ∂I^d/∂r\_t < 0. More interest-sensitive investment (|I\_r| larger) or a larger MPC makes IS flatter; as MPC --> 1, IS approaches horizontal.

IS shifters (Lecture 5): ↑ A\_{t+1} right; ↑ f\_t left; ↑ G\_t right (by 1 − MPC in E\_0, horizontally by ΔG); ↑ G\_{t+1} left; ↓ K\_t right.

### 17.5.2 The supply side: Ys curve

Four-part graph: labor market (N^s up, N^d down) sets w\_t and N\_t; production function Y = A\_tF(K\_t, N) maps N\_t to Y\_t; a 45° line reflects Y onto the horizontal axis; plot against r\_t. Since r\_t affects neither labor supply, labor demand nor the production function, **Ys is vertical**.

Ys shifters: ↑ A\_t right (N^d shifts right and the production function shifts up); ↑ θ\_t left; ↓ K\_t left. (K\_t shifts both curves and can only fall exogenously, so the lecture does not analyze it.)

Upward-sloping Ys (PS 5, Ch 17 Ex 2): if N^s = N^s(w\_t, θ\_t, r\_t) with ∂N^s/∂r\_t > 0 — a higher r\_t makes working today and saving the pay more attractive (intertemporal substitution of labor), and lowers lifetime wealth so u\_C rises — then ↑ r shifts N^s right, raises N and Y, and Ys slopes up. Demand shocks then move output somewhat, but data still require mostly supply shocks.

### 17.5.3 Bringing it together

The IS–Ys intersection gives r\_t and Y\_t; the labor market gives N\_t and w\_t; the consumption and investment functions at that r\_t and Y\_t give the split between C\_t and I\_t.

### 17.5.4 The nominal side

- Money demand in (M, P) space slopes up from the origin (P is the price of goods in money; the price of money is 1/P, against which demand slopes down). Position depends on r\_t, π^e\_{t+1} and Y\_t.
- Money supply is vertical at M\_t. Their intersection gives P\_t; i\_t = r\_t + π^e\_{t+1}.
- ↑ Y\_t or ↓ i\_t raises money demand (curve pivots right), lowering P\_t for a given M\_t.

## Unit 10 — Effects of shocks (Ch 18, Lecture 5 part 2)

Only supply shocks (A\_t, θ\_t) move output, employment and the wage; demand shocks (A\_{t+1}, f\_t, G\_t, G\_{t+1}) move only r\_t and the C/I split; nominal shocks (M\_t, π^e\_{t+1}) move only P\_t and i\_t. Memorize this table — it is the Lecture 5 table extended with the Ch 18 nominal columns and PS 5.

| Shock | Type | Y\_t | C\_t | I\_t | N\_t | w\_t | r\_t | i\_t | P\_t |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ↑ A\_t | supply (Ys right) | + | + | + | + | + | − | − | − |
| ↑ θ\_t | supply (Ys left) | − | − | − | − | + | + | + | + |
| ↑ f\_t | demand (IS left) | 0 | + | − | 0 | 0 | − | − | − |
| ↑ A\_{t+1} | demand (IS right) | 0 | ? | ? | 0 | 0 | + | + | + |
| ↑ G\_t | demand (IS right) | 0 | − | − | 0 | 0 | + | + | + |
| ↑ G\_{t+1} | demand (IS left) | 0 | − | + | 0 | 0 | − | − | − |
| ↑ M\_t | nominal | 0 | 0 | 0 | 0 | 0 | 0 | 0 | + |
| ↑ π^e\_{t+1} | nominal | 0 | 0 | 0 | 0 | 0 | 0 | + | + |

### Recipe for any shock (exam template)

1. Classify it: which equations contain it? Supply (labor market or production function), demand (consumption or investment function, resource constraint), or nominal.
2. Shift the curve(s): Ys, IS, or neither. Say why (e.g. ↑ A\_t shifts N^d right and the production function up).
3. Read the new r\_t and Y\_t at the IS–Ys intersection. With vertical Ys, a demand shock changes only r\_t.
4. Labor market: N\_t and w\_t move only if Ys moved.
5. C\_t and I\_t: at the new r\_t and Y\_t. If Y\_t and G\_t are unchanged, C\_t + I\_t is fixed, so one can rise only if the other falls.
6. Money market: i\_t = r\_t + π^e\_{t+1}; ↑ i\_t or ↓ Y\_t lowers money demand, so P\_t rises with M\_t fixed.

### Worked logic for each shock

- **↑ A\_t:** N^d right, so N and w rise; production function shifts up; Y rises twice over (direct + more labor); Ys right; r falls to make expenditure equal the higher output (move down IS), so C and I both rise. Lower i and higher Y raise money demand, so P falls.
- **↑ θ\_t:** N^s left, N falls, w rises; Y falls along an unchanged production function; Ys left; r rises, C and I fall; i rises, Y falls, money demand falls, P rises.
- **↑ A\_{t+1} ("news shock", animal spirits):** I^d rises and expected Y\_{t+1} rises (so C^d rises); IS right; Y unchanged, r rises; C + I unchanged so their individual responses are ambiguous (if one rises the other falls); P rises.
- **↑ f\_t (credit spread):** I^d falls; IS left; r falls; C rises, I falls (net zero); P falls.
- **↑ G\_t:** E\_0 rises by 1 − MPC; IS right by ΔG; r rises; I falls and C falls, together by exactly ΔG (complete crowding out); equilibrium multiplier 0, fixed-r multiplier 1 (1/(1−MPC) without RE and with deficit finance). With an upward-sloping Ys the multiplier is positive but below 1.
- **↑ G\_{t+1}:** expected Y\_{t+1} − G\_{t+1} falls, C^d falls; IS left; r falls; I rises; C falls; P falls.
- **↑ M\_t:** money is neutral — only the money supply curve moves; P rises in proportion; i unchanged. Changing M is just relabeling the unit of account; non-neutrality needs sticky prices or wages (Keynesian models).
- **↑ π^e\_{t+1}:** i rises one-for-one at the same r; money demand falls; P rises today — expected inflation is partly self-fulfilling, the idea behind promising future monetary expansion.

### Elasticities (PS 5, Ch 18 Ex 1–2)

| Case | N\_t | w\_t | Y\_t | r\_t |
| --- | --- | --- | --- | --- |
| ↑ A\_t, elastic (flat) N^s | large ↑ | small ↑ | large ↑ | large ↓ |
| ↑ A\_t, inelastic (steep) N^s | small ↑ | large ↑ | smaller ↑ (still up via A) | smaller ↓ |
| ↑ θ\_t, elastic N^d | large ↓ | small ↑ | large ↓ | large ↑ |
| ↑ θ\_t, inelastic N^d | small ↓ | large ↑ | small ↓ | small ↑ |

Rule: the curve that shifts pushes along the curve that does not; the flatter the stationary curve, the more the quantity moves and the less the price moves. A larger MPC flattens IS but also widens its horizontal shift by the same factor 1/(1 − MPC); with a vertical Ys these offset, so in the linear case ↑ f\_t lowers r\_t by the same amount, −I\_fΔf/(C\_r + I\_r), whatever the MPC (Ch 18 Ex 6).

### Takeaways (Ch 18 summary and Lecture 5)

- Supply-driven theory of fluctuations; demand shocks change composition, not level.
- Positive supply shocks lower P; positive demand shocks raise P (demand-side: ↑ A\_{t+1}, ↑ G\_t, ↓ f\_t, ↓ G\_{t+1}).
- Monetary neutrality: nominal shocks do not move real variables. Classical dichotomy: real variables are solvable without nominal ones; the converse fails (real shocks move P and i).
- Changes in K\_t are not analyzed: they shift both curves and can only be exogenous decreases (wars, natural disasters).

## Also in the Ch 17–18 file: Ch 14.2, 15 and 16

Your "17 and 18" PDF opens with the end of Ch 14 and all of Ch 15–16. They are not tied to a lecture deck, so treat them as lower priority, but Ch 14.2 underlies the money market in Unit 9.

### Ch 14.2 Money in the production economy

- Money's roles: medium of exchange (solves the double-coincidence-of-wants problem; the most important role, but hard to model with one good and one agent), unit of account, store of value. Commodity vs fiat money.
- Modeling shortcut: the household gets utility from real balances M\_t/P\_t and can save in bonds (earn i\_t) or money (earn 0).

```latex
1 + r_t = \frac{1 + i_t}{1 + \pi^e_{t+1}} \qquad r_t \approx i_t - \pi^e_{t+1}, \qquad \frac{M_t}{P_t} = M^d(i_t, Y_t)
```

where i\_t = nominal interest rate; π^e\_{t+1} = expected inflation from t to t+1; M^d = real money demand, falling in i\_t (opportunity cost) and rising in Y\_t (more transactions). The government sells money in t and buys it back in t+1; the firm's problem is unchanged.

### Ch 15 Equilibrium efficiency

- A benevolent social planner choosing C\_t, C\_{t+1}, N\_t, N\_{t+1}, K\_{t+1} to maximize the household's utility subject only to resource constraints (C\_t + K\_{t+1} − (1−δ)K\_t + G\_t ≤ A\_tF(K\_t, N\_t)) gets first-order conditions identical to the market equilibrium once prices are substituted out: the competitive equilibrium is Pareto efficient (a formal version of Smith's invisible hand; the First Welfare Theorem).
- If the planner also picks M\_t: it sets the marginal utility of real balances to zero, because money is costless to create. The market matches this only if i\_t = 0 (the Friedman rule).
- If the planner picks G\_t: with useless G, G = 0; with utility from G, it sets the marginal utility of G equal to the marginal utility of private consumption.

### Ch 16 Search, matching and unemployment

- Motivation: the representative-agent labor market has no unemployment, yet most variation in hours is on the extensive margin (people moving in and out of work). Beveridge curve: vacancies and unemployment move inversely.

```latex
u_{t+1} = u_t - f\,u_t + s(1 - u_t) \qquad \therefore \qquad u^* = \frac{s}{s + f}
```

where u\_t = unemployment rate; f = job-finding rate; s = separation rate; u\* = steady-state rate. Book numbers: s = 0.017, f = 0.25 gives u\* ≈ 6.4%; cutting s to 0.01 gives about 3.9%. The bathtub model is atheoretical (f and s are not chosen).

- Diamond–Mortensen–Pissarides: a constant-returns matching function turns unemployed U and vacancies V into matches; labor-market tightness V/U raises the job-finding rate and lowers the vacancy-filling rate. Wages split the match surplus by bargaining power; free entry of firms drives the value of a vacancy to zero. Congestion externalities mean the equilibrium need not be efficient. Comparative statics: higher vacancy-posting cost, lower matching efficiency, lower productivity or higher separations all raise unemployment.

## Diagram: an increase in A\_t in the neoclassical model

<div class="sim-callout">This diagram is interactive in the app: open the <a href="#/simulator?shock=At">Shock simulator</a> to watch each panel shift, then try the other seven shocks.</div>

Read left to right as on the exam: the labor market sets N, the production function turns N into Y, and Y becomes the Ys line against the unchanged IS curve. For any demand shock, only the right panel's IS moves, so Y, N and w stay put.
