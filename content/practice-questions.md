# Practice questions

These are the end-of-chapter exercises and review questions that were not on your problem sets, plus the Ch 17 numeric IS problem. Cover the answer, attempt the question, then check. Symbols follow the Formula sheet tab.

### A. Data and Solow

**1. (Ch 1 Ex 1)** Price of houses, guns, apples = 1. (a) Households buy 10 houses and 90 apples; government buys 10 guns. (b) Same, plus farmers plant seeds from 10 more apples; households sell 10 apples to France at 1 and buy 10 Canadian bananas at 2. (c) Case (a) but the government taxes 30 apples from each of 2 rich households and gives 6 to each of 10 poor ones.

- (a) C = 90, I = 10 (new houses), G = 10, NX = 0; GDP = 110.
- (b) C = 90 + 20 = 110, I = 10 + 10 = 20, G = 10, X = 10, IM = 20, NX = −10; GDP = 130 (= 10 houses + 110 apples + 10 guns).
- (c) Transfers are not G; GDP = 110, components as in (a).

**2. (Ch 1 Ex 2)** u = 6%, working-age population 120m, unemployed 3.5m.

- LF = 3.5/0.06 = 58.33m; lfp = 58.33/120 = 48.6%; E = 58.33 − 3.5 = 54.83m; E/L = 45.7%.

**3. (Ch 1 Ex 3)** Steel: revenue 100,000, buys 4,000 oil and 10,000 wheat, wages 80,000. Wheat: 150,000; 20,000 oil, 10,000 steel; wages 90,000. Oil: 200,000; 40,000 wheat, 30,000 steel; wages 100,000. GDP by production and income?

- Value added: 86,000 + 120,000 + 130,000 = 336,000.
- Income: wages 270,000 + profits (6,000 + 30,000 + 30,000) = 336,000.

**4. (Ch 1 Ex 4)** Minimize p\_x x + p\_y y s.t. x^{0.5} y^{0.5} = 5. Year 2000 p\_x = p\_y = 10; 2001 p\_y = 20.

- 2000: x = y = 5, E = 100 (the basket).
- 2001 basket cost 10(5) + 20(5) = 150: CPI inflation 50%.
- 2001 optimum: x = 2y, so y = 5/√2 = 3.536, x = 7.071, E = 141.42: +41.4%.
- CPI overstates the cost of living because it ignores substitution toward x.

**5. (Ch 5 Ex 4)** Cobb-Douglas Solow: find k\*, c\*, and the s that maximizes c\*.

```latex
k^* = \Big(\frac{sA}{\delta}\Big)^{\frac{1}{1-\alpha}}, \quad c^* = (1-s)A\Big(\frac{sA}{\delta}\Big)^{\frac{\alpha}{1-\alpha}}, \quad \frac{d\ln c^*}{ds} = -\frac{1}{1-s} + \frac{\alpha}{(1-\alpha)s} = 0 \;\therefore\; s_{gr} = \alpha
```

With α = 1/3, δ = 0.1, A = 1 (Ex 5): s\_gr = 1/3, k\* = 6.09, y\* = 1.83, c\* = 1.22, and R\* = MPK = 0.1 = δ.

**6. (Ch 5 Ex 6)** A = 1, δ = 0.1, α = 1/3, s = 0.1 --> 0.2 in period 10. How long to get halfway?

- k\* = (0.1/0.1)^{1.5} = 1 --> new k\* = 2^{1.5} = 2.83. k does not move in period 10; halfway (≈ 1.91) is reached about 12 periods after the increase.

**7. (Ch 5 Ex 2)** Workforce doubles permanently at t.

- k\_t = K\_t/N\_t halves on impact; k\* is unchanged (same s, A, δ), so k climbs back to k\*. Y jumps up (more N), then keeps rising as K accumulates; w falls on impact (less capital per worker), then recovers to its old level.

**8. (Ch 5 Ex 3)** Government takes G\_t = s\_G Y\_t; investment = s(Y\_t − G\_t).

- k\_{t+1} = s(1 − s\_G)Af(k\_t) + (1−δ)k\_t. ↑ s\_G shifts the curve down: k\* falls and k declines gradually toward it.

### B. Consumption

**9. (Ch 9 Ex 5)** Y\_t = 250, Y\_{t+1} = 300, r = 0.05, perfect complements. Then Y\_t = 320.

- Lifetime wealth = 250 + 300/1.05 = 535.71.
- C\_t = C\_{t+1} = \[(1.05)(250) + 300\]/2.05 = 274.39; S\_t = −24.39 (borrower).
- Y\_t = 320: C = (336 + 300)/2.05 = 310.24; S\_t = +9.76 (lender). Higher current income flips the household to saving.

**10. (Ch 9 review Q8)** If β(1+r\_t) < 1, is consumption growth positive? No: with the Euler equation u'(C\_t) < u'(C\_{t+1}), so C\_{t+1} < C\_t (negative growth).

**11. (Ch 10 Ex 1)** Three periods, log utility, rates r\_t and r\_{t+1}.

```latex
C_t = \frac{1}{1+\beta+\beta^2}\Big[Y_t + \frac{Y_{t+1}}{1+r_t} + \frac{Y_{t+2}}{(1+r_t)(1+r_{t+1})}\Big], \qquad MPC = \frac{1}{1+\beta+\beta^2} < \frac{1}{1+\beta}
```

With a common r: ∂C\_t/∂r = −\[1/(1+β+β²)\]\[Y\_{t+1}/(1+r)² + 2Y\_{t+2}/(1+r)³\] < 0 whenever future income is positive.

**12. (Ch 10 review)** Old vs young lottery winner? The old one's consumption rises more (shorter horizon, bigger MPC).

### C. Equilibrium and fiscal policy

**13. (Ch 11 Ex 2)** U = C\_t + βC\_{t+1} (linear).

- Consumption function: C\_t = 0 if β(1+r\_t) > 1; C\_t = Y\_t + Y\_{t+1}/(1+r\_t) if β(1+r\_t) < 1; any C\_t if = 1.
- Equilibrium (C\_t = Y\_t, interior): 1 + r\_t = 1/β, independent of Y\_t and Y\_{t+1}.
- Individual S\_t(j) need not be zero (households are indifferent), unlike the strictly concave case.

**14. (Ch 11 Ex 4)** Log utility, (Y\_A,t, Y\_A,t+1) = (1, 2), (Y\_B,t, Y\_B,t+1) = (2, 1), β = 0.9.

- Aggregates 3 and 3 --> 1 + r\_t = 1/β.
- C\_A = (1 + 2β)/(1+β) = 1.474 each period (A borrows); C\_B = (2 + β)/(1+β) = 1.526 each period (B saves). B consumes more because its income is front-loaded, so its PV is higher (2.9 vs 2.8).
- Utility: A 0.624 (endowment) vs 0.737 (equilibrium); B 0.693 vs 0.803. Both gain from intertemporal trade.

**15. (Ch 13 Ex 3)** Firm with Y = AK^α (no labor), liquidates after t+1. Optimal investment, then a profit tax, then a revenue tax.

- No tax: αA\_{t+1}K\_{t+1}^{α−1} = r\_t + δ, I\_t = \[αA\_{t+1}/(r\_t + δ)\]^{1/(1−α)} − (1−δ)K\_t.
- Proportional profit tax (both periods, investment deductible): (1 − τ) multiplies the whole FOC, so investment is unchanged.
- Revenue tax (investment not deductible): (1 − τ)αA\_{t+1}K\_{t+1}^{α−1} = r\_t + δ, so K\_{t+1} and I\_t fall.

**16. (Ch 13 review)** "Bond-financed spending won't lower desired consumption because we owe the debt to ourselves." Error: forward-looking households see the future taxes, so bond finance lowers C^d exactly as tax finance does.

### D. Neoclassical model

**17. (Ch 17 Ex 3)** C\_t = c1(Y\_t − G\_t) + c2(Y\_{t+1} − G\_{t+1}) − c3 r\_t; I\_t = −d1 r\_t + d2 A\_{t+1} + d3 K\_t. c1 = 0.6, c2 = 0.5, c3 = 10, d1 = 20, d2 = 1, d3 = 0.5; Y\_{t+1} = 15, G\_t = G\_{t+1} = 10, A\_{t+1} = 5, K\_t = 15.

```latex
Y_t = \frac{(1-c_1)G_t + c_2(Y_{t+1} - G_{t+1}) + d_2A_{t+1} + d_3K_t - (c_3 + d_1)r_t}{1 - c_1}, \qquad \frac{\partial Y_t}{\partial r_t} = -\frac{c_3 + d_1}{1 - c_1} = -75
```

- r = 0.10: numerator 4 + 2.5 + 5 + 7.5 − 3 = 16, Y = 40.
- r = 0.15: numerator 14.5, Y = 36.25.
- A\_{t+1} = 7: numerator +2, IS shifts right by 2/0.4 = 5 at every r.

**18. (Ch 18 Ex 4)** ↓ A\_t: which way does P\_t move, and is the move bigger or smaller if money demand is less sensitive to Y\_t?

- Ys left, r ↑, Y ↓; both lower money demand, so P\_t rises. Less sensitivity to Y means a smaller fall in M^d, so P\_t rises less.

**19. (Ch 18 Ex 5)** Effects of (a) ↑ G\_{t+1}, (b) ↑ A\_{t+1}, (c) a permanent rise in A (A\_t and A\_{t+1} together).

- (a) IS left; Y, N, w unchanged; r ↓, i ↓; I ↑, C ↓; P ↓.
- (b) IS right; Y, N, w unchanged; r ↑, i ↑; C and I ambiguous but C + I fixed; P ↑.
- (c) Ys and IS both shift right: Y, N, w ↑; r ambiguous (falls if the supply shift dominates); C likely ↑; I ambiguous; P ambiguous.

**20. (Ch 18 Ex 6)** How does the MPC affect the IS slope, and the r response to ↑ f\_t?

- Higher MPC --> flatter IS (slope (1 − MPC)/(C\_r + I\_r)). But ↑ f\_t also shifts IS horizontally by I\_fΔf/(1 − MPC), a bigger shift when MPC is high. With a vertical Ys the two effects cancel: (1 − MPC)Y\_t = E\_0 + (C\_r + I\_r)r\_t at fixed Y\_t gives Δr\_t = −I\_fΔf/(C\_r + I\_r), independent of the MPC. Draw it: the high-MPC IS is flatter but moves further, landing at the same r\_t. (I\_f = ∂I^d/∂f\_t < 0.)

**21. Quick checks (review questions)**

- Why does investment depend on A\_{t+1} but not A\_t? Capital bought today produces only tomorrow.
- Why can a wage rise reduce labor supply? The income effect can outweigh the substitution effect.
- Why do IS shocks not change output in the neoclassical model? Ys is vertical: r\_t does not affect labor supply, labor demand or the production function.
- Classical dichotomy vs monetary neutrality? Dichotomy: real variables are solved without nominal ones. Neutrality: nominal shocks do not move real variables.
