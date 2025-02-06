

export class ListAccountAssignmentsRequest {
    private 'X-Security-Token'?: string;
    private 'instance_id'?: string;
    public limit?: number;
    public marker?: string;
    private 'account_id'?: string;
    private 'permission_set_id'?: string;
    public constructor(instanceId?: string, accountId?: string) { 
        this['instance_id'] = instanceId;
        this['account_id'] = accountId;
    }
    public withXSecurityToken(xSecurityToken: string): ListAccountAssignmentsRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withInstanceId(instanceId: string): ListAccountAssignmentsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: number): ListAccountAssignmentsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAccountAssignmentsRequest {
        this['marker'] = marker;
        return this;
    }
    public withAccountId(accountId: string): ListAccountAssignmentsRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withPermissionSetId(permissionSetId: string): ListAccountAssignmentsRequest {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
}