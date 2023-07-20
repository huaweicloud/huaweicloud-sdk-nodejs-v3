import { ResizeFlavorRequest } from './ResizeFlavorRequest';


export class StartResizeFlavorActionRequest {
    private 'X-Language'?: StartResizeFlavorActionRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ResizeFlavorRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: StartResizeFlavorActionRequestXLanguageEnum | string): StartResizeFlavorActionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: StartResizeFlavorActionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): StartResizeFlavorActionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): StartResizeFlavorActionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ResizeFlavorRequest): StartResizeFlavorActionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StartResizeFlavorActionRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
