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
            
        </span>
        
        <span id="right">
            <h1>#dsc.cuhk</h1>
                <div class="socialIcon">
                    <a target="_blank" href="https://www.facebook.com/dsc.cuhk" rel="noreferrer"><img style="height: 28px" src="../assets/f_logo.png"></a>
                    <a target="_blank" href="https://www.instagram.com/dsc.cuhk/" rel="noreferrer"><img style="height: 27px" src="../assets/ig.png"></a>
                </div>
                Email: <a target="_blank" href="mailto:dsc.cuhk@gmail.com">dsc.cuhk@gmail.com</a>
        </span>
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
/* temporary h2 */
h1 {
    margin: 0;
    margin-top: -3px;
}
h2 {
    margin: 0;
    margin-bottom: 5px;
}
#right {
    text-align: right;
}
.footerBody {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: left;
    justify-content: space-between;
    background-color: white;
    padding: 75px 15%;
}
.socialIcon {
    display: grid;
    grid-template-columns: 60px 30px;
    justify-content: end;
    justify-items: center;
}
img {
    filter: invert(100%);
}
</style>