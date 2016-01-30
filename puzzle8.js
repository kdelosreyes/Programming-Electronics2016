function moveWhiteSpace() {
var count = 0;
while (count < 8) {
  down();
  count = count + 1;
}
right();
right();
var count2 = 0;
while (count2 < 8) {
  up();
  count2 = count2 + 1;
}
right();
right();
}
moveWhiteSpace();
moveWhiteSpace();
moveWhiteSpace();
