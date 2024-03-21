

export class ElasticResourcePoolScaleRecord {
    private 'max_cu'?: number;
    private 'min_cu'?: number;
    private 'current_cu'?: number;
    private 'origin_cu'?: number;
    private 'target_cu'?: number;
    private 'record_time'?: number;
    public status?: string;
    private 'fail_reason'?: string;
    public constructor(maxCu?: number, minCu?: number, currentCu?: number, originCu?: number, targetCu?: number, recordTime?: number, status?: string) { 
        this['max_cu'] = maxCu;
        this['min_cu'] = minCu;
        this['current_cu'] = currentCu;
        this['origin_cu'] = originCu;
        this['target_cu'] = targetCu;
        this['record_time'] = recordTime;
        this['status'] = status;
    }
    public withMaxCu(maxCu: number): ElasticResourcePoolScaleRecord {
        this['max_cu'] = maxCu;
        return this;
    }
    public set maxCu(maxCu: number  | undefined) {
        this['max_cu'] = maxCu;
    }
    public get maxCu(): number | undefined {
        return this['max_cu'];
    }
    public withMinCu(minCu: number): ElasticResourcePoolScaleRecord {
        this['min_cu'] = minCu;
        return this;
    }
    public set minCu(minCu: number  | undefined) {
        this['min_cu'] = minCu;
    }
    public get minCu(): number | undefined {
        return this['min_cu'];
    }
    public withCurrentCu(currentCu: number): ElasticResourcePoolScaleRecord {
        this['current_cu'] = currentCu;
        return this;
    }
    public set currentCu(currentCu: number  | undefined) {
        this['current_cu'] = currentCu;
    }
    public get currentCu(): number | undefined {
        return this['current_cu'];
    }
    public withOriginCu(originCu: number): ElasticResourcePoolScaleRecord {
        this['origin_cu'] = originCu;
        return this;
    }
    public set originCu(originCu: number  | undefined) {
        this['origin_cu'] = originCu;
    }
    public get originCu(): number | undefined {
        return this['origin_cu'];
    }
    public withTargetCu(targetCu: number): ElasticResourcePoolScaleRecord {
        this['target_cu'] = targetCu;
        return this;
    }
    public set targetCu(targetCu: number  | undefined) {
        this['target_cu'] = targetCu;
    }
    public get targetCu(): number | undefined {
        return this['target_cu'];
    }
    public withRecordTime(recordTime: number): ElasticResourcePoolScaleRecord {
        this['record_time'] = recordTime;
        return this;
    }
    public set recordTime(recordTime: number  | undefined) {
        this['record_time'] = recordTime;
    }
    public get recordTime(): number | undefined {
        return this['record_time'];
    }
    public withStatus(status: string): ElasticResourcePoolScaleRecord {
        this['status'] = status;
        return this;
    }
    public withFailReason(failReason: string): ElasticResourcePoolScaleRecord {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
}