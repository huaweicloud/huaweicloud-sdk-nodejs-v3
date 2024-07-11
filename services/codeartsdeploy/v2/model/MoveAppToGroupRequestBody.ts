

export class MoveAppToGroupRequestBody {
    private 'group_id'?: string;
    private 'application_ids'?: Array<string>;
    public constructor(groupId?: string, applicationIds?: Array<string>) { 
        this['group_id'] = groupId;
        this['application_ids'] = applicationIds;
    }
    public withGroupId(groupId: string): MoveAppToGroupRequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withApplicationIds(applicationIds: Array<string>): MoveAppToGroupRequestBody {
        this['application_ids'] = applicationIds;
        return this;
    }
    public set applicationIds(applicationIds: Array<string>  | undefined) {
        this['application_ids'] = applicationIds;
    }
    public get applicationIds(): Array<string> | undefined {
        return this['application_ids'];
    }
}