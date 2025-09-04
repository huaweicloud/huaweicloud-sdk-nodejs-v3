

export class JobStatusResultResponseBodyResult {
    public building?: boolean;
    private 'build_result'?: string;
    public region?: string;
    public constructor() { 
    }
    public withBuilding(building: boolean): JobStatusResultResponseBodyResult {
        this['building'] = building;
        return this;
    }
    public withBuildResult(buildResult: string): JobStatusResultResponseBodyResult {
        this['build_result'] = buildResult;
        return this;
    }
    public set buildResult(buildResult: string  | undefined) {
        this['build_result'] = buildResult;
    }
    public get buildResult(): string | undefined {
        return this['build_result'];
    }
    public withRegion(region: string): JobStatusResultResponseBodyResult {
        this['region'] = region;
        return this;
    }
}