const getManyNames = (max, progress) => new Promise(resolve => {
  const results = [];
  let n = 1;

  function recurcive() {
    if (n >= max) {
      resolve(results);
      return;
    }

    n++;
    const div = document.createElement('div');
    div.innerText = (`Hi man ${n} ${Math.random()}`);
    results.push(div);
    progress.update((n / max) * 100)

    setTimeout(() => {
      recurcive();
    }, 0);
  }

  recurcive();
});