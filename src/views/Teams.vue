<template>
    <div class="Team">
        <h1>Meet the DSC Team</h1>
        Connect with the passionate students and faculty driving the success of the program 

        <br><br>

        <div class="cardContainer">

            <div class="Cards" id="cardBig" style="min-width: 450px; min-height:300px; margin-right: 50%; margin-left: 50%;">

                <div class="overlay">
                    <!-- the card header overlay thing -->
                </div>
                <div class="pic" style="height: 145px; width: 145px;">
                    <img style="height: 145px; width: 145px;" src="../assets/DSC/0.png">
                </div>
                <div class="info">
                    <h3>Nikunj Taneja</h3>
                    <span style="color: #212121;"> DSC Lead </span>
                    <p>Social media icons</p>
                </div>
            </div>

            <div class="Cards" v-for="(value, index) in names" v-bind:key = "index">

                <div class="overlay">
                    <!-- the card header overlay thing -->
                </div>
                <div class="pic">
                    <img :src="'./DSC/' + (index+1) + '.png'">
                </div>
                <div class="info">
                    <h3>{{value}}</h3>
                    <span style="color: #212121;"> Core Team Member </span>
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
            names: ["Abdallah Moustafa", "Dineth Perera", "Elliot Kam", 
            "John Law", "Andrew Fanggara", "Faiyaz Rahman", 
            "Theodore Fabian Rudy", "Lai Jian Shin", "Wisely Natalia", 
            "Natalie Ngoc Pham", "Ian Yi En Pan", "Yousif Mahmoud", 
            "Thiha Kaung Sett"],
            
            // pictures: [
            //     { url: '../assets/DSC/1.png', alt: 'Abdallah Moustafa' },
            //     { url: '../assets/DSC/2.png', alt: 'Dineth Perera' },
            //     { url: '../assets/DSC/3.png', alt: 'Elliot Kam' },
            //     { url: '../assets/DSC/4.png', alt: 'John Law' },
            //     { url: '../assets/DSC/5.png', alt: 'Andrew Fanggara' },
            //     { url: '../assets/DSC/6.png', alt: 'Faiyaz Rahman' },
            //     { url: '../assets/DSC/7.png', alt: 'Theodore Fabian Rudy' },
            //     { url: '../assets/DSC/8.png', alt: 'Lai Jian Shin' },
            //     { url: '../assets/DSC/9.png', alt: 'Wisely Natalia' },
            //     { url: '../assets/DSC/10.png', alt: 'Natalie Ngoc Pham' },
            //     { url: '../assets/DSC/11.png', alt: 'Ian Yi En Pan' },
            //     { url: '../assets/DSC/12.png', alt: 'Yousif Mahmoud' },
            //     { url: '../assets/DSC/13.png', alt: 'Thiha Kaung Sett' },
            // ]
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
    background-color: white;
    justify-content: center;
    justify-items: center;
    padding: 5px;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin: auto;
    margin-top: 35px;
    box-shadow: 0 0 15px rgba(0,0,0,0.15);
}
.pic img {
    width: 100px;
    height: 100px;
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