

export class CnInfoBeforeReduce {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'availability_zone'?: string;
    private 'support_reduce'?: boolean;
    public constructor() { 
    }
    public withId(id: string): CnInfoBeforeReduce {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CnInfoBeforeReduce {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): CnInfoBeforeReduce {
        this['status'] = status;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): CnInfoBeforeReduce {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withSupportReduce(supportReduce: boolean): CnInfoBeforeReduce {
        this['support_reduce'] = supportReduce;
        return this;
    }
    public set supportReduce(supportReduce: boolean  | undefined) {
        this['support_reduce'] = supportReduce;
    }
    public get supportReduce(): boolean | undefined {
        return this['support_reduce'];
    }
}