function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - 42);

}
function distanceFromHqInFeet(feet){
    return Math.abs((feet - 42) * 264);
}
function distanceTravelledInFeet(num1,num2){
    distanceFromHqInBlocks(num1,num2);{
        return Math.abs((num1 - num2)*264);

    }
}
function calculatesFarePrice(start, destination){
    distanceFromHqInBlocks(start, destination);{
         let distance = Math.abs((start - destination)*264);
        if (distance <= 400){
            return (distance - distance);

        
        
        }
        else if (distance >= 400, distance < 2000){
            return ((distance - 400) * 0.02 );
        }
        else if (distance > 2000, distance < 2500){
            return 25;

        }
        else if (distance > 2500){
            return 'cannot travel that far';
        }


    }

}