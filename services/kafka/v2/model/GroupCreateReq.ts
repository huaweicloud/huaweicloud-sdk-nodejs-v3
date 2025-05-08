

export class GroupCreateReq {
    private 'group_name'?: string;
    private 'group_desc'?: string;
    public constructor() { 
    }
    public withGroupName(groupName: string): GroupCreateReq {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupDesc(groupDesc: string): GroupCreateReq {
        this['group_desc'] = groupDesc;
        return this;
    }
    public set groupDesc(groupDesc: string  | undefined) {
        this['group_desc'] = groupDesc;
    }
    public get groupDesc(): string | undefined {
        return this['group_desc'];
    }
}