

export class SwitchLoggerReplicaRequestBody {
    private 'availability_zone'?: string;
    public constructor(availabilityZone?: string) { 
        this['availability_zone'] = availabilityZone;
    }
    public withAvailabilityZone(availabilityZone: string): SwitchLoggerReplicaRequestBody {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
}