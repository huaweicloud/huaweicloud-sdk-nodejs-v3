

export class ResumePauseAiPolicyGroupsRequestInfo {
    public enabled?: boolean;
    private 'group_id_list'?: Array<string>;
    public constructor(enabled?: boolean, groupIdList?: Array<string>) { 
        this['enabled'] = enabled;
        this['group_id_list'] = groupIdList;
    }
    public withEnabled(enabled: boolean): ResumePauseAiPolicyGroupsRequestInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withGroupIdList(groupIdList: Array<string>): ResumePauseAiPolicyGroupsRequestInfo {
        this['group_id_list'] = groupIdList;
        return this;
    }
    public set groupIdList(groupIdList: Array<string>  | undefined) {
        this['group_id_list'] = groupIdList;
    }
    public get groupIdList(): Array<string> | undefined {
        return this['group_id_list'];
    }
}