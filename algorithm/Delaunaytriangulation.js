// Implementation of Delaunay triangulation algorithm
// Refer Pg. 192 Dutch book
// Input: A set P of n points in the plane
// Output: Delaunay triangulation of P
// Steps:
// 1. Compute bounding triangle, B for P
// 2. Set T = B
// 3. Compute random permutation of points in P.
// 4. for r <- 1 to n
// 5.  do(Insert p_r in T)
// 6.   find a triangle which contains p_r, say t \in T
// 7.   if p_r lies in the interior of t, 
//      DOOOOO
//      Else, if p_r lies on the edge p_ip_j of t:
//      DOOOOO
// Discard B.
