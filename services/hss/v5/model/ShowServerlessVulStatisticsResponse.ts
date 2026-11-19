
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerlessVulStatisticsResponse extends SdkResponse {
    private 'total_app_vul_num'?: number;
    private 'high_risky_app_vul'?: number;
    private 'total_linux_vul_num'?: number;
    private 'high_risky_linux_vul'?: number;
    private 'risky_pod_num'?: number;
    private 'total_scan_num'?: number;
    private 'last_update_time'?: number;
    private 'scanning_task_num'?: number;
    public constructor() { 
        super();
    }
    public withTotalAppVulNum(totalAppVulNum: number): ShowServerlessVulStatisticsResponse {
        this['total_app_vul_num'] = totalAppVulNum;
        return this;
    }
    public set totalAppVulNum(totalAppVulNum: number  | undefined) {
        this['total_app_vul_num'] = totalAppVulNum;
    }
    public get totalAppVulNum(): number | undefined {
        return this['total_app_vul_num'];
    }
    public withHighRiskyAppVul(highRiskyAppVul: number): ShowServerlessVulStatisticsResponse {
        this['high_risky_app_vul'] = highRiskyAppVul;
        return this;
    }
    public set highRiskyAppVul(highRiskyAppVul: number  | undefined) {
        this['high_risky_app_vul'] = highRiskyAppVul;
    }
    public get highRiskyAppVul(): number | undefined {
        return this['high_risky_app_vul'];
    }
    public withTotalLinuxVulNum(totalLinuxVulNum: number): ShowServerlessVulStatisticsResponse {
        this['total_linux_vul_num'] = totalLinuxVulNum;
        return this;
    }
    public set totalLinuxVulNum(totalLinuxVulNum: number  | undefined) {
        this['total_linux_vul_num'] = totalLinuxVulNum;
    }
    public get totalLinuxVulNum(): number | undefined {
        return this['total_linux_vul_num'];
    }
    public withHighRiskyLinuxVul(highRiskyLinuxVul: number): ShowServerlessVulStatisticsResponse {
        this['high_risky_linux_vul'] = highRiskyLinuxVul;
        return this;
    }
    public set highRiskyLinuxVul(highRiskyLinuxVul: number  | undefined) {
        this['high_risky_linux_vul'] = highRiskyLinuxVul;
    }
    public get highRiskyLinuxVul(): number | undefined {
        return this['high_risky_linux_vul'];
    }
    public withRiskyPodNum(riskyPodNum: number): ShowServerlessVulStatisticsResponse {
        this['risky_pod_num'] = riskyPodNum;
        return this;
    }
    public set riskyPodNum(riskyPodNum: number  | undefined) {
        this['risky_pod_num'] = riskyPodNum;
    }
    public get riskyPodNum(): number | undefined {
        return this['risky_pod_num'];
    }
    public withTotalScanNum(totalScanNum: number): ShowServerlessVulStatisticsResponse {
        this['total_scan_num'] = totalScanNum;
        return this;
    }
    public set totalScanNum(totalScanNum: number  | undefined) {
        this['total_scan_num'] = totalScanNum;
    }
    public get totalScanNum(): number | undefined {
        return this['total_scan_num'];
    }
    public withLastUpdateTime(lastUpdateTime: number): ShowServerlessVulStatisticsResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
    public withScanningTaskNum(scanningTaskNum: number): ShowServerlessVulStatisticsResponse {
        this['scanning_task_num'] = scanningTaskNum;
        return this;
    }
    public set scanningTaskNum(scanningTaskNum: number  | undefined) {
        this['scanning_task_num'] = scanningTaskNum;
    }
    public get scanningTaskNum(): number | undefined {
        return this['scanning_task_num'];
    }
}