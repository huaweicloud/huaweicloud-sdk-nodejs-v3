
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateExportTaskResponse extends SdkResponse {
    private 'export_task_id'?: string;
    private 'resource_type'?: string;
    private 'resource_condition'?: object;
    private 'export_format'?: string;
    public status?: string;
    private 'export_count'?: number;
    public progress?: number;
    private 'create_time'?: string;
    private 'end_time'?: string;
    private 'app_type'?: string;
    private 'app_id'?: string;
    public constructor() { 
        super();
    }
    public withExportTaskId(exportTaskId: string): CreateExportTaskResponse {
        this['export_task_id'] = exportTaskId;
        return this;
    }
    public set exportTaskId(exportTaskId: string  | undefined) {
        this['export_task_id'] = exportTaskId;
    }
    public get exportTaskId(): string | undefined {
        return this['export_task_id'];
    }
    public withResourceType(resourceType: string): CreateExportTaskResponse {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceCondition(resourceCondition: object): CreateExportTaskResponse {
        this['resource_condition'] = resourceCondition;
        return this;
    }
    public set resourceCondition(resourceCondition: object  | undefined) {
        this['resource_condition'] = resourceCondition;
    }
    public get resourceCondition(): object | undefined {
        return this['resource_condition'];
    }
    public withExportFormat(exportFormat: string): CreateExportTaskResponse {
        this['export_format'] = exportFormat;
        return this;
    }
    public set exportFormat(exportFormat: string  | undefined) {
        this['export_format'] = exportFormat;
    }
    public get exportFormat(): string | undefined {
        return this['export_format'];
    }
    public withStatus(status: string): CreateExportTaskResponse {
        this['status'] = status;
        return this;
    }
    public withExportCount(exportCount: number): CreateExportTaskResponse {
        this['export_count'] = exportCount;
        return this;
    }
    public set exportCount(exportCount: number  | undefined) {
        this['export_count'] = exportCount;
    }
    public get exportCount(): number | undefined {
        return this['export_count'];
    }
    public withProgress(progress: number): CreateExportTaskResponse {
        this['progress'] = progress;
        return this;
    }
    public withCreateTime(createTime: string): CreateExportTaskResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withEndTime(endTime: string): CreateExportTaskResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withAppType(appType: string): CreateExportTaskResponse {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): string | undefined {
        return this['app_type'];
    }
    public withAppId(appId: string): CreateExportTaskResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
}