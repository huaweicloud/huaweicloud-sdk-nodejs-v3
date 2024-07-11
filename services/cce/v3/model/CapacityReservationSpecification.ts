

export class CapacityReservationSpecification {
    public id?: string;
    public preference?: string;
    public constructor() { 
    }
    public withId(id: string): CapacityReservationSpecification {
        this['id'] = id;
        return this;
    }
    public withPreference(preference: string): CapacityReservationSpecification {
        this['preference'] = preference;
        return this;
    }
}