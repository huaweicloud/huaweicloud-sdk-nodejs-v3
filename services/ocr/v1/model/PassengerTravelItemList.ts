

export class PassengerTravelItemList {
    private 'traveler_name'?: string;
    private 'id_number'?: string;
    private 'travel_date'?: string;
    private 'departure_location'?: string;
    private 'arrival_location'?: string;
    private 'class'?: string;
    private 'transportation_type'?: string;
    public constructor() { 
    }
    public withTravelerName(travelerName: string): PassengerTravelItemList {
        this['traveler_name'] = travelerName;
        return this;
    }
    public set travelerName(travelerName: string  | undefined) {
        this['traveler_name'] = travelerName;
    }
    public get travelerName(): string | undefined {
        return this['traveler_name'];
    }
    public withIdNumber(idNumber: string): PassengerTravelItemList {
        this['id_number'] = idNumber;
        return this;
    }
    public set idNumber(idNumber: string  | undefined) {
        this['id_number'] = idNumber;
    }
    public get idNumber(): string | undefined {
        return this['id_number'];
    }
    public withTravelDate(travelDate: string): PassengerTravelItemList {
        this['travel_date'] = travelDate;
        return this;
    }
    public set travelDate(travelDate: string  | undefined) {
        this['travel_date'] = travelDate;
    }
    public get travelDate(): string | undefined {
        return this['travel_date'];
    }
    public withDepartureLocation(departureLocation: string): PassengerTravelItemList {
        this['departure_location'] = departureLocation;
        return this;
    }
    public set departureLocation(departureLocation: string  | undefined) {
        this['departure_location'] = departureLocation;
    }
    public get departureLocation(): string | undefined {
        return this['departure_location'];
    }
    public withArrivalLocation(arrivalLocation: string): PassengerTravelItemList {
        this['arrival_location'] = arrivalLocation;
        return this;
    }
    public set arrivalLocation(arrivalLocation: string  | undefined) {
        this['arrival_location'] = arrivalLocation;
    }
    public get arrivalLocation(): string | undefined {
        return this['arrival_location'];
    }
    public withClass(_class: string): PassengerTravelItemList {
        this['class'] = _class;
        return this;
    }
    public set _class(_class: string  | undefined) {
        this['class'] = _class;
    }
    public get _class(): string | undefined {
        return this['class'];
    }
    public withTransportationType(transportationType: string): PassengerTravelItemList {
        this['transportation_type'] = transportationType;
        return this;
    }
    public set transportationType(transportationType: string  | undefined) {
        this['transportation_type'] = transportationType;
    }
    public get transportationType(): string | undefined {
        return this['transportation_type'];
    }
}