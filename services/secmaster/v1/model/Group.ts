

export class Group {
    private 'group_id'?: string;
    public name?: string;
    public constructor() { 
    }
    public withGroupId(groupId: string): Group {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withName(name: string): Group {
        this['name'] = name;
        return this;
    }
}