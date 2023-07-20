

export class NodeResponse {
    public id?: string;
    public name?: string;
    public role?: string;
    public status?: string;
    private 'availability_zone'?: string;
    public constructor(id?: string, name?: string, role?: string, status?: string, availabilityZone?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['role'] = role;
        this['status'] = status;
        this['availability_zone'] = availabilityZone;
    }
    public withId(id: string): NodeResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NodeResponse {
        this['name'] = name;
        return this;
    }
    public withRole(role: string): NodeResponse {
        this['role'] = role;
        return this;
    }
    public withStatus(status: string): NodeResponse {
        this['status'] = status;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): NodeResponse {
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