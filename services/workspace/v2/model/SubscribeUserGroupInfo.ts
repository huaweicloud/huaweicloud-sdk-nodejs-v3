

export class SubscribeUserGroupInfo {
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'ai_func'?: boolean;
    public constructor() { 
    }
    public withGroupId(groupId: string): SubscribeUserGroupInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): SubscribeUserGroupInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withAiFunc(aiFunc: boolean): SubscribeUserGroupInfo {
        this['ai_func'] = aiFunc;
        return this;
    }
    public set aiFunc(aiFunc: boolean  | undefined) {
        this['ai_func'] = aiFunc;
    }
    public get aiFunc(): boolean | undefined {
        return this['ai_func'];
    }
}