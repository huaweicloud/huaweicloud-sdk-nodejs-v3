

export class ShrinkParam {
    private 'node_group_name'?: string;
    public count?: number;
    private 'resource_ids'?: Array<string>;
    public constructor(nodeGroupName?: string) { 
        this['node_group_name'] = nodeGroupName;
    }
    public withNodeGroupName(nodeGroupName: string): ShrinkParam {
        this['node_group_name'] = nodeGroupName;
        return this;
    }
    public set nodeGroupName(nodeGroupName: string  | undefined) {
        this['node_group_name'] = nodeGroupName;
    }
    public get nodeGroupName(): string | undefined {
        return this['node_group_name'];
    }
    public withCount(count: number): ShrinkParam {
        this['count'] = count;
        return this;
    }
    public withResourceIds(resourceIds: Array<string>): ShrinkParam {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: Array<string>  | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds(): Array<string> | undefined {
        return this['resource_ids'];
    }
}