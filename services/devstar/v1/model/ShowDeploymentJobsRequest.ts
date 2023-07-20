

export class ShowDeploymentJobsRequest {
    private 'X-Language'?: ShowDeploymentJobsRequestXLanguageEnum | string;
    private 'application_id'?: string;
    private 'environment_tag'?: string;
    public constructor(applicationId?: string, environmentTag?: string) { 
        this['application_id'] = applicationId;
        this['environment_tag'] = environmentTag;
    }
    public withXLanguage(xLanguage: ShowDeploymentJobsRequestXLanguageEnum | string): ShowDeploymentJobsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowDeploymentJobsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowDeploymentJobsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): ShowDeploymentJobsRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withEnvironmentTag(environmentTag: string): ShowDeploymentJobsRequest {
        this['environment_tag'] = environmentTag;
        return this;
    }
    public set environmentTag(environmentTag: string  | undefined) {
        this['environment_tag'] = environmentTag;
    }
    public get environmentTag(): string | undefined {
        return this['environment_tag'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDeploymentJobsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
