document.addEventListener("DOMContentLoaded", function () {
    const car = document.getElementById("car");
    const obstacle = document.querySelector(".obstacle");
    let carPosition = 275;
    let obstaclePosition = 0;
    let isGameOver = false;

    function updateGame() {
        if (!isGameOver) {
            document.addEventListener("keydown", function (event) {
                if (event.key === "ArrowLeft" && carPosition > 0) {
                    carPosition -= 10;
                }
                if (event.key === "ArrowRight" && carPosition < 550) {
                    carPosition += 10;
                }
            });

            obstaclePosition += 5;

            if (obstaclePosition > 400) {
                obstaclePosition = 0;
                obstacle.style.left = Math.floor(Math.random() * 550) + "px";
            }

            if (
                carPosition < obstaclePosition + 50 &&
                carPosition + 50 > obstaclePosition &&
                300 < obstaclePosition + 50 &&
                300 + 100 > obstaclePosition
            ) {
                gameOver();
            }

            car.style.left = carPosition + "px";
            obstacle.style.top = obstaclePosition + "px";
        }

        requestAnimationFrame(updateGame);
    }

    function gameOver() {
        isGameOver = true;
        alert("Game Over!");
        location.reload(); // You may choose to restart the game differently
    }

    updateGame();
});
