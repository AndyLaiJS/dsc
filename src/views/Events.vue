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
                    <h3>Event Name etc..</h3>
                    <p><b>Venue</b>: Mong Man Wai LT1</p>
                    <p><b>Date</b>: 10th February 2020</p>
                    <p><b>Time</b>: 3:30pm - 5:30pm</p>
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
    margin: 25%;
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