<template>
    <div class="table-container">
        <div class="table-details">
            <p>We employ an empirical FDR (eFDR) 0.1 to identify significant associations. Associations are indicated as  1 if the are identified at eFDR&lt;0.1, and are indicated as 0 if they are not.</p>
            <b-button
                type="is-info"
                icon-left="download"
                @click="handleClick"
            >
                Download
            </b-button>
            </div>
            <b-field grouped group-multiline class="column-toggles" v-if="tableData.length < 30">
                <div v-for="(column, index) in columns.slice(1,)"
                    :key="index"
                    class="control column-info">
                    <b-checkbox v-model="column.visible">
                    </b-checkbox>
                    <b-tooltip
                        :label="column.description"
                        position="is-bottom"
                        size="is-large"
                        multilined
                    >
                        <div class="column-label">{{ column.label }}</div>
                    </b-tooltip>
                    <!--<b-icon-->
                        <!--icon="information-outline"-->
                        <!--class="info-circle"-->
                        <!--size="is-small"-->
                        <!--v-on:click.native="showColumnInfo"-->
                        <!--style="cursor: pointer"-->
                    <!--&gt;</b-icon>-->
                            <!--<modal name="column-description" :width="300" :height="300">-->
          <!--This is where the column description goes-->
        <!--</modal>-->
                </div>
            </b-field>

            <b-table
                :data="tableData"
                :hoverable="true"
                :sticky-header="true"
            >
                <template slot-scope="props">
                    <b-table-column v-for="(column, index) in columns"
                        :key="index"
                        :label="column.label"
                        :visible="column.visible"
                        :field="column.field"
                        :sortable="tableData.length < 30"
                    >
                        {{ props.row[column.field] }}
                    </b-table-column>
                </template>
            </b-table>
    </div>
</template>

<script>

    import { utils, writeFile } from 'xlsx';
    import WebtoolExplanation from "./WebtoolExplanation";
    const columnFeatures = {
        sortable: true,
        centered: true,
        visible: true,
    }
    export default {
        components: {WebtoolExplanation},
        name: "table-container",
        data() {
            return {
                thComponent: 'hi',
                columns: [
                    {
                        field: 'Gene',
                        label: 'Gene',
                        sortable: true,
                        visible: true,
                    },
                    {
                        field: 'chromosome',
                        label: 'Chr',
                        sortable: true,
                        visible: true,
                        description: 'Chromosome'
                    },
                    {
                        field: 'start',
                        label: 'Start',
                        sortable: true,
                        visible: true,
                        description: 'Start',
                    },
                    {
                        field: 'CNV (lr) RNA',
                        label: 'CNV RNA',
                        ...columnFeatures,
                        description: 'Indicating CNV of the gene is associated with its mRNA expression at FDR 0.1.',
                    },
                    {
                        field: 'CNV (lr) Protein',
                        label: 'CNV Protein',
                        ...columnFeatures,
                        description: 'Indicating CNV of the gene is associated with its protein abundance at FDR 0.1.',
                    },
                    {
                        field: 'CNV (lr) Phospho',
                        label: 'CNV Phospho',
                        ...columnFeatures,
                        description: 'Indicating CNV of the gene is associated with its phosphoprotein abundance at FDR 0.1.',
                    },
                    {
                        field: 'Methylation RNA',
                        label: 'Methyl RNA',
                        ...columnFeatures,
                        description: 'Indicating DNA methylation in the promotor region of the gene is associated with its gene expression level at FDR 0.1.',
                    },
                    {
                        field: 'Methylation Protein',
                        label: 'Methyl Protein',
                        ...columnFeatures,
                        description: 'Indicating DNA methylation in the promotor region of the gene is associated with its protein abundance level at FDR 0.1.',
                    },
                    {
                        field: 'Methylation Phospho',
                        label: 'Methyl Phospho',
                        ...columnFeatures,
                        description: 'Indicating DNA methylation in the promotor region of the gene is associated with its phosphoprotein abundance level at FDR 0.1.',
                    },
                    {
                        field: 'Mutation RNA',
                        label: 'Mut RNA',
                        ...columnFeatures,
                        description: 'Indicating mutation of the gene is associated with its gene expression level at FDR 0.1',
                    },
                    {
                        field: 'Mutation Protein',
                        label: 'Mut Protein',
                        ...columnFeatures,
                        description: 'Indicating mutation of the gene is associated with its protein abundance at FDR 0.1',
                    },
                    {
                        field: 'Mutation Phospho',
                        label: 'Mut Phospho',
                        ...columnFeatures,
                        description: 'Indicating mutation of the gene is associated with its phosphoprotein abundance at FDR 0.1',
                    },
                ]
            }
        },
        computed: {
            tableData() {
                return this.$store.state.tableData;
            },
            // isSortable(){}
        },
        methods: {
            handleClick() {
                const ws = utils.json_to_sheet(this.tableData);
                const wb = utils.book_new();
                  utils.book_append_sheet(wb, ws);
                  writeFile(wb, 'iprofun.xls');
            },
            showColumnInfo() {
                this.$modal.show('column-description');
            }
        }
    }
</script>

<style>
    .column-toggles {
        margin: 10px;
    }
    .column-info {
        display: flex;
        flex-direction: row;
    }
    /*.info-circle {*/
        /*background-color: pink;*/
        /*cursor: -moz-zoom-in;*/
        /*cursor: -webkit-zoom-in;*/
        /*cursor: zoom-in;*/
    /*}*/
    .column-label {
        border-bottom: 1px dashed #999;
        cursor: help;
    }
</style>