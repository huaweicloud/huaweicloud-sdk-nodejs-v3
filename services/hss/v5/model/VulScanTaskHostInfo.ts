import { VulScanTaskHostInfoFailedReasons } from './VulScanTaskHostInfoFailedReasons';
import { VulScanTaskHostInfoVulScanDetails } from './VulScanTaskHostInfoVulScanDetails';


export class VulScanTaskHostInfo {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    private 'asset_value'?: string;
    private 'scan_status'?: string;
    private 'failed_reasons'?: Array<VulScanTaskHostInfoFailedReasons>;
    private 'vul_scan_details'?: Array<VulScanTaskHostInfoVulScanDetails>;
    public constructor() { 
    }
    public withHostId(hostId: string): VulScanTaskHostInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): VulScanTaskHostInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPublicIp(publicIp: string): VulScanTaskHostInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): VulScanTaskHostInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withAssetValue(assetValue: string): VulScanTaskHostInfo {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withScanStatus(scanStatus: string): VulScanTaskHostInfo {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
    public withFailedReasons(failedReasons: Array<VulScanTaskHostInfoFailedReasons>): VulScanTaskHostInfo {
        this['failed_reasons'] = failedReasons;
        return this;
    }
    public set failedReasons(failedReasons: Array<VulScanTaskHostInfoFailedReasons>  | undefined) {
        this['failed_reasons'] = failedReasons;
    }
    public get failedReasons(): Array<VulScanTaskHostInfoFailedReasons> | undefined {
        return this['failed_reasons'];
    }
    public withVulScanDetails(vulScanDetails: Array<VulScanTaskHostInfoVulScanDetails>): VulScanTaskHostInfo {
        this['vul_scan_details'] = vulScanDetails;
        return this;
    }
    public set vulScanDetails(vulScanDetails: Array<VulScanTaskHostInfoVulScanDetails>  | undefined) {
        this['vul_scan_details'] = vulScanDetails;
    }
    public get vulScanDetails(): Array<VulScanTaskHostInfoVulScanDetails> | undefined {
        return this['vul_scan_details'];
    }
}