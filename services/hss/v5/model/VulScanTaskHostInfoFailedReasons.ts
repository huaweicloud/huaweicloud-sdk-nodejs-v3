

export class VulScanTaskHostInfoFailedReasons {
    private 'vul_type'?: string;
    private 'failed_reason'?: string;
    public constructor() { 
    }
    public withVulType(vulType: string): VulScanTaskHostInfoFailedReasons {
        this['vul_type'] = vulType;
        return this;
    }
    public set vulType(vulType: string  | undefined) {
        this['vul_type'] = vulType;
    }
    public get vulType(): string | undefined {
        return this['vul_type'];
    }
    public withFailedReason(failedReason: string): VulScanTaskHostInfoFailedReasons {
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