

export class UpdateVirsubnetCidrReservationOption {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateVirsubnetCidrReservationOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateVirsubnetCidrReservationOption {
        this['description'] = description;
        return this;
    }
}