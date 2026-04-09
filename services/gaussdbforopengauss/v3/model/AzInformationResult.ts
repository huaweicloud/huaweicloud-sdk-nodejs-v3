

export class AzInformationResult {
    private 'availability_zone'?: string;
    public description?: string;
    public constructor() { 
    }
    public withAvailabilityZone(availabilityZone: string): AzInformationResult {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withDescription(description: string): AzInformationResult {
        this['description'] = description;
        return this;
    }
}