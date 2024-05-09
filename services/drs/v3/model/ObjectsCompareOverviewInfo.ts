

export class ObjectsCompareOverviewInfo {
    public type?: string;
    private 'source_count'?: number;
    private 'target_count'?: number;
    public status?: number;
    public constructor() { 
    }
    public withType(type: string): ObjectsCompareOverviewInfo {
        this['type'] = type;
        return this;
    }
    public withSourceCount(sourceCount: number): ObjectsCompareOverviewInfo {
        this['source_count'] = sourceCount;
        return this;
    }
    public set sourceCount(sourceCount: number  | undefined) {
        this['source_count'] = sourceCount;
    }
    public get sourceCount(): number | undefined {
        return this['source_count'];
    }
    public withTargetCount(targetCount: number): ObjectsCompareOverviewInfo {
        this['target_count'] = targetCount;
        return this;
    }
    public set targetCount(targetCount: number  | undefined) {
        this['target_count'] = targetCount;
    }
    public get targetCount(): number | undefined {
        return this['target_count'];
    }
    public withStatus(status: number): ObjectsCompareOverviewInfo {
        this['status'] = status;
        return this;
    }
}