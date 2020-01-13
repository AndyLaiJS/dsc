<template>
    <div class="Team">
        <h1>Meet the DSC Team</h1>
        Connect with the passionate students and faculty driving the success of the program 

        <br><br>

        <div class="cardContainer">

            <div class="Cards" style="width: 450px; margin-right: 15%; margin-left: 15%;">

                <div class="overlay">
                    <!-- the card header overlay thing -->
                </div>
                <div class="pic">
                    <img src="../assets/DSC/0.jpg">
                </div>
                <div class="info">
                    <h3>Nikunj Taneja</h3>
                    <span style="color: #212121;"> DSC Lead </span>
                    <p>Social media icons</p>
                </div>

            </div>

            <div class="Cards" v-for="(value, index) in names" v-bind:key = "value.index">

                <div class="overlay">
                    <!-- the card header overlay thing -->
                </div>
                <div class="info">
                    <h3>{{value}}</h3>
                    <span style="color: #212121;"> Google Leader </span>
                    <p>Social media icons</p>
                </div>

            </div>

        </div>
        
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            names: ["Person A", "Person B", "Person C", "Person D", "Person E"],
        };
    },
}
</script>

<style scoped lang="scss">
h3 {
    margin: 3px;
}
.Team {
    padding: 2% 0 3% 0;
    background-color: #fafafa;
}
.cardContainer {
    margin: 0 15%;
}
/* This to make the blue overlay complete, by having no padding */
.Cards {
    width: 350px;
    height: 250px;
    padding: 0;
}
.overlay {
    background-color: #4285F4;
    width: 100%;
    height: 40%;
    top: 0;
    bottom: 0;
    position: absolute;
}
.pic {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 100px;
    margin: auto;
    margin-top: 50px;
}
.pic img {
    width: 150px;
    height: 150px;
    position: relative;
    margin: auto;
    background-size: cover;
    display: block;
    border-radius: 100px;
}
.info {
    position: absolute;
    width: 100%;
    bottom: 0;
    text-align: center;
}
</style>