import { CreateInstanceConnectionReq } from './CreateInstanceConnectionReq';


export class CreateInstanceConnectionRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: CreateInstanceConnectionRequestXLanguageEnum | string;
    public body?: CreateInstanceConnectionReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateInstanceConnectionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: CreateInstanceConnectionRequestXLanguageEnum | string): CreateInstanceConnectionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateInstanceConnectionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateInstanceConnectionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateInstanceConnectionReq): CreateInstanceConnectionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceConnectionRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
