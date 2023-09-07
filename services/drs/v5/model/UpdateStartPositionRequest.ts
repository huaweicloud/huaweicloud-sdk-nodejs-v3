import { ModifyStartPositionReq } from './ModifyStartPositionReq';


export class UpdateStartPositionRequest {
    private 'job_id'?: string;
    private 'X-Language'?: UpdateStartPositionRequestXLanguageEnum | string;
    public body?: ModifyStartPositionReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): UpdateStartPositionRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: UpdateStartPositionRequestXLanguageEnum | string): UpdateStartPositionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateStartPositionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateStartPositionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ModifyStartPositionReq): UpdateStartPositionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateStartPositionRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
