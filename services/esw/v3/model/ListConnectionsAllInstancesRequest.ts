

export class ListConnectionsAllInstancesRequest {
    public id?: string;
    public name?: string;
    private 'instance_id'?: string;
    private 'vpc_id'?: string;
    private 'virsubnet_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withId(id: string): ListConnectionsAllInstancesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListConnectionsAllInstancesRequest {
        this['name'] = name;
        return this;
    }
    public withInstanceId(instanceId: string): ListConnectionsAllInstancesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVpcId(vpcId: string): ListConnectionsAllInstancesRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withVirsubnetId(virsubnetId: string): ListConnectionsAllInstancesRequest {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withLimit(limit: number): ListConnectionsAllInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListConnectionsAllInstancesRequest {
        this['marker'] = marker;
        return this;
    }
}