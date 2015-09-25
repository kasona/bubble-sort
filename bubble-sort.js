var num = [2, 7, 4, 1, 9, 5];

function bubbleSort(num) {
  var count = 0;
  var swap = null;
  do {
    swap = false;
    for (var i = 0; i <= num.length; i++) {
      if (num[i] > num[i + 1]) {
        var temp = num[i];
        num[i] = num[i + 1];
        num [i + 1] = temp;
        swap = true;
        count++;
      }
    }
  } //end of do
while (swap);
  console.log(num, ' \n Total swaps: ', count);
}
