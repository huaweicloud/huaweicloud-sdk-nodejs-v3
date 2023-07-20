

export class ResizeInstanceVolumeOption {
    public size?: string;
    private 'group_id'?: string;
    private 'node_ids'?: Array<string>;
    public constructor(size?: string) { 
        this['size'] = size;
    }
    public withSize(size: string): ResizeInstanceVolumeOption {
        this['size'] = size;
        return this;
    }
    public withGroupId(groupId: string): ResizeInstanceVolumeOption {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withNodeIds(nodeIds: Array<string>): ResizeInstanceVolumeOption {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<string>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<string> | undefined {
        return this['node_ids'];
    }
}