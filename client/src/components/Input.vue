<template>
  <div class="input-container">
    <div class="instructions">
        <u>Directions</u>:
        Select a tumor of interest and enter genes to receive a sortable table of iProFun results.
        <div class="tumor-selector">
            <b-select
                    placeholder="Select a tumor type"
                    v-model="selected"
                    v-on:input="handleTumorSelection"
                    :loading="loading"
            >
                <option
                    v-for="tumor in tumors"
                    :value="tumor"
                    :key="tumor"
                >
                    {{ tumor }}
                </option>
            </b-select>
        </div>
    </div>

  </div>
</template>

<script>
export default {
    name: 'Input',
    data() {
        return {
            tumors: ['LUAD', 'ccRCC'],
            selected: null,
        }
    },
    computed: {
        loading() {
            return this.$store.state.loading
        }
    },
    methods: {
        handleTumorSelection() {
            this.$store.dispatch('fetchTable', { tumor: this.selected })
        }
    },
}

</script>

<style scoped>
    .input-container {
        background-color: #E0E0E2;
        padding: 20px 60px;
        font-weight: bold;
        margin: 10px auto;
    }

    .instructions {
        margin: 10px auto;
    }

    h3 {
      margin: 10px 0 0;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 10px;
    }
    a {
      color: #42b983;
}
    .tumor-selector {
        margin-top: 10px;
    }
</style>
