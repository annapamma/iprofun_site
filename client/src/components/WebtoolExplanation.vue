<template>
  <div class="webtool-explanation">
    <div class="txt">
        The iProFun method takes as input genome-wide summary statistics in assessing associations of CNVs and DNA methylations on each type of molecular traits, and allows genes and molecular QTs to be arbitrarily correlated in the joint analysis. The iProFun method estimates the conditional density of each type of trait separately, allowing different scales and distributions among different data types. And, it also allows for sample correlations due to complete or partial overlapping of samples. In comparison with the separate analyses of CNA and then methylation on each molecular trait, iProFun leverages data from multiple sources and follows information across data types.    </div>
  </div>
</template>

<script>
export default {
    name: 'WebtoolExplanation',
}
</script>

<style scoped>
    .webtool-explanation {
        background-color: #416788;
        padding: 20px 60px;
        margin: 10px auto;
        font-weight: bold;
    }

    .txt {
        color: white;
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
</style>
