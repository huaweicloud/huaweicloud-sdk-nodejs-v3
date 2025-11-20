import { CycleImageScanPolicyReqInfoRegistryInfo } from './CycleImageScanPolicyReqInfoRegistryInfo';


export class CycleImageScanPolicyReqInfo {
    public enabled?: boolean;
    private 'scan_cycle'?: number;
    private 'scan_scope'?: number;
    private 'rate_limit'?: number;
    private 'time_scope'?: number;
    private 'registry_info'?: Array<CycleImageScanPolicyReqInfoRegistryInfo>;
    public constructor(enabled?: boolean, scanCycle?: number, scanScope?: number, rateLimit?: number, timeScope?: number, registryInfo?: Array<CycleImageScanPolicyReqInfoRegistryInfo>) { 
        this['enabled'] = enabled;
        this['scan_cycle'] = scanCycle;
        this['scan_scope'] = scanScope;
        this['rate_limit'] = rateLimit;
        this['time_scope'] = timeScope;
        this['registry_info'] = registryInfo;
    }
    public withEnabled(enabled: boolean): CycleImageScanPolicyReqInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withScanCycle(scanCycle: number): CycleImageScanPolicyReqInfo {
        this['scan_cycle'] = scanCycle;
        return this;
    }
    public set scanCycle(scanCycle: number  | undefined) {
        this['scan_cycle'] = scanCycle;
    }
    public get scanCycle(): number | undefined {
        return this['scan_cycle'];
    }
    public withScanScope(scanScope: number): CycleImageScanPolicyReqInfo {
        this['scan_scope'] = scanScope;
        return this;
    }
    public set scanScope(scanScope: number  | undefined) {
        this['scan_scope'] = scanScope;
    }
    public get scanScope(): number | undefined {
        return this['scan_scope'];
    }
    public withRateLimit(rateLimit: number): CycleImageScanPolicyReqInfo {
        this['rate_limit'] = rateLimit;
        return this;
    }
    public set rateLimit(rateLimit: number  | undefined) {
        this['rate_limit'] = rateLimit;
    }
    public get rateLimit(): number | undefined {
        return this['rate_limit'];
    }
    public withTimeScope(timeScope: number): CycleImageScanPolicyReqInfo {
        this['time_scope'] = timeScope;
        return this;
    }
    public set timeScope(timeScope: number  | undefined) {
        this['time_scope'] = timeScope;
    }
    public get timeScope(): number | undefined {
        return this['time_scope'];
    }
    public withRegistryInfo(registryInfo: Array<CycleImageScanPolicyReqInfoRegistryInfo>): CycleImageScanPolicyReqInfo {
        this['registry_info'] = registryInfo;
        return this;
    }
    public set registryInfo(registryInfo: Array<CycleImageScanPolicyReqInfoRegistryInfo>  | undefined) {
        this['registry_info'] = registryInfo;
    }
    public get registryInfo(): Array<CycleImageScanPolicyReqInfoRegistryInfo> | undefined {
        return this['registry_info'];
    }
}