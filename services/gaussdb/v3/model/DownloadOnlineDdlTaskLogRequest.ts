import { DownloadOnlineDDLTaskLogRequestV3 } from './DownloadOnlineDDLTaskLogRequestV3';


export class DownloadOnlineDdlTaskLogRequest {
    private 'X-Language'?: DownloadOnlineDdlTaskLogRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: DownloadOnlineDDLTaskLogRequestV3;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: DownloadOnlineDdlTaskLogRequestXLanguageEnum | string): DownloadOnlineDdlTaskLogRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DownloadOnlineDdlTaskLogRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DownloadOnlineDdlTaskLogRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): DownloadOnlineDdlTaskLogRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DownloadOnlineDDLTaskLogRequestV3): DownloadOnlineDdlTaskLogRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DownloadOnlineDdlTaskLogRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
