<template>
    <div class="footerBody">
        <span id="left">
            <h2>DSC CUHK</h2>
            Powered by 
            <b>
            <span id="gblue">G</span>
            <span id="gred">o</span>
            <span id="gyel">o</span>
            <span id="gblue">g</span>
            <span id="ggre">l</span>
            <span id="gred">e</span> 
            </b> Developers
            <p>Copyright © 2020 | All rights reserved.</p>
            <div class="socialIcon">
                <img style="height: 21px" src="../assets/f_logo.png">
                <img style="height: 20px" src="../assets/ig.png">
            </div>
        </span>

        <span id="right">
            igjijgisajfgijaginaijgasidj
        </span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* temporary h2 */
h2 {
    font-weight: 100;
    margin: 0;
}
.footerBody {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: left;
    background-color: white;
    padding: 75px 15%;
}
.socialIcon {
    display: grid;
    grid-template-columns: 30px 30px;
}
img {
    filter: invert(100%);
}
</style>