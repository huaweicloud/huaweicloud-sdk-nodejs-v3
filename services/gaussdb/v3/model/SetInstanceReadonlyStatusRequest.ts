import { SetInstanceReadonlyRequestBody } from './SetInstanceReadonlyRequestBody';


export class SetInstanceReadonlyStatusRequest {
    private 'X-Language'?: SetInstanceReadonlyStatusRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: SetInstanceReadonlyRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: SetInstanceReadonlyStatusRequestXLanguageEnum | string): SetInstanceReadonlyStatusRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: SetInstanceReadonlyStatusRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): SetInstanceReadonlyStatusRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): SetInstanceReadonlyStatusRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SetInstanceReadonlyRequestBody): SetInstanceReadonlyStatusRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SetInstanceReadonlyStatusRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
