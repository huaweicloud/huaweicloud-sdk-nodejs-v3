

export class AutoStop {
    private 'time_unit'?: string;
    public duration?: number;
    public constructor(timeUnit?: string, duration?: number) { 
        this['time_unit'] = timeUnit;
        this['duration'] = duration;
    }
    public withTimeUnit(timeUnit: string): AutoStop {
        this['time_unit'] = timeUnit;
        return this;
    }
    public set timeUnit(timeUnit: string  | undefined) {
        this['time_unit'] = timeUnit;
    }
    public get timeUnit(): string | undefined {
        return this['time_unit'];
    }
    public withDuration(duration: number): AutoStop {
        this['duration'] = duration;
        return this;
    }
}