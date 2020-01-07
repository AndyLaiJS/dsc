<template>
    <div class="Team">
        <h1>Meet the DSC Team</h1>
        Connect with the passionate students and faculty driving the success of the program 

        <br><br>

        <div class="cardContainer">

            <div class="Cards">

                <div class="overlay">
                    <!-- the card header overlay thing -->
                </div>

                <div class="info">
                    <h3>Name</h3>
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
    
}
</script>

<style scoped>
h3 {
    margin: 3px;
}
.Team {
    padding: 2% 0 3% 0;
    background-color: #fafafa;
}
/* This to make the blue overlay complete, by having no padding */
.Cards {
    width: 350px;
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
.info {
    padding: 10px;
    margin-top: 40%;
    text-align: center;
}
</style>