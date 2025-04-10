
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAntivirusStatisticResponse extends SdkResponse {
    private 'total_malware_num'?: number;
    private 'malware_host_num'?: number;
    private 'total_task_num'?: number;
    private 'scanning_task_num'?: number;
    private 'latest_scan_time'?: number;
    private 'scan_type'?: string;
    public constructor() { 
        super();
    }
    public withTotalMalwareNum(totalMalwareNum: number): ShowAntivirusStatisticResponse {
        this['total_malware_num'] = totalMalwareNum;
        return this;
    }
    public set totalMalwareNum(totalMalwareNum: number  | undefined) {
        this['total_malware_num'] = totalMalwareNum;
    }
    public get totalMalwareNum(): number | undefined {
        return this['total_malware_num'];
    }
    public withMalwareHostNum(malwareHostNum: number): ShowAntivirusStatisticResponse {
        this['malware_host_num'] = malwareHostNum;
        return this;
    }
    public set malwareHostNum(malwareHostNum: number  | undefined) {
        this['malware_host_num'] = malwareHostNum;
    }
    public get malwareHostNum(): number | undefined {
        return this['malware_host_num'];
    }
    public withTotalTaskNum(totalTaskNum: number): ShowAntivirusStatisticResponse {
        this['total_task_num'] = totalTaskNum;
        return this;
    }
    public set totalTaskNum(totalTaskNum: number  | undefined) {
        this['total_task_num'] = totalTaskNum;
    }
    public get totalTaskNum(): number | undefined {
        return this['total_task_num'];
    }
    public withScanningTaskNum(scanningTaskNum: number): ShowAntivirusStatisticResponse {
        this['scanning_task_num'] = scanningTaskNum;
        return this;
    }
    public set scanningTaskNum(scanningTaskNum: number  | undefined) {
        this['scanning_task_num'] = scanningTaskNum;
    }
    public get scanningTaskNum(): number | undefined {
        return this['scanning_task_num'];
    }
    public withLatestScanTime(latestScanTime: number): ShowAntivirusStatisticResponse {
        this['latest_scan_time'] = latestScanTime;
        return this;
    }
    public set latestScanTime(latestScanTime: number  | undefined) {
        this['latest_scan_time'] = latestScanTime;
    }
    public get latestScanTime(): number | undefined {
        return this['latest_scan_time'];
    }
    public withScanType(scanType: string): ShowAntivirusStatisticResponse {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: string  | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType(): string | undefined {
        return this['scan_type'];
    }
}