//first maths function------------------------------------------------------
function maths(x){
    if(x>3){
        console.log("ans of first function",3*x-2)
    }
    else{
        console.log("please enter greater than 3")
    }
}


maths(4)

//second maths function----------------------------------------------------


function mathstwo(y){
    if(y >= -2 && y <= 2){
        console.log("Answer of second maths function",y*y-2)

    }
    else{
        console.log("please enter valid number for second maths function " )
    }
}

mathstwo(-3)

//third maths function---------------------------------------------------------

function mathsthree(z){
    if(z < -3 ){
        console.log("ans of third maths function",2*z + 1)

    }
    else{
        console.log("please enter valid for third maths function " )
    }
}

mathsthree(4)
mathsthree(2.5)
mathsthree(-4)
mathsthree(0)
mathsthree(-7)