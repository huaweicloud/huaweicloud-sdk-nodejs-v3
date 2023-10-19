

export class AclAccountResp {
    private 'account_id'?: string;
    private 'account_name'?: string;
    private 'account_type'?: AclAccountRespAccountTypeEnum | string;
    private 'instance_id'?: string;
    public status?: AclAccountRespStatusEnum | string;
    private 'account_role'?: AclAccountRespAccountRoleEnum | string;
    public description?: string;
    private 'error_code'?: string;
    public constructor() { 
    }
    public withAccountId(accountId: string): AclAccountResp {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withAccountName(accountName: string): AclAccountResp {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
    public withAccountType(accountType: AclAccountRespAccountTypeEnum | string): AclAccountResp {
        this['account_type'] = accountType;
        return this;
    }
    public set accountType(accountType: AclAccountRespAccountTypeEnum | string  | undefined) {
        this['account_type'] = accountType;
    }
    public get accountType(): AclAccountRespAccountTypeEnum | string | undefined {
        return this['account_type'];
    }
    public withInstanceId(instanceId: string): AclAccountResp {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: AclAccountRespStatusEnum | string): AclAccountResp {
        this['status'] = status;
        return this;
    }
    public withAccountRole(accountRole: AclAccountRespAccountRoleEnum | string): AclAccountResp {
        this['account_role'] = accountRole;
        return this;
    }
    public set accountRole(accountRole: AclAccountRespAccountRoleEnum | string  | undefined) {
        this['account_role'] = accountRole;
    }
    public get accountRole(): AclAccountRespAccountRoleEnum | string | undefined {
        return this['account_role'];
    }
    public withDescription(description: string): AclAccountResp {
        this['description'] = description;
        return this;
    }
    public withErrorCode(errorCode: string): AclAccountResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AclAccountRespAccountTypeEnum {
    NORMAL = 'normal',
    DEFAULT = 'default'
}
/**
    * @export
    * @enum {string}
    */
export enum AclAccountRespStatusEnum {
    CREATING = 'CREATING',
    AVAILABLE = 'AVAILABLE',
    CREATEFAILED = 'CREATEFAILED',
    DELETED = 'DELETED',
    DELETEFAILED = 'DELETEFAILED',
    DELETING = 'DELETING',
    UPDATING = 'UPDATING',
    ERROR = 'ERROR'
}
/**
    * @export
    * @enum {string}
    */
export enum AclAccountRespAccountRoleEnum {
    READ = 'read',
    WRITE = 'write'
}
