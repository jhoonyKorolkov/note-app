<template>
  <!-- new note -->
  <div class="new-note">
    <label>Title</label>
    <input v-model="note.title" type="text" />
    <label>Description</label>
    <textarea v-model="note.descr"></textarea>

    <label class="new-note__radio" v-for="(item, i) in note.priority" :key="i">
      <input class="radio" type="radio" :value="item.name" v-model="note.status" />
      <div class="custom">{{ item.value }}</div>
    </label>

    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addNote() {
      this.$emit('addNote', this.note);
    },
  },
};
</script>

<style lang="scss">
.new-note {
  text-align: center;
  &__radio {
    & .radio {
      display: none;
    }
    & .custom {
      cursor: pointer;
    }
    & .radio:checked + .custom {
      font-weight: bold;
      color: #494ce8;
    }
  }
}
</style>
