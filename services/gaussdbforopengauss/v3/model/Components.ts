

export class Components {
    public id?: string;
    public role?: string;
    public status?: string;
    private 'distributed_id'?: string;
    public type?: string;
    public detail?: string;
    public constructor() { 
    }
    public withId(id: string): Components {
        this['id'] = id;
        return this;
    }
    public withRole(role: string): Components {
        this['role'] = role;
        return this;
    }
    public withStatus(status: string): Components {
        this['status'] = status;
        return this;
    }
    public withDistributedId(distributedId: string): Components {
        this['distributed_id'] = distributedId;
        return this;
    }
    public set distributedId(distributedId: string  | undefined) {
        this['distributed_id'] = distributedId;
    }
    public get distributedId(): string | undefined {
        return this['distributed_id'];
    }
    public withType(type: string): Components {
        this['type'] = type;
        return this;
    }
    public withDetail(detail: string): Components {
        this['detail'] = detail;
        return this;
    }
}