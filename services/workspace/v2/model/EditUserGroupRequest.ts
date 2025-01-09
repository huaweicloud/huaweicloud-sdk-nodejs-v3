

export class EditUserGroupRequest {
    public description?: string;
    private 'group_name'?: string;
    public constructor() { 
    }
    public withDescription(description: string): EditUserGroupRequest {
        this['description'] = description;
        return this;
    }
    public withGroupName(groupName: string): EditUserGroupRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
}