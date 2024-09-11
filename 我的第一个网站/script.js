const bio = document.getElementById('bio') ?? null;

function toggleBio() {
  if (bio) {
    if (bio.style.display === 'none') {
      bio.style.display = 'block';
    } else {
      bio.style.display = 'none';
    }
  }
}
