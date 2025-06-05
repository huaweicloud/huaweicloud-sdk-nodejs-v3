

export class UpdateDialogReportConfigReq {
    private 'obs_bucket_name'?: string;
    private 'obs_endpoint'?: string;
    private 'enable_dialog_report'?: boolean;
    public constructor() { 
    }
    public withObsBucketName(obsBucketName: string): UpdateDialogReportConfigReq {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withObsEndpoint(obsEndpoint: string): UpdateDialogReportConfigReq {
        this['obs_endpoint'] = obsEndpoint;
        return this;
    }
    public set obsEndpoint(obsEndpoint: string  | undefined) {
        this['obs_endpoint'] = obsEndpoint;
    }
    public get obsEndpoint(): string | undefined {
        return this['obs_endpoint'];
    }
    public withEnableDialogReport(enableDialogReport: boolean): UpdateDialogReportConfigReq {
        this['enable_dialog_report'] = enableDialogReport;
        return this;
    }
    public set enableDialogReport(enableDialogReport: boolean  | undefined) {
        this['enable_dialog_report'] = enableDialogReport;
    }
    public get enableDialogReport(): boolean | undefined {
        return this['enable_dialog_report'];
    }
}