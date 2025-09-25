import { ImageScanPolicyRespInfoRegistryList } from './ImageScanPolicyRespInfoRegistryList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageScanPolicyResponse extends SdkResponse {
    private 'is_all'?: boolean;
    public enabled?: boolean;
    private 'scan_cycle'?: number;
    private 'scan_scope'?: number;
    private 'rate_limit'?: number;
    private 'time_scope'?: number;
    private 'total_registry_num'?: number;
    private 'registry_list'?: Array<ImageScanPolicyRespInfoRegistryList>;
    public constructor() { 
        super();
    }
    public withIsAll(isAll: boolean): ListImageScanPolicyResponse {
        this['is_all'] = isAll;
        return this;
    }
    public set isAll(isAll: boolean  | undefined) {
        this['is_all'] = isAll;
    }
    public get isAll(): boolean | undefined {
        return this['is_all'];
    }
    public withEnabled(enabled: boolean): ListImageScanPolicyResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withScanCycle(scanCycle: number): ListImageScanPolicyResponse {
        this['scan_cycle'] = scanCycle;
        return this;
    }
    public set scanCycle(scanCycle: number  | undefined) {
        this['scan_cycle'] = scanCycle;
    }
    public get scanCycle(): number | undefined {
        return this['scan_cycle'];
    }
    public withScanScope(scanScope: number): ListImageScanPolicyResponse {
        this['scan_scope'] = scanScope;
        return this;
    }
    public set scanScope(scanScope: number  | undefined) {
        this['scan_scope'] = scanScope;
    }
    public get scanScope(): number | undefined {
        return this['scan_scope'];
    }
    public withRateLimit(rateLimit: number): ListImageScanPolicyResponse {
        this['rate_limit'] = rateLimit;
        return this;
    }
    public set rateLimit(rateLimit: number  | undefined) {
        this['rate_limit'] = rateLimit;
    }
    public get rateLimit(): number | undefined {
        return this['rate_limit'];
    }
    public withTimeScope(timeScope: number): ListImageScanPolicyResponse {
        this['time_scope'] = timeScope;
        return this;
    }
    public set timeScope(timeScope: number  | undefined) {
        this['time_scope'] = timeScope;
    }
    public get timeScope(): number | undefined {
        return this['time_scope'];
    }
    public withTotalRegistryNum(totalRegistryNum: number): ListImageScanPolicyResponse {
        this['total_registry_num'] = totalRegistryNum;
        return this;
    }
    public set totalRegistryNum(totalRegistryNum: number  | undefined) {
        this['total_registry_num'] = totalRegistryNum;
    }
    public get totalRegistryNum(): number | undefined {
        return this['total_registry_num'];
    }
    public withRegistryList(registryList: Array<ImageScanPolicyRespInfoRegistryList>): ListImageScanPolicyResponse {
        this['registry_list'] = registryList;
        return this;
    }
    public set registryList(registryList: Array<ImageScanPolicyRespInfoRegistryList>  | undefined) {
        this['registry_list'] = registryList;
    }
    public get registryList(): Array<ImageScanPolicyRespInfoRegistryList> | undefined {
        return this['registry_list'];
    }
}