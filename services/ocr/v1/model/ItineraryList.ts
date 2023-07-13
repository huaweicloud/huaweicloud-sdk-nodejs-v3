

export class ItineraryList {
    private 'departure_station'?: string | undefined;
    private 'destination_station'?: string | undefined;
    public carrier?: string;
    public flight?: string;
    private 'cabin_class'?: string | undefined;
    public date?: string;
    public time?: string;
    private 'fare_basis'?: string | undefined;
    private 'effective_date'?: string | undefined;
    private 'expiry_date'?: string | undefined;
    private 'baggage_allowance'?: string | undefined;
    public constructor() { 
    }
    public withDepartureStation(departureStation: string): ItineraryList {
        this['departure_station'] = departureStation;
        return this;
    }
    public set departureStation(departureStation: string | undefined) {
        this['departure_station'] = departureStation;
    }
    public get departureStation() {
        return this['departure_station'];
    }
    public withDestinationStation(destinationStation: string): ItineraryList {
        this['destination_station'] = destinationStation;
        return this;
    }
    public set destinationStation(destinationStation: string | undefined) {
        this['destination_station'] = destinationStation;
    }
    public get destinationStation() {
        return this['destination_station'];
    }
    public withCarrier(carrier: string): ItineraryList {
        this['carrier'] = carrier;
        return this;
    }
    public withFlight(flight: string): ItineraryList {
        this['flight'] = flight;
        return this;
    }
    public withCabinClass(cabinClass: string): ItineraryList {
        this['cabin_class'] = cabinClass;
        return this;
    }
    public set cabinClass(cabinClass: string | undefined) {
        this['cabin_class'] = cabinClass;
    }
    public get cabinClass() {
        return this['cabin_class'];
    }
    public withDate(date: string): ItineraryList {
        this['date'] = date;
        return this;
    }
    public withTime(time: string): ItineraryList {
        this['time'] = time;
        return this;
    }
    public withFareBasis(fareBasis: string): ItineraryList {
        this['fare_basis'] = fareBasis;
        return this;
    }
    public set fareBasis(fareBasis: string | undefined) {
        this['fare_basis'] = fareBasis;
    }
    public get fareBasis() {
        return this['fare_basis'];
    }
    public withEffectiveDate(effectiveDate: string): ItineraryList {
        this['effective_date'] = effectiveDate;
        return this;
    }
    public set effectiveDate(effectiveDate: string | undefined) {
        this['effective_date'] = effectiveDate;
    }
    public get effectiveDate() {
        return this['effective_date'];
    }
    public withExpiryDate(expiryDate: string): ItineraryList {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: string | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate() {
        return this['expiry_date'];
    }
    public withBaggageAllowance(baggageAllowance: string): ItineraryList {
        this['baggage_allowance'] = baggageAllowance;
        return this;
    }
    public set baggageAllowance(baggageAllowance: string | undefined) {
        this['baggage_allowance'] = baggageAllowance;
    }
    public get baggageAllowance() {
        return this['baggage_allowance'];
    }
}