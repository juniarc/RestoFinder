const LoaderInitiator = {
  init(loader) {
    if (loader.classList.contains('hidden')) {
      loader.classList.remove('hidden');
    } else {
      loader.classList.add('hidden');
    }
  },
};

export default LoaderInitiator;
