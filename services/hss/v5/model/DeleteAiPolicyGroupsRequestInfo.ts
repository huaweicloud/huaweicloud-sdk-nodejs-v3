

export class DeleteAiPolicyGroupsRequestInfo {
    private 'group_id_list'?: Array<string>;
    public constructor(groupIdList?: Array<string>) { 
        this['group_id_list'] = groupIdList;
    }
    public withGroupIdList(groupIdList: Array<string>): DeleteAiPolicyGroupsRequestInfo {
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