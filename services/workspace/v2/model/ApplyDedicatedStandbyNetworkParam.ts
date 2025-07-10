

export class ApplyDedicatedStandbyNetworkParam {
    public address?: string;
    public port?: number;
    private 'availability_zone'?: Array<string>;
    public constructor() { 
    }
    public withAddress(address: string): ApplyDedicatedStandbyNetworkParam {
        this['address'] = address;
        return this;
    }
    public withPort(port: number): ApplyDedicatedStandbyNetworkParam {
        this['port'] = port;
        return this;
    }
    public withAvailabilityZone(availabilityZone: Array<string>): ApplyDedicatedStandbyNetworkParam {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: Array<string>  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): Array<string> | undefined {
        return this['availability_zone'];
    }
}