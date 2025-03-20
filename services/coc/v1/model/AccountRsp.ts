

export class AccountRsp {
    public id?: string;
    public name?: string;
    public type?: AccountRspTypeEnum | string;
    public delegatee?: string;
    private 'agency_id'?: string;
    public delegator?: string;
    private 'create_user_name'?: string;
    public status?: AccountRspStatusEnum | string;
    private 'create_user_id'?: string;
    private 'create_time'?: string;
    private 'update_user_name'?: string;
    private 'update_user_id'?: string;
    private 'update_time'?: string;
    public constructor(id?: string, name?: string, createUserName?: string, status?: string, createUserId?: string, createTime?: string, updateTime?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['create_user_name'] = createUserName;
        this['status'] = status;
        this['create_user_id'] = createUserId;
        this['create_time'] = createTime;
        this['update_time'] = updateTime;
    }
    public withId(id: string): AccountRsp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AccountRsp {
        this['name'] = name;
        return this;
    }
    public withType(type: AccountRspTypeEnum | string): AccountRsp {
        this['type'] = type;
        return this;
    }
    public withDelegatee(delegatee: string): AccountRsp {
        this['delegatee'] = delegatee;
        return this;
    }
    public withAgencyId(agencyId: string): AccountRsp {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
    public withDelegator(delegator: string): AccountRsp {
        this['delegator'] = delegator;
        return this;
    }
    public withCreateUserName(createUserName: string): AccountRsp {
        this['create_user_name'] = createUserName;
        return this;
    }
    public set createUserName(createUserName: string  | undefined) {
        this['create_user_name'] = createUserName;
    }
    public get createUserName(): string | undefined {
        return this['create_user_name'];
    }
    public withStatus(status: AccountRspStatusEnum | string): AccountRsp {
        this['status'] = status;
        return this;
    }
    public withCreateUserId(createUserId: string): AccountRsp {
        this['create_user_id'] = createUserId;
        return this;
    }
    public set createUserId(createUserId: string  | undefined) {
        this['create_user_id'] = createUserId;
    }
    public get createUserId(): string | undefined {
        return this['create_user_id'];
    }
    public withCreateTime(createTime: string): AccountRsp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateUserName(updateUserName: string): AccountRsp {
        this['update_user_name'] = updateUserName;
        return this;
    }
    public set updateUserName(updateUserName: string  | undefined) {
        this['update_user_name'] = updateUserName;
    }
    public get updateUserName(): string | undefined {
        return this['update_user_name'];
    }
    public withUpdateUserId(updateUserId: string): AccountRsp {
        this['update_user_id'] = updateUserId;
        return this;
    }
    public set updateUserId(updateUserId: string  | undefined) {
        this['update_user_id'] = updateUserId;
    }
    public get updateUserId(): string | undefined {
        return this['update_user_id'];
    }
    public withUpdateTime(updateTime: string): AccountRsp {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccountRspTypeEnum {
    NORMAL = 'NORMAL',
    DELEGATOR = 'DELEGATOR',
    DELEGATEE = 'DELEGATEE'
}
/**
    * @export
    * @enum {string}
    */
export enum AccountRspStatusEnum {
    PENDING_AUTHORIZATION = 'PENDING_AUTHORIZATION',
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
