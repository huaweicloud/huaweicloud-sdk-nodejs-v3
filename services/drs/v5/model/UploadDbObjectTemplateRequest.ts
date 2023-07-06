import { UploadDbObjectTemplateRequestBody } from './UploadDbObjectTemplateRequestBody';


export class UploadDbObjectTemplateRequest {
    private 'job_id': string | undefined;
    private 'X-Language'?: UploadDbObjectTemplateRequestXLanguageEnum | undefined;
    public body?: UploadDbObjectTemplateRequestBody;
    public constructor(jobId?: any) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): UploadDbObjectTemplateRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: UploadDbObjectTemplateRequestXLanguageEnum): UploadDbObjectTemplateRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UploadDbObjectTemplateRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: UploadDbObjectTemplateRequestBody): UploadDbObjectTemplateRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UploadDbObjectTemplateRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
