

export class EdgeNodeDTO {
    private 'edge_node_id'?: string;
    public name?: string;
    public state?: string;
    private 'instance_id'?: string;
    private 'space_id'?: string;
    public type?: string;
    private 'resource_ids'?: Array<string>;
    private 'resource_spec_types'?: Array<string>;
    public ips?: Array<string>;
    private 'create_time'?: string;
    public constructor() { 
    }
    public withEdgeNodeId(edgeNodeId: string): EdgeNodeDTO {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withName(name: string): EdgeNodeDTO {
        this['name'] = name;
        return this;
    }
    public withState(state: string): EdgeNodeDTO {
        this['state'] = state;
        return this;
    }
    public withInstanceId(instanceId: string): EdgeNodeDTO {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSpaceId(spaceId: string): EdgeNodeDTO {
        this['space_id'] = spaceId;
        return this;
    }
    public set spaceId(spaceId: string  | undefined) {
        this['space_id'] = spaceId;
    }
    public get spaceId(): string | undefined {
        return this['space_id'];
    }
    public withType(type: string): EdgeNodeDTO {
        this['type'] = type;
        return this;
    }
    public withResourceIds(resourceIds: Array<string>): EdgeNodeDTO {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: Array<string>  | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds(): Array<string> | undefined {
        return this['resource_ids'];
    }
    public withResourceSpecTypes(resourceSpecTypes: Array<string>): EdgeNodeDTO {
        this['resource_spec_types'] = resourceSpecTypes;
        return this;
    }
    public set resourceSpecTypes(resourceSpecTypes: Array<string>  | undefined) {
        this['resource_spec_types'] = resourceSpecTypes;
    }
    public get resourceSpecTypes(): Array<string> | undefined {
        return this['resource_spec_types'];
    }
    public withIps(ips: Array<string>): EdgeNodeDTO {
        this['ips'] = ips;
        return this;
    }
    public withCreateTime(createTime: string): EdgeNodeDTO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}