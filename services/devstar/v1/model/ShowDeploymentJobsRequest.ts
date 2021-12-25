

export class ShowDeploymentJobsRequest {
    private 'X-Language'?: ShowDeploymentJobsRequestXLanguageEnum | undefined;
    private 'application_id': string | undefined;
    private 'environment_tag': string | undefined;
    public constructor(applicationId?: any, environmentTag?: any) { 
        this['application_id'] = applicationId;
        this['environment_tag'] = environmentTag;
    }
    public withXLanguage(xLanguage: ShowDeploymentJobsRequestXLanguageEnum): ShowDeploymentJobsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowDeploymentJobsRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): ShowDeploymentJobsRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId() {
        return this['application_id'];
    }
    public withEnvironmentTag(environmentTag: string): ShowDeploymentJobsRequest {
        this['environment_tag'] = environmentTag;
        return this;
    }
    public set environmentTag(environmentTag: string | undefined) {
        this['environment_tag'] = environmentTag;
    }
    public get environmentTag() {
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
