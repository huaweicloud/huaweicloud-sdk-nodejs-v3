

export class MissingIndexTrendPoint {
    private 'collect_time'?: number;
    private 'total_missing_index_count'?: number;
    public constructor() { 
    }
    public withCollectTime(collectTime: number): MissingIndexTrendPoint {
        this['collect_time'] = collectTime;
        return this;
    }
    public set collectTime(collectTime: number  | undefined) {
        this['collect_time'] = collectTime;
    }
    public get collectTime(): number | undefined {
        return this['collect_time'];
    }
    public withTotalMissingIndexCount(totalMissingIndexCount: number): MissingIndexTrendPoint {
        this['total_missing_index_count'] = totalMissingIndexCount;
        return this;
    }
    public set totalMissingIndexCount(totalMissingIndexCount: number  | undefined) {
        this['total_missing_index_count'] = totalMissingIndexCount;
    }
    public get totalMissingIndexCount(): number | undefined {
        return this['total_missing_index_count'];
    }
}