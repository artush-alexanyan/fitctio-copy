import { defineStore } from "pinia";
import firebase from "../../firebase/firebase";

const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),

  actions: {
    async userGoogleSignin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      try {
        const result = await firebase.auth().signInWithPopup(provider);
        this.user = result.user;
      } catch (error) {
        console.error("Google Sign-In Error", error);
      }
    },

    async userFacebookSignin() {
      const provider = new firebase.auth.FacebookAuthProvider();
      try {
        const result = await firebase.auth().signInWithPopup(provider);
        this.user = result.user;
      } catch (error) {
        console.error("Facebook Sign-In Error", error);
      }
    },
  },
});

export { useAuthStore };
