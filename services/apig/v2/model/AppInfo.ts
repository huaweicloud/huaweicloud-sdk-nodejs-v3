import { AppBaseInfo } from './AppBaseInfo';


export class AppInfo {
    public id?: string;
    public name?: string;
    public remark?: string;
    public creator?: AppInfoCreatorEnum | string;
    private 'update_time'?: Date;
    private 'app_key'?: string;
    private 'related_domain_id'?: string;
    private 'related_project_id'?: string;
    private 'app_secret'?: string;
    private 'register_time'?: Date;
    public status?: AppInfoStatusEnum | number;
    private 'app_type'?: AppInfoAppTypeEnum | string;
    private 'roma_app_type'?: string;
    public constructor() { 
    }
    public withId(id: string): AppInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AppInfo {
        this['name'] = name;
        return this;
    }
    public withRemark(remark: string): AppInfo {
        this['remark'] = remark;
        return this;
    }
    public withCreator(creator: AppInfoCreatorEnum | string): AppInfo {
        this['creator'] = creator;
        return this;
    }
    public withUpdateTime(updateTime: Date): AppInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withAppKey(appKey: string): AppInfo {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string  | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey(): string | undefined {
        return this['app_key'];
    }
    public withRelatedDomainId(relatedDomainId: string): AppInfo {
        this['related_domain_id'] = relatedDomainId;
        return this;
    }
    public set relatedDomainId(relatedDomainId: string  | undefined) {
        this['related_domain_id'] = relatedDomainId;
    }
    public get relatedDomainId(): string | undefined {
        return this['related_domain_id'];
    }
    public withRelatedProjectId(relatedProjectId: string): AppInfo {
        this['related_project_id'] = relatedProjectId;
        return this;
    }
    public set relatedProjectId(relatedProjectId: string  | undefined) {
        this['related_project_id'] = relatedProjectId;
    }
    public get relatedProjectId(): string | undefined {
        return this['related_project_id'];
    }
    public withAppSecret(appSecret: string): AppInfo {
        this['app_secret'] = appSecret;
        return this;
    }
    public set appSecret(appSecret: string  | undefined) {
        this['app_secret'] = appSecret;
    }
    public get appSecret(): string | undefined {
        return this['app_secret'];
    }
    public withRegisterTime(registerTime: Date): AppInfo {
        this['register_time'] = registerTime;
        return this;
    }
    public set registerTime(registerTime: Date  | undefined) {
        this['register_time'] = registerTime;
    }
    public get registerTime(): Date | undefined {
        return this['register_time'];
    }
    public withStatus(status: AppInfoStatusEnum | number): AppInfo {
        this['status'] = status;
        return this;
    }
    public withAppType(appType: AppInfoAppTypeEnum | string): AppInfo {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: AppInfoAppTypeEnum | string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): AppInfoAppTypeEnum | string | undefined {
        return this['app_type'];
    }
    public withRomaAppType(romaAppType: string): AppInfo {
        this['roma_app_type'] = romaAppType;
        return this;
    }
    public set romaAppType(romaAppType: string  | undefined) {
        this['roma_app_type'] = romaAppType;
    }
    public get romaAppType(): string | undefined {
        return this['roma_app_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AppInfoCreatorEnum {
    USER = 'USER',
    MARKET = 'MARKET'
}
/**
    * @export
    * @enum {string}
    */
export enum AppInfoStatusEnum {
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum AppInfoAppTypeEnum {
    APIG = 'apig'
}
