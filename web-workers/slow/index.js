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

const getManyNames = (progress) => {
  const results = [];

  for (let n = 1; n < max; n++) {
    const div = document.createElement('div');
    div.innerText = (`Hi man ${n} ${Math.random()}`);
    results.push(div);
    progress.update((n / max) * 100)
  }

  return results;
}

const handler = () => {
  results.innerHTML = '';
  progress.update(0);

  const namesHTML = getManyNames(progress);
  results.append(...namesHTML);
}


btn.addEventListener('click', handler);
