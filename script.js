document.addEventListener('DOMContentLoaded', function() {
    const dfMessenger = document.querySelector('df-messenger');

    dfMessenger.addEventListener('df-messenger-loaded', function() {
      const chatWindow = dfMessenger.shadowRoot.querySelector('df-messenger-chat');

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'aria-hidden') {
            const isHidden = chatWindow.getAttribute('aria-hidden') === 'true';
            if (isHidden) {
              // Chat window is closed, clear chat history
              const messageList = chatWindow.shadowRoot.querySelector('.df-messenger-message-list');
              if (messageList) {
                messageList.innerHTML = '';
              }
            }
          }
        });
      });

      observer.observe(chatWindow, { attributes: true });
    });
  });