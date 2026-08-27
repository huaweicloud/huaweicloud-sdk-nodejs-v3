import { DeleteOnlineDDLTaskRecordRequestV3 } from './DeleteOnlineDDLTaskRecordRequestV3';


export class DeleteOnlineDdlTaskRecordRequest {
    private 'X-Language'?: DeleteOnlineDdlTaskRecordRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: DeleteOnlineDDLTaskRecordRequestV3;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: DeleteOnlineDdlTaskRecordRequestXLanguageEnum | string): DeleteOnlineDdlTaskRecordRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteOnlineDdlTaskRecordRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DeleteOnlineDdlTaskRecordRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): DeleteOnlineDdlTaskRecordRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DeleteOnlineDDLTaskRecordRequestV3): DeleteOnlineDdlTaskRecordRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteOnlineDdlTaskRecordRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
