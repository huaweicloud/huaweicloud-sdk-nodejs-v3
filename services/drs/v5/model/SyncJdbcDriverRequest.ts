import { UpdateDriverReq } from './UpdateDriverReq';


export class SyncJdbcDriverRequest {
    private 'job_id'?: string;
    private 'X-Language'?: SyncJdbcDriverRequestXLanguageEnum | string;
    public body?: UpdateDriverReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): SyncJdbcDriverRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: SyncJdbcDriverRequestXLanguageEnum | string): SyncJdbcDriverRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: SyncJdbcDriverRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): SyncJdbcDriverRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: UpdateDriverReq): SyncJdbcDriverRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SyncJdbcDriverRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
