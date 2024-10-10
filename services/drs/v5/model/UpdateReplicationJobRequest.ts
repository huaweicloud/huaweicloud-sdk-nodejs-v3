import { ModifyOfflineTaskReq } from './ModifyOfflineTaskReq';


export class UpdateReplicationJobRequest {
    private 'job_id'?: string;
    private 'X-Language'?: UpdateReplicationJobRequestXLanguageEnum | string;
    public body?: ModifyOfflineTaskReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): UpdateReplicationJobRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: UpdateReplicationJobRequestXLanguageEnum | string): UpdateReplicationJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateReplicationJobRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateReplicationJobRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ModifyOfflineTaskReq): UpdateReplicationJobRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateReplicationJobRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
