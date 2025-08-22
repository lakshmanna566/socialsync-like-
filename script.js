// Platform selection toggle
document.querySelectorAll('.platform-icon').forEach(icon => {
  icon.addEventListener('click', () => icon.classList.toggle('selected'));
});

// Quill editor
const quill = new Quill('#editor-container', {
  theme: 'snow',
  placeholder: 'Write your post here...'
});

// File upload
const fileInput = document.getElementById('fileInput');
const dragArea = document.getElementById('dragFileArea');
const mediaPreview = document.getElementById('mediaPreview');

dragArea.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', handleFiles);

function handleFiles() {
  mediaPreview.innerHTML = '';
  [...fileInput.files].forEach(file => {
    const url = URL.createObjectURL(file);
    let element;
    if (file.type.startsWith('image/')) {
      element = `<img src="\${url}" class="image-preview rounded">`;
    } else {
      element = `<video src="\${url}" class="image-preview rounded" controls></video>`;
    }
    mediaPreview.innerHTML += element;
  });
  mediaPreview.classList.remove('hidden');
}

// Flatpickr
flatpickr("#scheduleDateTime", { enableTime: true, dateFormat: "Y-m-d H:i" });

// Notification toggles
document.getElementById('emailNotification').addEventListener('change', e => {
  document.getElementById('emailInputContainer').classList.toggle('hidden', !e.target.checked);
});
document.getElementById('smsNotification').addEventListener('change', e => {
  document.getElementById('phoneInputContainer').classList.toggle('hidden', !e.target.checked);
});

// Post Now button with loader
const postBtn = document.getElementById('postNowBtn');
const loader = document.getElementById('postBtnLoader');
const text = document.getElementById('postBtnText');
const icon = document.getElementById('postBtnIcon');

postBtn.addEventListener('click', () => {
  icon.classList.add('hidden');
  loader.classList.remove('hidden');
  text.innerText = "Posting...";
  setTimeout(() => {
    loader.classList.add('hidden');
    icon.classList.remove('hidden');
    text.innerText = "Post Now";
    Swal.fire("✅ Success!", "Your post has been published.", "success");
  }, 2000);
});
