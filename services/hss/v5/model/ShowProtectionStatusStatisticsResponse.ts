import { ProtectStatusStatistics } from './ProtectStatusStatistics';
import { ProtectionEnabledTypes } from './ProtectionEnabledTypes';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProtectionStatusStatisticsResponse extends SdkResponse {
    private 'vul_scan_time'?: number;
    private 'av_upgrade_time'?: number;
    private 'protection_enabled_list'?: Array<ProtectionEnabledTypes>;
    private 'data_list'?: Array<ProtectStatusStatistics>;
    public constructor() { 
        super();
    }
    public withVulScanTime(vulScanTime: number): ShowProtectionStatusStatisticsResponse {
        this['vul_scan_time'] = vulScanTime;
        return this;
    }
    public set vulScanTime(vulScanTime: number  | undefined) {
        this['vul_scan_time'] = vulScanTime;
    }
    public get vulScanTime(): number | undefined {
        return this['vul_scan_time'];
    }
    public withAvUpgradeTime(avUpgradeTime: number): ShowProtectionStatusStatisticsResponse {
        this['av_upgrade_time'] = avUpgradeTime;
        return this;
    }
    public set avUpgradeTime(avUpgradeTime: number  | undefined) {
        this['av_upgrade_time'] = avUpgradeTime;
    }
    public get avUpgradeTime(): number | undefined {
        return this['av_upgrade_time'];
    }
    public withProtectionEnabledList(protectionEnabledList: Array<ProtectionEnabledTypes>): ShowProtectionStatusStatisticsResponse {
        this['protection_enabled_list'] = protectionEnabledList;
        return this;
    }
    public set protectionEnabledList(protectionEnabledList: Array<ProtectionEnabledTypes>  | undefined) {
        this['protection_enabled_list'] = protectionEnabledList;
    }
    public get protectionEnabledList(): Array<ProtectionEnabledTypes> | undefined {
        return this['protection_enabled_list'];
    }
    public withDataList(dataList: Array<ProtectStatusStatistics>): ShowProtectionStatusStatisticsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ProtectStatusStatistics>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ProtectStatusStatistics> | undefined {
        return this['data_list'];
    }
}