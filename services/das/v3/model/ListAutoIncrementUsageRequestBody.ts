

export class ListAutoIncrementUsageRequestBody {
    public ratio?: string;
    private 'real_time'?: boolean;
    public offsite?: string;
    public limit?: string;
    public database?: Array<string>;
    public constructor(ratio?: string, realTime?: boolean) { 
        this['ratio'] = ratio;
        this['real_time'] = realTime;
    }
    public withRatio(ratio: string): ListAutoIncrementUsageRequestBody {
        this['ratio'] = ratio;
        return this;
    }
    public withRealTime(realTime: boolean): ListAutoIncrementUsageRequestBody {
        this['real_time'] = realTime;
        return this;
    }
    public set realTime(realTime: boolean  | undefined) {
        this['real_time'] = realTime;
    }
    public get realTime(): boolean | undefined {
        return this['real_time'];
    }
    public withOffsite(offsite: string): ListAutoIncrementUsageRequestBody {
        this['offsite'] = offsite;
        return this;
    }
    public withLimit(limit: string): ListAutoIncrementUsageRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withDatabase(database: Array<string>): ListAutoIncrementUsageRequestBody {
        this['database'] = database;
        return this;
    }
}