

export class DeleteApplicationAssignmentReqBody {
    private 'principal_id'?: string;
    private 'principal_type'?: DeleteApplicationAssignmentReqBodyPrincipalTypeEnum | string;
    public constructor(principalId?: string, principalType?: string) { 
        this['principal_id'] = principalId;
        this['principal_type'] = principalType;
    }
    public withPrincipalId(principalId: string): DeleteApplicationAssignmentReqBody {
        this['principal_id'] = principalId;
        return this;
    }
    public set principalId(principalId: string  | undefined) {
        this['principal_id'] = principalId;
    }
    public get principalId(): string | undefined {
        return this['principal_id'];
    }
    public withPrincipalType(principalType: DeleteApplicationAssignmentReqBodyPrincipalTypeEnum | string): DeleteApplicationAssignmentReqBody {
        this['principal_type'] = principalType;
        return this;
    }
    public set principalType(principalType: DeleteApplicationAssignmentReqBodyPrincipalTypeEnum | string  | undefined) {
        this['principal_type'] = principalType;
    }
    public get principalType(): DeleteApplicationAssignmentReqBodyPrincipalTypeEnum | string | undefined {
        return this['principal_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteApplicationAssignmentReqBodyPrincipalTypeEnum {
    USER = 'USER',
    GROUP = 'GROUP'
}
