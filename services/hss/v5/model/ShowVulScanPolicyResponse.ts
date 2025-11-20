import { VulScanPolicyResponseInfoTime } from './VulScanPolicyResponseInfoTime';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVulScanPolicyResponse extends SdkResponse {
    private 'scan_period'?: string;
    private 'scan_vul_types'?: Array<string>;
    private 'scan_range_type'?: string;
    private 'host_ids'?: Array<string>;
    private 'total_host_num'?: number;
    public status?: string;
    public time?: VulScanPolicyResponseInfoTime;
    public constructor() { 
        super();
    }
    public withScanPeriod(scanPeriod: string): ShowVulScanPolicyResponse {
        this['scan_period'] = scanPeriod;
        return this;
    }
    public set scanPeriod(scanPeriod: string  | undefined) {
        this['scan_period'] = scanPeriod;
    }
    public get scanPeriod(): string | undefined {
        return this['scan_period'];
    }
    public withScanVulTypes(scanVulTypes: Array<string>): ShowVulScanPolicyResponse {
        this['scan_vul_types'] = scanVulTypes;
        return this;
    }
    public set scanVulTypes(scanVulTypes: Array<string>  | undefined) {
        this['scan_vul_types'] = scanVulTypes;
    }
    public get scanVulTypes(): Array<string> | undefined {
        return this['scan_vul_types'];
    }
    public withScanRangeType(scanRangeType: string): ShowVulScanPolicyResponse {
        this['scan_range_type'] = scanRangeType;
        return this;
    }
    public set scanRangeType(scanRangeType: string  | undefined) {
        this['scan_range_type'] = scanRangeType;
    }
    public get scanRangeType(): string | undefined {
        return this['scan_range_type'];
    }
    public withHostIds(hostIds: Array<string>): ShowVulScanPolicyResponse {
        this['host_ids'] = hostIds;
        return this;
    }
    public set hostIds(hostIds: Array<string>  | undefined) {
        this['host_ids'] = hostIds;
    }
    public get hostIds(): Array<string> | undefined {
        return this['host_ids'];
    }
    public withTotalHostNum(totalHostNum: number): ShowVulScanPolicyResponse {
        this['total_host_num'] = totalHostNum;
        return this;
    }
    public set totalHostNum(totalHostNum: number  | undefined) {
        this['total_host_num'] = totalHostNum;
    }
    public get totalHostNum(): number | undefined {
        return this['total_host_num'];
    }
    public withStatus(status: string): ShowVulScanPolicyResponse {
        this['status'] = status;
        return this;
    }
    public withTime(time: VulScanPolicyResponseInfoTime): ShowVulScanPolicyResponse {
        this['time'] = time;
        return this;
    }
}