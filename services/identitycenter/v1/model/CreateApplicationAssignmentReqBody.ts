

export class CreateApplicationAssignmentReqBody {
    private 'principal_id'?: string;
    private 'principal_type'?: CreateApplicationAssignmentReqBodyPrincipalTypeEnum | string;
    public constructor(principalId?: string, principalType?: string) { 
        this['principal_id'] = principalId;
        this['principal_type'] = principalType;
    }
    public withPrincipalId(principalId: string): CreateApplicationAssignmentReqBody {
        this['principal_id'] = principalId;
        return this;
    }
    public set principalId(principalId: string  | undefined) {
        this['principal_id'] = principalId;
    }
    public get principalId(): string | undefined {
        return this['principal_id'];
    }
    public withPrincipalType(principalType: CreateApplicationAssignmentReqBodyPrincipalTypeEnum | string): CreateApplicationAssignmentReqBody {
        this['principal_type'] = principalType;
        return this;
    }
    public set principalType(principalType: CreateApplicationAssignmentReqBodyPrincipalTypeEnum | string  | undefined) {
        this['principal_type'] = principalType;
    }
    public get principalType(): CreateApplicationAssignmentReqBodyPrincipalTypeEnum | string | undefined {
        return this['principal_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateApplicationAssignmentReqBodyPrincipalTypeEnum {
    USER = 'USER',
    GROUP = 'GROUP'
}
