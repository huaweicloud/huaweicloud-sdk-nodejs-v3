import { ComponentInfoResult } from './ComponentInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabaseVolumeSummaryResponse extends SdkResponse {
    private 'data_disk_capacity'?: string;
    private 'data_disk_usage'?: string;
    private 'space_usage_growth_per_day'?: string;
    private 'estimated_remaining_days'?: string;
    private 'cn_components'?: Array<ComponentInfoResult>;
    private 'dn_components'?: Array<ComponentInfoResult>;
    public constructor() { 
        super();
    }
    public withDataDiskCapacity(dataDiskCapacity: string): ListDatabaseVolumeSummaryResponse {
        this['data_disk_capacity'] = dataDiskCapacity;
        return this;
    }
    public set dataDiskCapacity(dataDiskCapacity: string  | undefined) {
        this['data_disk_capacity'] = dataDiskCapacity;
    }
    public get dataDiskCapacity(): string | undefined {
        return this['data_disk_capacity'];
    }
    public withDataDiskUsage(dataDiskUsage: string): ListDatabaseVolumeSummaryResponse {
        this['data_disk_usage'] = dataDiskUsage;
        return this;
    }
    public set dataDiskUsage(dataDiskUsage: string  | undefined) {
        this['data_disk_usage'] = dataDiskUsage;
    }
    public get dataDiskUsage(): string | undefined {
        return this['data_disk_usage'];
    }
    public withSpaceUsageGrowthPerDay(spaceUsageGrowthPerDay: string): ListDatabaseVolumeSummaryResponse {
        this['space_usage_growth_per_day'] = spaceUsageGrowthPerDay;
        return this;
    }
    public set spaceUsageGrowthPerDay(spaceUsageGrowthPerDay: string  | undefined) {
        this['space_usage_growth_per_day'] = spaceUsageGrowthPerDay;
    }
    public get spaceUsageGrowthPerDay(): string | undefined {
        return this['space_usage_growth_per_day'];
    }
    public withEstimatedRemainingDays(estimatedRemainingDays: string): ListDatabaseVolumeSummaryResponse {
        this['estimated_remaining_days'] = estimatedRemainingDays;
        return this;
    }
    public set estimatedRemainingDays(estimatedRemainingDays: string  | undefined) {
        this['estimated_remaining_days'] = estimatedRemainingDays;
    }
    public get estimatedRemainingDays(): string | undefined {
        return this['estimated_remaining_days'];
    }
    public withCnComponents(cnComponents: Array<ComponentInfoResult>): ListDatabaseVolumeSummaryResponse {
        this['cn_components'] = cnComponents;
        return this;
    }
    public set cnComponents(cnComponents: Array<ComponentInfoResult>  | undefined) {
        this['cn_components'] = cnComponents;
    }
    public get cnComponents(): Array<ComponentInfoResult> | undefined {
        return this['cn_components'];
    }
    public withDnComponents(dnComponents: Array<ComponentInfoResult>): ListDatabaseVolumeSummaryResponse {
        this['dn_components'] = dnComponents;
        return this;
    }
    public set dnComponents(dnComponents: Array<ComponentInfoResult>  | undefined) {
        this['dn_components'] = dnComponents;
    }
    public get dnComponents(): Array<ComponentInfoResult> | undefined {
        return this['dn_components'];
    }
}