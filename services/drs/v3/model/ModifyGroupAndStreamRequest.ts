import { LtsInfo } from './LtsInfo';


export class ModifyGroupAndStreamRequest {
    private 'X-Language'?: ModifyGroupAndStreamRequestXLanguageEnum | string;
    private 'job_id'?: string;
    public body?: LtsInfo;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withXLanguage(xLanguage: ModifyGroupAndStreamRequestXLanguageEnum | string): ModifyGroupAndStreamRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ModifyGroupAndStreamRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ModifyGroupAndStreamRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): ModifyGroupAndStreamRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBody(body: LtsInfo): ModifyGroupAndStreamRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyGroupAndStreamRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
