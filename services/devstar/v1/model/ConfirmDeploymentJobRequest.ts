import { DeploymentJobConfirmType } from './DeploymentJobConfirmType';


export class ConfirmDeploymentJobRequest {
    private 'X-Language'?: ConfirmDeploymentJobRequestXLanguageEnum | undefined;
    private 'application_id': string | undefined;
    private 'environment_tag': string | undefined;
    public body?: DeploymentJobConfirmType;
    public constructor(applicationId?: any, environmentTag?: any) { 
        this['application_id'] = applicationId;
        this['environment_tag'] = environmentTag;
    }
    public withXLanguage(xLanguage: ConfirmDeploymentJobRequestXLanguageEnum): ConfirmDeploymentJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ConfirmDeploymentJobRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): ConfirmDeploymentJobRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId() {
        return this['application_id'];
    }
    public withEnvironmentTag(environmentTag: string): ConfirmDeploymentJobRequest {
        this['environment_tag'] = environmentTag;
        return this;
    }
    public set environmentTag(environmentTag: string | undefined) {
        this['environment_tag'] = environmentTag;
    }
    public get environmentTag() {
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
