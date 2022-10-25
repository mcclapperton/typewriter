const sentence = "hello there from lighthouse labs\n";
let pause = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, pause);
  pause += 50;
}
