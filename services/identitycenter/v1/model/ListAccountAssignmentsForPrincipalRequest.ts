

export class ListAccountAssignmentsForPrincipalRequest {
    private 'X-Security-Token'?: string;
    private 'instance_id'?: string;
    private 'principal_id'?: string;
    private 'principal_type'?: ListAccountAssignmentsForPrincipalRequestPrincipalTypeEnum | string;
    public limit?: number;
    public marker?: string;
    private 'account_id'?: string;
    public constructor(instanceId?: string, principalId?: string, principalType?: string) { 
        this['instance_id'] = instanceId;
        this['principal_id'] = principalId;
        this['principal_type'] = principalType;
    }
    public withXSecurityToken(xSecurityToken: string): ListAccountAssignmentsForPrincipalRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withInstanceId(instanceId: string): ListAccountAssignmentsForPrincipalRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPrincipalId(principalId: string): ListAccountAssignmentsForPrincipalRequest {
        this['principal_id'] = principalId;
        return this;
    }
    public set principalId(principalId: string  | undefined) {
        this['principal_id'] = principalId;
    }
    public get principalId(): string | undefined {
        return this['principal_id'];
    }
    public withPrincipalType(principalType: ListAccountAssignmentsForPrincipalRequestPrincipalTypeEnum | string): ListAccountAssignmentsForPrincipalRequest {
        this['principal_type'] = principalType;
        return this;
    }
    public set principalType(principalType: ListAccountAssignmentsForPrincipalRequestPrincipalTypeEnum | string  | undefined) {
        this['principal_type'] = principalType;
    }
    public get principalType(): ListAccountAssignmentsForPrincipalRequestPrincipalTypeEnum | string | undefined {
        return this['principal_type'];
    }
    public withLimit(limit: number): ListAccountAssignmentsForPrincipalRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAccountAssignmentsForPrincipalRequest {
        this['marker'] = marker;
        return this;
    }
    public withAccountId(accountId: string): ListAccountAssignmentsForPrincipalRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAccountAssignmentsForPrincipalRequestPrincipalTypeEnum {
    GROUP = 'GROUP',
    USER = 'USER'
}
