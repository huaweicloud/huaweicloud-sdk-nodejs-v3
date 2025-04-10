

export class VulScanTaskHostInfoScanVulList {
    private 'vul_id'?: string;
    private 'vul_name'?: string;
    public status?: string;
    private 'failed_reason'?: string;
    public constructor() { 
    }
    public withVulId(vulId: string): VulScanTaskHostInfoScanVulList {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withVulName(vulName: string): VulScanTaskHostInfoScanVulList {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withStatus(status: string): VulScanTaskHostInfoScanVulList {
        this['status'] = status;
        return this;
    }
    public withFailedReason(failedReason: string): VulScanTaskHostInfoScanVulList {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
}