<template>
  <!-- note list -->
  <div class="notes">
    <div class="note" :class="[{ full: !grid }, note.status]" v-for="note in notes" :key="note.id">
      {{ note.status }}
      <div class="note-header" :class="{ full: !grid }">
        <p v-if="!note.isEditing" @click="showEditor(note)">
          {{ note.title }}
        </p>

        <input
          v-else
          type="text"
          v-model="note.title"
          @change="changeTitle(note)"
          @keydown.esc="returnTitle(note.id)"
        />
        <p style="cursor: pointer" @click="removeNote(note.id)">x</p>
        {{ note.id }}
      </div>
      <div class="note-body">
        <p>{{ note.descr }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    notes: {
      type: Array,
      required: true,
    },
    grid: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      saveTitle: '',
      hidden: false,
    };
  },
  methods: {
    ...mapActions('notes', ['removeNote', 'updateNote']),

    showEditor(note) {
      this.saveTitle = note.title;
      note.isEditing = true;
    },

    changeTitle(note) {
      this.saveTitle = '';
      this.updateNote(note);
      note.isEditing = false;
    },

    returnTitle(id) {
      confirm('Вы точно хотите отменить редактирование?');
      const note = this.notes.find((item) => item.id == id);
      note.title = this.saveTitle;
      note.isEditing = false;
    },
  },
};
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
  &.full {
    width: 100%;
    text-align: center;
  }
  &.normal {
    background: yellow;
  }
  &.high {
    background: red;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 32px;
  }
  p {
    font-size: 22px;
    color: #402caf;
  }
  svg {
    margin-right: 12px;
    color: #999999;
    &.active {
      color: #402caf;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &.full {
    justify-content: center;
    p {
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.note-body {
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color: #999999;
  }
}
</style>
