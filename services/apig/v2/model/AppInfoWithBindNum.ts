import { AppInfo } from './AppInfo';


export class AppInfoWithBindNum {
    public id?: string;
    public name?: string;
    public remark?: string;
    public creator?: AppInfoWithBindNumCreatorEnum | string;
    private 'update_time'?: Date;
    private 'app_key'?: string;
    private 'related_domain_id'?: string;
    private 'related_project_id'?: string;
    private 'app_secret'?: string;
    private 'register_time'?: Date;
    public status?: AppInfoWithBindNumStatusEnum | number;
    private 'app_type'?: AppInfoWithBindNumAppTypeEnum | string;
    private 'roma_app_type'?: string;
    private 'bind_num'?: number;
    public constructor() { 
    }
    public withId(id: string): AppInfoWithBindNum {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AppInfoWithBindNum {
        this['name'] = name;
        return this;
    }
    public withRemark(remark: string): AppInfoWithBindNum {
        this['remark'] = remark;
        return this;
    }
    public withCreator(creator: AppInfoWithBindNumCreatorEnum | string): AppInfoWithBindNum {
        this['creator'] = creator;
        return this;
    }
    public withUpdateTime(updateTime: Date): AppInfoWithBindNum {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withAppKey(appKey: string): AppInfoWithBindNum {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string  | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey(): string | undefined {
        return this['app_key'];
    }
    public withRelatedDomainId(relatedDomainId: string): AppInfoWithBindNum {
        this['related_domain_id'] = relatedDomainId;
        return this;
    }
    public set relatedDomainId(relatedDomainId: string  | undefined) {
        this['related_domain_id'] = relatedDomainId;
    }
    public get relatedDomainId(): string | undefined {
        return this['related_domain_id'];
    }
    public withRelatedProjectId(relatedProjectId: string): AppInfoWithBindNum {
        this['related_project_id'] = relatedProjectId;
        return this;
    }
    public set relatedProjectId(relatedProjectId: string  | undefined) {
        this['related_project_id'] = relatedProjectId;
    }
    public get relatedProjectId(): string | undefined {
        return this['related_project_id'];
    }
    public withAppSecret(appSecret: string): AppInfoWithBindNum {
        this['app_secret'] = appSecret;
        return this;
    }
    public set appSecret(appSecret: string  | undefined) {
        this['app_secret'] = appSecret;
    }
    public get appSecret(): string | undefined {
        return this['app_secret'];
    }
    public withRegisterTime(registerTime: Date): AppInfoWithBindNum {
        this['register_time'] = registerTime;
        return this;
    }
    public set registerTime(registerTime: Date  | undefined) {
        this['register_time'] = registerTime;
    }
    public get registerTime(): Date | undefined {
        return this['register_time'];
    }
    public withStatus(status: AppInfoWithBindNumStatusEnum | number): AppInfoWithBindNum {
        this['status'] = status;
        return this;
    }
    public withAppType(appType: AppInfoWithBindNumAppTypeEnum | string): AppInfoWithBindNum {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: AppInfoWithBindNumAppTypeEnum | string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): AppInfoWithBindNumAppTypeEnum | string | undefined {
        return this['app_type'];
    }
    public withRomaAppType(romaAppType: string): AppInfoWithBindNum {
        this['roma_app_type'] = romaAppType;
        return this;
    }
    public set romaAppType(romaAppType: string  | undefined) {
        this['roma_app_type'] = romaAppType;
    }
    public get romaAppType(): string | undefined {
        return this['roma_app_type'];
    }
    public withBindNum(bindNum: number): AppInfoWithBindNum {
        this['bind_num'] = bindNum;
        return this;
    }
    public set bindNum(bindNum: number  | undefined) {
        this['bind_num'] = bindNum;
    }
    public get bindNum(): number | undefined {
        return this['bind_num'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AppInfoWithBindNumCreatorEnum {
    USER = 'USER',
    MARKET = 'MARKET'
}
/**
    * @export
    * @enum {string}
    */
export enum AppInfoWithBindNumStatusEnum {
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum AppInfoWithBindNumAppTypeEnum {
    APIG = 'apig'
}
