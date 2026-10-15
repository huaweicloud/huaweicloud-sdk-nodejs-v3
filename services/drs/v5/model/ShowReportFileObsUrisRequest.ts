

export class ShowReportFileObsUrisRequest {
    private 'job_id'?: string;
    private 'report_type'?: string;
    private 'X-Language'?: ShowReportFileObsUrisRequestXLanguageEnum | string;
    public constructor(jobId?: string, reportType?: string) { 
        this['job_id'] = jobId;
        this['report_type'] = reportType;
    }
    public withJobId(jobId: string): ShowReportFileObsUrisRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withReportType(reportType: string): ShowReportFileObsUrisRequest {
        this['report_type'] = reportType;
        return this;
    }
    public set reportType(reportType: string  | undefined) {
        this['report_type'] = reportType;
    }
    public get reportType(): string | undefined {
        return this['report_type'];
    }
    public withXLanguage(xLanguage: ShowReportFileObsUrisRequestXLanguageEnum | string): ShowReportFileObsUrisRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowReportFileObsUrisRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowReportFileObsUrisRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowReportFileObsUrisRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
