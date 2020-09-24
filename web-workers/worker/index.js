const btn = document.getElementById('button');
const results = document.getElementById('results');
const indicator = document.getElementById('indicator');

const max = 1000;

const worker = new Worker('worker.js');

const progress = {
  update(percents) {
    console.log(percents)
    indicator.style.width = `${percents}%`
  }
};

const handler = () => {
  results.innerHTML = '';
  progress.update(0);

  const namesHTML = getManyNames(progress);
  results.append(...namesHTML);
}


btn.addEventListener('click', handler);
