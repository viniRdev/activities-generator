const btn = document.querySelector('#activity-btn');
const info = document.querySelector('#activity-info');

btn.addEventListener('click', async () => {
  const response = await fetch('https://www.boredapi.com/api/activity');
  const data = await response.json();
  info.innerHTML = `<p><span class="bold">Activity</span>: ${data.activity}</p><p><span class="bold">Type</span>: ${data.type}</p><p><span class="bold">Participants</span>: ${data.participants}</p>`;
});
