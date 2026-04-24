

export class ShowReplayReportExportStatusRequest {
    private 'job_id'?: string;
    private 'X-Language'?: ShowReplayReportExportStatusRequestXLanguageEnum | string;
    private 'file_type'?: string;
    public constructor(jobId?: string, fileType?: string) { 
        this['job_id'] = jobId;
        this['file_type'] = fileType;
    }
    public withJobId(jobId: string): ShowReplayReportExportStatusRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ShowReplayReportExportStatusRequestXLanguageEnum | string): ShowReplayReportExportStatusRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowReplayReportExportStatusRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowReplayReportExportStatusRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withFileType(fileType: string): ShowReplayReportExportStatusRequest {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowReplayReportExportStatusRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
