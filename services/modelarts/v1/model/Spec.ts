import { AssetModel } from './AssetModel';
import { AutoStop } from './AutoStop';
import { CustomMetrics } from './CustomMetrics';
import { LogExportConfig } from './LogExportConfig';
import { LogExportPath } from './LogExportPath';
import { Notification } from './Notification';
import { OutputModel } from './OutputModel';
import { SchedulePolicy } from './SchedulePolicy';
import { SpecResource } from './SpecResource';
import { SpecVolumes } from './SpecVolumes';


export class Spec {
    public resource?: SpecResource;
    public volumes?: Array<SpecVolumes>;
    private 'log_export_path'?: LogExportPath;
    private 'auto_stop'?: AutoStop;
    private 'schedule_policy'?: SchedulePolicy;
    private 'log_export_config'?: LogExportConfig;
    public notification?: Notification;
    private 'custom_metrics'?: Array<CustomMetrics>;
    private 'output_model'?: OutputModel;
    private 'asset_model'?: AssetModel;
    private 'asset_id'?: string;
    public constructor() { 
    }
    public withResource(resource: SpecResource): Spec {
        this['resource'] = resource;
        return this;
    }
    public withVolumes(volumes: Array<SpecVolumes>): Spec {
        this['volumes'] = volumes;
        return this;
    }
    public withLogExportPath(logExportPath: LogExportPath): Spec {
        this['log_export_path'] = logExportPath;
        return this;
    }
    public set logExportPath(logExportPath: LogExportPath  | undefined) {
        this['log_export_path'] = logExportPath;
    }
    public get logExportPath(): LogExportPath | undefined {
        return this['log_export_path'];
    }
    public withAutoStop(autoStop: AutoStop): Spec {
        this['auto_stop'] = autoStop;
        return this;
    }
    public set autoStop(autoStop: AutoStop  | undefined) {
        this['auto_stop'] = autoStop;
    }
    public get autoStop(): AutoStop | undefined {
        return this['auto_stop'];
    }
    public withSchedulePolicy(schedulePolicy: SchedulePolicy): Spec {
        this['schedule_policy'] = schedulePolicy;
        return this;
    }
    public set schedulePolicy(schedulePolicy: SchedulePolicy  | undefined) {
        this['schedule_policy'] = schedulePolicy;
    }
    public get schedulePolicy(): SchedulePolicy | undefined {
        return this['schedule_policy'];
    }
    public withLogExportConfig(logExportConfig: LogExportConfig): Spec {
        this['log_export_config'] = logExportConfig;
        return this;
    }
    public set logExportConfig(logExportConfig: LogExportConfig  | undefined) {
        this['log_export_config'] = logExportConfig;
    }
    public get logExportConfig(): LogExportConfig | undefined {
        return this['log_export_config'];
    }
    public withNotification(notification: Notification): Spec {
        this['notification'] = notification;
        return this;
    }
    public withCustomMetrics(customMetrics: Array<CustomMetrics>): Spec {
        this['custom_metrics'] = customMetrics;
        return this;
    }
    public set customMetrics(customMetrics: Array<CustomMetrics>  | undefined) {
        this['custom_metrics'] = customMetrics;
    }
    public get customMetrics(): Array<CustomMetrics> | undefined {
        return this['custom_metrics'];
    }
    public withOutputModel(outputModel: OutputModel): Spec {
        this['output_model'] = outputModel;
        return this;
    }
    public set outputModel(outputModel: OutputModel  | undefined) {
        this['output_model'] = outputModel;
    }
    public get outputModel(): OutputModel | undefined {
        return this['output_model'];
    }
    public withAssetModel(assetModel: AssetModel): Spec {
        this['asset_model'] = assetModel;
        return this;
    }
    public set assetModel(assetModel: AssetModel  | undefined) {
        this['asset_model'] = assetModel;
    }
    public get assetModel(): AssetModel | undefined {
        return this['asset_model'];
    }
    public withAssetId(assetId: string): Spec {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
}