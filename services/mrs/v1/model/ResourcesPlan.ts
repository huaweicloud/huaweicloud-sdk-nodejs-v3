

export class ResourcesPlan {
    private 'period_type': string | undefined;
    private 'start_time': string | undefined;
    private 'end_time': string | undefined;
    private 'min_capacity': number | undefined;
    private 'max_capacity': number | undefined;
    public constructor(periodType?: any, startTime?: any, endTime?: any, minCapacity?: any, maxCapacity?: any) { 
        this['period_type'] = periodType;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['min_capacity'] = minCapacity;
        this['max_capacity'] = maxCapacity;
    }
    public withPeriodType(periodType: string): ResourcesPlan {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: string | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType() {
        return this['period_type'];
    }
    public withStartTime(startTime: string): ResourcesPlan {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ResourcesPlan {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withMinCapacity(minCapacity: number): ResourcesPlan {
        this['min_capacity'] = minCapacity;
        return this;
    }
    public set minCapacity(minCapacity: number | undefined) {
        this['min_capacity'] = minCapacity;
    }
    public get minCapacity() {
        return this['min_capacity'];
    }
    public withMaxCapacity(maxCapacity: number): ResourcesPlan {
        this['max_capacity'] = maxCapacity;
        return this;
    }
    public set maxCapacity(maxCapacity: number | undefined) {
        this['max_capacity'] = maxCapacity;
    }
    public get maxCapacity() {
        return this['max_capacity'];
    }
}