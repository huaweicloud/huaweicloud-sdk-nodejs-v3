

export class ListEdgeNodesRequest {
    public name?: string;
    public state?: string;
    public type?: string;
    private 'instance_id'?: string;
    private 'space_id'?: string;
    private 'node_ids'?: Array<string>;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withName(name: string): ListEdgeNodesRequest {
        this['name'] = name;
        return this;
    }
    public withState(state: string): ListEdgeNodesRequest {
        this['state'] = state;
        return this;
    }
    public withType(type: string): ListEdgeNodesRequest {
        this['type'] = type;
        return this;
    }
    public withInstanceId(instanceId: string): ListEdgeNodesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSpaceId(spaceId: string): ListEdgeNodesRequest {
        this['space_id'] = spaceId;
        return this;
    }
    public set spaceId(spaceId: string  | undefined) {
        this['space_id'] = spaceId;
    }
    public get spaceId(): string | undefined {
        return this['space_id'];
    }
    public withNodeIds(nodeIds: Array<string>): ListEdgeNodesRequest {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<string>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<string> | undefined {
        return this['node_ids'];
    }
    public withOffset(offset: number): ListEdgeNodesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEdgeNodesRequest {
        this['limit'] = limit;
        return this;
    }
}