`<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="main.css">
    <title>Hello, world!</title>

    <script src="https://code.jquery.com/jquery-3.6.4.min.js"
        integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>

    <style>
        .slideContainer {
            width: 300vw;

            transition: all 1s;
        }

        .slideBox {
            width: 100vw;
            float: left;
        }

        .slideBox img {
            width: 100%;
        }
    </style>

</head>

<body>

    <div style="overflow: hidden;">
        <div class="slideContainer">
            <div class="slideBox">
                <img src="img/car1.png" alt="">
            </div>
            <div class="slideBox">
                <img src="img/car2.png" alt="">
            </div>
            <div class="slideBox">
                <img src="img/car3.png" alt="">
            </div>
        </div>
    </div>

    <button class="slide1">1</button>
    <button class="slide2">2</button>
    <button class="slide3">3</button>
    <button class="next">다음</button>
    <script>
        $('.slide1').on('click', function () {

            $('.slideContainer').css('transform', 'translateX(0vw)');
        });
        document.querySelector('.slide2').addEventListener('click', function () {

            document.querySelector('.slideContainer').style.transform = 'translateX(-100vw)'
        });

        document.querySelector('.slide3').addEventListener('click', function () {

            document.querySelector('.slideContainer').style.transform = 'translateX(-200vw)'
        });


        var nowP = 1;
        $('.next').on('click', function () {


            if (nowP == 1) {
                $('.slideContainer').css('transform', 'translateX(-100vw)');
                nowP += 1;
            } else if (nowP == 2) {
                nowP += 1;
                $('.slideContainer').css('transform', 'translateX(-200vw)');
            }



        })
    </script>

</body>

</html>`
