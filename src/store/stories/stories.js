import { defineStore } from "pinia";
import BASE_URL from "../../url/base-url";

const useStoriesStore = defineStore("auth", {
  state: () => ({
    stories: null,
    loading: false,
    messages: []
  }),

  actions: {
    async fetchStories() {
      this.loading = true;
      try {
        const response = await BASE_URL.get("/stories.json");

        const allStories = response.data;

        const storiesWithFirebaseId = Object.keys(allStories).map((firebaseId) => ({
          id: firebaseId,
          ...allStories[firebaseId]
        }));

        this.stories = storiesWithFirebaseId;
        console.log("this.stories", this.stories)
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.messages.push({
          type: "Error",
          message: error.message,
        });
      }
    }
  },
});

export { useStoriesStore }
