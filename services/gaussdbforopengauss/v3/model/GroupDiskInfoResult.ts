

export class GroupDiskInfoResult {
    private 'group_id'?: string;
    public name?: string;
    public used?: number;
    public total?: number;
    public constructor(groupId?: string, name?: string, used?: number, total?: number) { 
        this['group_id'] = groupId;
        this['name'] = name;
        this['used'] = used;
        this['total'] = total;
    }
    public withGroupId(groupId: string): GroupDiskInfoResult {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withName(name: string): GroupDiskInfoResult {
        this['name'] = name;
        return this;
    }
    public withUsed(used: number): GroupDiskInfoResult {
        this['used'] = used;
        return this;
    }
    public withTotal(total: number): GroupDiskInfoResult {
        this['total'] = total;
        return this;
    }
}