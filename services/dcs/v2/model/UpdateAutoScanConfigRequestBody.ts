

export class UpdateAutoScanConfigRequestBody {
    private 'enable_auto_scan'?: boolean;
    private 'first_scan_at'?: string;
    public interval?: number;
    public timeout?: number;
    private 'scan_keys_count'?: number;
    public constructor() { 
    }
    public withEnableAutoScan(enableAutoScan: boolean): UpdateAutoScanConfigRequestBody {
        this['enable_auto_scan'] = enableAutoScan;
        return this;
    }
    public set enableAutoScan(enableAutoScan: boolean  | undefined) {
        this['enable_auto_scan'] = enableAutoScan;
    }
    public get enableAutoScan(): boolean | undefined {
        return this['enable_auto_scan'];
    }
    public withFirstScanAt(firstScanAt: string): UpdateAutoScanConfigRequestBody {
        this['first_scan_at'] = firstScanAt;
        return this;
    }
    public set firstScanAt(firstScanAt: string  | undefined) {
        this['first_scan_at'] = firstScanAt;
    }
    public get firstScanAt(): string | undefined {
        return this['first_scan_at'];
    }
    public withInterval(interval: number): UpdateAutoScanConfigRequestBody {
        this['interval'] = interval;
        return this;
    }
    public withTimeout(timeout: number): UpdateAutoScanConfigRequestBody {
        this['timeout'] = timeout;
        return this;
    }
    public withScanKeysCount(scanKeysCount: number): UpdateAutoScanConfigRequestBody {
        this['scan_keys_count'] = scanKeysCount;
        return this;
    }
    public set scanKeysCount(scanKeysCount: number  | undefined) {
        this['scan_keys_count'] = scanKeysCount;
    }
    public get scanKeysCount(): number | undefined {
        return this['scan_keys_count'];
    }
}