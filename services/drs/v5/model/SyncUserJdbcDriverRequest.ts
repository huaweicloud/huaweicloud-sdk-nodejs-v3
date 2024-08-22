import { UpdateUserDriverReq } from './UpdateUserDriverReq';


export class SyncUserJdbcDriverRequest {
    private 'job_id'?: string;
    private 'X-Language'?: SyncUserJdbcDriverRequestXLanguageEnum | string;
    public body?: UpdateUserDriverReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): SyncUserJdbcDriverRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: SyncUserJdbcDriverRequestXLanguageEnum | string): SyncUserJdbcDriverRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: SyncUserJdbcDriverRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): SyncUserJdbcDriverRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: UpdateUserDriverReq): SyncUserJdbcDriverRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SyncUserJdbcDriverRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
