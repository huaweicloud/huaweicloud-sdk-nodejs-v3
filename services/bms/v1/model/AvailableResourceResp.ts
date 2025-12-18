import { FlavorResource } from './FlavorResource';


export class AvailableResourceResp {
    private 'availability_zone'?: string;
    public flavors?: Array<FlavorResource>;
    public constructor() { 
    }
    public withAvailabilityZone(availabilityZone: string): AvailableResourceResp {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withFlavors(flavors: Array<FlavorResource>): AvailableResourceResp {
        this['flavors'] = flavors;
        return this;
    }
}