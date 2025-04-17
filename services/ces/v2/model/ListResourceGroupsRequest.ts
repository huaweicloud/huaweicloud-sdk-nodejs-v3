

export class ListResourceGroupsRequest {
    private 'enterprise_project_id'?: string;
    private 'group_name'?: string;
    private 'group_id'?: string;
    public offset?: number;
    public limit?: number;
    public type?: ListResourceGroupsRequestTypeEnum | string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListResourceGroupsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withGroupName(groupName: string): ListResourceGroupsRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupId(groupId: string): ListResourceGroupsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withOffset(offset: number): ListResourceGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListResourceGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: ListResourceGroupsRequestTypeEnum | string): ListResourceGroupsRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListResourceGroupsRequestTypeEnum {
    EPS = 'EPS',
    TAG = 'TAG',
    MANUAL = 'Manual',
    COMB = 'COMB',
    NAME = 'NAME'
}
