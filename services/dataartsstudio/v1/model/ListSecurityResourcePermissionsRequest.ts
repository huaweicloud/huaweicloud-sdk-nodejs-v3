

export class ListSecurityResourcePermissionsRequest {
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    private 'policy_name'?: string;
    private 'resource_name'?: string;
    private 'member_name'?: string;
    private 'order_by'?: ListSecurityResourcePermissionsRequestOrderByEnum | string;
    private 'order_by_asc'?: boolean;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListSecurityResourcePermissionsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): ListSecurityResourcePermissionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSecurityResourcePermissionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withPolicyName(policyName: string): ListSecurityResourcePermissionsRequest {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withResourceName(resourceName: string): ListSecurityResourcePermissionsRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withMemberName(memberName: string): ListSecurityResourcePermissionsRequest {
        this['member_name'] = memberName;
        return this;
    }
    public set memberName(memberName: string  | undefined) {
        this['member_name'] = memberName;
    }
    public get memberName(): string | undefined {
        return this['member_name'];
    }
    public withOrderBy(orderBy: ListSecurityResourcePermissionsRequestOrderByEnum | string): ListSecurityResourcePermissionsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListSecurityResourcePermissionsRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListSecurityResourcePermissionsRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withOrderByAsc(orderByAsc: boolean): ListSecurityResourcePermissionsRequest {
        this['order_by_asc'] = orderByAsc;
        return this;
    }
    public set orderByAsc(orderByAsc: boolean  | undefined) {
        this['order_by_asc'] = orderByAsc;
    }
    public get orderByAsc(): boolean | undefined {
        return this['order_by_asc'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSecurityResourcePermissionsRequestOrderByEnum {
    NAME = 'NAME',
    UPDATE_TIME = 'UPDATE_TIME'
}
