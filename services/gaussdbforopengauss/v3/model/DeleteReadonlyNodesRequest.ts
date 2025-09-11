import { DeleteReadonlyNodesRequestBody } from './DeleteReadonlyNodesRequestBody';


export class DeleteReadonlyNodesRequest {
    private 'X-Language'?: DeleteReadonlyNodesRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: DeleteReadonlyNodesRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: DeleteReadonlyNodesRequestXLanguageEnum | string): DeleteReadonlyNodesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteReadonlyNodesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DeleteReadonlyNodesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): DeleteReadonlyNodesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DeleteReadonlyNodesRequestBody): DeleteReadonlyNodesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteReadonlyNodesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
