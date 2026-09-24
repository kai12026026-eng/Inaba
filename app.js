const photoInput = document.querySelector('#photoInput');
const preview = document.querySelector('#preview');
const analyzeButton = document.querySelector('#analyzeButton');
const resultSection = document.querySelector('#resultSection');
const newPhotoButton = document.querySelector('#newPhotoButton');
const toast = document.querySelector('#toast');

photoInput.addEventListener('change', (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    showToast('画像ファイルを選択してください');
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    preview.style.backgroundImage = `url(${reader.result})`;
    preview.classList.add('has-image');
    analyzeButton.disabled = false;
    analyzeButton.querySelector('span').textContent = 'この写真を解析する';
  };
  reader.readAsDataURL(file);
});

analyzeButton.addEventListener('click', () => {
  analyzeButton.disabled = true;
  analyzeButton.querySelector('span').textContent = 'AIが解析中…';
  setTimeout(() => {
    resultSection.classList.remove('hidden');
    analyzeButton.disabled = false;
    analyzeButton.querySelector('span').textContent = '解析済み';
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast('解析が完了しました');
  }, 1200);
});

newPhotoButton.addEventListener('click', () => {
  photoInput.value = '';
  preview.style.backgroundImage = '';
  preview.classList.remove('has-image');
  analyzeButton.disabled = true;
  analyzeButton.querySelector('span').textContent = 'AIで解析する';
  resultSection.classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelector('#historyButton').addEventListener('click', () => showToast('食事の記録機能は準備中です'));

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2600);
}
