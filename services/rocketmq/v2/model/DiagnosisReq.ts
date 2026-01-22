

export class DiagnosisReq {
    private 'group_name'?: string;
    private 'node_id_list'?: Array<string>;
    public constructor(groupName?: string) { 
        this['group_name'] = groupName;
    }
    public withGroupName(groupName: string): DiagnosisReq {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withNodeIdList(nodeIdList: Array<string>): DiagnosisReq {
        this['node_id_list'] = nodeIdList;
        return this;
    }
    public set nodeIdList(nodeIdList: Array<string>  | undefined) {
        this['node_id_list'] = nodeIdList;
    }
    public get nodeIdList(): Array<string> | undefined {
        return this['node_id_list'];
    }
}