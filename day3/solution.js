let paths = [
    'R8,U5,L5,D3'.split(','),
    'U7,R6,D4,L4'.split(',')
]

let visitedCoordinates = []

paths.forEach(path => {
    let x = 0
    let y = 0
    let pathCoordinates = []

    path.forEach(direction => { 
        
        let moves = parseInt(direction.slice(1), 10)
        
        for (i = 0; i < moves; i++) { 
            switch (direction.substr(0, 1)) { 
                case 'R':
                    x++
                    break
                case 'L':
                    x--
                    break
                case 'U':
                    y++
                    break
                case 'D':
                    y--
                    break
            }
            pathCoordinates.push({ x: x, y: y })
        }

    })
    visitedCoordinates.push(pathCoordinates)
})

//get intersections   
// let intersections = visitedCoordinates.reduce((min, current) => min.filter(e => current.includes({x: e.x, y: e.y})))

//get minimum x coordinate
// minXCoordinate = pathCoordinates.reduce((min, current) => current.x < min ? current.x : min, pathCoordinates[0].x)
 
// console.log(intersections)