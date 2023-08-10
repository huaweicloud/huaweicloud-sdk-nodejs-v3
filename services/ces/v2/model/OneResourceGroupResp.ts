

export class OneResourceGroupResp {
    private 'group_name'?: string;
    private 'group_id'?: string;
    private 'create_time'?: Date;
    private 'enterprise_project_id'?: string;
    public type?: OneResourceGroupRespTypeEnum | string;
    public constructor(groupName?: string, groupId?: string, createTime?: Date, enterpriseProjectId?: string, type?: string) { 
        this['group_name'] = groupName;
        this['group_id'] = groupId;
        this['create_time'] = createTime;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['type'] = type;
    }
    public withGroupName(groupName: string): OneResourceGroupResp {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupId(groupId: string): OneResourceGroupResp {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withCreateTime(createTime: Date): OneResourceGroupResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): OneResourceGroupResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: OneResourceGroupRespTypeEnum | string): OneResourceGroupResp {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OneResourceGroupRespTypeEnum {
    EPS = 'EPS',
    TAG = 'TAG',
    MANUAL = 'Manual'
}
