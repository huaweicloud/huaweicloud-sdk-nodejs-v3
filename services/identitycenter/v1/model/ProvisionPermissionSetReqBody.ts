

export class ProvisionPermissionSetReqBody {
    private 'target_id'?: string;
    private 'target_type'?: ProvisionPermissionSetReqBodyTargetTypeEnum | string;
    public constructor(targetType?: string) { 
        this['target_type'] = targetType;
    }
    public withTargetId(targetId: string): ProvisionPermissionSetReqBody {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withTargetType(targetType: ProvisionPermissionSetReqBodyTargetTypeEnum | string): ProvisionPermissionSetReqBody {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: ProvisionPermissionSetReqBodyTargetTypeEnum | string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): ProvisionPermissionSetReqBodyTargetTypeEnum | string | undefined {
        return this['target_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ProvisionPermissionSetReqBodyTargetTypeEnum {
    ACCOUNT = 'ACCOUNT',
    ALL_PROVISIONED_ACCOUNTS = 'ALL_PROVISIONED_ACCOUNTS'
}
