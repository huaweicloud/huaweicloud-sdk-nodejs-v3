

export class FlameLineTreeInfo {
    public from?: number;
    public to?: number;
    public type?: string;
    private 'instance_id'?: number;
    public api?: string;
    public region?: string;
    public constructor(from?: number, to?: number, type?: string, instanceId?: number, api?: string, region?: string) { 
        this['from'] = from;
        this['to'] = to;
        this['type'] = type;
        this['instance_id'] = instanceId;
        this['api'] = api;
        this['region'] = region;
    }
    public withFrom(from: number): FlameLineTreeInfo {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): FlameLineTreeInfo {
        this['to'] = to;
        return this;
    }
    public withType(type: string): FlameLineTreeInfo {
        this['type'] = type;
        return this;
    }
    public withInstanceId(instanceId: number): FlameLineTreeInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: number  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): number | undefined {
        return this['instance_id'];
    }
    public withApi(api: string): FlameLineTreeInfo {
        this['api'] = api;
        return this;
    }
    public withRegion(region: string): FlameLineTreeInfo {
        this['region'] = region;
        return this;
    }
}