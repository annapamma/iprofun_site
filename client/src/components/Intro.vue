<template>
  <div class="intro">
      iProFun, an integrative analysis tool to screen for Proteogenomic Functional
      traits perturbed by DNA copy number alterations (CNAs) and methylations.
      The goal is to characterize functional consequences of DNA copy number and
      methylation alterations in tumors and to facilitate screening for cancer drivers
      contributing to tumor initiation and progression.
      Specifically, we consider three functional molecular quantitative traits:
      mRNA expression levels, global protein abundances, and phosphoprotein
      abundances.
      <br>
      For more information, see
      <a href="https://www.biorxiv.org/content/10.1101/488833v1.full">
          Song et al, Molecular & Cellular Proteomics 2018
      </a>.
  </div>
</template>

<script>
export default {
    name: 'Intro',
}
</script>

<style scoped>
    .intro {
        background-color: #EEE0CB;
        padding: 20px 60px;
        font-weight: bold;
        margin: 20px auto 10px;
        color: #40434E;
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
  color: #912F40;
}
</style>
