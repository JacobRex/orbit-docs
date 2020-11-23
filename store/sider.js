export const state = () => ({
  mobileMenuOpen: false,
});

export const mutations = {
  setNavigation(state, nav) {
    state.navigation = nav;
  },

  openMobileMenu(state) {
    state.mobileMenuOpen = true;
  },

  closeMobileMenu(state) {
    state.mobileMenuOpen = false;
  },
};
