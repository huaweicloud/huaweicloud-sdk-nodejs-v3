

export class ListServiceSpecificCredentialsV5Request {
    private 'X-Language'?: ListServiceSpecificCredentialsV5RequestXLanguageEnum | string;
    private 'user_id'?: string;
    private 'service_name'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListServiceSpecificCredentialsV5RequestXLanguageEnum | string): ListServiceSpecificCredentialsV5Request {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListServiceSpecificCredentialsV5RequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListServiceSpecificCredentialsV5RequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withUserId(userId: string): ListServiceSpecificCredentialsV5Request {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withServiceName(serviceName: string): ListServiceSpecificCredentialsV5Request {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withLimit(limit: number): ListServiceSpecificCredentialsV5Request {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListServiceSpecificCredentialsV5Request {
        this['marker'] = marker;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListServiceSpecificCredentialsV5RequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
