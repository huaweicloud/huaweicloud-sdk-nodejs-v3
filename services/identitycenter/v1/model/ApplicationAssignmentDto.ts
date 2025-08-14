

export class ApplicationAssignmentDto {
    private 'application_urn'?: string;
    private 'principal_id'?: string;
    private 'principal_type'?: ApplicationAssignmentDtoPrincipalTypeEnum | string;
    public constructor(applicationUrn?: string, principalId?: string, principalType?: string) { 
        this['application_urn'] = applicationUrn;
        this['principal_id'] = principalId;
        this['principal_type'] = principalType;
    }
    public withApplicationUrn(applicationUrn: string): ApplicationAssignmentDto {
        this['application_urn'] = applicationUrn;
        return this;
    }
    public set applicationUrn(applicationUrn: string  | undefined) {
        this['application_urn'] = applicationUrn;
    }
    public get applicationUrn(): string | undefined {
        return this['application_urn'];
    }
    public withPrincipalId(principalId: string): ApplicationAssignmentDto {
        this['principal_id'] = principalId;
        return this;
    }
    public set principalId(principalId: string  | undefined) {
        this['principal_id'] = principalId;
    }
    public get principalId(): string | undefined {
        return this['principal_id'];
    }
    public withPrincipalType(principalType: ApplicationAssignmentDtoPrincipalTypeEnum | string): ApplicationAssignmentDto {
        this['principal_type'] = principalType;
        return this;
    }
    public set principalType(principalType: ApplicationAssignmentDtoPrincipalTypeEnum | string  | undefined) {
        this['principal_type'] = principalType;
    }
    public get principalType(): ApplicationAssignmentDtoPrincipalTypeEnum | string | undefined {
        return this['principal_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApplicationAssignmentDtoPrincipalTypeEnum {
    USER = 'USER',
    GROUP = 'GROUP'
}
