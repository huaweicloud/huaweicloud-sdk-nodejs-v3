

export class GroupedResourceCount {
    private 'group_name'?: string;
    private 'resource_count'?: number;
    public constructor() { 
    }
    public withGroupName(groupName: string): GroupedResourceCount {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withResourceCount(resourceCount: number): GroupedResourceCount {
        this['resource_count'] = resourceCount;
        return this;
    }
    public set resourceCount(resourceCount: number  | undefined) {
        this['resource_count'] = resourceCount;
    }
    public get resourceCount(): number | undefined {
        return this['resource_count'];
    }
}