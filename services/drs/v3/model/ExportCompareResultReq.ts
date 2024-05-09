

export class ExportCompareResultReq {
    private 'compare_type'?: string;
    private 'compare_job_id'?: string;
    private 'time_zone'?: string;
    public constructor(compareType?: string) { 
        this['compare_type'] = compareType;
    }
    public withCompareType(compareType: string): ExportCompareResultReq {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: string  | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType(): string | undefined {
        return this['compare_type'];
    }
    public withCompareJobId(compareJobId: string): ExportCompareResultReq {
        this['compare_job_id'] = compareJobId;
        return this;
    }
    public set compareJobId(compareJobId: string  | undefined) {
        this['compare_job_id'] = compareJobId;
    }
    public get compareJobId(): string | undefined {
        return this['compare_job_id'];
    }
    public withTimeZone(timeZone: string): ExportCompareResultReq {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
}