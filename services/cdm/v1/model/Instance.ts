import { Nics } from './Nics';


export class Instance {
    private 'availability_zone'?: string;
    public nics?: Array<Nics>;
    public flavorRef?: string;
    public type?: string;
    public constructor(availabilityZone?: string, nics?: Array<Nics>, flavorRef?: string, type?: string) { 
        this['availability_zone'] = availabilityZone;
        this['nics'] = nics;
        this['flavorRef'] = flavorRef;
        this['type'] = type;
    }
    public withAvailabilityZone(availabilityZone: string): Instance {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withNics(nics: Array<Nics>): Instance {
        this['nics'] = nics;
        return this;
    }
    public withFlavorRef(flavorRef: string): Instance {
        this['flavorRef'] = flavorRef;
        return this;
    }
    public withType(type: string): Instance {
        this['type'] = type;
        return this;
    }
}