

export class ListCustomAuthorizersV2Request {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public id?: string;
    public name?: string;
    public type?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListCustomAuthorizersV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListCustomAuthorizersV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCustomAuthorizersV2Request {
        this['limit'] = limit;
        return this;
    }
    public withId(id: string): ListCustomAuthorizersV2Request {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListCustomAuthorizersV2Request {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ListCustomAuthorizersV2Request {
        this['type'] = type;
        return this;
    }
}