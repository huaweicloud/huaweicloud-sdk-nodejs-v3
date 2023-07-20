import { DeploymentJobConfirmType } from './DeploymentJobConfirmType';


export class ConfirmDeploymentJobRequest {
    private 'X-Language'?: ConfirmDeploymentJobRequestXLanguageEnum | string;
    private 'application_id'?: string;
    private 'environment_tag'?: string;
    public body?: DeploymentJobConfirmType;
    public constructor(applicationId?: string, environmentTag?: string) { 
        this['application_id'] = applicationId;
        this['environment_tag'] = environmentTag;
    }
    public withXLanguage(xLanguage: ConfirmDeploymentJobRequestXLanguageEnum | string): ConfirmDeploymentJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ConfirmDeploymentJobRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ConfirmDeploymentJobRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): ConfirmDeploymentJobRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withEnvironmentTag(environmentTag: string): ConfirmDeploymentJobRequest {
        this['environment_tag'] = environmentTag;
        return this;
    }
    public set environmentTag(environmentTag: string  | undefined) {
        this['environment_tag'] = environmentTag;
    }
    public get environmentTag(): string | undefined {
        return this['environment_tag'];
    }
    public withBody(body: DeploymentJobConfirmType): ConfirmDeploymentJobRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfirmDeploymentJobRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
