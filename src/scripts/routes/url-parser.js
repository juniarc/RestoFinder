const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this.urlSpliter(url);
    if (splitedUrl.resource === 'detail') {
      return this.urlCombinerForDetail(splitedUrl);
    } if (splitedUrl.resource == 'search') {
      return this.urlCombinerFoSearch(splitedUrl);
    }
    return this.urlCombinerForHome(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this.urlSpliter(url);
  },

  urlSpliter(url) {
    const urlsSplits = url.split(/[/?=]/);
    if (urlsSplits[1] == 'detail') {
      return {
        resource: urlsSplits[1] || null,
        id: urlsSplits[2] || null,
      };
    } if (urlsSplits[1] == 'search') {
      return {
        resource: urlsSplits[1] || null,
        q: urlsSplits[2] || null,
        query: urlsSplits[3] || null,
      };
    }
    return {
      resource: urlsSplits[1] || null,
    };
  },

  urlCombinerForDetail(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
        + (splitedUrl.id ? '/:id' : '');
  },

  urlCombinerFoSearch(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/error')
        + (splitedUrl.q ? '?q' : '')
        + (splitedUrl.query ? '=query' : '=query');
  },

  urlCombinerForHome(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/');
  },
};

export default UrlParser;
