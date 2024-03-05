<template>
    <div>
      <h2>Add Item</h2>
      <form @submit.prevent="addItem">
        <label for="title">Title:</label>
        <input v-model="title" type="text" id="title" required />
  
        <label for="description">Description:</label>
        <textarea v-model="description" id="description" required></textarea>
  
        <label for="imageUrl">Image URL:</label>
        <input v-model="imageUrl" type="text" id="imageUrl" required />
  
        <button type="submit" :disabled="creating">Add Item</button>
      </form>
    </div>
  </template>
  
  <script>
  import BASE_URL  from '@/url/base-url'; // Import your API configuration
  
  export default {
    data() {
      return {
        title: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusantium, quae perspiciatis adipisci est cupiditate! Natus animi deleniti aut corporis velit inventore impedit harum laudantium. Dolorem delectus aliquam cum officia.',
        imageUrl: '',
        creating: false,
      };
    },
    methods: {
      async addItem() {
        this.creating = true;
  
        try {
          const newItem = {
            date: new Date(),
            title: this.title,
            image: this.imageUrl,
            description: this.description
          };
  
          await BASE_URL.post("/stories.json", newItem);
  
          const response = await BASE_URL.get("/items.json");
          const newItems = response.data;
  
          // Assuming 'items' is the collection name in your API response
          const itemsWithApiId = Object.keys(newItems).map((apiId) => ({
            apiId,
            ...newItems[apiId],
          }));
  
          // Handle updating your local state with the new items
  
          this.title = '';
          this.description = '';
          this.imageUrl = '';
          this.creating = false;
        } catch (error) {
          this.creating = false;
          console.error('Error adding item:', error);
          // Handle error messages or logging as needed
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  