const gameLogic = () => {
    const enemy = document.querySelector('.Enemy')
    const shoot = document.querySelector('.Shoot')
    const gameArea = document.querySelector('.GameArea')
    const limitGameArea = gameArea.getBoundingClientRect()
    const limitShoot = shoot.getBoundingClientRect()
    const limitEnemy = enemy.getBoundingClientRect()

    console.log(limitGameArea)
    console.log(limitShoot)
    console.log(limitEnemy)
}

export default gameLogic