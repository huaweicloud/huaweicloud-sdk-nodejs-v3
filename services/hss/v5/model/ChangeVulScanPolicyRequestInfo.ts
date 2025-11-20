import { ChangeVulScanPolicyRequestInfoTime } from './ChangeVulScanPolicyRequestInfoTime';


export class ChangeVulScanPolicyRequestInfo {
    private 'scan_period'?: string;
    private 'scan_range_type'?: string;
    private 'host_ids'?: Array<string>;
    private 'scan_vul_types'?: Array<string>;
    public status?: string;
    public time?: ChangeVulScanPolicyRequestInfoTime;
    public constructor(scanPeriod?: string, scanRangeType?: string, status?: string) { 
        this['scan_period'] = scanPeriod;
        this['scan_range_type'] = scanRangeType;
        this['status'] = status;
    }
    public withScanPeriod(scanPeriod: string): ChangeVulScanPolicyRequestInfo {
        this['scan_period'] = scanPeriod;
        return this;
    }
    public set scanPeriod(scanPeriod: string  | undefined) {
        this['scan_period'] = scanPeriod;
    }
    public get scanPeriod(): string | undefined {
        return this['scan_period'];
    }
    public withScanRangeType(scanRangeType: string): ChangeVulScanPolicyRequestInfo {
        this['scan_range_type'] = scanRangeType;
        return this;
    }
    public set scanRangeType(scanRangeType: string  | undefined) {
        this['scan_range_type'] = scanRangeType;
    }
    public get scanRangeType(): string | undefined {
        return this['scan_range_type'];
    }
    public withHostIds(hostIds: Array<string>): ChangeVulScanPolicyRequestInfo {
        this['host_ids'] = hostIds;
        return this;
    }
    public set hostIds(hostIds: Array<string>  | undefined) {
        this['host_ids'] = hostIds;
    }
    public get hostIds(): Array<string> | undefined {
        return this['host_ids'];
    }
    public withScanVulTypes(scanVulTypes: Array<string>): ChangeVulScanPolicyRequestInfo {
        this['scan_vul_types'] = scanVulTypes;
        return this;
    }
    public set scanVulTypes(scanVulTypes: Array<string>  | undefined) {
        this['scan_vul_types'] = scanVulTypes;
    }
    public get scanVulTypes(): Array<string> | undefined {
        return this['scan_vul_types'];
    }
    public withStatus(status: string): ChangeVulScanPolicyRequestInfo {
        this['status'] = status;
        return this;
    }
    public withTime(time: ChangeVulScanPolicyRequestInfoTime): ChangeVulScanPolicyRequestInfo {
        this['time'] = time;
        return this;
    }
}