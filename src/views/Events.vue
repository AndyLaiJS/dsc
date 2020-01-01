<template>
    <div class="Events">
        <h1>Events & Workshops</h1>
        Come learn, build and connect with us in person.

        <br><br>

        <div class="cardContainer">
            <div class="Cards">
                <div class="imgBox">
                    img
                </div>
                <div class="Details">
                    <h3>Test</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
h1 {
    margin-bottom: 15px;
}
.Events {
    padding: 2% 0 3% 0;
}
.Cards {
    padding: 0;
    height: 400px;
}
.imgBox {
    font-size: 40px;
    font-weight: bolder;
    color: #DCDFE6;
    position: relative;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
}
.imgBox img {
    width: 100%;
    margin: auto; /*To vertically align*/
    position: relative;
}
.Details {
    overflow: hidden;
    padding: 0 20px 0 20px;
    height: 100%;
    width: 100%;
    position: relative;
}
</style>