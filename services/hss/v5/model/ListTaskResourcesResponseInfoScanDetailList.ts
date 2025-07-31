

export class ListTaskResourcesResponseInfoScanDetailList {
    private 'scan_type'?: string;
    public status?: string;
    private 'failed_reason'?: string;
    public constructor() { 
    }
    public withScanType(scanType: string): ListTaskResourcesResponseInfoScanDetailList {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: string  | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType(): string | undefined {
        return this['scan_type'];
    }
    public withStatus(status: string): ListTaskResourcesResponseInfoScanDetailList {
        this['status'] = status;
        return this;
    }
    public withFailedReason(failedReason: string): ListTaskResourcesResponseInfoScanDetailList {
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