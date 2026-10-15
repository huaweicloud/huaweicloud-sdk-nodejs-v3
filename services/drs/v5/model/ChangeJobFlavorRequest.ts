import { ChangeFlavorReq } from './ChangeFlavorReq';


export class ChangeJobFlavorRequest {
    private 'job_id'?: string;
    private 'X-Language'?: ChangeJobFlavorRequestXLanguageEnum | string;
    public body?: ChangeFlavorReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ChangeJobFlavorRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ChangeJobFlavorRequestXLanguageEnum | string): ChangeJobFlavorRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ChangeJobFlavorRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ChangeJobFlavorRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ChangeFlavorReq): ChangeJobFlavorRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChangeJobFlavorRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn',
    ES_US = 'es-us',
    PT_BR = 'pt-br'
}
