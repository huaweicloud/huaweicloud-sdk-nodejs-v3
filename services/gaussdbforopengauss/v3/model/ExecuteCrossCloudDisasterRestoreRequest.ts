import { RestoreDisasterReq } from './RestoreDisasterReq';


export class ExecuteCrossCloudDisasterRestoreRequest {
    private 'X-Language'?: ExecuteCrossCloudDisasterRestoreRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: RestoreDisasterReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ExecuteCrossCloudDisasterRestoreRequestXLanguageEnum | string): ExecuteCrossCloudDisasterRestoreRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExecuteCrossCloudDisasterRestoreRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExecuteCrossCloudDisasterRestoreRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ExecuteCrossCloudDisasterRestoreRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RestoreDisasterReq): ExecuteCrossCloudDisasterRestoreRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecuteCrossCloudDisasterRestoreRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
