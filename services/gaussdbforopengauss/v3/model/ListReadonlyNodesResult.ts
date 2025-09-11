

export class ListReadonlyNodesResult {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'availability_zone'?: string;
    public constructor() { 
    }
    public withId(id: string): ListReadonlyNodesResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListReadonlyNodesResult {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ListReadonlyNodesResult {
        this['status'] = status;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): ListReadonlyNodesResult {
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