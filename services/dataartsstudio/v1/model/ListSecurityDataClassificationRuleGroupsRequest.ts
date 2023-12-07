

export class ListSecurityDataClassificationRuleGroupsRequest {
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    public name?: string;
    public creator?: string;
    private 'order_by'?: ListSecurityDataClassificationRuleGroupsRequestOrderByEnum | string;
    public desc?: boolean;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListSecurityDataClassificationRuleGroupsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): ListSecurityDataClassificationRuleGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSecurityDataClassificationRuleGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withName(name: string): ListSecurityDataClassificationRuleGroupsRequest {
        this['name'] = name;
        return this;
    }
    public withCreator(creator: string): ListSecurityDataClassificationRuleGroupsRequest {
        this['creator'] = creator;
        return this;
    }
    public withOrderBy(orderBy: ListSecurityDataClassificationRuleGroupsRequestOrderByEnum | string): ListSecurityDataClassificationRuleGroupsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListSecurityDataClassificationRuleGroupsRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListSecurityDataClassificationRuleGroupsRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withDesc(desc: boolean): ListSecurityDataClassificationRuleGroupsRequest {
        this['desc'] = desc;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSecurityDataClassificationRuleGroupsRequestOrderByEnum {
    CREATEDAT = 'createdAt',
    CREATEDBY = 'createdBy',
    UPDATEDAT = 'updatedAt',
    UPDATEDBY = 'updatedBy',
    NAME = 'name',
    DESCRIPTION = 'description'
}
