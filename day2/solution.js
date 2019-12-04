const intcodeValues = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,1,19,5,23,2,10,23,27,2,27,13,31,1,10,31,35,1,35,9,39,2,39,13,43,1,43,5,47,1,47,6,51,2,6,51,55,1,5,55,59,2,9,59,63,2,6,63,67,1,13,67,71,1,9,71,75,2,13,75,79,1,79,10,83,2,83,9,87,1,5,87,91,2,91,6,95,2,13,95,99,1,99,5,103,1,103,2,107,1,107,10,0,99,2,0,14,0]
const overrideValues = [12, 2]

//intcodes will be your puzzle input, overrides will be the values that will be replacing intcode position 1 and 2
const restoreGravityAssistProgram = (intcodes = [], overrides = []) => {
    if (overrides.length) {
        intcodes[1] = overrides[0]
        intcodes[2] = overrides[1]
    }

    for (let position = 0; position < intcodes.length; position+=4) {
        let opcode = intcodes[position]
        let firstInput = intcodes[intcodes[position + 1]]
        let secondInput = intcodes[intcodes[position + 2]]

        if (opcode === 1) {
            intcodes[intcodes[position + 3]] = firstInput + secondInput
        } else if (opcode === 2) {
            intcodes[intcodes[position + 3]] = firstInput * secondInput
        } else {
            break
        }
    }
    
    return intcodes[0]
}

console.log(restoreGravityAssistProgram(intcodeValues, overrideValues))