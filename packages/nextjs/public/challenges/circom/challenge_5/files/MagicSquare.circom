pragma circom 2.1.0;

template MagicSquare(n) {
  signal input in[n][n];
  signal input sum;

  // sum diagonals
  var diags[2];
  for (var d = 0; d < n; d++) {
    diags[0] += in[d][d];     // top-left -> bottom-right
    diags[1] += in[n-1-d][d]; // bottom-left -> top-right
  }
  sum === diags[0];
  sum === diags[1];
  
  // sum rows
  var rowsums[n];
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      rowsums[i] += in[i][j];
    }
    sum === rowsums[i];
  }

  // sum columns
  var colsums[n];
  for (var j = 0; j < n; j++) {
    for (var i = 0; i < n; i++) {
      colsums[j] += in[i][j];
    }
    sum === colsums[j];
  }
}

component main = MagicSquare(n);