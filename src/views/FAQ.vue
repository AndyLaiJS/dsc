<template>
    <div class="faqBody">
        <h1>Frequently Asked Questions</h1>

        <div class="bodyContent">
            <span>
                <h3>Do I need to be a CS student to join?</h3>
                <p>No, <b id="ggre">anyone</b> and <b id="ggre">everyone is welcomed</b> to join the event, regardless of your major and background. After all, we are all here
                    to learn something new!
                </p>
            </span>

            <span>
                <h3>What do I have to bring to the event?</h3>
                <p>We recommend you bring a notebook, pen, and a laptop when attending these events, but the most important of all is
                    to carry a strong and healthy dose of <b id="gred">curiosity</b> and <b id="gred">enthusiasm</b>!
                </p>
            </span>

            <span>
                <h3>Who should I reach out to if I have any questions?</h3>
                <p>If you have any questions or comments, please don't hesitate to contact us by <a target="_blank" href="mailto:dsc.cuhk@gmail.com">email</a>. 
                    We would be more than happy to stay engaged via email even after the event
                </p>
            </span>

            <span>
                <h3>Do I need to pay a membership fee to join?</h3>
                <p>Nope! Every thing organized by DSC CUHK - from events to workshops are all free for anyone to attend and join. 
                    Bonus, you can get <b id="gyel">free stickers</b> too at each of our events!
                </p>
            </span>

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
.faqBody {
    background-color: white;
    padding: 2% 15% 3% 15%;
}
.bodyContent {
    justify-content: space-evenly;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    span {
        width: 450px;
        text-align: left;
    }
}
</style>