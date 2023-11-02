
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowExpireAutoScanConfigResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'enable_auto_scan'?: boolean;
    private 'first_scan_at'?: string;
    public interval?: number;
    public timeout?: number;
    private 'scan_keys_count'?: number;
    private 'updated_at'?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowExpireAutoScanConfigResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEnableAutoScan(enableAutoScan: boolean): ShowExpireAutoScanConfigResponse {
        this['enable_auto_scan'] = enableAutoScan;
        return this;
    }
    public set enableAutoScan(enableAutoScan: boolean  | undefined) {
        this['enable_auto_scan'] = enableAutoScan;
    }
    public get enableAutoScan(): boolean | undefined {
        return this['enable_auto_scan'];
    }
    public withFirstScanAt(firstScanAt: string): ShowExpireAutoScanConfigResponse {
        this['first_scan_at'] = firstScanAt;
        return this;
    }
    public set firstScanAt(firstScanAt: string  | undefined) {
        this['first_scan_at'] = firstScanAt;
    }
    public get firstScanAt(): string | undefined {
        return this['first_scan_at'];
    }
    public withInterval(interval: number): ShowExpireAutoScanConfigResponse {
        this['interval'] = interval;
        return this;
    }
    public withTimeout(timeout: number): ShowExpireAutoScanConfigResponse {
        this['timeout'] = timeout;
        return this;
    }
    public withScanKeysCount(scanKeysCount: number): ShowExpireAutoScanConfigResponse {
        this['scan_keys_count'] = scanKeysCount;
        return this;
    }
    public set scanKeysCount(scanKeysCount: number  | undefined) {
        this['scan_keys_count'] = scanKeysCount;
    }
    public get scanKeysCount(): number | undefined {
        return this['scan_keys_count'];
    }
    public withUpdatedAt(updatedAt: string): ShowExpireAutoScanConfigResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}