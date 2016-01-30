function repeatBarriers() {
while (getColor() != "red") {
  down();
}
right();
right();
while (getColor() != "red") {
  up();
}
right();
right();
}
repeatBarriers();
repeatBarriers();
repeatBarriers();

