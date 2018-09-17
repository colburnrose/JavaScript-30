function playSound(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!sound) return undefined; // stop the function
    // Ensures that the sounds clip always plays from the beginning. Otherwise,
    // if the 'a' key is pressed twice rapidly, the soundclip will only play through once.
    sound.currentTime = 0;
    sound.play(); //Play sound
    key.classList.add('playing');
  }
  
  function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip it if it's not transform
    this.classList.remove('playing'); // if the ele has a transform, remove class 'playing' when the transform has finished.
  }

  // Find all keys and add an event listener for transitions.
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitioned', removeTransition));
  window.addEventListener('keydown', playSound);