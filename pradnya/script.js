
// Floating star sparkle effect
document.addEventListener('mousemove', (e) => {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.left = e.pageX + 'px';
  star.style.top = e.pageY + 'px';
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 1000);
});

const style = document.createElement('style');
style.innerHTML = \`
.star {
  position: absolute;
  width: 10px;
  height: 10px;
  background: yellow;
  border-radius: 50%;
  animation: twinkle 1s ease-out;
}

@keyframes twinkle {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}
\`;
document.head.appendChild(style);
