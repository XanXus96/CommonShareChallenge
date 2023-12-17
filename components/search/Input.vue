<template>
  <input
    type="text"
    class="flex h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 pl-10 rounded-full w-full"
    v-model="model"
    :name="name"
    :placeholder="placeholder"
    @keyup.enter="onEnter"
  />
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["change", "submit"]);

const model = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit("change", value);
  },
});

const onEnter = (e) => emit("submit", e.target.value);
</script>
