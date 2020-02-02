import Vuex from 'vuex';

export const strict = false;

export const state = () => ({
  article: null,
  articles: [],
  page: null,
  authorArticles: [],
  authors: null,
  enableComments: true,
  indexInfiniteLoading: {
    enabled: true,
    page: 1
  },
  featuredArticles: [],
  featuredColor: {},
  header: {
    menuOpen: false,
    searchOpen: false
  },
  meta: {
    description: '',
    name: ''
  },
  topicArticles: [],
  topics: null,
  theme: 'mode-light'
});

export const mutations = {
  setArticle(state, data) {
    state.article = data;
  },
  setPage(state, data) {
    state.page = data;
  },
  setAuthorArticles(state, data) {
    state.authorArticles.push(data);
  },
  setAuthors(state, data) {
    state.authors = data;
  },
  setIndexInfiniteLoading(state, data) {
    state.indexInfiniteLoading = data;
  },
  setFeaturedColor(state, data) {
    state.featuredColor = data;
  },
  setFeaturedArticles(state, data) {
    state.featuredArticles = state.featuredArticles.concat(data);
  },
  setMeta(state, data) {
    state.meta = data;
  },
  setTopicArticles(state, data) {
    state.topicArticles.push(data);
  },
  setTopics(state, data) {
    state.topics = data;
  },
  setHeader(state, data) {
    state.header = {
      menuOpen: data.menuOpen,
      searchOpen: data.searchOpen
    };
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let meta = await this.$axios.get(process.env.WORDPRESS_API_URL);
    commit('setMeta', meta.data);
  }
};
