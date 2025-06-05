

export class CreateDialogReportConfigReq {
    private 'obs_bucket_name'?: string;
    private 'obs_endpoint'?: string;
    private 'enable_dialog_report'?: boolean;
    public constructor(obsBucketName?: string, obsEndpoint?: string, enableDialogReport?: boolean) { 
        this['obs_bucket_name'] = obsBucketName;
        this['obs_endpoint'] = obsEndpoint;
        this['enable_dialog_report'] = enableDialogReport;
    }
    public withObsBucketName(obsBucketName: string): CreateDialogReportConfigReq {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withObsEndpoint(obsEndpoint: string): CreateDialogReportConfigReq {
        this['obs_endpoint'] = obsEndpoint;
        return this;
    }
    public set obsEndpoint(obsEndpoint: string  | undefined) {
        this['obs_endpoint'] = obsEndpoint;
    }
    public get obsEndpoint(): string | undefined {
        return this['obs_endpoint'];
    }
    public withEnableDialogReport(enableDialogReport: boolean): CreateDialogReportConfigReq {
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