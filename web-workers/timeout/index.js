const btn = document.getElementById('button');
const results = document.getElementById('results');
const indicator = document.getElementById('indicator');

const max = 1000;

const progress = {
  update(percents) {
    console.log(percents)
    indicator.style.width = `${percents}%`
  }
};

const getManyNames = (progress) => new Promise(resolve => {
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

const handler = () => {
  results.innerHTML = '';
  progress.update(0);

  const namesHTML = getManyNames(progress);
  results.append(...namesHTML);
}


btn.addEventListener('click', handler);
