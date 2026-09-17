

export class IndexUsageTrendPoint {
    private 'collect_time'?: number;
    private 'max_fragmentation_percentage'?: number;
    private 'index_size_mb'?: number;
    private 'page_count'?: number;
    public constructor() { 
    }
    public withCollectTime(collectTime: number): IndexUsageTrendPoint {
        this['collect_time'] = collectTime;
        return this;
    }
    public set collectTime(collectTime: number  | undefined) {
        this['collect_time'] = collectTime;
    }
    public get collectTime(): number | undefined {
        return this['collect_time'];
    }
    public withMaxFragmentationPercentage(maxFragmentationPercentage: number): IndexUsageTrendPoint {
        this['max_fragmentation_percentage'] = maxFragmentationPercentage;
        return this;
    }
    public set maxFragmentationPercentage(maxFragmentationPercentage: number  | undefined) {
        this['max_fragmentation_percentage'] = maxFragmentationPercentage;
    }
    public get maxFragmentationPercentage(): number | undefined {
        return this['max_fragmentation_percentage'];
    }
    public withIndexSizeMb(indexSizeMb: number): IndexUsageTrendPoint {
        this['index_size_mb'] = indexSizeMb;
        return this;
    }
    public set indexSizeMb(indexSizeMb: number  | undefined) {
        this['index_size_mb'] = indexSizeMb;
    }
    public get indexSizeMb(): number | undefined {
        return this['index_size_mb'];
    }
    public withPageCount(pageCount: number): IndexUsageTrendPoint {
        this['page_count'] = pageCount;
        return this;
    }
    public set pageCount(pageCount: number  | undefined) {
        this['page_count'] = pageCount;
    }
    public get pageCount(): number | undefined {
        return this['page_count'];
    }
}