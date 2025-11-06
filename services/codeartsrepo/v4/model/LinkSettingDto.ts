

export class LinkSettingDto {
    public active?: boolean;
    public url?: string;
    private 'app_auth_type'?: LinkSettingDtoAppAuthTypeEnum | string;
    private 'app_ak'?: string;
    private 'app_sk'?: string;
    public categories?: string;
    private 'exclude_statuses'?: string;
    public constructor() { 
    }
    public withActive(active: boolean): LinkSettingDto {
        this['active'] = active;
        return this;
    }
    public withUrl(url: string): LinkSettingDto {
        this['url'] = url;
        return this;
    }
    public withAppAuthType(appAuthType: LinkSettingDtoAppAuthTypeEnum | string): LinkSettingDto {
        this['app_auth_type'] = appAuthType;
        return this;
    }
    public set appAuthType(appAuthType: LinkSettingDtoAppAuthTypeEnum | string  | undefined) {
        this['app_auth_type'] = appAuthType;
    }
    public get appAuthType(): LinkSettingDtoAppAuthTypeEnum | string | undefined {
        return this['app_auth_type'];
    }
    public withAppAk(appAk: string): LinkSettingDto {
        this['app_ak'] = appAk;
        return this;
    }
    public set appAk(appAk: string  | undefined) {
        this['app_ak'] = appAk;
    }
    public get appAk(): string | undefined {
        return this['app_ak'];
    }
    public withAppSk(appSk: string): LinkSettingDto {
        this['app_sk'] = appSk;
        return this;
    }
    public set appSk(appSk: string  | undefined) {
        this['app_sk'] = appSk;
    }
    public get appSk(): string | undefined {
        return this['app_sk'];
    }
    public withCategories(categories: string): LinkSettingDto {
        this['categories'] = categories;
        return this;
    }
    public withExcludeStatuses(excludeStatuses: string): LinkSettingDto {
        this['exclude_statuses'] = excludeStatuses;
        return this;
    }
    public set excludeStatuses(excludeStatuses: string  | undefined) {
        this['exclude_statuses'] = excludeStatuses;
    }
    public get excludeStatuses(): string | undefined {
        return this['exclude_statuses'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LinkSettingDtoAppAuthTypeEnum {
    AK_SK = 'ak_sk'
}
