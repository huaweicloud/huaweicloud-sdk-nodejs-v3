

export class IpGroup {
    private 'group_name'?: string;
    public id?: string;
    public constructor() { 
    }
    public withGroupName(groupName: string): IpGroup {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withId(id: string): IpGroup {
        this['id'] = id;
        return this;
    }
}