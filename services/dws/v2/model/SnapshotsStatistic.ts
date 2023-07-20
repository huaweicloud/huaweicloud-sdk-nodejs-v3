

export class SnapshotsStatistic {
    public name?: string;
    public value?: number;
    public unit?: string;
    public constructor(name?: string, value?: number, unit?: string) { 
        this['name'] = name;
        this['value'] = value;
        this['unit'] = unit;
    }
    public withName(name: string): SnapshotsStatistic {
        this['name'] = name;
        return this;
    }
    public withValue(value: number): SnapshotsStatistic {
        this['value'] = value;
        return this;
    }
    public withUnit(unit: string): SnapshotsStatistic {
        this['unit'] = unit;
        return this;
    }
}