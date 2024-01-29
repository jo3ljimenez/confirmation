export const showImageFullScreen = (imageSrc: string): void => {
    let fullscreenImageContainer = document.getElementById('fullscreenImageContainer') as HTMLElement;
  
    if (fullscreenImageContainer) {
      (document.getElementById('fullscreenImage') as HTMLImageElement).src = imageSrc;
      fullscreenImageContainer.style.display = 'flex';
  
      setTimeout(() => {
        fullscreenImageContainer.classList.add('show');
      }, 50);
  
      fullscreenImageContainer.addEventListener('click', () => {
        if (fullscreenImageContainer) {
          fullscreenImageContainer.classList.remove('show');
  
          setTimeout(() => {
            if (fullscreenImageContainer) {
              fullscreenImageContainer.style.display = 'none';
            }
          }, 300);
        }
      });
    }
  }