import { AssetModelResp } from './AssetModelResp';
import { CustomMetrics } from './CustomMetrics';
import { JobVolumeResp } from './JobVolumeResp';
import { LogExportPathResp } from './LogExportPathResp';
import { OutputModelResp } from './OutputModelResp';
import { Resource } from './Resource';
import { SchedulePolicyResp } from './SchedulePolicyResp';


export class SpecResponse {
    public resource?: Resource;
    public volumes?: Array<JobVolumeResp>;
    private 'log_export_path'?: LogExportPathResp;
    private 'schedule_policy'?: SchedulePolicyResp;
    private 'custom_metrics'?: Array<CustomMetrics>;
    private 'output_model'?: OutputModelResp;
    private 'asset_model'?: AssetModelResp;
    public constructor() { 
    }
    public withResource(resource: Resource): SpecResponse {
        this['resource'] = resource;
        return this;
    }
    public withVolumes(volumes: Array<JobVolumeResp>): SpecResponse {
        this['volumes'] = volumes;
        return this;
    }
    public withLogExportPath(logExportPath: LogExportPathResp): SpecResponse {
        this['log_export_path'] = logExportPath;
        return this;
    }
    public set logExportPath(logExportPath: LogExportPathResp  | undefined) {
        this['log_export_path'] = logExportPath;
    }
    public get logExportPath(): LogExportPathResp | undefined {
        return this['log_export_path'];
    }
    public withSchedulePolicy(schedulePolicy: SchedulePolicyResp): SpecResponse {
        this['schedule_policy'] = schedulePolicy;
        return this;
    }
    public set schedulePolicy(schedulePolicy: SchedulePolicyResp  | undefined) {
        this['schedule_policy'] = schedulePolicy;
    }
    public get schedulePolicy(): SchedulePolicyResp | undefined {
        return this['schedule_policy'];
    }
    public withCustomMetrics(customMetrics: Array<CustomMetrics>): SpecResponse {
        this['custom_metrics'] = customMetrics;
        return this;
    }
    public set customMetrics(customMetrics: Array<CustomMetrics>  | undefined) {
        this['custom_metrics'] = customMetrics;
    }
    public get customMetrics(): Array<CustomMetrics> | undefined {
        return this['custom_metrics'];
    }
    public withOutputModel(outputModel: OutputModelResp): SpecResponse {
        this['output_model'] = outputModel;
        return this;
    }
    public set outputModel(outputModel: OutputModelResp  | undefined) {
        this['output_model'] = outputModel;
    }
    public get outputModel(): OutputModelResp | undefined {
        return this['output_model'];
    }
    public withAssetModel(assetModel: AssetModelResp): SpecResponse {
        this['asset_model'] = assetModel;
        return this;
    }
    public set assetModel(assetModel: AssetModelResp  | undefined) {
        this['asset_model'] = assetModel;
    }
    public get assetModel(): AssetModelResp | undefined {
        return this['asset_model'];
    }
}