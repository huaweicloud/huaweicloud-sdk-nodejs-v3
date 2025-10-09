

export class CreateGroupReqBody {
    private 'group_name'?: string;
    public description?: string;
    public constructor(groupName?: string) { 
        this['group_name'] = groupName;
    }
    public withGroupName(groupName: string): CreateGroupReqBody {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withDescription(description: string): CreateGroupReqBody {
        this['description'] = description;
        return this;
    }
}