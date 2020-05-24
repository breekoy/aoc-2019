const wire1 = 'R75,D30,R83,U83,L12,D49,R71,U7,L72'.split(',')
const wire2 = 'U62,R66,U55,R34,D71,R55,D58,R83'.split(',')

const getVisitedCoordinates = (wire = []) => { 
    let visitedCoordinates = []
    let x = 0
    let y = 0

    wire.forEach(path => {
        let moves = parseInt(path.slice(1), 10)

        for (i = 0; i < moves; i++) { 
            switch (path.substr(0, 1)) {
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
                default:
                    break
            }
            visitedCoordinates.push({ x: x, y: y })
        }
    })

    return visitedCoordinates
}

const getIntersections = (paths = []) => paths.filter((val, i, self)=>self.findIndex(k=>k.x==val.x && k.y == val.y)!=i)

const getManhattanDistance = (intersections = []) => { 
    let minimumDistance = []
    minimumDistance.push(intersections.find(item => item.x === intersections.reduce((min, p) => p.x < min ? p.x : min, intersections[0].x)))

    if (minimumDistance.length > 1) { 
        minimumDistance[0] = minimumDistance.find(item => item.y === minimumDistance.reduce((min, p) => p.y < min ? p.y : min, minimumDistance[0].y))
    }
    
    return minimumDistance
}

console.log(getManhattanDistance(getIntersections([...getVisitedCoordinates(wire1), ...getVisitedCoordinates(wire2)])))