

export class ShowJobBuildTimeResultChart {
    private 'daily_build_number'?: string;
    private 'build_number'?: number;
    private 'build_time'?: number;
    private 'build_result'?: string;
    public constructor() { 
    }
    public withDailyBuildNumber(dailyBuildNumber: string): ShowJobBuildTimeResultChart {
        this['daily_build_number'] = dailyBuildNumber;
        return this;
    }
    public set dailyBuildNumber(dailyBuildNumber: string  | undefined) {
        this['daily_build_number'] = dailyBuildNumber;
    }
    public get dailyBuildNumber(): string | undefined {
        return this['daily_build_number'];
    }
    public withBuildNumber(buildNumber: number): ShowJobBuildTimeResultChart {
        this['build_number'] = buildNumber;
        return this;
    }
    public set buildNumber(buildNumber: number  | undefined) {
        this['build_number'] = buildNumber;
    }
    public get buildNumber(): number | undefined {
        return this['build_number'];
    }
    public withBuildTime(buildTime: number): ShowJobBuildTimeResultChart {
        this['build_time'] = buildTime;
        return this;
    }
    public set buildTime(buildTime: number  | undefined) {
        this['build_time'] = buildTime;
    }
    public get buildTime(): number | undefined {
        return this['build_time'];
    }
    public withBuildResult(buildResult: string): ShowJobBuildTimeResultChart {
        this['build_result'] = buildResult;
        return this;
    }
    public set buildResult(buildResult: string  | undefined) {
        this['build_result'] = buildResult;
    }
    public get buildResult(): string | undefined {
        return this['build_result'];
    }
}