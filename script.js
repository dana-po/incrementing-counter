const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = Number(counter.getAttribute('data-target'));
    // console.log(typeof target, target);
    const c = Number(counter.innerText);
    const increment = target / 200;
    // console.log(increment);
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
