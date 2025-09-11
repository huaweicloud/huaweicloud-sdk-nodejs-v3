

export class ShowMetricNamesRequest {
    private 'X-Language'?: ShowMetricNamesRequestXLanguageEnum | string;
    private 'group_name'?: ShowMetricNamesRequestGroupNameEnum | string;
    public constructor(groupName?: string) { 
        this['group_name'] = groupName;
    }
    public withXLanguage(xLanguage: ShowMetricNamesRequestXLanguageEnum | string): ShowMetricNamesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowMetricNamesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowMetricNamesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withGroupName(groupName: ShowMetricNamesRequestGroupNameEnum | string): ShowMetricNamesRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: ShowMetricNamesRequestGroupNameEnum | string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): ShowMetricNamesRequestGroupNameEnum | string | undefined {
        return this['group_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowMetricNamesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowMetricNamesRequestGroupNameEnum {
    CPUMEMORY = 'CPUMEMORY',
    IOSTORAGE = 'IOSTORAGE',
    NETWORK = 'NETWORK',
    CONNECTION = 'CONNECTION',
    TRANSACTION = 'TRANSACTION',
    LOCK = 'LOCK',
    SYNCSTAT = 'SYNCSTAT',
    PROCESSRESOURCE = 'PROCESSRESOURCE'
}
