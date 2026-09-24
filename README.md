const fileInput = document.getElementById('photoInput');
const mealPreview = document.getElementById('mealPreview');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files?.[0];
  if (!file || !file.type.startsWith('image/')) return;

  const reader = new FileReader();
  reader.onload = () => {
    mealPreview.style.backgroundImage = `url(${reader.result})`;
    mealPreview.style.backgroundSize = 'cover';
    mealPreview.style.backgroundPosition = 'center';
    mealPreview.style.filter = 'saturate(1.1) contrast(1.05)';
  };
  reader.readAsDataURL(file);
});
