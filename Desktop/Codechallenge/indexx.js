
function calculateDemeritPoint(speed) {
    let speedLimit = 70;
    let demeritPointPerKm = 5;
    let maxDemeritPoint = 12;


    
    if (speed < speedLImit) {
        console.log('OK');
        return 0;
    }

    const demeritPoints =( speed - speedLimit) / demeritPointPerKm;
    console.log('Points:', demeritPoints);

    if (demeritPoints >= maxDemeritPoint) {
        console.log("License suspended")
    }

  
}