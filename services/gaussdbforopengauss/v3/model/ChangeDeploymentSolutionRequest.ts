import { ChangeDeploymentSolutionRequestBody } from './ChangeDeploymentSolutionRequestBody';


export class ChangeDeploymentSolutionRequest {
    private 'X-Language'?: ChangeDeploymentSolutionRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ChangeDeploymentSolutionRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ChangeDeploymentSolutionRequestXLanguageEnum | string): ChangeDeploymentSolutionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ChangeDeploymentSolutionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ChangeDeploymentSolutionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ChangeDeploymentSolutionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ChangeDeploymentSolutionRequestBody): ChangeDeploymentSolutionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChangeDeploymentSolutionRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
