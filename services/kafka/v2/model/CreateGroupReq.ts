

export class CreateGroupReq {
    private 'group_name'?: string;
    private 'group_desc'?: string;
    public constructor(groupName?: string) { 
        this['group_name'] = groupName;
    }
    public withGroupName(groupName: string): CreateGroupReq {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupDesc(groupDesc: string): CreateGroupReq {
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