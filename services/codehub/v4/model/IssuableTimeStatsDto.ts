

export class IssuableTimeStatsDto {
    private 'time_estimate'?: number;
    private 'total_time_spent'?: number;
    private 'human_time_estimate'?: string;
    private 'human_total_time_spent'?: string;
    public constructor() { 
    }
    public withTimeEstimate(timeEstimate: number): IssuableTimeStatsDto {
        this['time_estimate'] = timeEstimate;
        return this;
    }
    public set timeEstimate(timeEstimate: number  | undefined) {
        this['time_estimate'] = timeEstimate;
    }
    public get timeEstimate(): number | undefined {
        return this['time_estimate'];
    }
    public withTotalTimeSpent(totalTimeSpent: number): IssuableTimeStatsDto {
        this['total_time_spent'] = totalTimeSpent;
        return this;
    }
    public set totalTimeSpent(totalTimeSpent: number  | undefined) {
        this['total_time_spent'] = totalTimeSpent;
    }
    public get totalTimeSpent(): number | undefined {
        return this['total_time_spent'];
    }
    public withHumanTimeEstimate(humanTimeEstimate: string): IssuableTimeStatsDto {
        this['human_time_estimate'] = humanTimeEstimate;
        return this;
    }
    public set humanTimeEstimate(humanTimeEstimate: string  | undefined) {
        this['human_time_estimate'] = humanTimeEstimate;
    }
    public get humanTimeEstimate(): string | undefined {
        return this['human_time_estimate'];
    }
    public withHumanTotalTimeSpent(humanTotalTimeSpent: string): IssuableTimeStatsDto {
        this['human_total_time_spent'] = humanTotalTimeSpent;
        return this;
    }
    public set humanTotalTimeSpent(humanTotalTimeSpent: string  | undefined) {
        this['human_total_time_spent'] = humanTotalTimeSpent;
    }
    public get humanTotalTimeSpent(): string | undefined {
        return this['human_total_time_spent'];
    }
}