import { CnComponentInfoResult } from './CnComponentInfoResult';
import { DnComponentInfoResult } from './DnComponentInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabaseVolumeSummaryResponse extends SdkResponse {
    private 'data_disk_capacity'?: string;
    private 'data_disk_usage'?: string;
    private 'space_usage_growth_per_day'?: string;
    private 'estimated_remaining_days'?: string;
    private 'cn_components'?: Array<CnComponentInfoResult>;
    private 'dn_components'?: Array<DnComponentInfoResult>;
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
    public withCnComponents(cnComponents: Array<CnComponentInfoResult>): ListDatabaseVolumeSummaryResponse {
        this['cn_components'] = cnComponents;
        return this;
    }
    public set cnComponents(cnComponents: Array<CnComponentInfoResult>  | undefined) {
        this['cn_components'] = cnComponents;
    }
    public get cnComponents(): Array<CnComponentInfoResult> | undefined {
        return this['cn_components'];
    }
    public withDnComponents(dnComponents: Array<DnComponentInfoResult>): ListDatabaseVolumeSummaryResponse {
        this['dn_components'] = dnComponents;
        return this;
    }
    public set dnComponents(dnComponents: Array<DnComponentInfoResult>  | undefined) {
        this['dn_components'] = dnComponents;
    }
    public get dnComponents(): Array<DnComponentInfoResult> | undefined {
        return this['dn_components'];
    }
}