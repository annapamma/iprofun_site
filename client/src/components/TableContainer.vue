<template>
    <div class="table-container">
            <table-component
                 :data="tableData"
                 :show-filter="false"
            >
            <table-column show="Gene" :sortable="true" label="Gene"></table-column>
            <table-column show="chromosome" label="Chromosome"></table-column>
            <table-column show="start" label="Start" cell-class="scrollable double-width"></table-column>
            <table-column show="CNV (lr) RNA" label="CNV (lr) RNA"></table-column>
            <table-column show="Methylation RNA" label="Methyl RNA"></table-column>
            <table-column show="CNV (lr) Protein" label="CNV (lr) Protein"></table-column>
            <table-column show="Methylation Protein" label="Methyl Protein"></table-column>
            <table-column show="CNV (lr) Phospho" label="CNV (lr) Phospho"></table-column>
            <table-column show="Methylation Phospho" label="Methyl Phospho"></table-column>
            <table-column show="Mutation RNA" label="Mut RNA"></table-column>
            <table-column show="Mutation Protein" label="Mut Protein"></table-column>
            <table-column show="Mutation Phospho" label="Mut Phospho"></table-column>
        </table-component>
    </div>
</template>

<script>
    export default {
        name: "table-container",
        data() {
            return {
                inputGenes: ''
            }
        },
        computed: {
            tableData() {
                // if (this.genes.length) {
                //     return this.$store.state.tableData.filter(el => {
                //         return this.genes.includes(el['Gene'])
                //     });
                // }
                return this.$store.state.tableData;
            }
        },
        methods: {
            onSubmit() {
                this.$store.dispatch('addGenes', this.inputGenes);
            }
        }
    }
</script>

<style>
    *,
    *:after,
    *:before {
      position: relative;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .table-component {
      display: flex;
      flex-direction: column;
      margin: 1em 0;
    }

    .table-component__filter {
      align-self: flex-end;
    }


    .table-component__filter__field {
      padding: 0 1.25em 0 .75em;
      height: 2.5em;
      border: solid 2px #e0e0e0;
      border-radius: 2em;
      font-size: inherit;
    }

    .table-component__filter__clear {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2em;
      color: #007593;
      font-weight: bold;
      cursor: pointer;
    }

    .table-component__filter__field:focus {
      outline: 0;
      border-color: #007593;
    }

    .table-component__table-wrapper {
      overflow-x: auto;
      margin: 1em 0;
      width: 100%;
      border: solid 1px #ddd;
      border-bottom: none;
    }

    .table-component__table {
      min-width: 100%;
      border-collapse: collapse;
      border-bottom: solid 1px #ddd;
      table-layout: fixed;
    }

    .table-component__table__caption {
      position: absolute;
      top: auto;
      left: -10000px;
      overflow: hidden;
      width: 1px;
      height: 1px;
    }

    .table-component__table th,
    .table-component__table td {
      padding: .45em .45em;
      vertical-align: top;
      text-align: left;
      max-width: 5px;
    }

    .table-component__table th {
      background-color: #e0e0e0;
      color: #999;
      text-transform: uppercase;
      white-space: nowrap;
      font-size: .85em;
      overflow-x: scroll;
    }

    .table-component__table tbody tr:nth-child(even) {
      background-color: #f0f0f0;
    }

    .table-component__table a {
      color: #007593;
    }

    .table-component__message {
      color: #999;
      font-style: italic;
    }

    .table-component__th--sort,
    .table-component__th--sort-asc,
    .table-component__th--sort-desc {
      text-decoration: underline;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .table-component__th--sort-asc:after,
    .table-component__th--sort-desc:after {
      position: absolute;
      left: .25em;
      display: inline-block;
      color: #bbb;
    }

    .table-component__th--sort-asc:after {
      content: '↑';
        color: #000;
        font-size: large;
    }

    .table-component__th--sort-desc:after {
      content: '↓';
        color: #000;
        font-size: large;
    }

    td {
        overflow: hidden;
        /* overflow-x: scroll; */
    }
</style>