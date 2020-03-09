<template>
  <div class="webtool-explanation">
    <div class="txt">
        iProFun takes as input the summary statistics from association analyses of each pair of DNA alterations and molecular traits, and provides clinically meaningful discoveries for the association with multi-omic outcomes with FDR control. A clinically meaningful significant association is identified if it passes three criteria: (1) biological filtering procedure, (2) posterior probabilities of associating to an outcome > 75%, and (3) empirical FDR <10% from 100 permutations. The biological filtering criterion is posed on the direction of associations with all outcomes: for CNVs only associations with positive direction with all the types of outcomes are considered; DNA methylations from promoter regions require negative associations with all the outcomes; and mutations need the associations to have consistent direction (either positive or negative) with all types of outcomes. iProFun enjoys substantial power gain by borrowing information across data types, and achieves accuracy in inferring associations unique to certain type(s) of molecular trait(s).  </div>
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
        padding: 20px;
        margin: 10px auto;
        font-weight: normal;
        font-size: .85em;
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
