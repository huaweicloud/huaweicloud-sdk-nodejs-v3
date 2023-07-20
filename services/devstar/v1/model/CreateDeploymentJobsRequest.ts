import { CreateDeploymentJobsParams } from './CreateDeploymentJobsParams';


export class CreateDeploymentJobsRequest {
    private 'X-Language'?: CreateDeploymentJobsRequestXLanguageEnum | string;
    private 'application_id'?: string;
    private 'environment_tag'?: string;
    public body?: CreateDeploymentJobsParams;
    public constructor(applicationId?: string, environmentTag?: string) { 
        this['application_id'] = applicationId;
        this['environment_tag'] = environmentTag;
    }
    public withXLanguage(xLanguage: CreateDeploymentJobsRequestXLanguageEnum | string): CreateDeploymentJobsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateDeploymentJobsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateDeploymentJobsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): CreateDeploymentJobsRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withEnvironmentTag(environmentTag: string): CreateDeploymentJobsRequest {
        this['environment_tag'] = environmentTag;
        return this;
    }
    public set environmentTag(environmentTag: string  | undefined) {
        this['environment_tag'] = environmentTag;
    }
    public get environmentTag(): string | undefined {
        return this['environment_tag'];
    }
    public withBody(body: CreateDeploymentJobsParams): CreateDeploymentJobsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDeploymentJobsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
