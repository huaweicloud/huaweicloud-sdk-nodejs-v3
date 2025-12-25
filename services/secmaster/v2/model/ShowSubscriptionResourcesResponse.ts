import { SkuEnum } from './SkuEnum';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSubscriptionResourcesResponse extends SdkResponse {
    private 'project_id'?: string;
    public sku?: SkuEnum;
    private 'upper_limit'?: number;
    public unit?: string;
    public step?: number;
    private 'used_amount'?: number;
    private 'unused_amount'?: number;
    public version?: number;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'index_storage_upper_limit'?: number;
    private 'index_shards_upper_limit'?: number;
    private 'index_shards_unused'?: number;
    private 'partitions_unused'?: number;
    private 'partition_upper_limit'?: number;
    public constructor() { 
        super();
    }
    public withProjectId(projectId: string): ShowSubscriptionResourcesResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSku(sku: SkuEnum): ShowSubscriptionResourcesResponse {
        this['sku'] = sku;
        return this;
    }
    public withUpperLimit(upperLimit: number): ShowSubscriptionResourcesResponse {
        this['upper_limit'] = upperLimit;
        return this;
    }
    public set upperLimit(upperLimit: number  | undefined) {
        this['upper_limit'] = upperLimit;
    }
    public get upperLimit(): number | undefined {
        return this['upper_limit'];
    }
    public withUnit(unit: string): ShowSubscriptionResourcesResponse {
        this['unit'] = unit;
        return this;
    }
    public withStep(step: number): ShowSubscriptionResourcesResponse {
        this['step'] = step;
        return this;
    }
    public withUsedAmount(usedAmount: number): ShowSubscriptionResourcesResponse {
        this['used_amount'] = usedAmount;
        return this;
    }
    public set usedAmount(usedAmount: number  | undefined) {
        this['used_amount'] = usedAmount;
    }
    public get usedAmount(): number | undefined {
        return this['used_amount'];
    }
    public withUnusedAmount(unusedAmount: number): ShowSubscriptionResourcesResponse {
        this['unused_amount'] = unusedAmount;
        return this;
    }
    public set unusedAmount(unusedAmount: number  | undefined) {
        this['unused_amount'] = unusedAmount;
    }
    public get unusedAmount(): number | undefined {
        return this['unused_amount'];
    }
    public withVersion(version: number): ShowSubscriptionResourcesResponse {
        this['version'] = version;
        return this;
    }
    public withCreateTime(createTime: number): ShowSubscriptionResourcesResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ShowSubscriptionResourcesResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withIndexStorageUpperLimit(indexStorageUpperLimit: number): ShowSubscriptionResourcesResponse {
        this['index_storage_upper_limit'] = indexStorageUpperLimit;
        return this;
    }
    public set indexStorageUpperLimit(indexStorageUpperLimit: number  | undefined) {
        this['index_storage_upper_limit'] = indexStorageUpperLimit;
    }
    public get indexStorageUpperLimit(): number | undefined {
        return this['index_storage_upper_limit'];
    }
    public withIndexShardsUpperLimit(indexShardsUpperLimit: number): ShowSubscriptionResourcesResponse {
        this['index_shards_upper_limit'] = indexShardsUpperLimit;
        return this;
    }
    public set indexShardsUpperLimit(indexShardsUpperLimit: number  | undefined) {
        this['index_shards_upper_limit'] = indexShardsUpperLimit;
    }
    public get indexShardsUpperLimit(): number | undefined {
        return this['index_shards_upper_limit'];
    }
    public withIndexShardsUnused(indexShardsUnused: number): ShowSubscriptionResourcesResponse {
        this['index_shards_unused'] = indexShardsUnused;
        return this;
    }
    public set indexShardsUnused(indexShardsUnused: number  | undefined) {
        this['index_shards_unused'] = indexShardsUnused;
    }
    public get indexShardsUnused(): number | undefined {
        return this['index_shards_unused'];
    }
    public withPartitionsUnused(partitionsUnused: number): ShowSubscriptionResourcesResponse {
        this['partitions_unused'] = partitionsUnused;
        return this;
    }
    public set partitionsUnused(partitionsUnused: number  | undefined) {
        this['partitions_unused'] = partitionsUnused;
    }
    public get partitionsUnused(): number | undefined {
        return this['partitions_unused'];
    }
    public withPartitionUpperLimit(partitionUpperLimit: number): ShowSubscriptionResourcesResponse {
        this['partition_upper_limit'] = partitionUpperLimit;
        return this;
    }
    public set partitionUpperLimit(partitionUpperLimit: number  | undefined) {
        this['partition_upper_limit'] = partitionUpperLimit;
    }
    public get partitionUpperLimit(): number | undefined {
        return this['partition_upper_limit'];
    }
}