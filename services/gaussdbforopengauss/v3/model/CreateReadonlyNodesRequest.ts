import { CreateReadonlyNodesRequestBody } from './CreateReadonlyNodesRequestBody';


export class CreateReadonlyNodesRequest {
    private 'X-Language'?: CreateReadonlyNodesRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: CreateReadonlyNodesRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: CreateReadonlyNodesRequestXLanguageEnum | string): CreateReadonlyNodesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateReadonlyNodesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateReadonlyNodesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): CreateReadonlyNodesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateReadonlyNodesRequestBody): CreateReadonlyNodesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateReadonlyNodesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
