

export class AudioSelectorHlsSelection {
    public name?: string;
    private 'group_id'?: string;
    public constructor(name?: string, groupId?: string) { 
        this['name'] = name;
        this['group_id'] = groupId;
    }
    public withName(name: string): AudioSelectorHlsSelection {
        this['name'] = name;
        return this;
    }
    public withGroupId(groupId: string): AudioSelectorHlsSelection {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}