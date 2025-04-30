if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark-mode');
}
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  document.getElementById('theme-icon').textContent = document.body.classList.contains('dark-mode') ? 'light_mode' : 'dark_mode';
  document.getElementById('theme-text').textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
}
/* ... (conteúdo completo já processado anteriormente) ... */