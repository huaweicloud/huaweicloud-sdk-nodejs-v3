import { VulScanTaskHostInfoScanVulList } from './VulScanTaskHostInfoScanVulList';


export class VulScanTaskHostInfoVulScanDetails {
    private 'vul_type'?: string;
    public status?: string;
    private 'failed_reason'?: string;
    private 'scan_vul_list'?: Array<VulScanTaskHostInfoScanVulList>;
    public constructor() { 
    }
    public withVulType(vulType: string): VulScanTaskHostInfoVulScanDetails {
        this['vul_type'] = vulType;
        return this;
    }
    public set vulType(vulType: string  | undefined) {
        this['vul_type'] = vulType;
    }
    public get vulType(): string | undefined {
        return this['vul_type'];
    }
    public withStatus(status: string): VulScanTaskHostInfoVulScanDetails {
        this['status'] = status;
        return this;
    }
    public withFailedReason(failedReason: string): VulScanTaskHostInfoVulScanDetails {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
    public withScanVulList(scanVulList: Array<VulScanTaskHostInfoScanVulList>): VulScanTaskHostInfoVulScanDetails {
        this['scan_vul_list'] = scanVulList;
        return this;
    }
    public set scanVulList(scanVulList: Array<VulScanTaskHostInfoScanVulList>  | undefined) {
        this['scan_vul_list'] = scanVulList;
    }
    public get scanVulList(): Array<VulScanTaskHostInfoScanVulList> | undefined {
        return this['scan_vul_list'];
    }
}