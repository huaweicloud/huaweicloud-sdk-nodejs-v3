

export class HealthCompareJob {
    public id?: string;
    public type?: string;
    public status?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'compute_type'?: string;
    public constructor() { 
    }
    public withId(id: string): HealthCompareJob {
        this['id'] = id;
        return this;
    }
    public withType(type: string): HealthCompareJob {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): HealthCompareJob {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): HealthCompareJob {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): HealthCompareJob {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withComputeType(computeType: string): HealthCompareJob {
        this['compute_type'] = computeType;
        return this;
    }
    public set computeType(computeType: string  | undefined) {
        this['compute_type'] = computeType;
    }
    public get computeType(): string | undefined {
        return this['compute_type'];
    }
}