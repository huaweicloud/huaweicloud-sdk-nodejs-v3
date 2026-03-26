

export class CapacityReservationSpecification {
    public id?: string;
    public preference?: CapacityReservationSpecificationPreferenceEnum | string;
    public constructor() { 
    }
    public withId(id: string): CapacityReservationSpecification {
        this['id'] = id;
        return this;
    }
    public withPreference(preference: CapacityReservationSpecificationPreferenceEnum | string): CapacityReservationSpecification {
        this['preference'] = preference;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CapacityReservationSpecificationPreferenceEnum {
    NONE = 'none',
    TARGETED = 'targeted'
}
