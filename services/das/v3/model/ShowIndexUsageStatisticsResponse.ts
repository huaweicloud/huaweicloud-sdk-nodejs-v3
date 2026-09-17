
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIndexUsageStatisticsResponse extends SdkResponse {
    private 'collect_time'?: number;
    private 'total_index_usage_count'?: number;
    private 'index_size_mb'?: number;
    private 'fragmentation_gl30_count'?: number;
    private 'key_lookup_lt100_count'?: number;
    public constructor() { 
        super();
    }
    public withCollectTime(collectTime: number): ShowIndexUsageStatisticsResponse {
        this['collect_time'] = collectTime;
        return this;
    }
    public set collectTime(collectTime: number  | undefined) {
        this['collect_time'] = collectTime;
    }
    public get collectTime(): number | undefined {
        return this['collect_time'];
    }
    public withTotalIndexUsageCount(totalIndexUsageCount: number): ShowIndexUsageStatisticsResponse {
        this['total_index_usage_count'] = totalIndexUsageCount;
        return this;
    }
    public set totalIndexUsageCount(totalIndexUsageCount: number  | undefined) {
        this['total_index_usage_count'] = totalIndexUsageCount;
    }
    public get totalIndexUsageCount(): number | undefined {
        return this['total_index_usage_count'];
    }
    public withIndexSizeMb(indexSizeMb: number): ShowIndexUsageStatisticsResponse {
        this['index_size_mb'] = indexSizeMb;
        return this;
    }
    public set indexSizeMb(indexSizeMb: number  | undefined) {
        this['index_size_mb'] = indexSizeMb;
    }
    public get indexSizeMb(): number | undefined {
        return this['index_size_mb'];
    }
    public withFragmentationGl30Count(fragmentationGl30Count: number): ShowIndexUsageStatisticsResponse {
        this['fragmentation_gl30_count'] = fragmentationGl30Count;
        return this;
    }
    public set fragmentationGl30Count(fragmentationGl30Count: number  | undefined) {
        this['fragmentation_gl30_count'] = fragmentationGl30Count;
    }
    public get fragmentationGl30Count(): number | undefined {
        return this['fragmentation_gl30_count'];
    }
    public withKeyLookupLt100Count(keyLookupLt100Count: number): ShowIndexUsageStatisticsResponse {
        this['key_lookup_lt100_count'] = keyLookupLt100Count;
        return this;
    }
    public set keyLookupLt100Count(keyLookupLt100Count: number  | undefined) {
        this['key_lookup_lt100_count'] = keyLookupLt100Count;
    }
    public get keyLookupLt100Count(): number | undefined {
        return this['key_lookup_lt100_count'];
    }
}