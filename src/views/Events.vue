<template>
    <div class="Events">
        <h1>Events & Workshops</h1>
        Come learn, build and connect with us in person.

        <br><br>

        <div class="cardContainer">
            <div class="Cards">
                <div class="imgBox">
                    <img src="../assets/flutter102.jpeg">
                </div>
                <div class="Details">
                    <h3>Flutter 102</h3>
                    <p><b id="gblue">Venue</b>: SHB 833</p>
                    <p><b id="gred">Date</b>: 13th January 2020</p>
                    <p><b id="ggre">Time</b>: 7:00pm - 9:00pm</p>
                    <p style="font-size: 20px;"></p>
                    <button>RSVP</button>
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
    height: 428px;
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
    overflow: hidden;
    height: 200px;
}
.imgBox img {
    margin: 270px 0 0 0;
    width: 100%;
    top: 0;
    bottom: 0;
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