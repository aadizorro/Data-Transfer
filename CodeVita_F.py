import sympy as sp
from sympy.solvers import solve

x = sp.Symbol('x')

x_l = 1#int(input())
y_l = 1#int(input())
x_w = 1#int(input())
y_w = -1#int(input())
f = 1.2#input()

x_optimised = 0

dist1 = ((x - x_l)**2 + (0 - y_l)**2)**(1/2)
dist2 = ((x - x_w)**2 + (0 - y_w)**2)**(1/2)

diff1 = sp.diff(dist1,x)
diff2 = sp.diff(dist2,x)

answer = solve(diff1 + (f*diff2),x)[0]
answer = format(answer,'.6f')
print(answer)