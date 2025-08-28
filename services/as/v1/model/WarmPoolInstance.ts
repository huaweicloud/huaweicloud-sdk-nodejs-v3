

export class WarmPoolInstance {
    public id?: string;
    private 'instance_id'?: string;
    public name?: string;
    public status?: string;
    public constructor() { 
    }
    public withId(id: string): WarmPoolInstance {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): WarmPoolInstance {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withName(name: string): WarmPoolInstance {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): WarmPoolInstance {
        this['status'] = status;
        return this;
    }
}