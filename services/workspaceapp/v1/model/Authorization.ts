import { AccountTypeEnum } from './AccountTypeEnum';
import { AuthorizationTypeEnum } from './AuthorizationTypeEnum';
import { PlatformTypeEnum } from './PlatformTypeEnum';


export class Authorization {
    public id?: string;
    private 'account_id'?: string;
    public account?: string;
    private 'app_id'?: string;
    private 'app_name'?: string;
    private 'app_group_id'?: string;
    private 'app_group_name'?: string;
    private 'authorization_type'?: AuthorizationTypeEnum;
    private 'account_type'?: AccountTypeEnum;
    private 'platform_type'?: PlatformTypeEnum;
    public domain?: string;
    private 'create_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): Authorization {
        this['id'] = id;
        return this;
    }
    public withAccountId(accountId: string): Authorization {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withAccount(account: string): Authorization {
        this['account'] = account;
        return this;
    }
    public withAppId(appId: string): Authorization {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppName(appName: string): Authorization {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppGroupId(appGroupId: string): Authorization {
        this['app_group_id'] = appGroupId;
        return this;
    }
    public set appGroupId(appGroupId: string  | undefined) {
        this['app_group_id'] = appGroupId;
    }
    public get appGroupId(): string | undefined {
        return this['app_group_id'];
    }
    public withAppGroupName(appGroupName: string): Authorization {
        this['app_group_name'] = appGroupName;
        return this;
    }
    public set appGroupName(appGroupName: string  | undefined) {
        this['app_group_name'] = appGroupName;
    }
    public get appGroupName(): string | undefined {
        return this['app_group_name'];
    }
    public withAuthorizationType(authorizationType: AuthorizationTypeEnum): Authorization {
        this['authorization_type'] = authorizationType;
        return this;
    }
    public set authorizationType(authorizationType: AuthorizationTypeEnum  | undefined) {
        this['authorization_type'] = authorizationType;
    }
    public get authorizationType(): AuthorizationTypeEnum | undefined {
        return this['authorization_type'];
    }
    public withAccountType(accountType: AccountTypeEnum): Authorization {
        this['account_type'] = accountType;
        return this;
    }
    public set accountType(accountType: AccountTypeEnum  | undefined) {
        this['account_type'] = accountType;
    }
    public get accountType(): AccountTypeEnum | undefined {
        return this['account_type'];
    }
    public withPlatformType(platformType: PlatformTypeEnum): Authorization {
        this['platform_type'] = platformType;
        return this;
    }
    public set platformType(platformType: PlatformTypeEnum  | undefined) {
        this['platform_type'] = platformType;
    }
    public get platformType(): PlatformTypeEnum | undefined {
        return this['platform_type'];
    }
    public withDomain(domain: string): Authorization {
        this['domain'] = domain;
        return this;
    }
    public withCreateAt(createAt: Date): Authorization {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: Date  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): Date | undefined {
        return this['create_at'];
    }
}