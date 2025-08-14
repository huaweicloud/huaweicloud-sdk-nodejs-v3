

export class ListApplicationAssignmentsForPrincipalRequest {
    private 'X-Security-Token'?: string;
    private 'instance_id'?: string;
    private 'principal_id'?: string;
    private 'principal_type'?: ListApplicationAssignmentsForPrincipalRequestPrincipalTypeEnum | string;
    public limit?: number;
    public marker?: string;
    public constructor(instanceId?: string, principalId?: string, principalType?: string) { 
        this['instance_id'] = instanceId;
        this['principal_id'] = principalId;
        this['principal_type'] = principalType;
    }
    public withXSecurityToken(xSecurityToken: string): ListApplicationAssignmentsForPrincipalRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withInstanceId(instanceId: string): ListApplicationAssignmentsForPrincipalRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPrincipalId(principalId: string): ListApplicationAssignmentsForPrincipalRequest {
        this['principal_id'] = principalId;
        return this;
    }
    public set principalId(principalId: string  | undefined) {
        this['principal_id'] = principalId;
    }
    public get principalId(): string | undefined {
        return this['principal_id'];
    }
    public withPrincipalType(principalType: ListApplicationAssignmentsForPrincipalRequestPrincipalTypeEnum | string): ListApplicationAssignmentsForPrincipalRequest {
        this['principal_type'] = principalType;
        return this;
    }
    public set principalType(principalType: ListApplicationAssignmentsForPrincipalRequestPrincipalTypeEnum | string  | undefined) {
        this['principal_type'] = principalType;
    }
    public get principalType(): ListApplicationAssignmentsForPrincipalRequestPrincipalTypeEnum | string | undefined {
        return this['principal_type'];
    }
    public withLimit(limit: number): ListApplicationAssignmentsForPrincipalRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListApplicationAssignmentsForPrincipalRequest {
        this['marker'] = marker;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListApplicationAssignmentsForPrincipalRequestPrincipalTypeEnum {
    USER = 'USER',
    GROUP = 'GROUP'
}
