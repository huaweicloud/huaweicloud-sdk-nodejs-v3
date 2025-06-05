
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDialogReportConfigResponse extends SdkResponse {
    private 'project_id'?: string;
    private 'obs_bucket_name'?: string;
    private 'obs_endpoint'?: string;
    private 'enable_dialog_report'?: boolean;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withProjectId(projectId: string): CreateDialogReportConfigResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withObsBucketName(obsBucketName: string): CreateDialogReportConfigResponse {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withObsEndpoint(obsEndpoint: string): CreateDialogReportConfigResponse {
        this['obs_endpoint'] = obsEndpoint;
        return this;
    }
    public set obsEndpoint(obsEndpoint: string  | undefined) {
        this['obs_endpoint'] = obsEndpoint;
    }
    public get obsEndpoint(): string | undefined {
        return this['obs_endpoint'];
    }
    public withEnableDialogReport(enableDialogReport: boolean): CreateDialogReportConfigResponse {
        this['enable_dialog_report'] = enableDialogReport;
        return this;
    }
    public set enableDialogReport(enableDialogReport: boolean  | undefined) {
        this['enable_dialog_report'] = enableDialogReport;
    }
    public get enableDialogReport(): boolean | undefined {
        return this['enable_dialog_report'];
    }
    public withCreateTime(createTime: string): CreateDialogReportConfigResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CreateDialogReportConfigResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withXRequestId(xRequestId: string): CreateDialogReportConfigResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}