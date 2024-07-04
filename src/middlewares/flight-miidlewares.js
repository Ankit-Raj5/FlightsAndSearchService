const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportid ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ){
        // if any one of the params are missing we come inside the if
        return res.status(400).json({
            data: {},
            success: false,
            message: "Invalid request for create flight",
            err: 'Missing mandatory properties to create a flight'
        });
    }

    next();

}

module.exports = {
    validateCreateFlight
}